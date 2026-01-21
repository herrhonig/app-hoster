import { Button } from "../../shared/ui/button";
import { Textarea } from "../../shared/ui/textarea";
import { useChatStore } from "../../store";
import { startMockGeneration, stopGeneration } from "../../streaming/generator";

export function ChatInput() {
  const isGenerating = useChatStore((state) => state.isGenerating);

  return (
    <div className="flex gap-2 border-t p-3">
      <Textarea
        placeholder="Ask something..."
        rows={2}
        disabled={isGenerating}
      />

      {isGenerating && (
        <Button onClick={stopGeneration} className="bg-red-500">
          Stop
        </Button>
      )}

      {!isGenerating && (
        <Button onClick={() => startMockGeneration()}>Generate</Button>
      )}
    </div>
  );
}
