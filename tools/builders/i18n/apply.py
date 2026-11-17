#!/usr/bin/env python3
"""Add interface translations to src/i18n/<lang>.ts.

  npx tsx scripts/i18n-check.ts --missing <lang> [from] [count] > blocks.txt   (what is still missing)
  python3 tools/builders/i18n/apply.py <lang> <input.txt>

Input: the blocks printed by --missing, each with one translation line added:
  @@ <id>
  EN: <English>            (optional; ignored)
  KN: <translation>        (the language code in capitals: KN HI TE TA ML)
Refuses a block whose {placeholders} differ from the English or that has no letter of the language's
script. \\n in a line stands for a line break. Run from the repo root.
"""
import json, re, subprocess, sys

lang, inp = sys.argv[1], sys.argv[2]
SCRIPT = {'kn': r'[ಀ-೿]', 'hi': r'[ऀ-ॿ]', 'te': r'[ఀ-౿]', 'ta': r'[஀-௿]', 'ml': r'[ഀ-ൿ]'}
if lang not in SCRIPT: sys.exit('lang: kn hi te ta ml')
keys = {}
for line in subprocess.run(['npx', 'tsx', 'scripts/i18n-check.ts', '--keys'], capture_output=True, text=True, check=True).stdout.splitlines():
    i, k = line[:8], line[10:]
    keys[i] = k
path = f'src/i18n/{lang}.ts'
src = open(path, encoding='utf8').read()
head = src[:src.index('= {') + 2]
body = src[src.index('= {') + 2: src.rindex('}') + 1]
dict_ = json.loads(body) if body.strip() != '{}' else {}

blocks, cur = {}, None
tag = lang.upper() + ':'
for n, line in enumerate(open(inp, encoding='utf8'), 1):
    line = line.rstrip('\n')
    if not line.strip(): continue
    m = re.match(r'^@@ ([0-9a-f]{8})\s*$', line)
    if m: cur = m.group(1); blocks.setdefault(cur, None); continue
    if line.startswith('EN:'): continue
    if line.startswith(tag) and cur:
        blocks[cur] = line[len(tag):].strip().replace('\\n', '\n'); continue
    sys.exit(f'line {n}: unexpected: {line[:80]}')

holes = lambda s: sorted(re.findall(r'\{(\w+)(?::loc)?\}', s))
bad = []
for i, t in blocks.items():
    if i not in keys: bad.append(f'{i}: unknown id (re-run --missing)'); continue
    k = keys[i]
    if not t: bad.append(f'{i}: no {tag} line'); continue
    if holes(k) != holes(t): bad.append(f'{i}: placeholders {holes(t)} should be {holes(k)}')
    if re.search(r'[A-Za-zऀ-෿]', re.sub(r'\{\w+(?::loc)?\}', '', k)) and not re.search(SCRIPT[lang], t): bad.append(f'{i}: not in the {lang} script')
if bad: sys.exit('refused:\n  ' + '\n  '.join(bad[:30]))
for i, t in blocks.items(): dict_[keys[i]] = t
out = head + json.dumps(dict(sorted(dict_.items())), ensure_ascii=False, indent=2) + ';\n'
open(path + '.tmp', 'w', encoding='utf8').write(out)
import os; os.replace(path + '.tmp', path)
print(f'{path}: {len(blocks)} written, {len(dict_)} in all')
