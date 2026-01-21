import { parseMarkdown } from "./parser";

self.onmessage = (e: MessageEvent<string>) => {
  const tokens = parseMarkdown(e.data);
  postMessage(tokens);
};
