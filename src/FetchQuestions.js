import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyCSkudhM_c1I9of8ooeQhisGllyUMMHBNY"; // Ensure this is securely stored and retrieved

const genAI = new GoogleGenerativeAI(API_KEY);

export const generateQuizQuestion = async (topic) => {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Generate a quiz question about ${topic}`;
    const result = await model.generateContent({ prompt });
    const response = await result.json();
    const text = response.text;
    console.log(text);

    // Process the text to extract questions and options
    // This part depends on the format of the text returned by the API
    // Here, we assume the API returns a structured JSON format

    return text; // Adjust based on actual response structure
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
};

export default genAI;
