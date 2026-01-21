import React from "react";
import type { Message } from "../../store";
import { MarkdownRenderer } from "./md-renderer";

export const MessageRow = React.memo(
  ({ message }: { message: Message }) => {
    const isAssistant = message.role === "agent";

    return (
      <div
        className={`px-4 py-3 ${isAssistant ? "bg-muted" : "bg-background"}`}
      >
        <MarkdownRenderer tokens={message.tokens} />
      </div>
    );
  },
  (a, b) => a.message.content === b.message.content,
);
