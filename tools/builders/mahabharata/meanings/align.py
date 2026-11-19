#!/usr/bin/env python3
"""Flag adhyayas whose meanings may be shifted by a verse: a speaker line ("X उवाच") whose meaning is
not a short "… said:", or a numbered verse whose meaning is only "… said:". Run from the repo root:
  python3 -I tools/builders/mahabharata/meanings/align.py [en|hi]"""
import json, glob, re, sys
lang = sys.argv[1] if len(sys.argv) > 1 else 'en'
SAID = {'en': re.compile(r'^[^.?!]{0,60}\b(said|spoke|asked|replied|answered|continued)\b[^.?!]{0,20}[:.]?$', re.I),
        'hi': re.compile(r'^[^।?!]{0,60}(बोल[ेीा]|कहा|पूछा|उवाच|कहने लग)[^।?!]{0,20}[:।—-]?$')}[lang]
bad = []
for p in sorted(glob.glob('books-src/mahabharata/*/*.json')):
    if p.endswith('book.json'): continue
    d = json.load(open(p))
    for si, s in enumerate(d['sections']):
        for vi, v in enumerate(s['verses']):
            m = (v.get('meaning') or {}).get(lang)
            if not m: continue
            speaker = 'n' not in v and v['text'].rstrip().endswith('उवाच')
            if speaker and not SAID.match(m.strip()): bad.append((p, '%d.%d' % (si, vi), 'speaker line has: ' + m[:70]))
            if not speaker and 'n' in v and SAID.match(m.strip()) and len(m) < 40: bad.append((p, '%d.%d' % (si, vi), 'verse has only: ' + m[:70]))
units = sorted({b[0] for b in bad})
print(len(bad), 'suspect lines in', len(units), 'adhyayas')
for b in bad[:40]: print(*b, sep='\t')
