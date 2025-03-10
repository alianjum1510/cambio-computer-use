export const fetchAIResponse = async (
    apiKey: string,
    provider: string,
    model: string,
    temperature: number,
    systemPrompt: string,
    userMessage: string
  ): Promise<string | null> => {
    try {
        //api url
      const response = await fetch(`https://api.${provider}.com/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        //payload
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage },
          ],
          temperature,
          provider,
        }),
      });
  
      if (!response.ok) throw new Error("Failed to fetch AI response");
  
      const data = await response.json();
      return data.choices?.[0]?.message?.content || null;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return null;
    }
  };
  