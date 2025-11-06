# Fundamentals of Web apps (Full Stack Open exercises)

# Project overview

This repository contains exercises and small apps from the "Full Stack Open" course grouped by sections (parts). Each part contains one or more small React/Node projects used to practice concepts introduced in the course.

Typical folder layout:
- part1/ — Fundamentals of React (exercises and small apps)
- part2/ — Communicating with server / More React (phonebook, countries, notes, course info, etc.)
- part3/ — Node.js and Express (APIs and backend work)
- (other parts may be present depending on your progress)

Each part directory contains its own README where applicable and independent package.json if the app is runnable.

# Quick start

1. Change to the part you want to run, install and start:

```bash
cd part2/phonebook
npm install
npm start
```

Repeat for any other part/app (e.g. `part2/countries`, `part2/countries_info`, `part2/notes-frontend`, `part2/courseinfo`).

2. If an app requires environment variables (e.g. OpenWeatherMap key for country weather), create a `.env` file in that app's folder with the required vars, for example:

```bash
# .env (placed in the app folder, not repository root)
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
```

# Notable apps in this repo (examples from part2)

- phonebook — Simple phonebook app demonstrating controlled inputs, CRUD operations against a backend, and notifications.
- countries — Search countries and view details (includes fetching weather for capitals).
- countries_info — Alternative countries search demo (filtering, show button).
- notes-frontend — Notes frontend / importance toggling, demonstrating PUT/POST and avoiding render loops.
- courseinfo — Small React app demonstrating components and props (exercise sums, parts).

# License

MIT

# Contact / Notes

This repository is a personal workspace for learning web development concepts. Each subfolder is intended to be independent so you can run, modify and test apps in isolation.
