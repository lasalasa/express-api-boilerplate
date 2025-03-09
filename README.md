# 🚀 Express API Boilerplate

## 📌 Overview
This is a modular, scalable **Express.js** boilerplate for building REST APIs with **JWT authentication**, **Swagger documentation**, and **MongoDB integration**. It follows best practices for **API versioning**, **role-based access control (RBAC)**, and **clean architecture**.

## 📂 Project Structure
```
/express-api-boilerplate
│── /src
│   ├── /common         # Shared utilities (DB connection, auth middleware, logging, etc.)
│   ├── /v1             # API Version 1
│   │   ├── /modules    # All feature-based modules
│   │   │   ├── /users
│   │   │   │   ├── controller.js  # Handles API requests
│   │   │   │   ├── routes.js      # Defines API routes
│   │   │   │   ├── service.js     # Handles business logic
│   │   │   │   ├── repository.js  # Handles database queries
│   │   │   │   ├── model.js       # Defines MongoDB schema
│   │   │   │   ├── route.yaml     # Swagger API documentation
│   ├── /v2             # API Version 2 (Future expansions)
│── server.js          # Main Express entry point
│── swagger.js         # Swagger documentation setup
│── .env               # Environment variables
│── package.json       # Dependencies & scripts
│── README.md          # Project documentation
```

## 🛠️ Setup & Installation
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/express-api-boilerplate.git
cd express-api-boilerplate
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and add (Check out env-sample):
```sh
PORT=3000
MONGO_URI=mongodb://localhost:27017/express_api_boilerplate
JWT_SECRET=my_super_secret_key
LOG_LEVEL=info
```

### 4️⃣ **Run the Server**
```sh
npm start
```

Server will run at `http://localhost:3000`

## 🔑 Authentication & Security
- Uses **JWT (JSON Web Token)** authentication.
- Users can **log in** and receive a token.
- API routes require a **Bearer token** for protected endpoints.

### **Authentication Flow**
1️⃣ **User logs in** using `/api/v1/users/login`
2️⃣ Receives a **JWT token**
3️⃣ Adds token in `Authorization` header as `Bearer <token>`
4️⃣ Accesses protected routes like `/api/v1/users/me`

## 🔗 API Endpoints
| Method   | Endpoint              | Description                  |
|----------|-----------------------|------------------------------|
| `POST`   | `/api/v1/users/login` | Login & receive JWT token    |
| `GET`    | `/api/v1/users/me`    | Get current logged-in user   |
| `GET`    | `/api/v1/users`       | Admin-only: Get all users    |
| `POST`   | `/api/v1/users`       | Register a new user          |
| `PUT`    | `/api/v1/users/{id}`  | Update user details          |
| `DELETE` | `/api/v1/users/{id}`  | Admin-only: Delete user      |

## 📖 API Documentation
Swagger UI is enabled at:  
🔗 **`http://localhost:3000/api-docs`**

### **How to Use JWT in Swagger UI**
1️⃣ Run the server & open Swagger UI (`/api-docs`).  
2️⃣ Click on **Authorize** (lock 🔒 icon).  
3️⃣ Enter `Bearer <your-jwt-token>` & click **Authorize**.  
4️⃣ Now, you can access protected routes in Swagger UI! 🚀  

## 🧪 Running Tests
For API testing, use `jest` and `supertest`.
```sh
npm test
```

## 🐳 Docker Support
Run the API using Docker:
```sh
docker build -t express-api .
docker run -p 3000:3000 express-api
```

## 🛠️ Future Enhancements
- ✅ Add **refresh tokens** for JWT authentication.
- ✅ Implement **role-based access control (RBAC)**.
- ✅ Improve **pagination & filtering** for user listings.
- ✅ Add **Docker support** for containerized deployment.
- ✅ Implement **CI/CD pipeline with GitHub Actions**.

## 📝 License
This project is licensed under the **MIT License**.

## 💡 Contributors
👨‍💻 Lasantha Lakmal - [GitHub Profile](https://github.com/lasalasa)

