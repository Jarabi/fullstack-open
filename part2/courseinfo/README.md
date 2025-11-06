# Courseinfo

Small React demo app from the "Full Stack Open" exercises. Demonstrates component composition, props, rendering lists and computing derived values (total exercises per course).

Features
- Render one or more courses with their parts
- Compute and display the total number of exercises per course
- Simple component hierarchy: Header, Content/Part, and Sum components
- Emphasises best practices: keys for lists, pure components, and avoiding derived state

Quick start

```bash
cd fullstackopen/part2/courseinfo
npm install
npm start
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
- Keep derived UI data computed from source state/props (do not store totals or filtered lists redundantly in state). Use useMemo when computation is expensive.
- Always supply stable keys when mapping lists (prefer ids).
- Guard access to nested data coming from async sources using optional chaining (`a?.b?.c`) or conditional rendering.
- Trim and validate input when accepting data to avoid accidental duplicates (where applicable).

License
- MIT

