import { useChatStore } from "../store";
import { MarkdownToken } from "./types";

const worker = new Worker(new URL("./worker.ts", import.meta.url), {
  type: "module",
});

let currentMessageId: string | null = null;
let throttleId: number | null = null;

worker.onmessage = (e: MessageEvent<MarkdownToken[]>) => {
  if (!currentMessageId) return;
  useChatStore.getState().setTokens(currentMessageId, e.data);
};

export function scheduleMarkdownParse(messageId: string, content: string) {
  currentMessageId = messageId;

  if (throttleId) return;

  throttleId = window.setTimeout(() => {
    worker.postMessage(content);
    throttleId = null;
  }, 150);
}
