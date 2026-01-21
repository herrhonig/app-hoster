import { uuid } from "../shared/helpers/uuid";
import { useChatStore } from "../store";

import { pushChunk } from "./buffer";

let intervalId: number | null = null;

export function startMockGeneration(words = 10000) {
  const store = useChatStore.getState();

  store.addMessage({
    id: uuid(),
    role: "agent",
    content: "",
  });

  let generated = 0;

  intervalId = window.setInterval(() => {
    if (!useChatStore.getState().isGenerating) {
      stopGeneration();
      return;
    }

    const chunk = generateChunk();
    generated += chunk.split(" ").length;

    pushChunk(chunk);

    if (generated >= words) {
      stopGeneration();
    }
  }, 10);
}

function generateChunk() {
  return (
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "**Bold text** " +
    "```const x = 42``` "
  );
}

export function stopGeneration() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  useChatStore.getState().stop();
}
