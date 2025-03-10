import React, { useState } from "react";
import { useChat } from "../hooks/useChat";
import { sendMessage } from "../services/chatService";
import { Message } from "../chatContext/chatContext";
import { PaperAirplaneIcon, TrashIcon } from "@heroicons/react/24/solid";

const Chat: React.FC = () => {
  const { messages, setMessages, clearChat, apiKey, provider, model, temperature, systemPrompt } = useChat();
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const response = await sendMessage(apiKey, provider, model, temperature, systemPrompt, input);

    if (response) {
      setMessages([...newMessages, { role: "assistant", content: response.reply }]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-4 max-w-xs md:max-w-md rounded-2xl shadow-lg ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-700 text-gray-200 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-gray-900 bg-opacity-80 border-t border-gray-700 shadow-lg flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          onClick={handleSendMessage}
          className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center justify-center"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
        <button
          onClick={clearChat}
          className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center justify-center"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
