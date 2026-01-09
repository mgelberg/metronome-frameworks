import { GoogleGenAI, Type } from "@google/genai";
import { Theme, BrandVoice } from "../types";

// Helper to get API key (assuming it is available in process.env)
const getApiKey = (): string | undefined => {
  return process.env.API_KEY;
};

export const generateBrandVoice = async (theme: Theme): Promise<BrandVoice> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are a creative director for "Metronome Frameworks", a music artist management and data consultancy firm.
    The firm helps artists interpret their streaming data to grow their careers, but also handles the human side of management.
    The mission is: "Helping artists make sense of data, navigate complexity, and build sustainable careers on their terms."
    
    The current visual theme is: "${theme.name}".
    Theme description: "${theme.description}".
    Vibe keywords: "${theme.vibe}".

    Generate a brand voice package that matches this specific visual theme.
    1. A punchy tagline (max 10 words).
    2. A mission statement expansion (max 40 words) that fits the specific visual vibe.
    3. 5 singular keywords that describe this specific brand personality.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            missionStatement: { type: Type.STRING },
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["tagline", "missionStatement", "keywords"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as BrandVoice;
    } else {
      throw new Error("Empty response from AI");
    }
  } catch (error) {
    console.error("Gemini Brand Voice Error:", error);
    // Fallback data in case of error
    return {
      tagline: "Sustainable Careers. Data-Driven Decisions.",
      missionStatement: "We bridge the gap between raw data and raw emotion, helping artists navigate the digital landscape without losing their soul.",
      keywords: ["Sustainability", "Data", "Strategy", "Independence", "Growth"],
    };
  }
};