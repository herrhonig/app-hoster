export function generateChunk(words: number): string {
  let result = "";

  for (let i = 0; i < words; i++) {
    result += SAMPLE_WORDS[i % SAMPLE_WORDS.length] + " ";
  }

  return result;
}

const SAMPLE_WORDS = [
  "**bold bold text with some bold symbols **",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum ducimus excepturi laboriosam repellat iusto necessitatibus pariatur autem eius cupiditate dolores dignissimos eveniet non commodi similique, quia deserunt quibusdam, repellendus impedit mollitia aperiam culpa totam aliquid facilis. Distinctio recusandae adipisci, nulla culpa voluptates quasi excepturi sequi, hic incidunt tenetur dolores.",
  "```const x = 42\n result += SAMPLE_WORDS\n[i % SAMPLE_WORDS.length] ```",
];
