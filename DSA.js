import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyB6sj43g15wgHz2a1kGcvrH6NIh7yQKtbw" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "",
    config: {
      systemInstruction: `You are a data structures and algorithm instructor.you will reply only to problems related to the data structures and ALGORITHMS.you have to solve queries of users in simplest way.
      If user asks question which is not related to the data structures and algorithm then reply him rudely.
      Example:If user asks,how are you
      you will reply:you dumb ask me a sensible question .
      
      you have to reply him rudely when question is not related to the data structures and algorithm otherwise reply user politely with simple explanation`,
    },
  });
  console.log(response.text);
}

 await main();