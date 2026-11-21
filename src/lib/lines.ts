/**
 * Breaking a verse line that is too long for its width, the way printed books do: at a space near
 * the middle, or else at the half-line (pada) boundary, counted in syllables. A Gita line such as
 * "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्" is one word by sandhi; its padas are 8 + 8 syllables,
 * so it breaks as "क्लेशोऽधिकतरस्तेषा- / मव्यक्तासक्तचेतसाम्", never at an arbitrary letter.
 */
import { aksharas } from '../components/reader/rows';

/** Indic letters that belong to the syllable before them: vowel signs, virama, anusvara, visarga, nukta, avagraha. */
function joins(c: number): boolean {
  if (c < 0x0900 || c > 0x0dff) return false;
  const o = c & 0x7f;
  return o <= 0x03 || (o >= 0x3a && o <= 0x4f) || (o >= 0x51 && o <= 0x57) || o === 0x62 || o === 0x63;
}
const VIRAMA = new Set([0x094d, 0x09cd, 0x0a4d, 0x0acd, 0x0b4d, 0x0bcd, 0x0c4d, 0x0ccd, 0x0d4d]);

/** The text cut into syllables (aksharas), with anything that is not a letter (spaces, dandas) kept with the one before. */
export function syllables(text: string): string[] {
  const out: string[] = [];
  let prevVirama = false;
  for (const ch of text) {
    const c = ch.codePointAt(0)!;
    const letter = c >= 0x0900 && c <= 0x0dff && !joins(c);
    if (letter && !prevVirama && out.length) out.push(ch);
    else if (!out.length) out.push(ch);
    else out[out.length - 1] += ch;
    prevVirama = VIRAMA.has(c);
  }
  // A closing consonant with a virama ("…साम्") is not a syllable of its own.
  if (out.length > 1 && VIRAMA.has(out[out.length - 1].codePointAt(out[out.length - 1].length - 1)!) && aksharas(out[out.length - 1]) <= 1) {
    out[out.length - 2] += out.pop();
  }
  return out;
}

/** One line cut in two: at the space nearest the middle (within a quarter of it), else at the middle syllable. */
export function halve(line: string): [string, string] {
  const trimmed = line.trim();
  const mid = trimmed.length / 2;
  let best = -1;
  for (let i = trimmed.indexOf(' '); i >= 0; i = trimmed.indexOf(' ', i + 1)) {
    if (Math.abs(i - mid) <= trimmed.length / 4 && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
  }
  if (best > 0) return [trimmed.slice(0, best), trimmed.slice(best + 1)];
  const syl = syllables(trimmed);
  const count = syl.filter((s) => aksharas(s) > 0).length;
  let k = 0;
  let n = 0;
  while (k < syl.length && n < Math.ceil(count / 2)) if (aksharas(syl[k++]) > 0) n++;
  return [syl.slice(0, k).join(''), syl.slice(k).join('')];
}

/**
 * The verse with each line that would not fit in `width` at `fontSize` cut in two (Indic scripts
 * take about a font-size per syllable; Roman letters about half of one).
 */
export function fitLines(text: string, width: number, fontSize: number): string {
  const fits = (l: string) => aksharas(l) * fontSize * 0.92 <= width;
  return text
    .split('\n')
    .flatMap((l) => {
      if (fits(l) || aksharas(l) < 6) return [l];
      const [a, b] = halve(l);
      return b ? [a, b] : [l];
    })
    .join('\n');
}
