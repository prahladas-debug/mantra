/// <reference types="node" />
/**
 * Builds the long works (Valmiki Ramayana, Mahabharata, Tulsidas's Ramcharitmanas) from their sources.
 * Run: npx tsx scripts/build-books.ts [--verbose]   (also run by `npm test`, after gen-index)
 *
 *   books-src/<work>/book.json                 the work: title, edition, sources, parts
 *   books-src/<work>/<n>-<name>/<NNN>.json     one sarga / adhyaya (see CONTENT_GUIDE.md, "Long works")
 *
 * It validates every file, then writes
 *   assets/books/<work>/<n>-<name>/<NNN>.book  the same JSON, minified: a plain asset that Metro
 *                                              does not compile into the JS bundle
 *   src/data/books.generated.ts                the manifest: works, parts, units (ids, titles,
 *                                              verse counts, English summary) and each unit's asset.
 *                                              The summaries in all five languages stay in the
 *                                              unit's asset (shown when it is opened): at ~3 kB a
 *                                              unit they would add ~8 MB to the JS bundle.
 *
 * A work may have only its book.json, or no folder at all, while its content is being written.
 * Errors stop the build (exit 1). Metre warnings (an anuṣṭubh half-verse that does not scan 16
 * syllables) are reported, never "fixed"; --verbose lists each one.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const ROOT = resolve(__dirname, '..');
const SRC = join(ROOT, 'books-src');
const OUT_ASSETS = join(ROOT, 'assets', 'books');
const OUT_MANIFEST = join(ROOT, 'src', 'data', 'books.generated.ts');
const VERBOSE = process.argv.includes('--verbose');

const WORKS = ['ramayana', 'mahabharata', 'ramcharitmanas'] as const;
const LANGS = ['en', 'kn', 'hi', 'te', 'ta', 'ml'] as const;
/** Summaries must carry these; Malayalam is optional while it is being added. */
const REQUIRED_LANGS = ['en', 'kn', 'hi', 'te', 'ta'] as const;
/** The Ramcharitmanas has English and Hindi only: both required in summaries, and nothing else is accepted. */
const WORK_LANGS: Record<string, { required: readonly string[]; allowed: readonly string[] }> = { ramcharitmanas: { required: ['en', 'hi'], allowed: ['en', 'hi'] } };
const DEFAULT_LABELS: Record<string, [part: string, unit: string]> = { ramayana: ['kanda', 'sarga'], mahabharata: ['parva', 'adhyaya'], ramcharitmanas: ['kanda', 'prasang'] };
/** The Ramcharitmanas: a unit is ten dohas (unit k: 10(k−1)+1 … 10k); verses are numbered by doha, not 1…n. */
const DOHA_WORK = 'ramcharitmanas';
const GITA_PRESS = 'Gita Press, Shri Ramcharitmanas';
/** Dohas of a unit: ten, the last unit of a kanda takes the remainder. */
const dohaRange = (unit: number, unitCount: number, verseCount: number): [number, number] => [10 * (unit - 1) + 1, unit === unitCount ? verseCount : 10 * unit];

// Devanagari (without its digits), Vedic extensions, space and newline, and a hyphen at the end of
// a line for a word split between two pādas (मनोरमै-\nस्तदास्य). No ZWJ/ZWNJ, no Latin.
const DEVANAGARI = /^[\u0900-\u0965\u0970-\u097F\u1CD0-\u1CFF\uA8E0-\uA8FF \n-]+$/;
const DEVANAGARI_TITLE = /^[\u0900-\u0965\u0970-\u097F\u1CD0-\u1CFF\uA8E0-\uA8FF ]+$/;

let errors = 0;
let warnings = 0;
const err = (where: string, msg: string) => {
  errors++;
  console.error(`ERROR  ${where}: ${msg}`);
};
const warn = (where: string, msg: string, detail?: string) => {
  warnings++;
  if (VERBOSE || !detail) console.warn(`warn   ${where}: ${msg}${detail && VERBOSE ? `\n         ${detail}` : ''}`);
};

