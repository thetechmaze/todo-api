# TODO API

A simple TODO API built with Express.js and TypeScript with full CRUD functionality.

## Project Structure

```
src/
├── controllers/     # Request handlers
├── models/         # Data models and interfaces
├── services/       # Business logic
├── routes/         # API routes
└── index.ts        # Server entry point
```

## Features

- ✅ Create, Read, Update, Delete todos
- ✅ Mark todos as completed/incomplete
- ✅ CORS enabled for all domains
- ✅ TypeScript support
- ✅ Clean separation of concerns

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## API Endpoints

### Todos

- `POST /api/todos` - Create a new todo
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `PATCH /api/todos/:id/complete` - Mark todo as completed
- `PATCH /api/todos/:id/incomplete` - Mark todo as incomplete

### Health Check

- `GET /health` - Check if server is running

## Example Requests

### Create a Todo

```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn TypeScript", "description": "Complete TypeScript tutorial"}'
```

### Get All Todos

```bash
curl http://localhost:3000/api/todos
```

### Update a Todo

```bash
curl -X PUT http://localhost:3000/api/todos/{id} \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "description": "Updated Description"}'
```

### Mark as Completed

```bash
curl -X PATCH http://localhost:3000/api/todos/{id}/complete
```

### Delete a Todo

```bash
curl -X DELETE http://localhost:3000/api/todos/{id}
```

## CORS Configuration

The API is configured to accept requests from any origin. This is set in `src/index.ts`:

```typescript
app.use(cors());
```

To restrict CORS to specific domains, modify the middleware:

```typescript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## License

ISC
