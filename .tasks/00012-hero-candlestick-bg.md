# [00012] Live BTC candlestick chart as hero background

## Metadata

| Field       | Value                              |
| ----------- | ---------------------------------- |
| **ID**      | 00012                              |
| **Status**  | `done`                             |
| **Branch**  | `feat/hero-candlestick-bg`         |
| **PR**      |                                    |
| **Created** | 2026-07-30                         |
| **Closed**  | 2026-07-30                         |

## Description

Add a live BTC/USDT candlestick chart rendered on a canvas as the hero section background. The chart connects to Binance WebSocket for real-time 1m kline data, with historical data loaded via REST API on mount. The chart scrolls continuously and is rendered at low opacity so text remains readable.

## Acceptance Criteria

- [ ] Canvas renders candlestick chart behind hero content
- [ ] Historical klines loaded from Binance REST API on mount
- [ ] Live updates via Binance WebSocket (btcusdt@kline_1m)
- [ ] Chart scrolls/moves as new candles arrive
- [ ] Very subtle/transparent so text is fully readable
- [ ] Works with both dark and light themes
- [ ] No impact on text readability or hero UX

## Implementation Checklist

- [ ] Create `src/lib/components/CandlestickBg.svelte` component
- [ ] Fetch historical 1m klines from Binance REST API
- [ ] Connect to `wss://stream.binance.com:9443/ws/btcusdt@kline_1m`
- [ ] Render candles on canvas with proper scaling
- [ ] Apply low opacity and theme-aware colors
- [ ] Integrate into hero section in `+page.svelte`
- [ ] Test build passes
