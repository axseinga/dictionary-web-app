export interface DictionaryAPIResponseI {
  word: string;
  phonetic: string;
  phonetics: PhoneticI[];
  origin: string;
  meanings: MeaningI[];
  sourceUrls: string[];
}

export interface PhoneticI {
  text: string;
  audio?: string;
}

export interface MeaningI {
  partOfSpeech: string;
  definitions: DefinitionI[];
  synonyms: string[];
  antonyms: string[];
}

export interface DefinitionI {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export type APIErrorT = 404 | 408 | 500;
