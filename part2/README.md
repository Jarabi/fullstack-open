# Part 2 — Communicating with server / More React

This folder contains several small React apps used in the "Full Stack Open" exercises (part 2). Each app is independent and typically has its own package.json and README.

Included apps

- phonebook — CRUD against a backend, controlled inputs, notifications
- countries — search countries, view details and capital weather (OpenWeatherMap)
- countries_info — alternate countries demo (filtering / show button)
- notes-frontend — notes app demonstrating POST/PUT and importance toggling
- courseinfo — small component/demo exercises

Quick start

1. Change to the app folder you want to run, install and start:

   ```bash
   # example: run countries app
   cd /home/alex/Documents/Projects/fullstackopen/part2/countries
   npm install
   npm start
   ```

2. If an app requires environment variables (e.g. OpenWeatherMap API key), create a `.env` file in that app folder:

   ```bash
   # .env (placed inside the app folder)
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

Notes

- Each app is independent. Run install/start commands from the specific app directory.
- Some apps use Vite (dev server + HMR); others use Create React App depending on exercise boilerplate.
- When copying project folders, exclude `node_modules` (use rsync or tar with `--exclude`).

Development tips

- Do not store derived data in state. Compute filtered lists from source state (useMemo when expensive).
- Guard access to nested async data using optional chaining (`a?.b?.c`) or conditional rendering while loading.
- Avoid calling functions during render; pass handlers like `onClick={() => handler(id)}`.
- Use a notifier factory (pass `setNotification` once) to manage notification timeouts and avoid overlapping timers.
- Use functional updates for state when new state depends on previous state: `setState(prev => ...)`.

Project structure (per-app)

- src/ — application source
- src/components — presentational components
- src/services — API wrappers (REST Countries / OpenWeatherMap / backend)
- public/ — static assets
- package.json — app-specific scripts and dependencies

APIs used

- REST Countries (country data)
- OpenWeatherMap (capital weather; requires API key if used)

License

- MIT

If you need the README tailored for a specific app (e.g. countries or phonebook) let me know which app and I will update that app's README file.
