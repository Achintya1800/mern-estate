# 🏡 MERN Estate - Real Estate Marketplace

A **full-stack real estate marketplace** built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js) with a modern UI powered by **Tailwind CSS**.

---

## ✨ Features

### 🔐 Authentication & Security

* Secure **JWT authentication**
* **Google OAuth** integration
* **Email/password login**
* **Protected routes** and session management

### 🏠 Property Listings

* **Create, Read, Update, Delete (CRUD)** operations
* **Firebase image uploads**
* Detailed property info (price, type, location, amenities)
* **User-specific listing management**

### 🔍 Search & Filter

* Advanced search functionality
* Filter by **price, date, property type, location**
* **Location-based** listings

### 👤 User Profile

* **Profile image upload**
* Edit personal information
* Secure account deletion
* Manage personal listings

### 💻 UI/UX

* **Responsive** and **mobile-friendly** design
* Styled with **Tailwind CSS**
* **Dark/Light mode** support
* Clean and intuitive interface

---

## 🛠 Tech Stack

### 🔹 Frontend

* **React.js** – UI library
* **Redux Toolkit** – State management
* **React Router** – Client-side routing
* **Tailwind CSS** – Utility-first styling
* **Firebase** – Image hosting

### 🔸 Backend

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB
* **JWT** – Token-based authentication
* **bcryptjs** – Password hashing

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js v14+
* MongoDB
* Firebase account
* Google OAuth credentials

### ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/sahandghavidel/mern-estate.git
   cd mern-estate
   ```

2. **Install dependencies**

   ```bash
   npm install          # Backend
   cd client && npm install  # Frontend
   ```

3. **Configure environment variables**

   **Server (.env):**

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   **Client (client/.env):**

   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the app**

   ```bash
   # Backend
   npm run dev

   # Frontend (in another terminal)
   cd client
   npm run dev
   ```

### 🔗 Access

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:3000`

---

## 🧭 Project Structure

```
mern-estate/
├── api/                    # Express backend
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose models
│   ├── routes/             # API endpoints
│   ├── utils/              # Utility functions
│   └── index.js            # Server entry
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Views/pages
│   │   ├── redux/          # Redux store
│   │   └── firebase.js     # Firebase setup
│   └── public/
├── package.json            # Root dependencies
└── README.md
```

---

## 📡 API Endpoints

### 🔐 Auth

* `POST /api/auth/signup` – Register user
* `POST /api/auth/signin` – Login user
* `POST /api/auth/google` – Google OAuth
* `GET /api/auth/signout` – Logout user

### 👤 User

* `POST /api/user/update/:id` – Update profile
* `DELETE /api/user/delete/:id` – Delete user
* `GET /api/user/listings/:id` – Get user listings

### 🏠 Listings

* `POST /api/listing/create` – Create new listing
* `POST /api/listing/update/:id` – Update listing
* `DELETE /api/listing/delete/:id` – Delete listing
* `GET /api/listing/get/:id` – Get single listing
* `GET /api/listing/get` – Search listings

---

## ☁️ Deployment

### ✅ Deploy to Render

1. **Prepare for deployment**
   Add to root `package.json`:

   ```json
   "scripts": {
     "build": "npm install && npm install --prefix client && npm run build --prefix client"
   }
   ```

2. **Render setup**

   * Connect your GitHub repo
   * Build command: `npm run build`
   * Start command: `npm start`
   * Add required environment variables

### 🚀 Deploy to Heroku

1. Install Heroku CLI
2. Create app:

   ```bash
   heroku create your-app-name
   ```
3. Set config vars:

   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   ```
4. Deploy:

   ```bash
   git push heroku main
   ```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file.

---

## 🙌 Acknowledgements

* MERN Community
* Tailwind CSS
* Firebase
* MongoDB

---

> ⭐ If you find this project useful, don’t forget to **star** it!

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=sahandghavidel.mern-estate)

---

Let me know if you'd like a **minimal version**, **multi-language support**, or an **interactive demo GIF** added to the README.
