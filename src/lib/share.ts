import { Linking, Platform, Share } from 'react-native';
import type { Mantra, Verse } from '../data/types';
import { APP_NAME, CORRECTIONS_URL } from './config';
import { translit, translitTitle, verseNumber, type ScriptId } from './transliterate';

/** Plain-text verse for sharing (WhatsApp etc.), in the reader's script. */
export function verseAsText(m: Mantra, v: Verse, script: ScriptId, meaning?: string): string {
  const body = translit(v.n !== undefined ? v.text.replace(/\s*॥\s*$/, '') : v.text, script);
  const num = v.n !== undefined ? ` ${verseNumber(v.n, script)}` : '';
  return [
    `${body}${num}`,
    meaning ? `\n${meaning}` : '',
    `\n— ${translitTitle(m.title, script)} (${m.titleEn}) · ${APP_NAME}`,
  ].join('');
}

export async function shareVerse(m: Mantra, v: Verse, script: ScriptId, meaning?: string): Promise<void> {
  const message = verseAsText(m, v, script, meaning);
  try {
    if (Platform.OS === 'web') {
      const nav = (globalThis as { navigator?: { share?: (d: { text: string }) => Promise<void>; clipboard?: { writeText: (t: string) => Promise<void> } } }).navigator;
      if (nav?.share) await nav.share({ text: message });
      else await nav?.clipboard?.writeText(message);
      return;
    }
    await Share.share({ message });
  } catch {
    // user cancelled
  }
}

/** Open a pre-filled correction report for one verse. */
export function reportCorrection(m: Mantra, v: Verse, key: string): void {
  const title = `Correction: ${m.titleEn}${v.n !== undefined ? ` v${v.n}` : ''}`;
  const body = [
    `Text: ${m.titleEn} (id: ${m.id}, verse key: ${key})`,
    '',
    'Current text:',
    v.text,
    '',
    'What should it be, and which printed edition supports it?',
    '',
  ].join('\n');
  const url = `${CORRECTIONS_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  Linking.openURL(url).catch(() => {});
}
