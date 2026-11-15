import { createContext, useContext } from 'react';
import type { Mantra } from '../../data';
import type { Choices } from '../../lib/variants';

/** State shared by everything inside one open text. */
export interface ReaderState {
  mantra: Mantra;
  choices: Choices;
  /** Verse keys whose meaning is open. */
  opened: ReadonlySet<string>;
  toggleMeaning: (key: string) => void;
  /** Verse briefly highlighted (opened from search or bookmark). */
  highlight: string | null;
  /** Memorisation practice: lines revealed per verse (default 1). */
  practice: boolean;
  revealed: Readonly<Record<string, number>>;
  reveal: (key: string, lines: number) => void;
  /** Two fingers are down (pinch to zoom): the lists must not scroll or turn the page. */
  pinching: boolean;
}

export const ReaderContext = createContext<ReaderState | null>(null);

export function useReader(): ReaderState {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader must be used inside ReaderContext');
  return ctx;
}
