# [00006] Improve grid layouts and responsiveness

## Metadata

| Field       | Value                                    |
| ----------- | ---------------------------------------- |
| **ID**      | 00006                                    |
| **Status**  | `done`                                   |
| **Branch**  | `fix/improve-grid-layouts-responsiveness` |
| **PR**      |                                          |
| **Created** | 2026-07-30                               |
| **Closed**  | 2026-07-30                               |

## Description

Fix grid layouts that cause orphaned cards and uneven widths across sections.

### Background / Context

- Clients grid uses auto-fit causing 3+1 layout instead of 2+2
- Contact cards have uneven widths due to long URL text
- Grids don't collapse gracefully on smaller screens

## Acceptance Criteria

- [x] Clients grid always renders as 2x2
- [x] Contact grid cards have equal widths with text overflow handled
- [x] Services and open source grids render as 3-column on desktop
- [x] All grids collapse to 2-col on tablet and 1-col on mobile
- [x] Site builds successfully

## Implementation Checklist

- [x] Set clients grid to repeat(2, 1fr)
- [x] Set contact grid to repeat(4, 1fr) with word-break
- [x] Set services and opensource grids to repeat(3, 1fr)
- [x] Add responsive breakpoints at 1024px and 580px
- [x] Test build

## Notes

- Replaced auto-fit with fixed column counts to prevent orphaned cards
- Added word-break: break-word on contact values for long URLs
