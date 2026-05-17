import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash" 
    });

    const result = await model.generateContent(message);

    return res.status(200).json({
      success: true,
      answer: result.response.text(),
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};