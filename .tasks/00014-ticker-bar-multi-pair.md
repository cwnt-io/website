# [00014] Add ticker bar with multi-pair support and trend arrows

## Metadata

| Field       | Value                              |
| ----------- | ---------------------------------- |
| **ID**      | 00014                              |
| **Status**  | `done`                             |
| **Branch**  | `feat/ticker-bar-multi-pair`       |
| **PR**      |                                    |
| **Created** | 2026-07-30                         |
| **Closed**  | 2026-07-30                         |

## Description

Fix candlestick API (geo-restricted endpoint), add fade-in animation, reduce opacity, and add a clickable ticker bar at the bottom of the hero with multiple crypto pairs, live prices, and trend arrows.

## Acceptance Criteria

- [x] Use globally available binance.vision API endpoints
- [x] Subtle candle opacity with fade-in animation
- [x] Ticker bar at hero bottom with 8 pairs
- [x] Live prices and trend arrows (green up / red down)
- [x] Clicking a ticker switches the chart

## Implementation Checklist

- [x] Switch to data-api.binance.vision / data-stream.binance.vision
- [x] Add fade-in animation (1.5s) on load and theme change
- [x] Reduce candle opacity for subtlety
- [x] Add ticker bar with BTC, ETH, SOL, BNB, XRP, DOGE, ADA, AVAX
- [x] Fetch 24h ticker data for prices and change percentages
- [x] Show trend arrows (green ▲ / red ▼) per ticker
- [x] Switch chart on ticker click with fade transition
