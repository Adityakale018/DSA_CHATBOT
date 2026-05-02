import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.apiKey);

async function listModels() {
  try {
    // Note: listModels might not be available in all SDK versions or might require different auth
    // But let's try a simple generation with a known model to see if auth works at least
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Hello");
    console.log(result.response.text());
  } catch (e) {
    console.error(e);
  }
}

listModels();
