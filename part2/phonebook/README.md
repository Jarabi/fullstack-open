# Phonebook

Simple CRUD React app used in the "Full Stack Open" exercises. Demonstrates controlled inputs, communicating with a backend, optimistic updates, and transient notifications.

Features
- Create, read, update and delete contacts (name + number)
- Prevent duplicate names (option to replace number)
- Confirmation before deleting entries
- Transient notifications for success/error messages
- Uses a small service wrapper for HTTP calls (src/services/persons.js)

Quick start

```bash
cd fullstackopen/part2/phonebook
npm install
npm start
```

Run tests

```bash
npm test
```

Project structure (important files)
- src/App.jsx — main app (state, handlers, notification logic)
- src/components/Filter.jsx — filter input component
- src/components/PersonForm.jsx — controlled form for adding/updating persons
- src/components/Persons.jsx — list rendering and remove buttons
- src/components/Notification.jsx — transient message component (success/error)
- src/services/persons.js — API wrapper for backend CRUD operations
- src/services/notifications.js — notifier factory managing timeouts
- package.json — scripts and dependencies

Notes / tips
- API wrapper: keep HTTP logic in src/services; return normalized data (res.data) so callers stay simple.
- Notifications: use a notifier factory (pass setNotification once) to avoid overlapping timeouts.
- State updates that depend on previous state should use functional updates: setPersons(prev => ...).
- Do not store derived data in state (e.g. filtered lists). Compute from source state or use useMemo if expensive.
- Guard access to nested properties from async responses using optional chaining (e.g. error?.response?.status).
- When updating an existing person, merge changes with the existing object (e.g. { ...personExists, number: newNumber }) to preserve other fields.
- To copy this project folder without node_modules: use rsync --exclude='node_modules'.

License
- MIT