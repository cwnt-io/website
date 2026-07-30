# [00004] Update clients section and add training service

## Metadata

| Field       | Value                                      |
| ----------- | ------------------------------------------ |
| **ID**      | 00004                                      |
| **Status**  | `in-progress`                              |
| **Branch**  | `feat/update-clients-add-training`         |
| **PR**      |                                            |
| **Created** | 2026-07-30                                 |
| **Closed**  |                                            |

## Description

Update the clients section and services section of the website. Remove SejaPlanfy, rewrite client descriptions to position CWNT as a service provider (not CTO role), and add a Training service card.

### Background / Context

- CWNT is a service provider — descriptions should reflect consulting and development services, not internal roles
- SejaPlanfy should be removed from clients
- VLG Investimentos and Quadrant Health remain as clients
- Quadrant Health builds AI-powered solutions for healthcare operations
- A new "Training" service card should be added to the services section

## Acceptance Criteria

- [ ] SejaPlanfy removed from clients section
- [ ] Client descriptions rewritten as service provider (no CTO mention)
- [ ] Quadrant Health description updated with AI healthcare focus
- [ ] Training service card added to services section
- [ ] i18n translations updated (EN/PT)
- [ ] Site builds successfully

## Implementation Checklist

- [ ] Update en.json: remove planfy, rewrite vlg/quadrant descriptions, add training service
- [ ] Update pt.json: same changes
- [ ] Update +page.svelte: remove planfy card, add training service card
- [ ] Test build

## Notes

- Keep descriptions generic and professional
- VLG Investimentos: financial investment group
- Quadrant Health: AI agents for healthcare operations (quadrant.health)
