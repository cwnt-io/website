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
- **Naming**: `XXXXX-task-slug.md` (zero-padded, incrementing)
- **Branch**: `feat/XXXXX-task-slug` (or `fix/`, `chore/`, etc.)
- **PR title**: `[XXXXX] Short descriptive title in English`
- **Everything in English**: task files, branch names, PR titles, commit messages, code, comments

### Workflow

1. Copy the template → fill in description, acceptance criteria, implementation checklist
2. Create a branch from up-to-date `main`
3. Implement, commit semantically (Conventional Commits)
4. Open a PR following the title format
5. Update task status, PR link, and closed date

## Autonomy

- Do NOT ask for permission to commit, create files, or run commands
- Do NOT ask for approval on implementation decisions
- Just build it, commit it, move forward
