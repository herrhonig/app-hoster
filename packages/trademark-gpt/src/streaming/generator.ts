import { generateChunk } from "../shared/helpers/mock";
import { uuid } from "../shared/helpers/uuid";
import { useChatStore } from "../store";
import { pushChunk } from "./buffer";

let intervalId: number | null = null;

// сколько слов в одном чанке
const WORDS_PER_CHUNK = 20;
// интервал стриминга (экстремально быстро)
const STREAM_INTERVAL = 15;

export function startMockGeneration(targetWords = 10000) {
  const store = useChatStore.getState();

  store.addMessage({
    id: uuid(),
    role: "agent",
    content: "",
  });

  let generatedWords = 0;

  intervalId = window.setInterval(() => {
    const { isGenerating } = useChatStore.getState();

    if (!isGenerating) {
      stopGeneration();
      return;
    }

    const chunk = generateChunk(WORDS_PER_CHUNK);
    generatedWords += WORDS_PER_CHUNK;

    pushChunk(chunk);

    if (generatedWords >= targetWords) {
      stopGeneration();
    }
  }, STREAM_INTERVAL);
}

export function stopGeneration() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  useChatStore.getState().stop();
}
