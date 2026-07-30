# CWNT Website - Project Instructions

## Overview

Institutional website for CWNT, a software development and technology consulting company.
Built with SvelteKit, deployed via GitHub Pages with GitHub Actions.

## Language

- All code, comments, commits, and documentation MUST be in English.
- Website content is bilingual (EN/PT) via i18next.

## Git & Commits

- Use **Conventional Commits** (e.g., `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `build:`)
- Commit frequently at logical checkpoints — do NOT ask for permission
- Group semantically related files in the same commit
- MAX ALERT: NEVER EVER include `Co-Authored-By: Claude` in commit messages or anything similar
- MAX ALERT: NEVER EVER attribute Claude in commit messages, PR titles, PR descriptions, or anywhere else

## Tech Stack

- **Framework**: SvelteKit (static adapter)
- **Language**: TypeScript
- **i18n**: i18next (EN/PT)
- **Deploy**: GitHub Pages via GitHub Actions
- **Styling**: Plain CSS (no frameworks)

## Task Management

Tasks are tracked as markdown files in `.tasks/`. No external tools (Jira, Linear, etc.).

- **Template**: `.tasks/00000-template.md` — copy it for every new task
- **Task file naming**: `XXXXX-task-slug.md` (zero-padded 5-digit ID, incrementing)
- **Branch naming**: `{type}/task-slug` (e.g., `feat/website-redesign`, `fix/i18n-toggle`) — **NO task ID in branch name**
- **PR title format**: `[XXXXX] Short descriptive title in English`
- **Everything in English**: task files, branch names, PR titles, commit messages, code, comments

### Starting a new task

1. Check the latest task ID on `main`: `ls .tasks/` and pick the next number
2. Create the task file: `cp .tasks/00000-template.md .tasks/XXXXX-task-slug.md`
3. Fill in: description, acceptance criteria, implementation checklist
4. Checkout and update main: `git checkout main && git pull`
5. Create a branch: `git checkout -b {type}/task-slug`
6. Commit the task file first: `git commit -m "docs: add task file for ..."`
7. Implement the task, committing semantically (Conventional Commits)
8. Push and open a PR with title: `[XXXXX] Title in English`
9. Update the task file: set **Status** to `done`, add **PR** link and **Closed** date

### CI checks on PRs to main

- PR title MUST match `[XXXXX] ...` format
- Task file `.tasks/XXXXX-*.md` MUST exist in the branch
- Task ID MUST NOT already exist on `main` (no duplicates)

## Autonomy

- Do NOT ask for permission to commit, create files, or run commands
- Do NOT ask for approval on implementation decisions
- Just build it, commit it, move forward
