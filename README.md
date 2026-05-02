# DSA Architect | AI Tutor 🤖

An expert AI-powered chatbot designed to help you master Data Structures and Algorithms. Built using Google's Gemini API, it provides structured explanations, complexity analysis, and C++ code examples optimized for interview preparation.

## ✨ Features
- **Expert DSA Tutor Persona**: Specialized answers for interview prep.
- **Structured Responses**: Definitions, Approaches, and Complexity Analysis.
- **Code Examples**: Clean C++ code for algorithms and data structures.
- **Professional UI**: Glassmorphism-inspired "Architect" theme with Markdown support.
- **Secure Architecture**: Express.js backend to protect API keys.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Glassmorphism), JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **AI Engine**: Google Gemini API (@google/generative-ai)
- **Formatting**: Marked.js (Markdown), Highlight.js (Syntax Highlighting)

## 🚀 How to Run Locally
1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   apiKey=YOUR_GOOGLE_GEMINI_API_KEY
   ```
4. **Start the server**:
   ```bash
   node server.js
   ```
5. **Access the app**: Open `http://localhost:3000` in your browser.

## 🌐 Deployment Guide (Recommended: Render)

1. **Push to GitHub**:
   Ensure your code is committed and pushed to a GitHub repository.
2. **Connect to Render**:
   - Go to [Render.com](https://render.com/) and create a new **Web Service**.
   - Connect your GitHub repository.
3. **Configure Settings**:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. **Set Environment Variables**:
   In the Render dashboard, add a variable:
   - **Key**: `apiKey`
   - **Value**: `YOUR_ACTUAL_API_KEY`

## 🔒 Security
- API keys are stored in a `.env` file and kept secure.
- `.env` and `node_modules` are excluded from Git tracking via `.gitignore`.

## 👤 Author
**Aditya Kale**
