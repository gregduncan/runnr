# Non-Claude Agent Guide

This file is for AI agents that are not Claude. Always read `docs/CLAUDE.md` first and follow its instructions. This guide summarizes the key project details so non-Claude agents can operate safely.

## Project Overview

- RunnR is a running pace calculator that shows pace tables and race time estimates.
- React 19 + TypeScript 5 + Vite 7 + Tailwind CSS 4.
- React Router 6 for routing.
- Day.js for time calculations.
- Package manager is `pnpm`.

## Structure

- `src/components/` contains React components (one file per component).
- `src/hooks/` contains custom hooks.
- `src/store/` contains static pace data (`mph.json`, `kph.json`).
- `src/types.ts` holds shared types.

## Data Notes

- `kph.json` has no `tenMile` and `mins` is a number, not a string.
- The calculator uses a base date of `1981-12-04` with Day.js.

## Conventions

- Prettier: 2-space indentation, single quotes, trailing commas.
- Functional components with typed props.
- Tailwind classes inline.
- Use shared types from `src/types.ts` and avoid `any`.

## Common Commands

- `pnpm dev` start dev server
- `pnpm build` typecheck + build
- `pnpm serve` preview production build
- `pnpm format` run Prettier
- `pnpm format:check` check formatting only

## Git Safety

- Do not run destructive git commands (reset --hard, force push) unless explicitly requested.
- Do not amend commits unless explicitly requested.
