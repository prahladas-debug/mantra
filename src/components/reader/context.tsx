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
  /** Focus mode: the header and page bar are hidden; a tap on the page toggles it. */
  focus: boolean;
  toggleFocus: () => void;
  /** The word found with "Find in this text", marked in the highlighted verse. */
  highlightTerm: string | null;
  /** Open the sheet to mark this verse with a colour and a note. */
  openMark: (key: string) => void;
  /** A wide page (tablet): the meaning stands beside the verse instead of under it. */
  wide: boolean;
  /** Hands-free reading is running, at this many points a second. */
  autoPlaying: boolean;
  autoPace: number;
  /** The reader touched the text: hands-free reading pauses. */
  pauseAuto: () => void;
  /** The last page (book) or the end of the text (scroll) came into view. */
  onFinish: () => void;
}

export const ReaderContext = createContext<ReaderState | null>(null);

export function useReader(): ReaderState {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader must be used inside ReaderContext');
  return ctx;
}
