import { GoogleGenerativeAI } from '@google/generative-ai';

// Check both apiKey and API_KEY to be safe
const apiKey = process.env.apiKey || process.env.API_KEY || process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
  console.log("Chat API invoked. Method:", req.method);
  console.log("API Key present:", !!apiKey);
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!apiKey) {
    return res.status(500).json({ 
      error: "API Key is missing.", 
      message: "Please add 'apiKey' to your Vercel Environment Variables." 
    });
  }

  const { message, context } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    // Use gemini-1.5-flash which is the standard, stable model name
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an expert Data Structures and Algorithms tutor.
Use the provided context to answer the question if available. If no context is provided or the answer is not found in the context, use your internal knowledge.
Include: 1. Definition, 2. Approach, 3. Complexity, 4. C++ Example.`,
    });

    const prompt = `Context:\n${context || "No context."}\n\nQuestion:\n${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });
  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({ 
      error: "Gemini API Error", 
      details: error.message 
    });
  }
}
