import { create } from "zustand";
import type { Message } from "./message.schema";

type ChatState = {
  messages: Message[];
  isGenerating: boolean;
  // streamingMessage: Message | null; // mutable, isolated

  addMessage: (msg: Message) => void;
  appendToLastMessage: (chunk: string) => void;
  // appendChunk: (chunk: string) => void;
  setTokens: (id: string, tokens: Message["tokens"]) => void;
  stop: () => void;
  clear: () => void;
};

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  // streamingMessage: null,
  isGenerating: false,

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
      isGenerating: msg.role === "agent",
    })),

  appendToLastMessage: (chunk) =>
    set((state) => {
      console.log({ storeChunk: chunk });

      const last = state.messages[state.messages.length - 1];
      if (!last) return state;

      const updated: Message = {
        ...last,
        content: last.content + chunk,
      };

      return {
        messages: [...state.messages.slice(0, -1), updated],
      };
    }),

  setTokens: (id, tokens) =>
    set((state) => ({
      messages: state.messages.map((m) => (m.id === id ? { ...m, tokens } : m)),
    })),

  stop: () => set({ isGenerating: false }),
  clear: () => set({ messages: [] }),
}));

/**
 *  appendChunk: (chunk) =>
    set((state) => {
      if (!state.streamingMessage) return;
      state.streamingMessage.content += chunk;
    }),

 */
