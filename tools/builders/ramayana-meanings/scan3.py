#!/usr/bin/env python3
"""Per kanda: sargas whose verses (with en+kn) still lack hi/te/ta. Run from the repo root."""
import glob, json
for k in sorted(glob.glob('books-src/ramayana/*/')):
    left = []
    for f in sorted(glob.glob(k + '[0-9]*.json')):
        d = json.load(open(f, encoding='utf8'))
        for s in d['sections']:
            if any((v.get('meaning') or {}).get('en') and not all((v.get('meaning') or {}).get(l) for l in ('hi', 'te', 'ta')) for v in s['verses']):
                left.append(f[-8:-5]); break
    print(k.split('/')[-2], f'{len(left)} sargas left', (left[0] + '…' + left[-1]) if left else 'done')
