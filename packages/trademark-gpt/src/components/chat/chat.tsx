import { useChatStore } from "../../store";
import { startMockGeneration, stopGeneration } from "../../streaming/generator";
import { ChatInput } from "./chat-input";
import { ChatView } from "./chat-view";

export function Chat() {
  const isGenerating = useChatStore((state) => state.isGenerating);
  const isChatInited = useChatStore((state) => Boolean(state.messages.length));
  const restoreChat = useChatStore((state) => state.clear);

  return (
    <div className="container relative flex flex-col w-full h-full justify-center py-4">
      {isChatInited && (
        <div className="flex h-[600px] justify-center my-4">
          <ChatView />
        </div>
      )}

      <ChatInput
        isGenerating={isGenerating}
        onRestoreChat={isChatInited ? restoreChat : undefined}
        onStartMockGeneration={startMockGeneration}
        onStopMockGeneration={stopGeneration}
      />
    </div>
  );
}
