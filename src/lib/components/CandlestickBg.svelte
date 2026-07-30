<script lang="ts">
	import { onMount } from 'svelte';
	import { setUrlParam } from '$lib/url.svelte';

	interface Candle {
		time: number;
		open: number;
		high: number;
		low: number;
		close: number;
	}

	interface TickerInfo {
		symbol: string;
		label: string;
	}

	const TICKERS: TickerInfo[] = [
		{ symbol: 'BTCUSDT', label: 'BTC/USDT' },
		{ symbol: 'BTCBRL', label: 'BTC/BRL' },
		{ symbol: 'ETHUSDT', label: 'ETH/USDT' },
		{ symbol: 'SOLUSDT', label: 'SOL/USDT' },
		{ symbol: 'BNBUSDT', label: 'BNB/USDT' },
		{ symbol: 'XRPUSDT', label: 'XRP/USDT' },
		{ symbol: 'ADAUSDT', label: 'ADA/USDT' },
		{ symbol: 'XMRUSDT', label: 'XMR/USDT' }
	];

	const MAX_CANDLES = 200;
	const CANDLE_WIDTH = 8;
	const CANDLE_GAP = 3;
	const WICK_WIDTH = 1.5;
	const VALID_SYMBOLS = TICKERS.map((t) => t.symbol);

	function getInitialTicker(): string {
		if (typeof window !== 'undefined') {
			const urlParam = new URLSearchParams(window.location.search).get('ticker')?.toUpperCase();
			if (urlParam && VALID_SYMBOLS.includes(urlParam)) {
				return urlParam;
			}
		}
		return TICKERS[0].symbol;
	}

	const REVEAL_DURATION = 2000;
	const BINANCE_REST = 'https://data-api.binance.vision/api/v3/klines';
	const BINANCE_WS_BASE = 'wss://data-stream.binance.vision/ws/';

	let canvas: HTMLCanvasElement;
	let candles: Candle[] = [];
	let animationId: number;
	let ws: WebSocket | null = null;
	let wsAlive = false;
	let revealStart = 0;
	let revealProgress = 0;
	let activeSymbol = $state(getInitialTicker());
	let prices: Record<string, string> = $state({});
	let changes: Record<string, number> = $state({});

	function getColors(): { bull: string; bear: string; wick: string } {
		const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		if (isDark) {
			return {
				bull: 'rgba(16, 185, 129, 0.25)',
				bear: 'rgba(244, 63, 94, 0.2)',
				wick: 'rgba(255, 255, 255, 0.07)'
			};
		}
		return {
			bull: 'rgba(5, 150, 105, 0.2)',
			bear: 'rgba(225, 29, 72, 0.15)',
			wick: 'rgba(0, 0, 0, 0.05)'
		};
	}

	function easeOutCubic(t: number): number {
		return 1 - Math.pow(1 - t, 3);
	}

	function draw(timestamp: number) {
		if (!canvas || candles.length === 0) return;

		if (revealStart === 0) revealStart = timestamp;
		const elapsed = timestamp - revealStart;
		revealProgress = Math.min(elapsed / REVEAL_DURATION, 1);

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

		const revealedCount = Math.floor(easeOutCubic(revealProgress) * visible.length);
		if (revealedCount === 0) return;

		const toRender = visible.slice(0, revealedCount);

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

		for (let i = 0; i < toRender.length; i++) {
			const c = toRender[i];
			const x = startX + i * step;
			const isBull = c.close >= c.open;

			ctx.fillStyle = colors.wick;
			const wickX = x + CANDLE_WIDTH / 2 - WICK_WIDTH / 2;
			const wickTop = toY(c.high);
			const wickBottom = toY(c.low);
			ctx.fillRect(wickX, wickTop, WICK_WIDTH, wickBottom - wickTop);

			ctx.fillStyle = isBull ? colors.bull : colors.bear;
			const bodyTop = toY(Math.max(c.open, c.close));
			const bodyBottom = toY(Math.min(c.open, c.close));
			const bodyHeight = Math.max(bodyBottom - bodyTop, 1);
			ctx.fillRect(x, bodyTop, CANDLE_WIDTH, bodyHeight);
		}
	}

	async function fetchHistory(symbol: string) {
		try {
			const res = await fetch(
				`${BINANCE_REST}?symbol=${symbol}&interval=1m&limit=${MAX_CANDLES}`
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
			// Silently fail
		}
	}

	function closeWs() {
		if (ws) {
			wsAlive = false;
			ws.onclose = null;
			ws.close();
			ws = null;
		}
	}

	function connectWs(symbol: string) {
		closeWs();
		try {
			ws = new WebSocket(`${BINANCE_WS_BASE}${symbol.toLowerCase()}@kline_1m`);
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

				prices[activeSymbol] = parseFloat(k.c).toLocaleString('en-US', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				});
			} catch {
				// Ignore
			}
		};

		ws.onopen = () => {
			wsAlive = true;
		};

		ws.onclose = () => {
			if (wsAlive) {
				wsAlive = false;
				setTimeout(() => connectWs(symbol), 5000);
			}
		};

		ws.onerror = () => {
			wsAlive = false;
		};
	}

	async function switchTicker(symbol: string) {
		if (symbol === activeSymbol) return;
		activeSymbol = symbol;
		revealStart = 0;
		revealProgress = 0;
		candles = [];
		setUrlParam('ticker', symbol);
		await fetchHistory(symbol);
		connectWs(symbol);
	}

	async function fetchAllPrices() {
		try {
			const symbols = TICKERS.map((t) => t.symbol);
			const res = await fetch(
				`https://data-api.binance.vision/api/v3/ticker/24hr?symbols=${JSON.stringify(symbols)}`
			);
			const data = await res.json();
			if (!Array.isArray(data)) return;
			for (const item of data) {
				prices[item.symbol] = parseFloat(item.lastPrice).toLocaleString('en-US', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				});
				changes[item.symbol] = parseFloat(item.priceChangePercent);
			}
		} catch {
			// Silently fail
		}
	}

	function loop(timestamp: number) {
		draw(timestamp);
		animationId = requestAnimationFrame(loop);
	}

	onMount(() => {
		fetchAllPrices();
		fetchHistory(activeSymbol).then(() => {
			animationId = requestAnimationFrame(loop);
			connectWs(activeSymbol);
		});

		const observer = new MutationObserver(() => {
			revealStart = 0;
			revealProgress = 0;
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => {
			cancelAnimationFrame(animationId);
			closeWs();
			observer.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="candlestick-bg"></canvas>

<div class="ticker-bar">
	{#each TICKERS as ticker}
		<button
			class="ticker-item"
			class:active={activeSymbol === ticker.symbol}
			onclick={() => switchTicker(ticker.symbol)}
		>
			<span class="ticker-label">{ticker.label}</span>
			{#if changes[ticker.symbol] !== undefined}
				<span class="ticker-arrow" class:up={changes[ticker.symbol] >= 0} class:down={changes[ticker.symbol] < 0}>
					{changes[ticker.symbol] >= 0 ? '▲' : '▼'}
				</span>
			{/if}
			{#if prices[ticker.symbol]}
				<span class="ticker-price">${prices[ticker.symbol]}</span>
			{/if}
		</button>
	{/each}
</div>

<style>
	.candlestick-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	.ticker-bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		padding: 0.75rem 1rem;
		overflow-x: auto;
		scrollbar-width: none;
		pointer-events: auto;
	}

	.ticker-bar::-webkit-scrollbar {
		display: none;
	}

	.ticker-item {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.35rem 0.7rem;
		background: transparent;
		border: 1px solid transparent;
		border-radius: 6px;
		cursor: pointer;
		white-space: nowrap;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--color-text-muted);
		transition: all var(--transition);
	}

	.ticker-item:hover {
		color: var(--color-text);
		background: var(--color-surface);
		border-color: var(--color-border);
	}

	.ticker-item.active {
		color: var(--color-accent);
		background: var(--color-surface);
		border-color: var(--color-accent);
	}

	.ticker-label {
		font-weight: 600;
	}

	.ticker-arrow {
		font-size: 0.5rem;
	}

	.ticker-arrow.up {
		color: var(--color-green);
	}

	.ticker-arrow.down {
		color: var(--color-red);
	}

	.ticker-price {
		opacity: 0.7;
		font-size: 0.65rem;
	}

	@media (max-width: 580px) {
		.ticker-bar {
			justify-content: flex-start;
		}
	}
</style>
