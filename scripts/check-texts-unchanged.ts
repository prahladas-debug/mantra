/// <reference types="node" />
/**
 * Guards against accidental edits to the sacred text while adding meanings:
 * compares every verse `text` (and titles) with the version at a git ref.
 * Run: npx tsx scripts/check-texts-unchanged.ts [ref=HEAD]
 */
import { execSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Mantra } from '../src/data/types';

const ref = process.argv[2] ?? 'HEAD';
const root = resolve(__dirname, '..');
const dir = join(root, 'src/data/texts');
const old = mkdtempSync(join(tmpdir(), 'texts-'));
mkdirSync(join(old, 'texts'));
writeFileSync(join(old, 'types.ts'), execSync(`git show ${ref}:src/data/types.ts`, { cwd: root }));

const fingerprint = (m: Mantra) =>
  JSON.stringify([m.id, m.title, m.sections.map((s) => [s.title, s.verses.map((v) => [v.n, v.text])])]);

async function load(path: string) {
  const mod = await import(pathToFileURL(path).href);
  return Object.values(mod).filter((v): v is Mantra => !!v && typeof v === 'object' && 'sections' in (v as object));
}

async function main() {
  let bad = 0, checked = 0;
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    let before: string;
    try { before = execSync(`git show ${ref}:src/data/texts/${f}`, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString(); }
    catch { continue; } // new file
    writeFileSync(join(old, 'texts', f), before);
    const [a, b] = [await load(join(old, 'texts', f)), await load(join(dir, f))];
    for (const m of b) {
      const o = a.find((x) => x.id === m.id);
      checked++;
      if (o && fingerprint(o) !== fingerprint(m)) { bad++; console.error(`CHANGED: ${m.id} (${f})`); }
    }
  }
  console.log(`${checked} texts compared with ${ref}; ${bad} changed`);
  process.exit(bad ? 1 : 0);
}
main();
