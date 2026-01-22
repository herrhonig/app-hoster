import { cn } from "../../shared/helpers/cn";
import { Button } from "../../shared/ui/button";
import { Textarea } from "../../shared/ui/textarea";

type ChatInputProps = {
  className?: string;
  isGenerating: boolean;
  onRestoreChat?: () => void;
  onStartMockGeneration: () => void;
  onStopMockGeneration: () => void;
};
export function ChatInput({
  className = "",
  isGenerating,
  onRestoreChat = undefined,
  onStartMockGeneration,
  onStopMockGeneration,
}: ChatInputProps) {
  return (
    <div
      className={cn(
        "flex items-center opacity-100 z-30 self-center bg-red-100 rounded-4xl gap-2 p-3",
        className,
      )}
    >
      <Textarea
        name="chat-input"
        placeholder="Ask something..."
        className="rounded-3xl"
        rows={2}
        disabled={isGenerating}
      />

      {isGenerating && (
        <Button
          onClick={onStopMockGeneration}
          className="bg-red-500 rounded-full"
        >
          Stop
        </Button>
      )}

      {!isGenerating && (
        <>
          {onRestoreChat && (
            <Button onClick={onRestoreChat} className="bg-red-500 rounded-2xl">
              Clear
            </Button>
          )}
          <Button
            className={cn("bg-cyan-950 text-white rounded-2xl", {
              "select-none": isGenerating,
            })}
            onClick={() => onStartMockGeneration()}
          >
            Generate
          </Button>
        </>
      )}
    </div>
  );
}