type Json = Record<string, unknown>;
const isObj = (v: unknown): v is Json => !!v && typeof v === 'object' && !Array.isArray(v);
const str = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
const pad3 = (n: number) => String(n).padStart(3, '0');

function readJson(file: string): Json | null {
  try {
    const v = JSON.parse(readFileSync(file, 'utf8'));
    if (!isObj(v)) throw new Error('not a JSON object');
    return v;
  } catch (e) {
    err(relative(ROOT, file), `cannot read: ${(e as Error).message}`);
    return null;
  }
}

function onlyKeys(where: string, o: Json, allowed: string[]) {
  for (const k of Object.keys(o)) if (!allowed.includes(k)) err(where, `unknown field "${k}" (allowed: ${allowed.join(', ')})`);
}

/** A summary or meaning: { en, kn, hi, te, ta } with non-empty strings; `all` requires every language. */
function langText(where: string, v: unknown, all: boolean, work: string): Record<string, string> {
  if (!isObj(v)) {
    err(where, 'must be an object like { "en": "…", "kn": "…" }');
    return {};
  }
  const allowed: readonly string[] = WORK_LANGS[work]?.allowed ?? LANGS;
  for (const [k, t] of Object.entries(v)) {
    if (!allowed.includes(k)) err(where, `unknown language "${k}" (use ${allowed.join(', ')})`);
    else if (!str(t)) err(where, `"${k}" is empty`);
  }
  if (all) for (const l of WORK_LANGS[work]?.required ?? REQUIRED_LANGS) if (!str(v[l])) err(where, `missing "${l}"`);
  return v as Record<string, string>;
}

/** Syllables of a line: every vowel, independent or carried by a consonant without virama. */
function syllables(line: string): number {
  let n = 0;
  const chars = [...line];
  chars.forEach((ch, i) => {
    const c = ch.codePointAt(0)!;
    if ((c >= 0x0904 && c <= 0x0914) || c === 0x0960 || c === 0x0961) n++; // independent vowels
    else if ((c >= 0x0915 && c <= 0x0939) || (c >= 0x0958 && c <= 0x095f)) {
      let j = i + 1;
      if (chars[j] === '\u093C') j++; // nukta
      if (chars[j] !== '\u094D') n++; // not a virama
    }
  });
  return n;
}

/** Anuṣṭubh check: a verse of two (or three) half-verses of about 16 syllables each. */
function checkMetre(where: string, text: string) {
  const halves = text.split('\n').map((l) => l.replace(/[।॥ऽ\s-]/g, ''));
  const counts = halves.map(syllables);
  const looksAnushtubh = counts.length >= 2 && counts.length <= 3 && counts.every((c) => c >= 13 && c <= 19);
  if (!looksAnushtubh) return;
  counts.forEach((c, i) => {
    if (c !== 16) warn(where, `half-verse ${i + 1} has ${c} syllables (anuṣṭubh: 16)`, text.split('\n')[i]);
  });
}

/** Set while a work is checked whose Devanagari is written without the nukta dot (ड़ → ड), as the library's Hindi texts are. */
let noNukta = false;

function checkVerseText(where: string, text: unknown, opts: { title?: boolean } = {}) {
  if (!str(text)) {
    err(where, 'text is empty');
    return;
  }
  if (text.includes('\u200D') || text.includes('\u200C')) err(where, 'remove ZWJ/ZWNJ');
  if (noNukta && /[\u093C\u0958-\u095F]/.test(text)) err(where, 'write letters with a nukta without the dot (ड़ → ड)');
  if (/[०-९0-9]/.test(text)) err(where, 'digits in the text (verse numbers go in "n", not in the text)');
  if (!(opts.title ? DEVANAGARI_TITLE : DEVANAGARI).test(text)) {
    const bad = [...new Set([...text].filter((ch) => !(opts.title ? DEVANAGARI_TITLE : DEVANAGARI).test(ch)))];
    err(where, `characters that are not Devanagari: ${bad.map((c) => JSON.stringify(c)).join(' ')}`);
  }
  const lines = text.split('\n');
  for (const [i, line] of lines.entries()) {
    if (/-./.test(line) || (line.endsWith('-') && i === lines.length - 1)) err(where, `a hyphen only ends a line whose word goes on in the next: ${JSON.stringify(line)}`);
    if (line !== line.trim()) err(where, `space at the start or end of a line: ${JSON.stringify(line)}`);
    if (/ {2}/.test(line)) err(where, `double space: ${JSON.stringify(line)}`);
    if (!line) err(where, 'empty line');
  }
}

