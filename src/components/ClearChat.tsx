import React from "react";
import { useChat } from "../hooks/useChat";

const ClearChat: React.FC = () => {
  const { clearChat } = useChat();

  return (
    <button
      onClick={clearChat}
      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
    >
      🗑️ Clear Chat
    </button>
  );
};

export default ClearChat;
