import { ChatInput } from "./components/chat/chat-input";
import { ChatView } from "./components/chat/chat-view";

export default function App() {
  return (
    <div className="flex flex-col h-full items-center p-12">
      <h1 className="text-2xl font-bold">Trademark Gpt</h1>
      <div className="flex  flex-col">
        <ChatView />
        <ChatInput />
      </div>
    </div>
  );
}
