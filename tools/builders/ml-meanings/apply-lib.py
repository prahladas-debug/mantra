#!/usr/bin/env python3
"""Write Malayalam meanings for library texts into one pack, src/data/meanings/ml/<pack>.ts.

  python3 apply-lib.py <pack> <input.txt>

<pack> is your own pack file name (lower-case, e.g. "stotra-a"); it is created or added to.
Input: blocks as printed by `lib.ts show`, with each EN line replaced by an ML line:
  @<text-id>|<si.vi>      or   @<text-id>|summary
  ML: <Malayalam>
Refuses blocks without Malayalam script, with Latin words or with other Indic scripts.
Run from the repo root; then `npx tsx scripts/gen-index.ts && npx tsx scripts/validate-meanings.ts`.
"""
import json, os, re, sys

pack, inp = sys.argv[1], sys.argv[2]
if not re.fullmatch(r'[a-z0-9-]+', pack):
    sys.exit('pack name: lower-case letters, digits and hyphens only')
path = f'src/data/meanings/ml/{pack}.ts'
const = 'ml' + ''.join(w.capitalize() for w in pack.split('-'))
texts = {}
if os.path.exists(path):
    src = open(path, encoding='utf8').read()
    texts = json.loads(src[src.index('texts: ') + 7: src.rindex(',\n};')])

blocks, cur = [], None
for n, line in enumerate(open(inp, encoding='utf8'), 1):
    line = line.rstrip('\n')
    if not line.strip() or line.startswith('# '):
        continue
    m = re.match(r'^@([a-z0-9-]+)\|(summary|\d+\.\d+)\s*$', line)
    if m:
        cur = [m.group(1), m.group(2), None]; blocks.append(cur); continue
    m = re.match(r'^ML:\s*(.+)$', line)
    if m and cur and cur[2] is None:
        cur[2] = m.group(1).strip(); continue
    sys.exit(f'line {n}: unexpected: {line[:80]}')

bad = []
seen = set()
for tid, key, _ in blocks:
    if (tid, key) in seen: bad.append(f'{tid}|{key}: given twice in this input')
    seen.add((tid, key))
for tid, key, t in blocks:
    w = f'{tid}|{key}'
    if not t: bad.append(f'{w}: no ML line'); continue
    if not re.search(r'[ഀ-ൿ]', t): bad.append(f'{w}: not Malayalam')
    if re.search(r'[A-Za-z]{2,}', t): bad.append(f'{w}: Latin letters')
    if re.search(r'[ऀ-ॣ०-೿඀-෿]', t): bad.append(f'{w}: other Indic script')
if bad:
    sys.exit('refused:\n  ' + '\n  '.join(bad[:20]))
for tid, key, t in blocks:
    e = texts.setdefault(tid, {'verses': {}})
    if key == 'summary': e['summary'] = t
    else: e['verses'][key] = t
for e in texts.values():
    e['verses'] = dict(sorted(e['verses'].items(), key=lambda kv: tuple(map(int, kv[0].split('.')))))
os.makedirs('src/data/meanings/ml', exist_ok=True)
open(path, 'w', encoding='utf8').write(
    "// Malayalam meanings, written with tools/builders/ml-meanings/apply-lib.py.\n"
    "import type { MeaningPack } from '../../types';\n\n"
    f"export const {const}: MeaningPack = {{\n  lang: 'ml',\n  texts: "
    + json.dumps(texts, ensure_ascii=False, indent=2).replace('\n', '\n  ') + ",\n};\n")
print(f'{path}: {len(blocks)} entries written ({sum(len(e["verses"]) for e in texts.values())} verses in the pack)')
