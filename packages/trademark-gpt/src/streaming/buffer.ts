import { useChatStore } from "../store";

let buffer = "";
let rafId: number | null = null;

export const flush = () => {
  if (buffer) {
    useChatStore.getState().appendToLastMessage(buffer);
    buffer = "";
  }
  rafId = null;
};

export const pushChunk = (chunk: string) => {
  buffer += chunk;

  if (rafId === null) {
    rafId = requestAnimationFrame(flush);
  }
};
