import React from "react";
import { useChat } from "../hooks/useChat";

const SystemPrompt: React.FC = () => {
  const { systemPrompt, setSystemPrompt } = useChat();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white-800">System Prompt</label>
      <textarea
        value={systemPrompt}
        onChange={(e) => setSystemPrompt(e.target.value)}
        placeholder="Enter system instructions for AI..."
        className="p-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all duration-200 hover:border-gray-400 text-black"
        rows={4}
      />
    </div>
  );
};

export default SystemPrompt;
