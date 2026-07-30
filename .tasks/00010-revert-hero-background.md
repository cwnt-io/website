# [00010] Revert hero background to original

## Metadata

| Field       | Value                          |
| ----------- | ------------------------------ |
| **ID**      | 00010                          |
| **Status**  | `done`                         |
| **Branch**  | `fix/revert-hero-background`   |
| **PR**      |                                |
| **Created** | 2026-07-30                     |
| **Closed**  | 2026-07-30                     |

## Description

Revert the hero background from aurora/mesh gradient back to the original subtle orbs and grid pattern.

### Background / Context

The aurora gradient from PR #9 was too visually overwhelming. Revert only the hero background while keeping the other improvements (navbar transparency, contact card fixes, og:image).

## Acceptance Criteria

- [x] Hero background uses original subtle orbs and grid
- [x] Navbar transparency on scroll preserved
- [x] Contact card short labels preserved
- [x] og:image fix preserved
- [x] Site builds successfully

## Implementation Checklist

- [x] Revert hero HTML (remove aurora, noise, extra orb)
- [x] Revert hero CSS to original orbs and grid
- [x] Revert app.css variables to original hero-orb-1/2/3 and hero-gradient
- [x] Test build
