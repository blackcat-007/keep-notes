# 📝 Keep Notes

A full-stack web application where users can securely create, manage, and organize their personal notes. Built with modern technologies, `Keep Notes` offers authentication, profile management, and real-time syncing to a backend database.

🔗 **Project Repository:** [Keep Notes on GitHub](https://github.com/blackcat-007/keep-notes)

---

## 🚀 Tech Stack

### 🧠 Frontend
- ⚛️ **React.js** — Modern UI with component-based architecture
- 🎨 **Tailwind CSS** *(optional if used)* — Utility-first CSS framework for styling

### 🗄️ Backend
- 🐍 **Django REST Framework** — RESTful API service for CRUD operations
- 🍃 **MongoDB** — NoSQL database for storing notes and user data

### 🔐 Authentication
- ✅ **JWT Authentication**
- ✉️ **Email & Password Login**
- 🔐 **Google OAuth2**
- 🍪 **Cookie-based session management**

---

## ✨ Features

- 🗒️ Create, edit, delete personal notes
- 🔐 Secure login with JWT tokens and cookie storage
- 👤 Personal profile section with user details
- 📬 Google & email-based login support
- ☁️ Data stored in MongoDB with real-time API interactions
- 🔄 Seamless frontend-backend communication via Django REST APIs

---

## 📁 Project Structure

```bash
keep-notes/
├── backend/                  # Django REST Framework API
│   ├── api/                  # Views, Serializers, URLs
│   ├── auth/                 # JWT and OAuth logic
│   ├── models/               # MongoDB models (via Djongo or other)
│   └── settings.py
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Navbar, NoteCard, etc.
│   │   ├── pages/            # Login, Register, Dashboard
│   │   └── services/         # API calling logic
└── README.md

🛠️ Installation & Setup
📦 Backend (Django + MongoDB)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python manage.py runserver
💡 Ensure MongoDB is running locally or use MongoDB Atlas and update the DATABASES settings in settings.py.

🌐 Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
🔐 Auth Flow Summary
On login/register, user gets a JWT token stored in cookies.

Cookie-based auth protects routes.

Google OAuth available for faster login.

Profile and note routes are protected by backend middleware.

🙋‍♂️ Author
Shubho (blackcat-007)
📫 GitHub Profile
🧠 Passionate about clean code, fullstack apps, and real-world software!
