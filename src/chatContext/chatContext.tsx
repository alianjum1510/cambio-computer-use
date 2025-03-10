import React, { createContext, useState, ReactNode } from "react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatContextType {
  messages: Message[];
  provider: string;
  apiKey: string;
  model: string;
  temperature: number;
  systemPrompt: string;
  setMessages: (messages: Message[]) => void;
  setProvider: (provider: string) => void;
  setApiKey: (apiKey: string) => void;
  setModel: (model: string) => void;
  setTemperature: (temperature: number) => void;
  setSystemPrompt: (prompt: string) => void;
  clearChat: () => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [provider, setProvider] = useState<string>("OpenAI");
  const [apiKey, setApiKey] = useState<string>("");
  const [model, setModel] = useState<string>("gpt-3.5-turbo");
  const [temperature, setTemperature] = useState<number>(0.7);
  const [systemPrompt, setSystemPrompt] = useState<string>("");

  const clearChat = () => setMessages([]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        provider,
        apiKey,
        model,
        temperature,
        systemPrompt,
        setMessages,
        setProvider,
        setApiKey,
        setModel,
        setTemperature,
        setSystemPrompt,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
