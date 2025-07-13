<body>

  <h1>📝 Keep Notes</h1>

  <p>
    A full-stack web application where users can securely create, manage, and organize their personal notes.
    Built with modern technologies, <strong>Keep Notes</strong> offers authentication, profile management, and real-time syncing to a backend database.
  </p>

  <p>🔗 <strong>Project Repository:</strong> <a href="https://github.com/blackcat-007/keep-notes" target="_blank">Keep Notes on GitHub</a></p>

  <hr>

  <h2>🚀 Tech Stack</h2>

  <h3>🧠 Frontend</h3>
  <ul>
    <li>⚛️ <strong>React.js</strong> — Modern UI with component-based architecture</li>
    <li>🎨 <strong>Tailwind CSS</strong> — Utility-first CSS framework for styling (if used)</li>
  </ul>

  <h3>🗄️ Backend</h3>
  <ul>
    <li>🐍 <strong>Django REST Framework</strong> — RESTful API service for CRUD operations</li>
    <li>🍃 <strong>MongoDB</strong> — NoSQL database for storing notes and user data</li>
  </ul>

  <h3>🔐 Authentication</h3>
  <ul>
    <li>✅ <strong>JWT Authentication</strong></li>
    <li>✉️ <strong>Email & Password Login</strong></li>
    <li>🔐 <strong>Google OAuth2</strong></li>
    <li>🍪 <strong>Cookie-based session management</strong></li>
  </ul>

  <hr>

  <h2>✨ Features</h2>
  <ul>
    <li>🗒️ Create, edit, delete personal notes</li>
    <li>🔐 Secure login with JWT tokens and cookie storage</li>
    <li>👤 Personal profile section with user details</li>
    <li>📬 Google & email-based login support</li>
    <li>☁️ Data stored in MongoDB with real-time API interactions</li>
    <li>🔄 Seamless frontend-backend communication via Django REST APIs</li>
  </ul>

  <hr>

  <h2>📁 Project Structure</h2>
  <pre>
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
└── README.html               # This file
  </pre>

  <hr>

  <h2>🛠️ Installation & Setup</h2>

  <h3>📦 Backend (Django + MongoDB)</h3>
  <pre>
cd backend
pip install -r requirements.txt
python manage.py runserver
  </pre>
  <p><strong>💡 Tip:</strong> Ensure MongoDB is running locally or use MongoDB Atlas. Update the <code>DATABASES</code> settings in <code>settings.py</code>.</p>

  <h3>🌐 Frontend (React)</h3>
  <pre>
cd frontend
npm install
npm start
  </pre>

  <hr>

  <h2>🔐 Auth Flow Summary</h2>
  <ul>
    <li>User logs in or registers</li>
    <li>JWT token is issued and stored in cookies</li>
    <li>Routes are protected using token validation</li>
    <li>Google OAuth supported for faster access</li>
    <li>Authenticated routes fetch user data and notes securely</li>
  </ul>

  <hr>

  <h2>🙋‍♂️ Author</h2>
  <p>
    <strong>Shubho (blackcat-007)</strong><br>
    🧠 Passionate about clean code, fullstack apps, and real-world software.<br>
    📫 <a href="https://github.com/blackcat-007" target="_blank">GitHub Profile</a>
  </p>

  <hr>

  <h2>📄 License</h2>
  <p>
    This project is released under the <strong>Public Domain</strong>.
    You are free to use, modify, distribute, or adapt this project for any purpose — personal or commercial — without restriction.
  </p>

  <blockquote>
    “The best notes are the ones you never forget. Keep them safe. Keep them smart. Keep Notes.”
  </blockquote>
