# Part 1 — Fundamentals of React

This folder contains exercises and small React apps used in the "Full Stack Open" course (Part 1). Each exercise or small demo is typically placed in its own subfolder and is meant to be run independently.

Included (typical) folders
- exercises/ — numbered exercise folders (e.g. exercises/1.1, exercises/1.2, ...)
- unicafe — simple feedback app (buttons, state)
- anecdotes — short app demonstrating routing and form handling
- other small demo folders created while following the course

Quick start

1. Change to the app folder you want to run, install and start:

```bash
cd fullstackopen/part1/<app-folder>
npm install
npm start
```

2. Run tests (if present in the app):

```bash
npm test
```

Notes
- Each app is independent. Install and run commands must be executed per app folder.
- Some folders are exercises only (no dev server); others contain runnable React apps using Create React App or Vite.
- When copying folders, exclude `node_modules` (use rsync or tar with `--exclude`).
- Keep derived UI data computed from source state (do not store redundant derived state).
- Guard access to nested properties from async sources using optional chaining (`obj?.prop`).

Folder structure (example)
- part1/
  - exercises/
  - unicafe/
  - anecdotes/
  - README.md

If you want this README tailored to the exact subfolders in your part1 directory, tell me to list the folder contents or paste the folder names and I'll update the file accordingly.