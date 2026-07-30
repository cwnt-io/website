# [00002] Redesign website with brand identity and theme support

## Metadata

| Field       | Value                          |
| ----------- | ------------------------------ |
| **ID**      | 00002                          |
| **Status**  | `in-progress`                  |
| **Branch**  | `feat/00002-website-redesign`  |
| **PR**      |                                |
| **Created** | 2026-07-30                     |
| **Closed**  |                                |

## Description

Complete redesign of the CWNT institutional website. The current version is a basic scaffold that needs to be transformed into a professional, visually striking site that reflects the company's brand identity.

### Background / Context

- The logo is a pixel-art crown with glasses in purple/black tones with a green gem
- The color palette should be derived from the logo (purples, blacks, greens)
- The site must support dark and light themes (system/manual toggle)
- The i18n toggle (EN/PT) is broken — language changes but the UI does not re-render
- The site should look modern, polished, and "top-tier" — comparable to leading tech company landing pages

## Acceptance Criteria

- [ ] Logo displayed prominently in nav and hero section
- [ ] Color scheme derived from logo (purple, black, green accents)
- [ ] Dark theme (default) with stunning gradients and visual effects
- [ ] Light theme with clean, professional look
- [ ] Theme toggle: System / Light / Dark
- [ ] i18n toggle works correctly (EN/PT with full reactivity)
- [ ] Hero section with compelling background (gradient, glow effects, or animated elements)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Site builds successfully with static adapter
- [ ] Deployed via GitHub Pages

## Implementation Checklist

- [ ] Add logo to static assets
- [ ] Define color palette (CSS custom properties) for dark and light themes
- [ ] Implement theme system (system preference detection, manual toggle, localStorage persistence)
- [ ] Fix i18n reactivity (Svelte 5 runes integration)
- [ ] Redesign nav: logo, links, theme toggle, language toggle
- [ ] Redesign hero: gradient background, glow effects, logo showcase
- [ ] Redesign services section: modern cards with hover effects
- [ ] Redesign contact section
- [ ] Redesign footer
- [ ] Add smooth animations and transitions
- [ ] Test build
- [ ] Verify responsive behavior

## Notes

- Keep it as plain CSS — no frameworks
- Use modern CSS features (backdrop-filter, gradients, animations, clamp)
- The site is purely institutional — no interactive features needed beyond theme/language toggle
