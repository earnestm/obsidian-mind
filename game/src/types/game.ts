export interface Snippet {
  id: string;
  text: string;
  isAI: boolean;
  source?: string;
  hint: string;
}

export interface Author {
  id: string;
  name: string;
  years: string;
  nationality: string;
  knownFor: string;
  snippets: Snippet[];
}

export type GuessResult = 'correct' | 'wrong' | null;

export interface RoundState {
  snippetIndex: number;
  guess: GuessResult;
  revealed: boolean;
}

export type Locale = 'en' | 'fr' | 'de' | 'it' | 'sr';

export const ROUNDS_PER_GAME = 10;
