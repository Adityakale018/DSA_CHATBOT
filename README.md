# DSA Chatbot Deployment Guide

This application is ready to be deployed to platforms like **Render**, **Railway**, or **Heroku**.

## Deployment Steps (Recommended: Render)

1.  **Push to GitHub**:
    *   Create a new repository on GitHub.
    *   Initialize git locally: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Link to GitHub: `git remote add origin <your-repo-url>`
    *   Push: `git push -u origin main`

2.  **Connect to Render**:
    *   Go to [Render.com](https://render.com/) and sign up.
    *   Click **New +** and select **Web Service**.
    *   Connect your GitHub repository.
    *   Set the following settings:
        *   **Environment**: `Node`
        *   **Build Command**: `npm install`
        *   **Start Command**: `node server.js`

3.  **Set Environment Variables**:
    *   In the Render dashboard, go to the **Environment** tab.
    *   Add a new variable:
        *   **Key**: `apiKey`
        *   **Value**: `<Your-Google-Gemini-API-Key>`

4.  **Deploy**:
    *   Render will automatically deploy your app. Once finished, you will receive a public URL.

## Local Development
- Run `npm install`
- Create a `.env` file with `apiKey=YOUR_KEY`
- Run `node server.js`
