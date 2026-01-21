import { MarkdownToken } from "./types";

export function parseMarkdown(input: string): MarkdownToken[] {
  const tokens: MarkdownToken[] = [];
  let i = 0;

  while (i < input.length) {
    // code block ```
    if (input.startsWith("```", i)) {
      const end = input.indexOf("```", i + 3);
      const value = input.slice(i + 3, end === -1 ? undefined : end);
      tokens.push({ type: "code", value });
      i = end === -1 ? input.length : end + 3;
      continue;
    }

    // bold **
    if (input.startsWith("**", i)) {
      const end = input.indexOf("**", i + 2);
      const value = input.slice(i + 2, end === -1 ? undefined : end);
      tokens.push({ type: "bold", value });
      i = end === -1 ? input.length : end + 2;
      continue;
    }

    // text
    let next = input.length;
    next = Math.min(
      next,
      input.indexOf("```", i) === -1 ? next : input.indexOf("```", i),
      input.indexOf("**", i) === -1 ? next : input.indexOf("**", i),
    );

    tokens.push({
      type: "text",
      value: input.slice(i, next),
    });

    i = next;
  }

  return tokens;
}
