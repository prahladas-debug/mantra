/// <reference types="node" />
/**
 * Content validator. Run: npx tsx scripts/validate-content.ts [file ...]
 * With no args validates every file in src/data/texts.
 *
 * Checks: schema shape, unique ids, Devanagari-only verse text, sequential
 * verse numbers within a section, no verse numbers embedded in text,
 * and a transliteration round-trip sanity check.
 */
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import Sanscript from '@indic-transliteration/sanscript';
import type { Mantra } from '../src/data/types';

const CATEGORIES = ['nitya', 'gita', 'vedic', 'sahasranama', 'stotra', 'madhva', 'sandhya', 'puja'];
const DIR = resolve(__dirname, '../src/data/texts');

// Devanagari block, Vedic extensions, whitespace, ZWJ/ZWNJ, avagraha, basic punctuation.
const ALLOWED = /^[ऀ-ॿ᳐-᳿꣠-ꣿ\s‌‍\-–—,.;:?!'’‘"“”()\[\]]*$/;
const EMBEDDED_NUMBER = /॥\s*[०-९0-9]+\s*॥/;

const args = process.argv.slice(2);
const files = args.length
  ? args.map((f) => resolve(f))
  : readdirSync(DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => join(DIR, f));

let errors = 0;
let warnings = 0;
const err = (where: string, msg: string) => {
  errors++;
  console.error(`ERROR  ${where}: ${msg}`);
};
const warn = (where: string, msg: string) => {
  warnings++;
  console.warn(`warn   ${where}: ${msg}`);
};

async function main() {
  const seen = new Map<string, string>();
  let verseTotal = 0;
  for (const file of files) {
    const mod = await import(pathToFileURL(file).href);
    const exported = Object.values(mod).filter(
      (v): v is Mantra => !!v && typeof v === 'object' && 'sections' in (v as object),
    );
    if (exported.length === 0) err(file, 'no Mantra export found');
    for (const m of exported) {
      const w = `${m.id}`;
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.id)) err(w, 'id must be kebab-case');
      if (seen.has(m.id)) err(w, `duplicate id (also in ${seen.get(m.id)})`);
      seen.set(m.id, file);
      if (!CATEGORIES.includes(m.category)) err(w, `bad category ${m.category}`);
      if (!m.title || !ALLOWED.test(m.title)) err(w, 'title must be Devanagari');
      if (!m.titleEn) err(w, 'missing titleEn');
      if (!m.summary) err(w, 'missing summary');
      if (!['easy', 'medium', 'advanced'].includes(m.difficulty)) err(w, 'bad difficulty');
      if (m.completeness === 'partial' && !m.contentNote) err(w, 'partial texts need contentNote');
      if (!m.sections?.length) err(w, 'no sections');
      m.sections?.forEach((s, si) => {
        const sw = `${w} §${si + 1}${s.titleEn ? ` (${s.titleEn})` : ''}`;
        if (s.title && !ALLOWED.test(s.title)) err(sw, 'section title must be Devanagari');
        if (!s.verses?.length) err(sw, 'empty section');
        let prev: number | undefined;
        s.verses?.forEach((v, vi) => {
          verseTotal++;
          const vw = `${sw} v${v.n ?? `#${vi + 1}`}`;
          if (!v.text?.trim()) return err(vw, 'empty text');
          if (!ALLOWED.test(v.text)) {
            const bad = [...v.text].filter((c) => !ALLOWED.test(c));
            err(vw, `non-Devanagari characters: ${JSON.stringify([...new Set(bad)].join(''))}`);
          }
          if (EMBEDDED_NUMBER.test(v.text)) err(vw, 'verse number embedded in text; use `n`');
          if (v.text !== v.text.trim()) warn(vw, 'leading/trailing whitespace');
          if (/\n\s*\n/.test(v.text)) warn(vw, 'blank line inside verse');
          if (v.n !== undefined) {
            if (prev !== undefined && v.n !== prev + 1) warn(vw, `verse number jumps from ${prev}`);
            prev = v.n;
          }
          // Round-trip sanity: Devanagari -> IAST -> Devanagari should be stable.
          const rt = Sanscript.t(Sanscript.t(v.text, 'devanagari', 'iast'), 'iast', 'devanagari');
          if (rt.replace(/\s+/g, ' ') !== v.text.replace(/\s+/g, ' ')) {
            warn(vw, 'IAST round-trip differs (check for unusual characters)');
          }
        });
      });
    }
  }
  console.log(
    `\n${seen.size} texts, ${verseTotal} verses/items, ${errors} errors, ${warnings} warnings`,
  );
  process.exit(errors ? 1 : 0);
}

main();
