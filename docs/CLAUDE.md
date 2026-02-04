# CLAUDE.md

This file provides context for AI agents working on this codebase.

## Project Overview

RunnR is a running pace calculator that helps runners estimate race times based on their pace per mile or kilometer. It displays pace tables showing speeds, minute-per-mile/km, and finish times for common race distances.

## Tech Stack

- **React 19** - UI framework
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Styling (via Vite plugin)
- **React Router 6** - Client-side routing
- **Day.js** - Date/time calculations
- **pnpm** - Package manager

## Project Structure

```
src/
├── components/       # React components (flat structure, one file per component)
│   ├── Button.tsx
│   ├── Cell.tsx
│   ├── Count.tsx
│   ├── Detail.tsx
│   ├── DistanceToggle.tsx
│   ├── Header.tsx
│   ├── Row.tsx
│   ├── Stat.tsx
│   ├── Table.tsx
│   ├── Toggle.tsx
│   └── index.ts      # Barrel export
├── hooks/            # Custom React hooks
│   ├── useQuery.ts
│   ├── useSecondsCalc.ts
│   ├── useUnits.ts
│   ├── useURLSearchParams.ts
│   └── index.ts
├── store/            # Static pace data
│   ├── mph.json      # Miles per hour pace data
│   ├── kph.json      # Kilometers per hour pace data
│   └── index.ts
├── types.ts          # Shared TypeScript types
├── App.tsx           # Main application component
├── main.tsx          # Entry point
└── app.css           # Tailwind CSS import
```

## Key Types

```typescript
// Time entry for the calculator
type TimeEntry = {
  mins: string;
  id: number;
};

// Pace table row data
type PaceData = {
  speed: number;
  mins: string | number;
  fiveK: string;
  tenK: string;
  tenMile?: string;  // Only in mph data
  half: string;
  full: string;
};
```

## Code Conventions

- **Formatting**: Prettier with 2-space indentation, single quotes, trailing commas
- **Components**: Functional components with TypeScript Props types
- **Styling**: Tailwind CSS classes inline (no separate CSS files per component)
- **Exports**: Named exports for components, barrel exports via index.ts
- **Types**: Avoid `any`, use shared types from `src/types.ts`

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (runs tsc first)
pnpm serve        # Preview production build
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting without changes
```

## Important Notes

- The `kph.json` data differs from `mph.json`: it lacks `tenMile` and `mins` is a number (not string)
- The time calculator uses a base date of `1981-12-04` to accumulate seconds for display
- URL query params control state: `?unit=miles|kilometers` and `?distance=5k|10k|half|full`
- Day.js is immutable - always reassign: `date = date.add(seconds, 'second')`

## Design System

The app uses a dark purple/indigo theme:
- Background: `slate-900` → `purple-900` gradient
- Primary accent: `purple-500/600`
- Secondary accent: `indigo-600`
- Success actions: `emerald-500`
- Text: `white` with various opacity levels
