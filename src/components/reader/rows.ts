import type { Mantra, Section, Verse } from '../../data';
import { matches, type Choices } from '../../lib/variants';

export type Row =
  | { kind: 'intro'; key: string }
  | { kind: 'section'; key: string; section: Section; si: number }
  | { kind: 'verse'; key: string; verse: Verse; si: number; vi: number }
  | { kind: 'end'; key: string };

/** Flatten a text into display rows, dropping steps that don't apply to the reader's choices. */
export function flatten(m: Mantra, choices: Choices): Row[] {
  const rows: Row[] = [{ kind: 'intro', key: 'intro' }];
  m.sections.forEach((section, si) => {
    if (!matches(section.when, choices)) return;
    const verses = section.verses.map((verse, vi) => ({ verse, vi })).filter(({ verse }) => matches(verse.when, choices));
    if (verses.length === 0) return;
    if (section.title || section.titleEn || section.note) rows.push({ kind: 'section', key: `s${si}`, section, si });
    verses.forEach(({ verse, vi }) => rows.push({ kind: 'verse', key: `v${si}-${vi}`, verse, si, vi }));
  });
  rows.push({ kind: 'end', key: 'end' });
  return rows;
}

const DEV_DIGITS = '०१२३४५६७८९';
/** Page numbers in the script's own digits (Western digits for Roman and Tamil). */
export function devDigits(n: number): string {
  return String(n).replace(/[0-9]/g, (d) => DEV_DIGITS[Number(d)]);
}

/** Syllables (aksharas) in a verse, near enough: letters of its stored text, vowel signs and virama not counted. */
export function aksharas(text: string): number {
  let n = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0)!;
    if (c >= 0x0900 && c <= 0x0dff) {
      const o = c & 0x7f;
      // vowel signs, virama, anusvara, visarga, nukta, accents, dandas and digits
      if (o <= 0x03 || (o >= 0x3a && o <= 0x4f) || (o >= 0x51 && o <= 0x57) || (o >= 0x62 && o <= 0x6f)) continue;
      n++;
    } else if (/[a-z]/i.test(ch)) n += 0.4; // Roman letters: about two and a half to a syllable
  }
  return n;
}

/** Recited at an ordinary pace: about three syllables a second (conjuncts count a little over). */
const SYLLABLES_PER_SECOND = 3.2;

/** Seconds to read these rows aloud. */
export function readingSeconds(rows: Row[]): number {
  let n = 0;
  for (const r of rows) if (r.kind === 'verse') n += aksharas(r.verse.text);
  return n / SYLLABLES_PER_SECOND;
}

/** Hands-free speed 1–9 as scrolling in points a second; a page in the book view turns at the same pace. */
export const AUTO_SPEEDS = [8, 11, 14, 18, 22, 27, 33, 40, 48];
export const autoPace = (speed: number) => AUTO_SPEEDS[Math.max(1, Math.min(9, Math.round(speed))) - 1];
