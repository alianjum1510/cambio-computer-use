import React from "react";
import { useChat } from "../hooks/useChat";

const providers = ["OpenAI", "Anthropic", "Google"];

const ProviderSelect: React.FC = () => {
  const { provider, setProvider } = useChat();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white-700">AI Provider</label>
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="p-3 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400 hover:bg-gray-50"
      >
        {providers.map((prov) => (
          <option key={prov} value={prov} className="bg-white text-gray-900">
            {prov}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProviderSelect;
