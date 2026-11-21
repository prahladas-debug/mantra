#!/usr/bin/env python3
"""Chapter topics in the reader's language for the Ramayana, Mahabharata and Ramcharitmanas.

Each unit's English topic is the part of its "titleEn" after " · " (e.g. "Adhyaya 1 · Ugrashravas
comes to the Naimisha forest"). Its translations go in the unit's "topic": {"hi": ..., "kn": ...}.
Run from the repo root.

  python3 -I tools/builders/topics.py status
  python3 -I tools/builders/topics.py todo <lang> [work]          parts still lacking <lang>
  python3 -I tools/builders/topics.py dump <lang> <work> <part>   {unit id: English topic} still to do
  python3 -I tools/builders/topics.py merge <lang> <sidecar.json> write {unit id: topic} into the units
"""
import fcntl, glob, json, os, re, sys

ROOT = 'books-src'
WORKS = ('ramayana', 'mahabharata', 'ramcharitmanas')
LANGS = ('hi', 'kn', 'te', 'ta', 'ml')
SCRIPT = {'hi': ('ऀ', 'ॿ'), 'kn': ('ಀ', '೿'), 'te': ('ఀ', '౿'),
          'ta': ('஀', '௿'), 'ml': ('ഀ', 'ൿ')}

def units(work, part=None):
    for d in sorted(glob.glob(os.path.join(ROOT, work, '*'))):
        if not os.path.isdir(d): continue
        p = os.path.basename(d).split('-')[0]
        if part and p.lstrip('0') != str(part).lstrip('0'): continue
        for f in sorted(glob.glob(os.path.join(d, '[0-9]*.json'))):
            yield f

def english(u):
    return u['titleEn'].split(' · ', 1)[1] if ' · ' in u['titleEn'] else None

def status():
    for w in WORKS:
        fs = list(units(w)); ds = [json.load(open(f)) for f in fs]
        n = sum(1 for d in ds if english(d))
        print(w, n, 'topics;', ' '.join('%s %d' % (l, sum(1 for d in ds if (d.get('topic') or {}).get(l))) for l in LANGS))

def todo(lang, work=None):
    for w in ([work] if work else WORKS):
        parts = {}
        for f in units(w):
            d = json.load(open(f))
            if english(d) and not (d.get('topic') or {}).get(lang):
                parts.setdefault(os.path.basename(os.path.dirname(f)).split('-')[0], 0)
                parts[os.path.basename(os.path.dirname(f)).split('-')[0]] += 1
        print(w, 'parts still to do:', ' '.join('%s(%d)' % kv for kv in parts.items()) or 'none')

def dump(lang, work, part):
    out = {}
    for f in units(work, part):
        d = json.load(open(f))
        t = english(d)
        if t and not (d.get('topic') or {}).get(lang): out[d['id']] = t
    print(json.dumps(out, ensure_ascii=False, indent=1))

def check(lang, t):
    lo, hi = SCRIPT[lang]
    if re.search(r'[A-Za-z]', t): return 'has Latin letters'
    if not any(lo <= ch <= hi for ch in t): return 'not in the %s script' % lang
    if lang != 'hi' and re.search(r'[ऀ-ॣ०-ॿ]', t): return 'has Devanagari'
    if len(t) > 110: return 'too long (keep it under ~80 characters)'
    return None

def merge(lang, side):
    s = json.load(open(side))
    bad = {k: check(lang, v) for k, v in s.items() if check(lang, v)}
    if bad:
        for k, v in bad.items(): print('REJECTED', k, v)
        sys.exit(1)
    by = {}
    for k, v in s.items():
        m = re.match(r'(\w+)-(\d+)-(\d+)$', k)
        if not m: print('bad id', k); sys.exit(1)
        by.setdefault((m.group(1), m.group(2)), {})[int(m.group(3))] = (k, v)
    n = 0
    # Several languages may be merged at once: one writer at a time.
    lock = open(os.path.join(ROOT, '.topics.lock'), 'w'); fcntl.flock(lock, fcntl.LOCK_EX)
    for (work, part), us in by.items():
        for f in units(work, part):
            d = json.load(open(f))
            u = int(d['unit'])
            if u not in us: continue
            k, v = us[u]
            if d['id'] != k: print('id mismatch', f, k); sys.exit(1)
            d.setdefault('topic', {})[lang] = v.strip()
            # Written whole and then renamed, so that a reader never sees half a file.
            open(f + '.tmp', 'w').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n'); os.replace(f + '.tmp', f); n += 1
    print('merged', n, lang, 'topics')

if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or a[0] == 'status': status()
    elif a[0] == 'todo': todo(a[1], a[2] if len(a) > 2 else None)
    elif a[0] == 'dump': dump(a[1], a[2], a[3])
    elif a[0] == 'merge': merge(a[1], a[2])
