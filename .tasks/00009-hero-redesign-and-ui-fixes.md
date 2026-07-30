# [00009] Hero background redesign and UI fixes

## Metadata

| Field       | Value                                |
| ----------- | ------------------------------------ |
| **ID**      | 00009                                |
| **Status**  | `done`                               |
| **Branch**  | `feat/hero-redesign-and-ui-fixes`    |
| **PR**      |                                      |
| **Created** | 2026-07-30                           |
| **Closed**  | 2026-07-30                           |

## Description

Redesign the hero background with a much more visually impressive effect inspired by award-winning sites (Linear, Stripe, Vercel). Also fix several UI issues.

### Background / Context

- Current hero background orbs are too subtle/discrete
- Navbar has a visible divider line at the top that looks bad against the hero gradient
- Contact card URLs (LinkedIn, GitHub) are too long and break the layout
- Need a premium, modern hero background

## Acceptance Criteria

- [ ] Hero background is visually striking with aurora/mesh gradient effect
- [ ] Navbar is transparent at the top, becomes opaque on scroll
- [ ] Contact cards display properly without URL overflow
- [ ] Noise/grain texture for depth
- [ ] Site builds successfully

## Implementation Checklist

- [ ] Redesign hero background with aurora gradient + animated orbs + noise
- [ ] Make navbar transparent at top, opaque on scroll
- [ ] Fix contact cards to show short labels instead of full URLs
- [ ] Test build
