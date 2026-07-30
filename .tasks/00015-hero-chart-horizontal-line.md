# [00015] Add horizontal price line to hero candlestick chart

> **IMPORTANT**: Everything in this file MUST be written in English — title, description, checklists, comments, branch name, PR title, commit messages. No exceptions.

## Metadata

| Field       | Value                              |
| ----------- | ---------------------------------- |
| **ID**      | 00015                              |
| **Status**  | `done`                             |
| **Branch**  | `feat/hero-chart-horizontal-line`  |
| **PR**      |                                    |
| **Created** | 2026-07-30                         |
| **Closed**  |                                    |

## Description

Add a horizontal line to the candlestick background chart in the hero section that indicates the current (last close) price level. This is a standard feature in financial charts that helps users quickly identify where the current price sits relative to recent candles.

### Background / Context

The hero section already renders a live candlestick chart via `CandlestickBg.svelte`. Adding a horizontal price line will improve readability and give the chart a more professional trading-terminal look.

## Acceptance Criteria

- [x] A horizontal dashed line is drawn at the last candle's close price level
- [x] The line spans the full width of the chart
- [x] The line color adapts to dark/light themes
- [x] The line participates in the reveal animation
- [x] The line updates in real-time as new price data arrives via WebSocket

## Implementation Checklist

- [x] Add a horizontal line color to the `getColors()` function for both themes
- [x] Draw a dashed horizontal line at the last candle's close price in the `draw()` function
- [x] Ensure the line only renders after the reveal animation reaches the last candle
- [x] Test in both dark and light modes

## Notes

- The line should be subtle enough not to distract from the hero content overlay but visible enough to serve its purpose.
