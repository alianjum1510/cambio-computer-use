import React, { useMemo } from "react";
import { useChat } from "../hooks/useChat";

const modelOptions: Record<string, string[]> = {
  OpenAI: ["gpt-3.5-turbo", "gpt-4"],
  Anthropic: ["claude-2"],
  Google: ["gemini"],
};

const ModelSettings: React.FC = () => {
  const { model, setModel, temperature, setTemperature, provider } = useChat();

  const models = useMemo(
    () => modelOptions[provider as keyof typeof modelOptions] || [],
    [provider]
  );

  return (
    <div className="flex flex-col gap-6 p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-300 backdrop-blur-md">
      {/* Model Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-800">AI Model</label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-100"
        >
          {models.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>
      </div>

      {/* Temperature Slider */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-800">
          Temperature: <span className="font-bold text-blue-600">{temperature}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="cursor-pointer accent-blue-500 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg appearance-none transition-all hover:opacity-90"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>0 (More Deterministic)</span>
          <span>1 (More Random)</span>
        </div>
      </div>
    </div>
  );
};

export default ModelSettings;
