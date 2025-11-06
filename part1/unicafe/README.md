# Unicafe

Simple React app for collecting and displaying feedback. The app demonstrates basic state handling, component composition and unit testing with React Testing Library.

Features
- Three feedback buttons: good, neutral, bad
- Live statistics: total, average score and positive percentage
- Conditional rendering of statistics (shows a message when no feedback yet)
- Includes unit tests for components/logic

Quick start

```bash
cd fullstackopen/part1/unicafe
npm install
npm start
```

Important files
- src/App.jsx — main app and state management
- src/components/Button.jsx — reusable button component
- src/components/Statistics.jsx — statistics display (handles zero-feedback case)
- src/index.js — app bootstrap
- package.json — scripts and dependencies
- README.md — this file

Notes / tips
- Keep state minimal: store counts (good, neutral, bad) and compute totals/averages from them.
- Guard against division by zero when computing averages/percentages.
- Prefer small, focused components (Button, StatisticsRow) to simplify testing.
- Tests typically assert rendered text and behavior after clicks; use user-event for interactive tests.

License
- MIT
