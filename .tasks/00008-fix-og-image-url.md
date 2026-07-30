# [00008] Fix og:image with absolute URL for link previews

## Metadata

| Field       | Value                          |
| ----------- | ------------------------------ |
| **ID**      | 00008                          |
| **Status**  | `done`                         |
| **Branch**  | `fix/og-image-absolute-url`    |
| **PR**      |                                |
| **Created** | 2026-07-30                     |
| **Closed**  | 2026-07-30                     |

## Description

Fix link preview image when sharing the website URL. The og:image was using a Vite asset import path (relative) but Open Graph requires absolute URLs.

### Background / Context

- Sharing cwnt.io on social media showed a generic icon instead of the CWNT logo
- og:image and twitter:image require fully qualified absolute URLs

## Acceptance Criteria

- [x] og:image uses absolute URL https://cwnt.io/logo.png
- [x] twitter:image uses absolute URL
- [x] Image dimensions specified
- [x] Site builds successfully

## Implementation Checklist

- [x] Replace Vite import path with absolute URL in og:image
- [x] Add twitter:image meta tag
- [x] Add og:image:width and og:image:height
- [x] Test build
