import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const ai = new GoogleGenerativeAI(process.env.apiKey);

async function main() {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  try {
    const result = await model.generateContent("What is DSA?");
    console.log(result.response.text());
  } catch (error) {
    console.error(error);
  }
}
main();