interface UnitOut {
  id: string;
  unit: number;
  title: string;
  titleEn: string;
  verses: number;
  summary: Record<string, string>;
  asset: string; // path relative to src/data
}
interface PartOut {
  part: number;
  dir: string;
  name: string;
  nameEn: string;
  nameLoc: string;
  unitCount: number;
  verseCount: number;
  summary: Record<string, string>;
  links: { from: number; to: number; category?: string; text?: string }[];
  units: UnitOut[];
}
interface WorkOut {
  work: string;
  title: string;
  titleEn: string;
  partLabel: string;
  unitLabel: string;
  edition: string;
  sources: string[];
  opening?: string;
  parts: PartOut[];
}

/** 'बालकाण्डम्' → 'बालकाण्डे', 'आदिपर्व' → 'आदिपर्वणि'; otherwise the name itself. */
function locative(name: string): string {
  if (name.endsWith('म्')) return `${name.slice(0, -2)}े`;
  if (name.endsWith('पर्व')) return `${name}णि`;
  return name;
}

/** Ids and categories of the library's own texts, so a book never takes an id they use. */
function libraryIds(): { ids: Set<string>; byCategory: Map<string, number> } {
  const ids = new Set<string>();
  const byCategory = new Map<string, number>();
  const dir = join(ROOT, 'src', 'data', 'texts');
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const src = readFileSync(join(dir, f), 'utf8');
    for (const m of src.matchAll(/^\s{2}id: '([^']+)',\s*$(?:[\s\S]*?)^\s{2}category: '([^']+)'/gm)) {
      ids.add(m[1]);
      byCategory.set(m[2], (byCategory.get(m[2]) ?? 0) + 1);
    }
  }
  return { ids, byCategory };
}

