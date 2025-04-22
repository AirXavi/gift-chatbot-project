# 🎁 Gift Chatbot Project

The Gift Chatbot is a full-stack web application designed to help users find thoughtful gift ideas based on a short form about the recipient. Powered by the OpenAI API, this chatbot generates unique and personalized gift suggestions based on user input such as the recipient’s relationship, interests, age, and more.

---

## 💡 Features

- Clean and responsive frontend built with **React** and **Tailwind CSS**
- **FastAPI** backend to handle requests and route OpenAI API calls
- OpenAI API integration for intelligent gift recommendations
- Simple form interface for user input
- Real-time display of results without needing to reload
- Clear error handling for failed requests

---

## 🧱 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Python, FastAPI, Uvicorn
- **API**: OpenAI GPT-3.5
- **Environment Management**: Python Virtual Environment, .env files
- **Version Control**: Git & GitHub

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AirXavi/gift-chatbot-project.git
cd gift-chatbot-project
```
### 2. Start the Backend

```bash
cd backend
source venv/bin/activate          # Activate the virtual environment
uvicorn main:app --reload         # Start the backend server
```
### 3. Start the Frontend

```bash
cd frontend
npm install           # Install dependencies
npm start             # Run the development server
``` 

### 4. Using the App
```
1. Navigate to http://localhost:3000
2. Fill out the gift suggestion form
3. Submit the form to receive personalized gift ideas
4.Suggestions will appear directly below the form
```
### 5. API Key Setup
```
1. To use backend, go to backend/
2. Create a .env file
.env should include:
OPENAI_API_KEY = (your unique api key)
```

### 6. Project Structure
```
gift-chatbot-project/
│
├── backend/                 # FastAPI backend
│   ├── main.py              # Backend logic
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # API Key (local only)
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       └── Form.js
│   └── tailwind.config.js   # Tailwind configuration
│
└── README.md
```
