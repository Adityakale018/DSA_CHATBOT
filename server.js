import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('./')); // Serve index.html

const genAI = new GoogleGenerativeAI(process.env.apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `You are an expert Data Structures and Algorithms tutor.

Use the provided context to answer the question if available. If no context is provided or the answer is not found in the context, use your internal knowledge to provide a clear and helpful explanation.

Instructions:
* Answer in clear steps
* Use simple language
* Include:
  1. Definition
  2. Approach
  3. Time & Space Complexity
  4. Example (if applicable)
* If coding is needed, provide clean code (C++ preferred)
* Keep answer structured for interview preparation`,
});

app.post('/api/chat', async (req, res) => {
  const { message, context } = req.body;
  
  try {
    const prompt = `Context:\n${context || "No additional context provided."}\n\nUser Question:\n${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ text: response.text() });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
