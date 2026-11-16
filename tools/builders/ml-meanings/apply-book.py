#!/usr/bin/env python3
"""Malayalam for the long works (books-src/<work>/<n>-<part>/NNN.json): sarga/adhyaya summaries and verse meanings.

  python3 apply-book.py show  <part-dir> <from> <to> [--kn] [--sa]  print what still lacks Malayalam, as input blocks
  python3 apply-book.py write <part-dir> <input.txt>           write it

Blocks (in any order; one per item):
  @<NNN>|summary        the unit's summary
  @<NNN>|<key>          a verse: key = verse number n, or S<i> for the i-th unnumbered verse with a meaning
  ML: <Malayalam>
`show` prints EN (KN with --kn, SA with --sa) under each @ line; replace them with one ML line.
Write refuses unless every block's item exists and still lacks Malayalam, the text is Malayalam script,
with no Latin words or other Indic scripts. Never touches text or other languages. Run from the repo root.
"""
import json, os, re, sys, signal
signal.signal(signal.SIGPIPE, signal.SIG_DFL)

def items(d):
    i = 0
    for s in d['sections']:
        for v in s['verses']:
            m = v.get('meaning') or {}
            if not m.get('en'):
                continue
            if v.get('n') is None:
                i += 1; key = f'S{i}'
            else:
                key = str(v['n'])
            yield key, v

def todo(d):
    out = []
    if (d.get('summary') or {}).get('en') and not d['summary'].get('ml'):
        out.append(('summary', None))
    out += [(k, v) for k, v in items(d) if not v['meaning'].get('ml')]
    return out

def load(pdir, nnn):
    p = f'{pdir}/{nnn}.json'
    raw = open(p, encoding='utf8').read()
    return p, raw, json.loads(raw)

cmd, pdir = sys.argv[1], sys.argv[2].rstrip('/')
if cmd == 'show':
    sa, kn = '--sa' in sys.argv, '--kn' in sys.argv
    for n in range(int(sys.argv[3]), int(sys.argv[4]) + 1):
        nnn = f'{n:03d}'
        try: _, _, d = load(pdir, nnn)
        except FileNotFoundError: continue
        t = todo(d)
        if not t: continue
        print(f"# {nnn} · {d.get('titleEn', '')}")
        for k, v in t:
            if k == 'summary':
                print(f"@{nnn}|summary\n  EN: {d['summary']['en']}")
            else:
                print(f"@{nnn}|{k}" + (f"\n  SA: {v['text']}" if sa else '') + f"\n  EN: {v['meaning']['en']}" + (f"\n  KN: {v['meaning']['kn']}" if kn and v['meaning'].get('kn') else ''))
    sys.exit(0)
if cmd != 'write':
    sys.exit(__doc__)

blocks, cur = {}, None
for ln, line in enumerate(open(sys.argv[3], encoding='utf8'), 1):
    line = line.rstrip('\n')
    if not line.strip() or line.startswith('# '):
        continue
    m = re.match(r'^@(\d{3})\|(summary|S?\d+)\s*$', line)
    if m:
        cur = (m.group(1), m.group(2))
        if cur in blocks: sys.exit(f'line {ln}: {cur} given twice')
        blocks[cur] = None; continue
    m = re.match(r'^ML:\s*(.+)$', line)
    if m and cur and blocks[cur] is None:
        blocks[cur] = m.group(1).strip(); continue
    sys.exit(f'line {ln}: unexpected: {line[:80]}')

bad = []
for (nnn, k), t in blocks.items():
    w = f'{nnn}|{k}'
    if not t: bad.append(f'{w}: no ML line'); continue
    if not re.search(r'[ഀ-ൿ]', t): bad.append(f'{w}: not Malayalam')
    if re.search(r'[A-Za-z]{2,}', t): bad.append(f'{w}: Latin letters')
    if re.search(r'[ऀ-ॣ०-೿඀-෿]', t): bad.append(f'{w}: other Indic script')
files = {}
for (nnn, k) in blocks:
    if nnn not in files:
        try: files[nnn] = load(pdir, nnn)
        except FileNotFoundError: bad.append(f'{nnn}: no such file'); continue
        files[nnn] = files[nnn] + ({k2: v for k2, v in todo(files[nnn][2])},)
    if nnn in files and k not in files[nnn][3]: bad.append(f'{nnn}|{k}: no such item, or it already has Malayalam')
if bad:
    sys.exit('refused:\n  ' + '\n  '.join(bad[:30]))
for (nnn, k), t in blocks.items():
    p, raw, d, td = files[nnn]
    if k == 'summary': d['summary']['ml'] = t
    else: td[k]['meaning']['ml'] = t
for nnn, (p, raw, d, td) in files.items():
    tmp = p + '.tmp'  # write, then rename, so a build running alongside never reads half a file
    open(tmp, 'w', encoding='utf8').write(json.dumps(d, ensure_ascii=False, indent=2) + ('\n' if raw.endswith('\n') else ''))
    os.replace(tmp, p)
    left = len(todo(d))
    print(f'{p}: written' + (f', {left} items still lack Malayalam' if left else ', complete'))
