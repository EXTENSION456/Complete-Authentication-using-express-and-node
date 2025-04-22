# 🔐 Complete Authentication System using Express.js & Node.js

This project is a fully functional authentication system built with **Node.js** and **Express.js**, featuring robust security practices, email and phone-based verification, and complete JWT-based session handling.

---

## ✨ Features

- ✅ User Signup with OTP verification
- 🔁 Request new OTP if expired
- 🔐 Login & Logout using JWT tokens
- 📧 Forgot Password (via email with Mailtrap)
- 🔄 Reset Password with secure token
- 🧪 Authentication Middleware
- 📞 OTP via Twilio (SMS)
- 📬 Email support via Mailtrap (for dev)
- 🔒 Secure password hashing using `bcryptjs`

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT (jsonwebtoken)**
- **BcryptJS**
- **Mailtrap** for email (dev testing)
- **Twilio** for OTP via SMS
- **dotenv** for environment variables

---

## ⚙️ How to Run

### 1. Clone the Repository

git clone https://github.com/EXTENSION456/Complete-Authentication-using-express-and-node.git
cd Complete-Authentication-using-express-and-node

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

<pre> Create a `.env` file in the root directory and add: ```env PORT=3000 MONGO_URI=mongodb://localhost:27017/auth TWILIO_SID=your_twilio_sid TWILIO_AUTH_TOKEN=your_twilio_auth_token TWILIO_PHONE=your_twilio_phone_number JWT_SECRET=your_jwt_secret NODE_ENV=development MAILTRAP_TOKEN=your_mailtrap_token CLIENT_URL=http://localhost:5173 ``` Make sure to never commit your `.env` file. It is included in `.gitignore`. </pre>

### 4. Configure Environment Variables
npm start

### 🧪 API Endpoints Overview

| Method | Endpoint                 | Description                       |
|--------|--------------------------|-----------------------------------|
| POST   | /signup                  | Register new user & send OTP      |
| POST   | /verifyOtp               | Verify OTP during signup          |
| POST   | /requestNewOtp          | Request new OTP                   |
| POST   | /login                   | Login with credentials            |
| POST   | /logout                  | Logout user                       |
| POST   | /forgot-password         | Send reset link via email         |
| POST   | /reset-password/:token   | Reset password using token        |
| GET    | /check-auth              | Example route using auth          |

### 🧠 Future Improvements
✅ Rate limiting to prevent brute force
✅ Token refresh flow
✅ Multi-device session management

### 🤝 Contributing
Feel free to fork the repo and submit PRs if you'd like to improve or add new features!




