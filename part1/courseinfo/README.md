# Courseinfo

Small React demo app from the "Full Stack Open" exercises. The app demonstrates component composition, props drilling, rendering lists and computing derived values (e.g. total exercises).

Features
- Render one or more courses with their parts
- Compute and display the total number of exercises per course
- Simple component hierarchy: Header, Content/Part, and Total/Sum components
- Emphasises best practices: keys for lists, pure components, and avoiding derived state

Quick start

```bash
cd fullstackopen/part1/courseinfo
npm install
npm start
```

Run tests (if present):

```bash
npm test
```

Project structure (important files)
- src/App.jsx — main app (courses data + composition)
- src/components/Header.jsx — course title / headings
- src/components/Content.jsx — renders course parts list
- src/components/Part.jsx — single part row
- src/components/SumOfExercises.jsx — computes and renders the total
- public/ — static assets
- package.json — scripts and dependencies

Notes / tips
- Do not store derived data (like filtered lists or totals) in state — compute them from props/state when rendering. Use useMemo if computation becomes expensive.
- When mapping arrays to JSX elements always include a stable key (id is preferred).
- Keep components small and focused: pass only the props they need.
- Trim and validate input data where appropriate before use (e.g. part names, numeric values).

License
- MIT

