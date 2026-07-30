# [00005] Reorder sections, add clients, and expand contact info

## Metadata

| Field       | Value                                  |
| ----------- | -------------------------------------- |
| **ID**      | 00005                                  |
| **Status**  | `done`                                 |
| **Branch**  | `feat/update-sections-and-contacts`    |
| **PR**      |                                        |
| **Created** | 2026-07-30                             |
| **Closed**  | 2026-07-30                             |

## Description

Reorder page sections, add new clients, and expand the contact section with social links.

### Background / Context

- Open Source section should appear before the Clients section
- Two new clients: Scale AI (scale.com) and FleetOps
- Contact section needs LinkedIn and GitHub links

## Acceptance Criteria

- [x] Open Source section appears before Clients section
- [x] Scale AI added as client
- [x] FleetOps added as client
- [x] LinkedIn company page link in contact
- [x] GitHub organization link in contact
- [x] i18n translations updated (EN/PT)
- [x] Site builds successfully

## Implementation Checklist

- [x] Reorder sections in +page.svelte (open source before clients)
- [x] Add Scale AI and FleetOps to i18n translations
- [x] Add client cards for Scale AI and FleetOps
- [x] Add LinkedIn and GitHub to contact translations and section
- [x] Add client company logos (VLG, Quadrant, Scale, FleetOps)
- [x] Add open source to services section
- [x] Fix theme toggle needing 2 clicks
- [x] Replace Svelte favicon with CWNT logo
- [x] Add SEO meta tags
- [x] Change email to root@cwnt.io
- [x] Increase nav logo size
- [x] Test build

## Notes

- Scale AI: AI data, evaluation, and deployment platform (scale.com)
- FleetOps: fleet management company
- LinkedIn: linkedin.com/company/cwnt/
- GitHub: github.com/cwnt-io
