export const splitIntoThreeParagraphs = (text) => {
  const sentenceSegmenter = new Intl.Segmenter("en", {
    granularity: "sentence",
  });

  const wordSegmenter = new Intl.Segmenter("en", {
    granularity: "word",
  });

  const sentences = [...sentenceSegmenter.segment(text)]
    .map(segment => segment.segment.trim())
    .filter(Boolean);

  const totalWords = [...wordSegmenter.segment(text)]
    .filter(segment => segment.isWordLike)
    .length;

  const targetWords = Math.ceil(totalWords / 3);

  const paragraphs = [];
  let currentParagraph = [];
  let currentWordCount = 0;

  for (const sentence of sentences) {
    const wordsInSentence = [...wordSegmenter.segment(sentence)]
      .filter(segment => segment.isWordLike)
      .length;

    currentParagraph.push(sentence);
    currentWordCount += wordsInSentence;

    if (currentWordCount >= targetWords && paragraphs.length < 2) {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
      currentWordCount = 0;
    }
  }

  paragraphs.push(currentParagraph.join(" "));

  while (paragraphs.length < 3) {
    paragraphs.push("");
  }

  return paragraphs;
}