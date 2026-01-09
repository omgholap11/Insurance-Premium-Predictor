<div align="center">

# 🛡️ InsurePredict - AI-Powered Insurance Premium Predictor

### Stop guessing. Use our advanced machine learning model to calculate your optimal insurance premium based on your unique profile.

[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

![Project Banner](C:/Users/omgho/.gemini/antigravity/brain/8877f625-aadf-4d8d-bd4b-237ed81210c4/uploaded_image_1767958730925.png)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About The Project

**InsurePredict** is a full-stack web application that leverages machine learning to predict insurance premiums based on user profiles. The system analyzes multiple factors including age, BMI, lifestyle habits, occupation, and location to provide accurate premium estimates.

### Why InsurePredict?

- **🎯 Accurate Predictions**: ML model trained on real-world data
- **⚡ Real-time Results**: Instant premium calculations
- **🔒 Secure Authentication**: JWT-based user authentication
- **🎨 Modern UI**: Beautiful, responsive interface with glassmorphism effects
- **📊 Comprehensive Analysis**: Considers multiple risk factors

---

## ✨ Features

### 🔐 User Authentication
- Secure user registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Session management

### 🤖 AI-Powered Predictions
- Machine learning model for premium calculation
- Multi-factor analysis (BMI, age group, lifestyle risk, city tier, income, occupation)
- Categorized results (Low, Medium, High premium)
- Detailed risk assessment

### 🎨 Premium UI/UX
- Dark mode with glassmorphism effects
- Smooth animations with Framer Motion
- Multi-step interactive forms
- Responsive design for all devices
- Toast notifications for user feedback

### 📊 Smart Data Processing
- Automatic BMI calculation
- City tier classification
- Age group categorization
- Lifestyle risk assessment

---

## 🛠️ Tech Stack

### Frontend
<div align="center">

| Technology | Purpose | Logo |
|------------|---------|------|
| **React 18** | UI Framework | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) |
| **Vite** | Build Tool | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| **TailwindCSS** | Styling | ![Tailwind](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) |
| **Framer Motion** | Animations | ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) |
| **React Router** | Routing | ![Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) |
| **Axios** | HTTP Client | ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=white) |
| **React Hot Toast** | Notifications | ![Toast](https://img.shields.io/badge/-React_Hot_Toast-FF6B6B?style=flat) |
| **Lucide React** | Icons | ![Lucide](https://img.shields.io/badge/-Lucide-F56565?style=flat) |

</div>

### Backend
<div align="center">

| Technology | Purpose | Logo |
|------------|---------|------|
| **FastAPI** | Web Framework | ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?style=flat&logo=fastapi&logoColor=white) |
| **Python 3.13** | Language | ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white) |
| **PostgreSQL** | Database | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) |
| **SQLAlchemy** | ORM | ![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-D71F00?style=flat) |
| **Pydantic** | Validation | ![Pydantic](https://img.shields.io/badge/-Pydantic-E92063?style=flat) |
| **JWT** | Authentication | ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat&logo=json-web-tokens&logoColor=white) |
| **Passlib** | Password Hashing | ![Passlib](https://img.shields.io/badge/-Passlib-4B8BBE?style=flat) |

</div>

### Machine Learning
<div align="center">

| Technology | Purpose | Logo |
|------------|---------|------|
| **scikit-learn** | ML Framework | ![sklearn](https://img.shields.io/badge/-scikit_learn-F7931E?style=flat&logo=scikit-learn&logoColor=white) |
| **Pandas** | Data Processing | ![Pandas](https://img.shields.io/badge/-Pandas-150458?style=flat&logo=pandas&logoColor=white) |
| **NumPy** | Numerical Computing | ![NumPy](https://img.shields.io/badge/-NumPy-013243?style=flat&logo=numpy&logoColor=white) |

</div>

---

## 📁 Project Structure

```
Insurance-Premium-Predictor/
│
├── 📂 Frontend/                    # React Frontend Application
│   ├── 📂 public/                  # Static assets
│   ├── 📂 src/
│   │   ├── 📂 api/                 # API configuration
│   │   │   └── axios.js            # Axios instance setup
│   │   ├── 📂 components/          # Reusable components
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   └── Footer.jsx          # Footer component
│   │   ├── 📂 pages/               # Page components
│   │   │   ├── LandingPage.jsx     # Home page
│   │   │   ├── 📂 auth/            # Authentication pages
│   │   │   │   ├── LoginPage.jsx   # Login form
│   │   │   │   └── SignupPage.jsx  # Registration form
│   │   │   └── 📂 prediction/      # Prediction pages
│   │   │       ├── PredictionForm.jsx    # Multi-step form
│   │   │       └── PredictionResult.jsx  # Results display
│   │   ├── Layout.jsx              # Main layout wrapper
│   │   ├── App.jsx                 # Route configuration
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── vite.config.js              # Vite configuration
│   └── package.json                # Dependencies
│
├── 📂 app/                         # FastAPI Backend Application
│   ├── 📂 Config/                  # Configuration files
│   │   └── database.py             # Database connection
│   ├── 📂 Controller/              # Business logic
│   │   ├── user_handler.py         # User operations
│   │   └── insurance_handler.py    # Prediction logic
│   ├── 📂 Middlewares/             # Custom middlewares
│   │   └── Authentication.py       # JWT auth middleware
│   ├── 📂 Models/                  # Database models
│   │   └── user.py                 # User model
│   ├── 📂 Router/                  # API routes
│   │   ├── user.py                 # User endpoints
│   │   └── ipprediction.py         # Prediction endpoints
│   ├── 📂 Schemas/                 # Pydantic schemas
│   │   ├── user.py                 # User schemas
│   │   └── InsuranceProfile.py     # Insurance profile schema
│   ├── 📂 Services/                # Utility services
│   │   └── authentication.py       # JWT utilities
│   └── main.py                     # FastAPI app entry
│
├── 📂 ML-Model/                    # Machine Learning Model
│   ├── insurance_model.pkl         # Trained ML model
│   └── [training notebooks]        # Model training code
│
├── .env                            # Environment variables
├── .gitignore                      # Git ignore rules
├── requirements.txt                # Python dependencies
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.10 or higher) - [Download](https://www.python.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/Insurance-Premium-Predictor.git
cd Insurance-Premium-Predictor
```

#### 2️⃣ Backend Setup

```bash
# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/insurance_db

# JWT Configuration
SECRET_KEY=your-super-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Server Configuration
BACKEND_PORT=8000
FRONTEND_PORT=5173
```

### Database Setup

```bash
# Create PostgreSQL database
createdb insurance_db

# The tables will be created automatically when you run the backend
```

### Running the Application

#### Start Backend Server

```bash
# From root directory
uvicorn app.main:app --reload
```

The backend will be available at `http://localhost:8000`

#### Start Frontend Development Server

```bash
# From Frontend directory
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## 📚 API Documentation

Once the backend is running, visit:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

### Key Endpoints

#### Authentication
- `POST /user/signup` - Register new user
- `POST /user/signin` - Login user

#### Prediction
- `POST /insurance/predict` - Get premium prediction (requires authentication)

---

## 📸 Screenshots

<div align="center">

### Landing Page
![Landing Page](C:/Users/omgho/.gemini/antigravity/brain/8877f625-aadf-4d8d-bd4b-237ed81210c4/uploaded_image_1767958730925.png)

### Authentication Flow
*Beautiful login and signup forms with glassmorphism effects*

### Multi-Step Prediction Form
*Interactive form with smooth transitions and validation*

### Results Display
*Clear visualization of premium category with detailed breakdown*

</div>

---

## 🎨 Design Features

- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Dark Mode**: Eye-friendly dark theme throughout
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Works perfectly on all screen sizes
- **Interactive Elements**: Hover effects and micro-animations
- **Custom Color Palette**: Emerald and slate color scheme

---

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- HTTP-only cookies for token storage
- CORS configuration for cross-origin requests
- Input validation with Pydantic
- SQL injection protection with SQLAlchemy ORM

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Om Gholap**

- GitHub: [@omgholap11](https://github.com/omgholap11)
- Email: iomgholap123@gmail.com

---

## 🙏 Acknowledgments

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [scikit-learn](https://scikit-learn.org/)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

</div>
