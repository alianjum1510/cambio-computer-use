import React, { useState } from "react";
import { useChat } from "../hooks/useChat";
import { sendMessage } from "../services/chatService";
import { Message } from "../chatContext/chatContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";


const MessageInput: React.FC = () => {
  const [input, setInput] = useState("");
  const { messages, setMessages, apiKey, provider, model, temperature, systemPrompt } = useChat(); // Fetching from context

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // Get AI response using values from context
    const response = await sendMessage(apiKey, provider, model, temperature, systemPrompt, input);
    if (response) {
      setMessages([...newMessages, { role: "assistant", content: response.reply }]);
    }

    setInput("");
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-lg border border-gray-300">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your message..."
      className="flex-1 p-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
    />
    <button
      onClick={handleSendMessage}
      className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95"
    >
      <PaperAirplaneIcon className="w-5 h-5" />
    </button>
  </div>
  );
};

export default MessageInput;
