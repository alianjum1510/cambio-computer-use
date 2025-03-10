import { fetchAIResponse } from "../utils/fetchApiResponse";

export const sendMessage = async (
  apiKey: string,
  provider: string,
  model: string,
  temperature: number,
  systemPrompt: string,
  userMessage: string
) => {
  const reply = await fetchAIResponse(apiKey, provider, model, temperature, systemPrompt, userMessage);
  return reply ? { reply } : null;
};
