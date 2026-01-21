import { create } from "zustand";
import type { Message } from "./message.schema";

type ChatState = {
  messages: Message[];
  isGenerating: boolean;

  addMessage: (msg: Message) => void;
  appendToLastMessage: (chunk: string) => void;
  setTokens: (id: string, tokens: Message["tokens"]) => void;
  stop: () => void;
};

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isGenerating: false,

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
      isGenerating: msg.role === "agent",
    })),

  appendToLastMessage: (chunk) =>
    set((state) => {
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
}));
