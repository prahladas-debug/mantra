#!/usr/bin/env python3
"""Add Hindi, Telugu and Tamil meanings to one Ramayana sarga, leaving everything else as it is.

  python3 apply3.py <books-src/ramayana/kanda-dir> <NNN> <input.txt>        write
  python3 apply3.py <books-src/ramayana/kanda-dir> <NNN> --show             print verses still lacking hi/te/ta

Input: one block per verse that has English and Kannada meanings but lacks hi/te/ta, in file order:
  @<key>                key = verse number n, or S<i> for the i-th unnumbered verse that has a meaning
  hi: <Hindi>
  te: <Telugu>
  ta: <Tamil>
Refuses unless every such verse is covered exactly once and nothing else; never touches text, en or kn.
"""
import json, re, sys, signal
signal.signal(signal.SIGPIPE, signal.SIG_DFL)

def items(d):
    i = 0
    for s in d['sections']:
        for v in s['verses']:
            m = v.get('meaning') or {}
            if not (m.get('en') and m.get('kn')):
                continue
            if v.get('n') is None:
                i += 1
                key = f'S{i}'
            else:
                key = str(v['n'])
            yield key, v

def todo(d):
    return [(k, v) for k, v in items(d) if not all((v.get('meaning') or {}).get(l) for l in ('hi', 'te', 'ta'))]

kdir, nnn = sys.argv[1].rstrip('/'), sys.argv[2]
path = f'{kdir}/{nnn}.json'
raw = open(path, encoding='utf8').read()
d = json.loads(raw)
if sys.argv[3] == '--show':
    print(d.get('titleEn', ''))
    for k, v in todo(d):
        print(f"@{k}\n  SA: {v['text']}\n  EN: {v['meaning']['en']}\n  KN: {v['meaning']['kn']}")
    sys.exit(0)

blocks = {}
cur = None
for line in open(sys.argv[3], encoding='utf8'):
    line = line.rstrip('\n')
    if not line.strip():
        continue
    m = re.match(r'^@(\S+)\s*$', line)
    if m:
        cur = m.group(1); blocks[cur] = {}
        continue
    m = re.match(r'^(hi|te|ta):\s*(.+)$', line)
    if m and cur:
        blocks[cur][m.group(1)] = m.group(2).strip()
        continue
    sys.exit(f'bad line: {line[:80]}')

need = [k for k, _ in todo(d)]
if sorted(need) != sorted(blocks):
    sys.exit(f'mismatch: missing {sorted(set(need) - set(blocks))[:10]} extra {sorted(set(blocks) - set(need))[:10]}')
SCRIPT = {'hi': r'[ऀ-ॿ]', 'te': r'[ఀ-౿]', 'ta': r'[஀-௿]'}
for k, v in todo(d):
    b = blocks[k]
    for l in ('hi', 'te', 'ta'):
        t = b.get(l, '')
        if not t or not re.search(SCRIPT[l], t):
            sys.exit(f'verse {k}: {l} missing or not in its script')
        if re.search(r'[A-Za-z]{3,}', t):
            sys.exit(f'verse {k}: {l} contains Latin letters')
        v['meaning'][l] = t
open(path, 'w', encoding='utf8').write(json.dumps(d, ensure_ascii=False, indent=2) + ('\n' if raw.endswith('\n') else ''))
print(f'{path}: {len(need)} verses written')
