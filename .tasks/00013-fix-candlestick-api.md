# [00013] Fix candlestick API endpoint and visibility

## Metadata

| Field       | Value                              |
| ----------- | ---------------------------------- |
| **ID**      | 00013                              |
| **Status**  | `done`                             |
| **Branch**  | `fix/candlestick-api-endpoint`     |
| **PR**      |                                    |
| **Created** | 2026-07-30                         |
| **Closed**  | 2026-07-30                         |

## Description

The candlestick background was not rendering because `api.binance.com` is geo-restricted. Switch to `data-api.binance.vision` (globally available) and increase candle size/opacity.

## Acceptance Criteria

- [x] REST endpoint uses data-api.binance.vision
- [x] WebSocket uses data-stream.binance.vision
- [x] Candles are visibly rendered in the hero background
- [x] Response validated as array before processing

## Implementation Checklist

- [x] Switch REST URL to data-api.binance.vision
- [x] Switch WS URL to data-stream.binance.vision
- [x] Increase candle width (6→8px) and wick (1→1.5px)
- [x] Increase opacity for better visibility
- [x] Add Array.isArray check on API response
- [x] Improve WebSocket error/reconnect handling
