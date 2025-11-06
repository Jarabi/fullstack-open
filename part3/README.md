# Part 3 — Node.js & Express (Backend)

This folder contains backend exercises built while following the "Full Stack Open" course. The focus in this part is on server-side implementation using Node.js and Express.

## Project Structure

```
part3/
└── notes/          # Notes REST API application
    ├── index.js    # Main server file
    ├── package.json
    └── requests/   # REST client test files (.rest)
```

## Notes Application

A simple REST API for managing notes with in-memory storage.

### Features
- RESTful API with Express
- CRUD operations (Create, Read, Delete)
- JSON request body parsing
- Input validation
- Proper HTTP status codes

### Tech Stack
- Node.js
- Express 5.1.0

### API Endpoints

- `GET /` — Welcome message
- `GET /api/notes` — List all notes
- `GET /api/notes/:id` — Get a single note by ID
- `POST /api/notes` — Create a new note (requires `content` in body)
- `DELETE /api/notes/:id` — Delete a note by ID

### Quick Start

1. Navigate to the notes directory:
```bash
cd notes
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start          # Production mode
npm run dev        # Development mode (with --watch)
```

The server runs on `http://localhost:3001`

### Testing the API

The `requests/` directory contains REST client files for testing endpoints:
- `get_all_notes.rest` — GET request examples
- `create_new_note.rest` — POST request examples

Use VS Code with the REST Client extension or similar tools to test these requests.

### Example Request

Create a new note:
```bash
curl -X POST http://localhost:3001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"content": "My new note", "important": true}'
```

## Future Enhancements
- MongoDB/Mongoose integration for data persistence
- Environment variables with dotenv
- Error handling middleware
- Input validation
- CORS configuration
- Deployment setup

## License
MIT
