#!/usr/bin/env python3
"""Malayalam for the kanda/parva summaries in books-src/<work>/book.json.

  python3 apply-parts.py show  <work>           print parts still lacking Malayalam: @<part>|summary + EN
  python3 apply-parts.py write <work> <input>   input: the same @ lines, each followed by `ML: <Malayalam>`
Refuses unknown parts, parts that already have Malayalam, Latin letters or other Indic scripts.
"""
import json, os, re, sys
cmd, work = sys.argv[1], sys.argv[2]
p = f'books-src/{work}/book.json'
raw = open(p, encoding='utf8').read(); b = json.loads(raw)
todo = {str(x['part']): x for x in b['parts'] if x.get('summary', {}).get('en') and not x['summary'].get('ml')}
if cmd == 'show':
    for k, x in todo.items(): print(f"@{k}|summary  # {x.get('nameEn', '')}\n  EN: {x['summary']['en']}")
    sys.exit(0)
blocks, cur = {}, None
for n, line in enumerate(open(sys.argv[3], encoding='utf8'), 1):
    line = line.rstrip('\n')
    if not line.strip(): continue
    m = re.match(r'^@(\d+)\|summary\b', line)
    if m: cur = m.group(1); blocks[cur] = None; continue
    m = re.match(r'^ML:\s*(.+)$', line)
    if m and cur and blocks[cur] is None: blocks[cur] = m.group(1).strip(); continue
    sys.exit(f'line {n}: unexpected: {line[:80]}')
bad = []
for k, t in blocks.items():
    if k not in todo: bad.append(f'{k}: no such part, or it already has Malayalam')
    if not t or not re.search(r'[ഀ-ൿ]', t): bad.append(f'{k}: not Malayalam')
    elif re.search(r'[A-Za-z]', t) or re.search(r'[ऀ-ॣ०-೿඀-෿]', t): bad.append(f'{k}: other letters')
if bad: sys.exit('refused:\n  ' + '\n  '.join(bad))
for k, t in blocks.items(): todo[k]['summary']['ml'] = t
tmp = p + '.tmp'
open(tmp, 'w', encoding='utf8').write(json.dumps(b, ensure_ascii=False, indent=2) + ('\n' if raw.endswith('\n') else ''))
os.replace(tmp, p)
print(f'{p}: {len(blocks)} written, {len(todo) - len(blocks)} still lack Malayalam')
