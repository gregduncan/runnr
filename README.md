# RunnR

A running pace calculator that helps runners estimate race times based on their pace per mile or kilometer.

## Features

- **Pace Tables**: View comprehensive pace tables showing speeds, minute-per-mile/km, and finish times
- **Unit Toggle**: Switch between miles and kilometers
- **Race Distance Filtering**: Filter by common race distances (5K, 10K, 10 mile, Half Marathon, Marathon)
- **Time Calculator**: Add individual mile/km splits to calculate cumulative times
- **Race Time Estimates**: See projected finish times for different race distances based on your pace.

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 6
- Tailwind CSS 4
- Day.js

## Getting Started

### Prerequisites

- Node.js 20.19 or higher
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/gregduncan/runnr.git
cd runnr

# Install dependencies
pnpm install
```

### Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve

# Format code with Prettier
pnpm pretty
```

## Usage

1. Select your preferred unit (Miles or Kilometers)
2. Optionally filter by race distance using the buttons (5K, 10K, etc.)
3. Find your target pace in the table to see projected finish times
4. Use the +/- buttons to add mile/km splits and calculate cumulative times
5. View race time estimates in the header based on your entered splits
