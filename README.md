# 📝 ToDoList Backend

This is the backend for a task management application, built with Node.js, Express.js, and MongoDB.

## 🌐 Live Deployment

The project is deployed on Render:
🔗 [https://todolist-backend-a3cx.onrender.com](https://todolist-backend-a3cx.onrender.com)

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Joi (request validation)
- dotenv
- cookie-parser
- cors
- nodemon (for development)

## 📁 Project Structure

src/
│
├── controllers/ # Request handling logic
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── middlewares/ # Custom middleware (validation, error handling, etc.)
├── utils/ # Utility functions
└── index.js # Entry point

## 🚀 Getting Started Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/todolist-backend.git
cd todolist-backend
```

2. Install dependencies:

npm install

3. Create a .env file:

MONGODB_USER=yourUser
MONGODB_PASSWORD=yourPassword
MONGODB_URL=yourCluster.mongodb.net
MONGODB_DB=yourDatabaseName
PORT=3000

4. Start the development server:

npm run dev

📚 API Endpoints
All routes are prefixed with /api

🗂️ Boards
GET /api/boards – Get all boards

POST /api/boards – Create a new board

DELETE /api/boards/:boardId – Delete a board and its tasks

✅ Tasks
GET /api/boards/:boardId/tasks – Get tasks for a specific board

POST /api/boards/:boardId/tasks – Add a task to a board

PATCH /api/tasks/:taskId – Update a task

DELETE /api/tasks/:taskId – Delete a task

✅ Validation
Request validation is handled with Joi:

boardId, taskId parameter validation

Request body validation (title, description, status)

⚙️ Linting

Run ESLint:

npm run lint

👩‍💻 Author

Lesia Onyshchuk
GitHub: Lesia-Onyshchuk
Telegram: @KLLVVV
