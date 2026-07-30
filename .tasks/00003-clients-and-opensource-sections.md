# [00003] Add clients and open source projects sections

## Metadata

| Field       | Value                                     |
| ----------- | ----------------------------------------- |
| **ID**      | 00003                                     |
| **Status**  | `in-progress`                             |
| **Branch**  | `feat/clients-and-opensource-sections`     |
| **PR**      |                                           |
| **Created** | 2026-07-30                                |
| **Closed**  |                                           |

## Description

Add two new sections to the website: a Clients section showcasing companies CWNT has worked with, and an Open Source section listing the organization's public repositories.

### Background / Context

CWNT has worked with several companies as CTO and software engineering partner. The company also maintains several open source projects under the cwnt-io-org GitHub organization.

**Clients:**
- VLG Investimentos (group: VLGI Asset, VLG Investimentos, VLGI Vida, VLGI Corporate, VLGI News)
- SejaPlanfy
- Quadrant Health (https://quadrant.health/)

**Open Source Projects:**
- mgmt (cwnt-io-org/mgmt)
- cwnt-io-website (cwnt-io-org/cwnt-io-website)
- ripissue (cwnt-io-org/ripissue)
- ripcards (cwnt-io-org/ripcards)
- candid-gen (cwnt-io-org/candid-gen)
- brag-server (cwnt-io-org/brag-server)

## Acceptance Criteria

- [ ] Clients section with company names/logos
- [ ] Open source section with project links to GitHub
- [ ] i18n support (EN/PT)
- [ ] Consistent styling with existing design
- [ ] Responsive layout
- [ ] Site builds successfully

## Implementation Checklist

- [ ] Add i18n translations for both sections
- [ ] Add clients section to page
- [ ] Add open source section to page
- [ ] Style both sections
- [ ] Test build

## Notes

- VLG group companies should be presented as a single client entry (VLG Investimentos group)
- Open source links point to github.com/cwnt-io-org/{repo}
