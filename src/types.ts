type WordnikDefinition = {
  text: string;
  partOfSpeech: 'noun' | 'verb' | 'adverb';
  source: 'wiktionary';
  note: null | string;
}

type WordnikApiAnswer = {
  word: string;
  note: string;
  definitions: WordnikDefinition[];
}
