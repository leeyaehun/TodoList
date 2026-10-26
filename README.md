# TodoList

AI-powered study planner and task management desktop application.

## Backend

**Tech Stack:** Java 21, Spring Boot, Gradle

### How to Run

```bash
cd backend
./gradlew bootRun
```

### API

- `GET /tasks` — Retrieve all tasks
- `POST /tasks` — Create a task

### Task Model

- `id`: Long
- `title`: String
- `completed`: boolean
