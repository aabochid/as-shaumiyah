
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateIslamicStory = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tuliskan sebuah kisah inspiratif singkat untuk anak-anak TK tentang ${topic}. Gunakan bahasa yang sederhana, ceria, dan mengandung nilai-nilai moral Islami. Berikan judul yang menarik. Format output dalam markdown.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, saat ini kisah tidak dapat dibuat. Silakan coba lagi nanti.";
  }
};

export const generateParentingTip = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Berikan 3 tips singkat parenting Islami untuk mendidik anak usia dini (3-6 tahun). Fokus pada adab harian atau kecerdasan spiritual. Format output dalam poin-poin markdown.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tips parenting tidak tersedia saat ini.";
  }
};
