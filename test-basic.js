import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const ai = new GoogleGenerativeAI(process.env.apiKey);

async function main() {
  const model = ai.getGenerativeModel({ model: "gemini-1.0-pro" });
  try {
    const result = await model.generateContent("What is DSA?");
    console.log(result.response.text());
  } catch (error) {
    console.error(error);
  }
}
main();
