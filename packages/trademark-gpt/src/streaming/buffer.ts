import { scheduleMarkdownParse } from "../markdown/client";
import { useChatStore } from "../store";

let buffer = "";
let rafId: number | null = null;

function flush() {
  const store = useChatStore.getState();
  const messages = store.messages;
  const last = messages[messages.length - 1];

  if (!last) return;

  if (buffer) {
    store.appendToLastMessage(buffer);
    buffer = "";

    // 👇 markdown парсинг ПОСЛЕ апдейта
    scheduleMarkdownParse(last.id, last.content);
  }

  rafId = null;
}

export function pushChunk(chunk: string) {
  buffer += chunk;

  if (rafId === null) {
    rafId = requestAnimationFrame(flush);
  }
}
