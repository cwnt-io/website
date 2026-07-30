# [00000] Task Title

> **IMPORTANT**: Everything in this file MUST be written in English — title, description, checklists, comments, branch name, PR title, commit messages. No exceptions.

## Metadata

| Field       | Value                              |
| ----------- | ---------------------------------- |
| **ID**      | 00000                              |
| **Status**  | `backlog` / `in-progress` / `done` |
| **Branch**  | `feat/task-slug`                   |
| **PR**      |                                    |
| **Created** | YYYY-MM-DD                         |
| **Closed**  |                                    |

### Status values

- `backlog` — not started
- `in-progress` — actively being worked on
- `done` — merged and closed

## Description

A clear and concise description of what needs to be done and **why**. Provide enough context so that anyone picking up this task understands the goal without needing to ask questions.

### Background / Context

Any relevant background information, links, screenshots, or references that help understand the problem or feature being addressed.

## Acceptance Criteria

Conditions that MUST be met for this task to be considered complete. Write them as checkboxes. Each criterion should be independently verifiable.

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Implementation Checklist

Step-by-step breakdown of the work. Check off as you go. Keep it granular enough to track progress but not so detailed that it becomes noise.

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

## Notes

Any additional context, decisions made during implementation, trade-offs, or things to watch out for. Update this section as work progresses.

---

## Workflow Reference

1. Copy this template to create a new task: `cp 00000-template.md XXXXX-task-slug.md`
2. Create a branch from up-to-date `main`: `git checkout -b feat/task-slug` (no task ID in branch name)
3. Implement the task following the checklist above
4. Use **Conventional Commits** (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `build:`, `test:`)
5. Open a PR with the title format: `[XXXXX] Short descriptive title in English`
6. Update the **Status**, **PR**, and **Closed** fields in this file
7. All code, comments, commits, PR titles, and PR descriptions MUST be in English
