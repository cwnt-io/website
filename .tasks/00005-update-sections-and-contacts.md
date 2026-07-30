# [00005] Reorder sections, add clients, and expand contact info

## Metadata

| Field       | Value                                  |
| ----------- | -------------------------------------- |
| **ID**      | 00005                                  |
| **Status**  | `in-progress`                          |
| **Branch**  | `feat/update-sections-and-contacts`    |
| **PR**      |                                        |
| **Created** | 2026-07-30                             |
| **Closed**  |                                        |

## Description

Reorder page sections, add new clients, and expand the contact section with social links.

### Background / Context

- Open Source section should appear before the Clients section
- Two new clients: Scale AI (scale.com) and FleetOps
- Contact section needs LinkedIn and GitHub links

## Acceptance Criteria

- [ ] Open Source section appears before Clients section
- [ ] Scale AI added as client
- [ ] FleetOps added as client
- [ ] LinkedIn company page link in contact
- [ ] GitHub organization link in contact
- [ ] i18n translations updated (EN/PT)
- [ ] Site builds successfully

## Implementation Checklist

- [ ] Reorder sections in +page.svelte (open source before clients)
- [ ] Add Scale AI and FleetOps to i18n translations
- [ ] Add client cards for Scale AI and FleetOps
- [ ] Add LinkedIn and GitHub to contact translations and section
- [ ] Test build

## Notes

- Scale AI: AI data, evaluation, and deployment platform (scale.com)
- FleetOps: fleet management company
- LinkedIn: linkedin.com/company/cwnt/
- GitHub: github.com/cwnt-io
