# [00011] Persist URL state and open source cleanup

## Metadata

| Field       | Value                                              |
| ----------- | -------------------------------------------------- |
| **ID**      | 00011                                              |
| **Status**  | `done`                                             |
| **Branch**  | `fix/revert-hero-background`                       |
| **PR**      | https://github.com/cwnt-io/website/pull/11         |
| **Created** | 2026-07-30                                         |
| **Closed**  | 2026-07-30                                         |

## Description

Persist language and theme state in URL query parameters (`?lang=pt&theme=dark`) so shared links preserve the intended experience. Also remove cwnt-io-website from the open source projects section.

## Acceptance Criteria

- [x] URL params `?lang=` and `?theme=` are read on init with priority over localStorage
- [x] Changing language or theme updates the URL via replaceState
- [x] cwnt-io-website removed from open source projects section

## Implementation Checklist

- [x] Create `src/lib/url.svelte.ts` helper for updating URL params
- [x] Update `src/lib/i18n/index.svelte.ts` to read/write `?lang=`
- [x] Update `src/lib/theme/index.svelte.ts` to read/write `?theme=`
- [x] Remove cwnt-io-website from repo list, en.json, and pt.json
