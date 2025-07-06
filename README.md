# 🔐 JWT Express Server – Phone Book Auth API

This directory contains the authentication backend for the **Phone Book** project. It is built with **Express.js** and implements a basic **JWT-based authentication system**. The data is mocked using `faker.js`, and access to user data is protected via middleware. The React frontend written in **TypeScript** is located under `/src` and communicates securely with this server using an **Axios interceptor**.

---

## 🚀 Features

- 🌐 Express.js REST API
- 🔐 JWT-based authentication (`jsonwebtoken`)
- ✅ Auth middleware to protect routes
- 🧪 Simple login logic (with static credentials)
- 🧸 Mocked user data (no database)
- 🔗 Connected to React frontend (written in TypeScript)
- 🌐 Secure API calls via Axios interceptor

---

## 🗂️ Folder Structure

```
jwt-express-server/
├── routes/
│   └── auth.js               # /login and /users routes
├── middleware/
│   └── verifyToken.js        # Middleware for verifying JWTs
├── data/
│   └── users.js              # Fake user data (via faker.js)
├── .env                      # JWT_SECRET configuration
├── package.json
└── server.js                 # App entry point

phone-book/src/
├── api/
│   └── axios.ts              # Axios instance with JWT interceptor
├── pages/
│   └── Login.tsx             # Login view
│   └── Users.tsx             # Protected view fetching user data
├── types/                    # TypeScript interfaces
├── App.tsx                   # Root component
└── main.tsx                  # Entry point
```

---

## 📌 API Endpoints

### `POST /login`
Authenticate user and return JWT.

**Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Response:**
```json
{
  "token": "your.jwt.token"
}
```

---

### `GET /numbers/:user_id`
Returns the list of numbers belong to the user (protected route).

**Headers:**
```http
Authorization: Bearer <your_token>
```

---

## 🧪 Getting Started

### Backend

```bash
cd jwt-express-server
npm install
npm start
```

Create a `.env` file with:

```env
JWT_SECRET=your_secret_key
```

### Frontend

```bash
cd phone-book
npm install
npm run dev
```

Open in browser: `http://localhost:5173`

---

## 💡 Frontend Integration Notes

- Frontend is written in **TypeScript** (React)
- All protected API calls use a shared **axios** instance
- JWT token is stored and automatically attached via **Axios interceptor**
- Pages like `/number` are only accessible after successful login

---

## 🛠️ Technologies Used

- **Backend**: Express.js, jsonwebtoken, faker.js, dotenv  
- **Frontend**: React, TypeScript, Axios  

---

## 🧩 Possible Improvements

- Replace static credentials with dynamic registration
- Connect to a real database (e.g., MongoDB)
- Refresh tokens, password reset, email verification
- Role-based access control and enhanced error handling

---

## 📄 License

MIT © [Koray Uymaz](https://github.com/korayuymaz)
