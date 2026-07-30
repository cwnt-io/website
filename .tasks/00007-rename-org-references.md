# [00007] Rename org references from cwnt-io-org to cwnt-io

## Metadata

| Field       | Value                          |
| ----------- | ------------------------------ |
| **ID**      | 00007                          |
| **Status**  | `done`                         |
| **Branch**  | `chore/rename-org-references`  |
| **PR**      |                                |
| **Created** | 2026-07-30                     |
| **Closed**  | 2026-07-30                     |

## Description

Update all references from the old org name `cwnt-io-org` to the new name `cwnt-io` after the GitHub organization was renamed.

### Background / Context

- The GitHub org was renamed from `cwnt-io-org` to `cwnt-io`
- The old personal account `cwnt-io` was renamed to `root-cwnt-io` to free up the namespace

## Acceptance Criteria

- [x] No references to `cwnt-io-org` remain in source code
- [x] Open source repo links point to github.com/cwnt-io
- [x] Task files updated to reflect new org name
- [x] Site builds successfully

## Implementation Checklist

- [x] Update open source links in +page.svelte
- [x] Update references in task files
- [x] Test build
