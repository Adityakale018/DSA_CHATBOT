import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.apiKey);

async function list() {
  try {
    // In some versions it's genAI.listModels()
    // But let's try to just hit the endpoint manually if needed.
    // Actually, let's try gemini-1.5-flash again but check the key.
    console.log("API Key:", process.env.apiKey);
  } catch (e) {
    console.error(e);
  }
}
list();
