# Anecdotes

Small React app demonstrating routing, form handling and local state. The app lets you browse a list of short programming anecdotes, add a new anecdote via a form, view details for a single anecdote, and vote for your favourites.

Features
- List anecdotes with links to individual detail pages
- Create new anecdotes using a controlled form
- Vote for anecdotes (updates local state)
- Simple notifications for actions (optional)
- Uses React Router for navigation

Quick start

```bash
cd fullstackopen/part1/anecdotes
npm install
npm start
```

Run tests (if present):

```bash
npm test
```

Project structure (important files)
- src/App.jsx — main app and route configuration
- src/index.js — app bootstrap
- src/components/AnecdoteList.jsx — list view
- src/components/Anecdote.jsx — single anecdote view
- src/components/AnecdoteForm.jsx — form to add anecdotes
- src/components/Notification.jsx — transient messages (optional)
- src/styles.css — component styles (if present)

Notes / tips
- Form inputs should be controlled components; validate/trim input before adding.
- Keep derived UI data computed from source state (do not duplicate derived lists in state).
- Persisting anecdotes can be added with localStorage or a simple backend.
- Guard access to data that may be undefined during initial renders.

License
- MIT

