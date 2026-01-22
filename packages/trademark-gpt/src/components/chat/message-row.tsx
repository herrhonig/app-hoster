import React from "react";
import type { Message } from "../../store";
import { MarkdownRenderer } from "./md-renderer";

export const MessageRow = React.memo(
  ({ message }: { message: Message }) => {
    const isAssistant = message.role === "agent";

    return (
      <div
        className={`w-full px-4 py-3 ${isAssistant ? "bg-muted" : "bg-blue-200"}`}
      >
        <MarkdownRenderer tokens={message.tokens} />
        {/* <div className="w-full text-blue-950">{message.content}</div> */}
      </div>
    );
  },
  (a, b) =>
    a.message.content === b.message.content &&
    a.message.tokens === b.message.tokens,
);
