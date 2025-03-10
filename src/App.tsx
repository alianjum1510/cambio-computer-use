import React from "react";
import { ChatProvider } from "./chatContext/chatContext";
import ChatPage from "./pages/ChatPage";

const App: React.FC = () => {
  return (
    <ChatProvider>
      <ChatPage />
    </ChatProvider>
  );
};

export default App;
