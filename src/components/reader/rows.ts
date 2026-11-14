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
