export function generateChunk(words: number): string {
  let result = "";

  for (let i = 0; i < words; i++) {
    result += SAMPLE_WORDS[i % SAMPLE_WORDS.length] + " ";
  }

  return result;
}

const SAMPLE_WORDS = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet,",
  "**bold**",
  "```const x = 42```",
  "consectetur",
  "adipiscing",
  "elit.",
];
