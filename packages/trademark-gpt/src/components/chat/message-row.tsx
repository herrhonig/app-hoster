import React from "react";
import type { Message } from "../../store";
import { MarkdownRenderer } from "./md-renderer";

type MessageRowProps = {
  message: Message;
};

export const MessageRow = React.memo(
  ({ message }: MessageRowProps) => {
    return (
      <div className={`px-4 py-3`}>
        <MarkdownRenderer tokens={message.tokens} />
      </div>
    );
  },
  (a, b) => a.message.tokens === b.message.tokens,
);