function buildWork(work: string, lib: ReturnType<typeof libraryIds>, seen: Map<string, string>, assetsOut: Map<string, string>): WorkOut | null {
  const dir = join(SRC, work);
  const bookFile = join(dir, 'book.json');
  if (!existsSync(bookFile)) {
    if (existsSync(dir) && readdirSync(dir).length) err(`books-src/${work}`, 'has files but no book.json');
    return null;
  }
  const book = readJson(bookFile);
  if (!book) return null;
  const bw = `books-src/${work}/book.json`;
  noNukta = work === DOHA_WORK;
  onlyKeys(bw, book, ['work', 'title', 'titleEn', 'partLabel', 'unitLabel', 'edition', 'sources', 'parts']);
  if (book.work !== work) err(bw, `"work" must be "${work}"`);
  checkVerseText(`${bw} title`, book.title, { title: true });
  if (!str(book.titleEn)) err(bw, 'missing "titleEn"');
  if (!str(book.edition)) err(bw, 'missing "edition" (the edition/recension statement)');
  if (!Array.isArray(book.sources) || !book.sources.length || !book.sources.every(str)) err(bw, '"sources" must be a non-empty list of strings');
  if (!Array.isArray(book.parts) || !book.parts.length) {
    err(bw, '"parts" must be a non-empty list');
    return null;
  }

  // Folders: '<n>-<name>' with the part number first.
  const dirs = new Map<number, string>();
  for (const d of readdirSync(dir)) {
    if (!statSync(join(dir, d)).isDirectory()) continue;
    const m = /^(\d+)-[a-z0-9-]+$/.exec(d);
    if (!m) {
      err(`books-src/${work}/${d}`, 'folder must be named <part number>-<name>, e.g. 1-bala or 05-udyoga');
      continue;
    }
    if (dirs.has(Number(m[1]))) err(`books-src/${work}/${d}`, `two folders for part ${Number(m[1])}`);
    dirs.set(Number(m[1]), d);
  }

  const [defPart, defUnit] = DEFAULT_LABELS[work];
  const out: WorkOut = {
    work,
    title: String(book.title),
    titleEn: String(book.titleEn),
    partLabel: str(book.partLabel) ? book.partLabel : defPart,
    unitLabel: str(book.unitLabel) ? book.unitLabel : defUnit,
    edition: String(book.edition ?? ''),
    sources: (book.sources as string[]) ?? [],
    parts: [],
  };

  const partNumbers = new Set<number>();
  (book.parts as unknown[]).forEach((p, pi) => {
    const pw = `${bw} parts[${pi}]`;
    if (!isObj(p)) return err(pw, 'must be an object');
    onlyKeys(pw, p, ['part', 'name', 'nameEn', 'nameLoc', 'units', 'verses', 'summary', 'links']);
    const part = p.part;
    if (typeof part !== 'number' || !Number.isInteger(part) || part < 1) return err(pw, '"part" must be a whole number from 1');
    if (part !== pi + 1) err(pw, `parts must be listed in order: expected part ${pi + 1}, found ${part}`);
    if (partNumbers.has(part)) err(pw, `part ${part} listed twice`);
    partNumbers.add(part);
    checkVerseText(`${pw} name`, p.name, { title: true });
    if (p.nameLoc !== undefined) checkVerseText(`${pw} nameLoc`, p.nameLoc, { title: true });
    if (!str(p.nameEn)) err(pw, 'missing "nameEn"');
    const unitCount = typeof p.units === 'number' && Number.isInteger(p.units) && p.units > 0 ? p.units : (err(pw, '"units" must be the number of sargas/adhyayas in the edition'), 0);
    const verseCount = typeof p.verses === 'number' && Number.isInteger(p.verses) && p.verses > 0 ? p.verses : (err(pw, '"verses" must be the number of verses in the edition'), 0);
    const summary = langText(`${pw} summary`, p.summary, true, work);

    const links: PartOut['links'] = [];
    if (p.links !== undefined) {
      if (!Array.isArray(p.links)) err(pw, '"links" must be a list');
      else
        p.links.forEach((l, li) => {
          const lw = `${pw} links[${li}]`;
          if (!isObj(l)) return err(lw, 'must be an object');
          onlyKeys(lw, l, ['from', 'to', 'category', 'text']);
          const from = Number(l.from);
          const to = Number(l.to ?? l.from);
          if (!Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to < from || to > unitCount) return err(lw, `"from"/"to" must be units within 1–${unitCount}`);
          if (!!l.category === !!l.text) return err(lw, 'give either "category" or "text"');
          if (l.category !== undefined) {
            const n = lib.byCategory.get(String(l.category));
            if (!n) err(lw, `no texts in category "${l.category}"`);
            else if (n !== to - from + 1) err(lw, `category "${l.category}" has ${n} texts, but the link covers ${to - from + 1} units`);
          }
          if (l.text !== undefined) {
            if (!lib.ids.has(String(l.text))) err(lw, `no text with id "${l.text}"`);
            // The Ramcharitmanas's Sundar Kand is one library text that stands for the whole kanda.
            if (from !== to && work !== DOHA_WORK) err(lw, 'a single text stands for one unit (from = to)');
          }
          if (links.some((o) => from <= o.to && to >= o.from)) err(lw, 'overlaps another link');
          links.push({ from, to, ...(l.category ? { category: String(l.category) } : { text: String(l.text) }) });
        });
    }
    const linked = (u: number) => links.some((l) => u >= l.from && u <= l.to);

    const partDir = dirs.get(part) ?? '';
    const po: PartOut = {
      part,
      dir: partDir,
      name: String(p.name),
      nameEn: String(p.nameEn),
      nameLoc: str(p.nameLoc) ? p.nameLoc : locative(String(p.name)),
      unitCount,
      verseCount,
      summary,
      links,
      units: [],
    };
    out.parts.push(po);
    if (!partDir) return;

    const files = readdirSync(join(dir, partDir)).sort();
    for (const f of files) if (!/^\d{3}\.json$/.test(f)) err(`books-src/${work}/${partDir}/${f}`, 'unit files are named NNN.json (001.json, 002.json …)');
    const numbers = files.filter((f) => /^\d{3}\.json$/.test(f)).map((f) => Number(f.slice(0, 3)));
    // Units consecutive from 1, skipping the units that are linked texts.
    let expect = 1;
    for (const n of numbers) {
      while (linked(expect)) expect++;
      if (linked(n)) err(`books-src/${work}/${partDir}/${pad3(n)}.json`, `unit ${n} is a linked text (links in book.json); remove the file or the link`);
      else if (n !== expect) err(`books-src/${work}/${partDir}`, `units must be consecutive: expected ${pad3(expect)}.json, found ${pad3(n)}.json`);
      expect = n + 1;
      if (n > unitCount) err(`books-src/${work}/${partDir}/${pad3(n)}.json`, `part ${part} has ${unitCount} units in book.json`);
    }

    for (const n of numbers) {
      const rel = `books-src/${work}/${partDir}/${pad3(n)}.json`;
      const u = readJson(join(dir, partDir, `${pad3(n)}.json`));
      if (!u) continue;
      const before = errors;
      onlyKeys(rel, u, ['id', 'work', 'part', 'partName', 'partNameEn', 'unit', 'title', 'titleEn', 'summary', 'source', 'contentNote', 'completeness', 'sections']);
      const id = `${work}-${part}-${pad3(n)}`;
      if (u.id !== id) err(rel, `"id" must be "${id}"`);
      if (seen.has(id)) err(rel, `duplicate id (also ${seen.get(id)})`);
      if (lib.ids.has(id)) err(rel, `id "${id}" is already used by a text in src/data/texts`);
      seen.set(id, rel);
      if (u.work !== work) err(rel, `"work" must be "${work}"`);
      if (u.part !== part) err(rel, `"part" must be ${part}`);
      if (u.unit !== n) err(rel, `"unit" must be ${n}`);
      if (u.partName !== po.name) err(rel, `"partName" must be "${po.name}" (as in book.json)`);
      if (u.partNameEn !== po.nameEn) err(rel, `"partNameEn" must be "${po.nameEn}" (as in book.json)`);
      checkVerseText(`${rel} title`, u.title, { title: true });
      if (!str(u.titleEn)) err(rel, 'missing "titleEn"');
      const summary = langText(`${rel} summary`, u.summary, true, work);
      // The Ramcharitmanas numbers its verses by doha: unit k runs 10(k−1)+1 … 10k.
      const doha = work === DOHA_WORK ? dohaRange(n, unitCount, verseCount) : undefined;
      if (!str(u.source)) err(rel, 'missing "source"');
      if (doha) {
        const range = `${doha[0]}–${doha[1]}`;
        if (u.source !== `${GITA_PRESS}, ${po.nameEn}, dohas ${range}`) err(rel, `"source" must be "${GITA_PRESS}, ${po.nameEn}, dohas ${range}"`);
        if (!str(u.titleEn) || !u.titleEn.startsWith(`Dohas ${range} · `)) err(rel, `"titleEn" must start with "Dohas ${range} · "`);
      }
      if (u.contentNote !== undefined && !str(u.contentNote)) err(rel, '"contentNote" must be text');
      if (u.completeness !== undefined && u.completeness !== 'complete' && u.completeness !== 'partial') err(rel, '"completeness" is "complete" or "partial"');
      if (u.completeness === 'partial' && !str(u.contentNote)) err(rel, 'a partial unit needs a "contentNote" saying what is missing');

      let verses = 0;
      let lastN = doha ? doha[0] - 1 : 0;
      let numbered = false; // a numbered verse seen
      let trailing = false; // an unnumbered verse seen after the numbered ones
      if (!Array.isArray(u.sections) || !u.sections.length) err(rel, '"sections" must be a non-empty list');
      else
        u.sections.forEach((s, si) => {
          const sw = `${rel} sections[${si}]`;
          if (!isObj(s)) return err(sw, 'must be an object');
          onlyKeys(sw, s, ['title', 'titleEn', 'note', 'verses']);
          if (s.title !== undefined) checkVerseText(`${sw} title`, s.title, { title: true });
          if (s.titleEn !== undefined && !str(s.titleEn)) err(sw, '"titleEn" is empty');
          if (s.note !== undefined && !str(s.note)) err(sw, '"note" is empty');
          if (!Array.isArray(s.verses) || !s.verses.length) return err(sw, '"verses" must be a non-empty list');
          s.verses.forEach((v, vi) => {
            const vw = `${sw} verses[${vi}]${isObj(v) && typeof v.n === 'number' ? ` (verse ${v.n})` : ''}`;
            if (!isObj(v)) return err(vw, 'must be an object');
            onlyKeys(vw, v, ['n', 'text', 'meaning']);
            checkVerseText(vw, v.text);
            if (v.n !== undefined) {
              if (typeof v.n !== 'number' || !Number.isInteger(v.n)) err(vw, '"n" must be a whole number');
              else {
                // Reported once; counting goes on from the number found.
                if (v.n !== lastN + 1) err(vw, `verse numbers must run on: expected ${lastN + 1}, found ${v.n}`);
                lastN = v.n;
                verses++;
                if (trailing) err(vw, 'numbered verses follow an unnumbered verse that came after them: unnumbered verses are only the opening and the closing ones');
                numbered = true;
              }
              if (str(v.text) && !doha) checkMetre(`${rel} verse ${v.n}`, v.text);
            } else if (doha) {
              // Opening shlokas (before the first doha of a kanda's first unit) and closing ones (after the last doha of its last unit).
              if (numbered ? n !== unitCount : n !== 1) err(vw, 'an unnumbered verse (no "n") comes only at the start of a kanda\'s first unit or the end of its last unit');
              if (numbered) trailing = true;
            }
            if (v.meaning !== undefined) langText(`${vw} meaning`, v.meaning, false, work);
          });
        });
      if (doha && errors === before && lastN !== doha[1]) err(rel, `the last numbered verse is ${lastN}, but dohas ${doha[0]}–${doha[1]} belong to this unit`);
      if (errors > before) continue;

      const asset = `${work}/${partDir}/${pad3(n)}.book`;
      assetsOut.set(asset, JSON.stringify(u));
      po.units.push({ id, unit: n, title: String(u.title), titleEn: String(u.titleEn), verses, summary, asset });
      if (!out.opening && out.parts.length === 1 && n === 1) {
        const first = (u.sections as Json[]).flatMap((s) => s.verses as Json[]).find((v) => typeof v.n === 'number');
        if (first) out.opening = String(first.text).split('\n').slice(0, 2).join('\n');
      }
    }
    if (po.units.length + links.reduce((k, l) => k + l.to - l.from + 1, 0) === unitCount) {
      const total = po.units.reduce((k, x) => k + x.verses, 0);
      if (!links.length && total !== verseCount) err(`${bw} part ${part}`, `all ${unitCount} units are written and have ${total} verses, but "verses" says ${verseCount}`);
    }
  });
  return out;
}

