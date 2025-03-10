import React from "react";
import { useChat } from "../hooks/useChat";

const ChatWindow: React.FC = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col w-full h-[500px] p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto border border-gray-300">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex w-full ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 my-2 max-w-[80%] md:max-w-[60%] rounded-xl shadow-md transition-all duration-200 ${
              msg.role === "user"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
