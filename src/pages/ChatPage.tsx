import React from "react";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import ProviderSelect from "../components/ProviderSelect";
import ModelSettings from "../components/ModelSettings";
import SystemPrompt from "../components/SystemPrompt";
import ApiKeyInput from "../components/ApiKeyInput";
import ClearChat from "../components/ClearChat";
import VncPanel from "../components/VncPanel"; 

const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-y-auto">
      {/* Sidebar and Chat - Scrollable */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full md:w-96 p-6 bg-white/10 backdrop-blur-md border-b md:border-r border-gray-700 flex flex-col gap-6 shadow-xl">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg text-center md:text-left">
            AI Chat
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <ProviderSelect />
            <ModelSettings />
            <SystemPrompt />
            <ApiKeyInput />
            <ClearChat />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col flex-1">
          <div className="flex-1 p-4 md:p-6 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
            <ChatWindow />
          </div>
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <MessageInput />
          </div>
        </div>
      </div>

      {/* VNC Viewer - Appears at the Bottom */}
      <div className="w-full bg-black border-t border-gray-700 p-4">
        <h2 className="text-lg font-semibold text-gray-300 mb-2">VNC Viewer</h2>
        <div className="w-full min-h-[300px]">
          <VncPanel url="http://localhost:6080/vnc.html" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
