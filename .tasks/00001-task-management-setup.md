# [00001] Set up markdown-based task management system

## Metadata

| Field       | Value                                |
| ----------- | ------------------------------------ |
| **ID**      | 00001                                |
| **Status**  | `in-progress`                        |
| **Branch**  | `docs/00001-task-management-setup`   |
| **PR**      |                                      |
| **Created** | 2026-07-30                           |
| **Closed**  |                                      |

## Description

Set up a lightweight, markdown-based task management system inside the repository. No external tools (Jira, Linear, etc.) — all tasks are tracked as `.md` files in the `.tasks/` directory.

This includes creating the standard template that all future tasks must follow, and updating `CLAUDE.md` with the workflow rules.

### Background / Context

The team needs a simple, version-controlled way to track tasks without depending on external services. Each task gets its own markdown file, its own branch, and its own PR.

## Acceptance Criteria

- [x] `.tasks/` directory exists at project root
- [x] `00000-template.md` defines the standard format for all tasks
- [x] Template includes: metadata table, description, acceptance criteria checklist, implementation checklist, notes, workflow reference
- [x] Template enforces English for all content
- [x] `CLAUDE.md` updated with task management workflow rules
- [x] Branch naming convention documented: `{type}/XXXXX-task-slug`
- [x] PR title convention documented: `[XXXXX] Title in English`

## Implementation Checklist

- [x] Create `.tasks/` directory
- [x] Create `00000-template.md` with industry best practices
- [x] Update `CLAUDE.md` with task management section
- [x] Commit and open PR

## Notes

- This is the first task, so it bootstraps itself.
- The template follows conventions from well-structured Jira/Linear tickets but in pure markdown.
