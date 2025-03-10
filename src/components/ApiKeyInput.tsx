import React, { useState } from "react";
import { useChat } from "../hooks/useChat";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const ApiKeyInput: React.FC = () => {
  const { apiKey, setApiKey } = useChat();
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-2xl shadow-lg border border-blue-200 w-full max-w-lg">
      <label className="text-blue-700 font-semibold text-sm mb-2 block">API Key</label>
      <div className="relative">
        <input
          type={showKey ? "text" : "password"}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API Key..."
          className="w-full p-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 pr-12 bg-white"
        />
        <button
          type="button"
          onClick={() => setShowKey(!showKey)}
          className="absolute inset-y-0 right-4 flex items-center text-blue-500 hover:text-blue-700"
        >
          {showKey ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default ApiKeyInput;