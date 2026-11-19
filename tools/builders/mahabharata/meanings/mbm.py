#!/usr/bin/env python3
"""Verse meanings for the Mahabharata (books-src/mahabharata). Run from the repo root.

  python3 -I tools/builders/mahabharata/meanings/mbm.py show <part> <unit> [--en]
      print each verse as  key<TAB>n<TAB>text  (with --en, the English meaning on the next line)
  python3 -I tools/builders/mahabharata/meanings/mbm.py merge <part> <unit> <lang> <sidecar.json>
      write meaning[lang] from a sidecar { "<section>.<verse>": "…" } into the unit; refuses if any
      verse's text or n differs from git HEAD, or if a key is missing or unknown
  python3 -I tools/builders/mahabharata/meanings/mbm.py chunk <lang> <id>
      list the units of a work chunk (chunks.json)
  python3 -I tools/builders/mahabharata/meanings/mbm.py status
      verses with en / hi meanings, per parva and per chunk

<part> is the folder number (1–18), <unit> the file number (1, 2, …).
"""
import json, os, subprocess, sys, glob

ROOT = os.getcwd()
SRC = os.path.join(ROOT, 'books-src', 'mahabharata')
HERE = os.path.dirname(os.path.abspath(__file__))

def path(part, unit):
    d = [x for x in os.listdir(SRC) if x.startswith('%02d-' % int(part))]
    if not d: sys.exit('no part %s' % part)
    return os.path.join(SRC, d[0], '%03d.json' % int(unit))

def verses(d):
    for si, s in enumerate(d['sections']):
        for vi, v in enumerate(s['verses']):
            yield '%d.%d' % (si, vi), v

def show(part, unit, en=False):
    d = json.load(open(path(part, unit)))
    print('#', d['id'], d['titleEn'])
    for k, v in verses(d):
        print('%s\t%s\t%s' % (k, v.get('n', '-'), v['text'].replace('\n', ' / ')))
        if en: print('\tEN: %s' % (v.get('meaning') or {}).get('en', ''))

def merge(part, unit, lang, side):
    cid = os.environ.get('MB_CHUNK')
    if cid:
        c = [x for x in chunks('hi' if cid.startswith('H') else 'en') if x['id'] == cid][0]
        if int(part) != c['part'] or not c['from'] <= int(unit) <= c['to']:
            sys.exit('REFUSED: %s/%s is outside chunk %s (%s/%s-%s)' % (part, unit, cid, c['part'], c['from'], c['to']))
    p = path(part, unit)
    rel = os.path.relpath(p, ROOT)
    d = json.load(open(p))
    old = json.loads(subprocess.run(['git', 'show', 'HEAD:' + rel], capture_output=True, text=True, check=True).stdout)
    a = [(v.get('n'), v['text']) for _, v in verses(d)]
    b = [(v.get('n'), v['text']) for _, v in verses(old)]
    if a != b: sys.exit('REFUSED: verse text differs from HEAD in ' + rel)
    m = json.load(open(side))
    keys = [k for k, _ in verses(d)]
    miss = [k for k in keys if not str(m.get(k, '')).strip()]
    extra = [k for k in m if k not in keys]
    if miss or extra: sys.exit('REFUSED: missing %s extra %s' % (miss[:10], extra[:10]))
    if lang == 'hi' and any(ch.isascii() and ch.isalpha() for k in keys for ch in m[k]): sys.exit('REFUSED: Latin letters in hi')
    if lang == 'en' and any('ऀ' <= ch <= 'ॿ' for k in keys for ch in m[k]): sys.exit('REFUSED: Devanagari in en')
    for k, v in verses(d):
        v.setdefault('meaning', {})[lang] = m[k].strip()
    open(p, 'w').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
    print('merged', len(keys), lang, 'into', rel)

def chunks(lang):
    return json.load(open(os.path.join(HERE, 'chunks.json')))[lang]

def status():
    tot = en = hi = 0
    for p in sorted(glob.glob(os.path.join(SRC, '*', '*.json'))):
        if p.endswith('book.json'): continue
        for _, v in verses(json.load(open(p))):
            tot += 1; m = v.get('meaning') or {}
            en += bool(m.get('en')); hi += bool(m.get('hi'))
    print('verses %d  en %d  hi %d' % (tot, en, hi))
    for lang in ('en', 'hi'):
        done = []
        for c in chunks(lang):
            ok = all(all((v.get('meaning') or {}).get(lang) for _, v in verses(json.load(open(path(c['part'], u))))) for u in range(c['from'], c['to'] + 1))
            if ok: done.append(c['id'])
        print(lang, 'chunks done', len(done), 'of', len(chunks(lang)))

if __name__ == '__main__':
    a = sys.argv[1:]
    if a[0] == 'show': show(a[1], a[2], '--en' in a)
    elif a[0] == 'merge': merge(a[1], a[2], a[3], a[4])
    elif a[0] == 'chunk':
        c = [x for x in chunks(a[1]) if x['id'] == a[2]][0]; print(json.dumps(c))
    elif a[0] == 'status': status()
