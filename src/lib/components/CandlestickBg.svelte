<script lang="ts">
	import { onMount } from 'svelte';

	interface Candle {
		time: number;
		open: number;
		high: number;
		low: number;
		close: number;
	}

	const MAX_CANDLES = 200;
	const CANDLE_WIDTH = 8;
	const CANDLE_GAP = 3;
	const WICK_WIDTH = 1.5;
	const BINANCE_REST = 'https://data-api.binance.vision/api/v3/klines';
	const BINANCE_WS = 'wss://data-stream.binance.vision/ws/btcusdt@kline_1m';

	let canvas: HTMLCanvasElement;
	let candles: Candle[] = [];
	let animationId: number;
	let ws: WebSocket | null = null;
	let wsAlive = false;

	function getColors(): { bull: string; bear: string; wick: string } {
		const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		if (isDark) {
			return {
				bull: 'rgba(16, 185, 129, 0.45)',
				bear: 'rgba(244, 63, 94, 0.4)',
				wick: 'rgba(255, 255, 255, 0.12)'
			};
		}
		return {
			bull: 'rgba(5, 150, 105, 0.35)',
			bear: 'rgba(225, 29, 72, 0.3)',
			wick: 'rgba(0, 0, 0, 0.1)'
		};
	}

	function draw() {
		if (!canvas || candles.length === 0) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		ctx.scale(dpr, dpr);

		const w = rect.width;
		const h = rect.height;

		ctx.clearRect(0, 0, w, h);

		const step = CANDLE_WIDTH + CANDLE_GAP;
		const visibleCount = Math.min(candles.length, Math.ceil(w / step) + 1);
		const visible = candles.slice(-visibleCount);

		let minPrice = Infinity;
		let maxPrice = -Infinity;
		for (const c of visible) {
			if (c.low < minPrice) minPrice = c.low;
			if (c.high > maxPrice) maxPrice = c.high;
		}

		const priceRange = maxPrice - minPrice || 1;
		const padding = h * 0.1;
		const chartHeight = h - padding * 2;

		const toY = (price: number) =>
			padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight;

		const colors = getColors();
		const startX = w - visible.length * step;

		for (let i = 0; i < visible.length; i++) {
			const c = visible[i];
			const x = startX + i * step;
			const isBull = c.close >= c.open;

			// Wick
			ctx.fillStyle = colors.wick;
			const wickX = x + CANDLE_WIDTH / 2 - WICK_WIDTH / 2;
			const wickTop = toY(c.high);
			const wickBottom = toY(c.low);
			ctx.fillRect(wickX, wickTop, WICK_WIDTH, wickBottom - wickTop);

			// Body
			ctx.fillStyle = isBull ? colors.bull : colors.bear;
			const bodyTop = toY(Math.max(c.open, c.close));
			const bodyBottom = toY(Math.min(c.open, c.close));
			const bodyHeight = Math.max(bodyBottom - bodyTop, 1);
			ctx.fillRect(x, bodyTop, CANDLE_WIDTH, bodyHeight);
		}
	}

	async function fetchHistory() {
		try {
			const res = await fetch(
				`${BINANCE_REST}?symbol=BTCUSDT&interval=1m&limit=${MAX_CANDLES}`
			);
			const data = await res.json();
			if (!Array.isArray(data)) return;
			candles = data.map((k: (string | number)[]) => ({
				time: Number(k[0]),
				open: parseFloat(k[1] as string),
				high: parseFloat(k[2] as string),
				low: parseFloat(k[3] as string),
				close: parseFloat(k[4] as string)
			}));
		} catch {
			// Silently fail — the background is decorative
		}
	}

	function connectWs() {
		try {
			ws = new WebSocket(BINANCE_WS);
		} catch {
			return;
		}

		ws.onmessage = (event) => {
			try {
				const msg = JSON.parse(event.data);
				const k = msg.k;
				if (!k) return;

				const candle: Candle = {
					time: k.t,
					open: parseFloat(k.o),
					high: parseFloat(k.h),
					low: parseFloat(k.l),
					close: parseFloat(k.c)
				};

				const lastIdx = candles.findIndex((c) => c.time === candle.time);
				if (lastIdx >= 0) {
					candles[lastIdx] = candle;
				} else {
					candles.push(candle);
					if (candles.length > MAX_CANDLES) {
						candles = candles.slice(-MAX_CANDLES);
					}
				}
				candles = candles;
			} catch {
				// Ignore malformed messages
			}
		};

		ws.onopen = () => {
			wsAlive = true;
		};

		ws.onclose = () => {
			if (wsAlive) {
				wsAlive = false;
				setTimeout(connectWs, 5000);
			}
		};

		ws.onerror = () => {
			wsAlive = false;
		};
	}

	function loop() {
		draw();
		animationId = requestAnimationFrame(loop);
	}

	onMount(() => {
		fetchHistory().then(() => {
			loop();
			connectWs();
		});

		const observer = new MutationObserver(() => draw());
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => {
			cancelAnimationFrame(animationId);
			ws?.close();
			observer.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="candlestick-bg"></canvas>

<style>
	.candlestick-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}
</style>
