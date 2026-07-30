# [00003] Add clients and open source projects sections

## Metadata

| Field       | Value                                     |
| ----------- | ----------------------------------------- |
| **ID**      | 00003                                     |
| **Status**  | `done`                                    |
| **Branch**  | `feat/clients-and-opensource-sections`     |
| **PR**      |                                           |
| **Created** | 2026-07-30                                |
| **Closed**  | 2026-07-30                                |

## Description

Add two new sections to the website: a Clients section showcasing companies CWNT has worked with, and an Open Source section listing the organization's public repositories.

### Background / Context

CWNT has worked with several companies as CTO and software engineering partner. The company also maintains several open source projects under the cwnt-io GitHub organization.

**Clients:**
- VLG Investimentos (group: VLGI Asset, VLG Investimentos, VLGI Vida, VLGI Corporate, VLGI News)
- SejaPlanfy
- Quadrant Health (https://quadrant.health/)

**Open Source Projects:**
- mgmt (cwnt-io/mgmt)
- cwnt-io-website (cwnt-io/cwnt-io-website)
- ripissue (cwnt-io/ripissue)
- ripcards (cwnt-io/ripcards)
- candid-gen (cwnt-io/candid-gen)
- brag-server (cwnt-io/brag-server)

## Acceptance Criteria

- [x] Clients section with company names/logos
- [x] Open source section with project links to GitHub
- [x] i18n support (EN/PT)
- [x] Consistent styling with existing design
- [x] Responsive layout
- [x] Site builds successfully

## Implementation Checklist

- [x] Add i18n translations for both sections
- [x] Add clients section to page
- [x] Add open source section to page
- [x] Style both sections
- [x] Test build

## Notes

- VLG group companies should be presented as a single client entry (VLG Investimentos group)
- Open source links point to github.com/cwnt-io/{repo}