function manifest(works: WorkOut[]): string {
  const q = (v: unknown) => JSON.stringify(v);
  const lines: string[] = [
    '// AUTO-GENERATED by scripts/build-books.ts from books-src/ — do not edit by hand.',
    "import type { BookWork } from './types';",
    '',
    'export const BOOKS: BookWork[] = [',
  ];
  if (works.some((w) => w.parts.some((p) => p.units.length))) {
    lines.splice(2, 0, '', "// Each unit's asset is required lazily, so that nothing is loaded until the unit is opened.", '/* eslint-disable @typescript-eslint/no-require-imports */');
  }
  for (const w of works) {
    lines.push(`  {`);
    lines.push(`    work: ${q(w.work)}, title: ${q(w.title)}, titleEn: ${q(w.titleEn)}, partLabel: ${q(w.partLabel)}, unitLabel: ${q(w.unitLabel)},`);
    lines.push(`    edition: ${q(w.edition)},`);
    lines.push(`    sources: ${q(w.sources)},`);
    if (w.opening) lines.push(`    opening: ${q(w.opening)},`);
    lines.push(`    parts: [`);
    for (const p of w.parts) {
      lines.push(`      {`);
      lines.push(`        part: ${p.part}, dir: ${q(p.dir)}, name: ${q(p.name)}, nameEn: ${q(p.nameEn)}, nameLoc: ${q(p.nameLoc)}, unitCount: ${p.unitCount}, verseCount: ${p.verseCount},`);
      lines.push(`        summary: ${q(p.summary)},`);
      lines.push(`        links: ${q(p.links)},`);
      lines.push(`        units: [`);
      for (const u of p.units) {
        lines.push(`          { id: ${q(u.id)}, unit: ${u.unit}, title: ${q(u.title)}, titleEn: ${q(u.titleEn)}, verses: ${u.verses}, summary: ${q({ en: u.summary.en })}, asset: () => require(${q(`../../assets/books/${u.asset}`)}) },`);
      }
      lines.push(`        ],`);
      lines.push(`      },`);
    }
    lines.push(`    ],`);
    lines.push(`  },`);
  }
  lines.push('];', '');
  return lines.join('\n');
}

