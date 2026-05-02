import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const ai = new GoogleGenerativeAI(process.env.apiKey);

async function test(question = "What is a Binary Search Tree?") {
  const model = ai.getGenerativeModel({
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

  try {
    const result = await model.generateContent(question);
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

test();
