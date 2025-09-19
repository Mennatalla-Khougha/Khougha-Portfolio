# IAM_INSTRUCTION.md — Project Canonical Instructions

## 0) Operate With Context (read-before-write)
Before doing any task:
1) Read **`README.md`**, **`mvp-context.md` / `fancy-context.md`**, and **`mvp-backlog.md` / `fancy-backlog.md`** end-to-end.
2) Identify the **Backlog Task ID** you’re acting on (from the relevant backlog file).
3) Confirm the target **branch**: `main` (MVP scroll) or `fancy` (page-flip).

After completing work:
- Append a row to **`reflection.md` → “AI Usage Log”** with:
  - Date/time, Branch, **Tool/Agent name**, **Backlog Task ID**, files touched (commit/PR), concise summary, reviewer notes if any.
- Update the relevant backlog (check item or add progress notes).
- Update `README.md` if scripts, setup, features, or AI usage changed.

## 1) Theme, Stack, Structure
- **Theme:** **Dark theme ONLY** (no light theme, no toggle).
- **Stack:** Next.js (App Router) + React + TypeScript (strict), Tailwind CSS + shadcn/ui, Framer Motion, MDX, Vercel.
- **Content:** single JSON at `content/portfolio.json`; MDX deep dives in `content/case-studies/<slug>.mdx`.

### Folder layout (target)
```

app/
components/
layouts/
lib/
content/portfolio.json
case-studies/
tests/
.trae/
.cursor/rules/
roles/

```

## 2) Naming & Code Style (single convention)
- **Directories & non-component files:** `kebab-case` (e.g., `project-card.tsx`, `use-metrics.ts`).
- **React component files & exported components:** `PascalCase` (e.g., `ProjectCard.tsx` exporting `ProjectCard`).
- **Tests:** mirror file with `.test.ts(x)` suffix (e.g., `project-card.test.tsx`).
- **TypeScript:** strict mode; avoid `any`.
- **Styling:** Tailwind + shadcn only; no inline CSS.
- **Accessibility:** keyboard nav; `prefers-reduced-motion` respected; color contrast passes.

## 3) Testing & Quality
- **Unit tests:** Vitest + React Testing Library for visible components.
- **Integration/E2E:** Playwright for chapter nav + deep-dive flows + reduced-motion states.
- If a component/page is created or changed, add/adjust tests in the same PR.

## 4) Commits, PRs, Branching
- **Branches:** `main`=Will be merged later, `mvp`= MVP (scroll), `fancy` = page-flip.
- **Conventional Commits** (`feat:`, `fix:`, `docs:`, `test:`, `chore:` …).
- In commit body, mark AI usage: `AI: Cursor` / `AI: Trae` / `AI: Copilot` / `AI: Gemini` / `AI: OpenAI`.
- Small, reviewable PRs; include acceptance criteria in PR description.

## 5) Confirm before you do:
- New dependencies; global layout/theme changes; animation semantics; breaking API/props.

## 6) Acceptance Criteria (MVP)
- Content rendered from `content/portfolio.json`.
- Chapters: About, Work, Projects (deep-dives + story cards), Writing, Earlier Career, Contact.
- At least 2 deep dives (MDX) + 5 story cards.
- Lighthouse ≥ 90; keyboard navigable; reduced-motion friendly.
- README updated; reflection log entries present for AI tasks.

## 7) Acceptance Criteria (Fancy)
- Page-flip animation with Framer Motion; **fallback to scroll** if reduced-motion.
- Same content/quality gates as MVP.