function main() {
  const lib = libraryIds();
  const seen = new Map<string, string>();
  const assets = new Map<string, string>();
  const works: WorkOut[] = [];
  if (existsSync(SRC)) {
    for (const d of readdirSync(SRC)) if (!(WORKS as readonly string[]).includes(d) && statSync(join(SRC, d)).isDirectory()) err(`books-src/${d}`, `unknown work (expected ${WORKS.join(', ')})`);
    for (const work of WORKS) {
      const w = buildWork(work, lib, seen, assets);
      if (w) works.push(w);
    }
  }
  if (errors) {
    console.error(`books: ${errors} error(s), ${warnings} warning(s) — nothing written`);
    process.exit(1);
  }
  // Write only the assets that changed and remove those whose source is gone. Deleting and
  // rewriting the whole tree on every run left a running Metro (web or a dev build) without the
  // files for a moment and with thousands of change events to catch up on; it was seen failing
  // to resolve units the manifest named ("Unable to resolve …/111.book") until restarted.
  const wanted = new Set([...assets.keys()].map((p) => join(OUT_ASSETS, p)));
  const existing = (dir: string): string[] =>
    existsSync(dir) ? readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? existing(join(dir, e.name)) : [join(dir, e.name)])) : [];
  for (const file of existing(OUT_ASSETS)) if (!wanted.has(file)) rmSync(file, { force: true });
  for (const [path, json] of assets) {
    const file = join(OUT_ASSETS, path);
    if (existsSync(file) && readFileSync(file, 'utf8') === json) continue;
    mkdirSync(join(file, '..'), { recursive: true });
    writeFileSync(file, json);
  }
  // Folders left empty by removed units or parts.
  const prune = (dir: string): boolean => {
    if (!existsSync(dir)) return true;
    const entries = readdirSync(dir, { withFileTypes: true });
    const kept = entries.map((e) => !e.isDirectory() || !prune(join(dir, e.name)));
    const empty = !kept.some(Boolean);
    if (empty && dir !== OUT_ASSETS) rmSync(dir, { recursive: true, force: true });
    return empty;
  };
  prune(OUT_ASSETS);
  const out = manifest(works);
  if (!existsSync(OUT_MANIFEST) || readFileSync(OUT_MANIFEST, 'utf8') !== out) writeFileSync(OUT_MANIFEST, out);
  for (const w of works) {
    const units = w.parts.reduce((n, p) => n + p.units.length, 0);
    const verses = w.parts.reduce((n, p) => n + p.units.reduce((k, u) => k + u.verses, 0), 0);
    const planned = w.parts.reduce((n, p) => n + p.unitCount, 0);
    console.log(`books: ${w.work}: ${units} of ${planned} ${w.unitLabel}s written (${verses} verses), ${w.parts.filter((p) => p.links.length).length} part(s) linked to the library`);
  }
  if (!works.length) console.log('books: no works yet (books-src/ is empty)');
  if (warnings && !VERBOSE) console.log(`books: ${warnings} metre warning(s); run npx tsx scripts/build-books.ts --verbose to list them`);
}

main();
