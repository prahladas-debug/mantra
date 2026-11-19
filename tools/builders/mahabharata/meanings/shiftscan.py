#!/usr/bin/env python3
"""Find runs of verse meanings shifted by one verse inside an adhyaya. Run from the repo root.

  python3 -I tools/builders/mahabharata/meanings/shiftscan.py [en|hi] [--part N]

align.py only catches shifts that cross a speaker line. This compares the proper names
(and number words) a meaning mentions with the consonant skeleton of its own Sanskrit verse
and of the verses either side. Where, for two or more verses in a row, a meaning matches a
neighbour and not its own verse, the run is printed for a human to look at.
"""
import json, glob, os, re, sys

CONS = {
    'क': 'k', 'ख': 'k', 'ग': 'g', 'घ': 'g', 'ङ': 'n', 'च': 'c', 'छ': 'c', 'ज': 'j', 'झ': 'j', 'ञ': 'n',
    'ट': 't', 'ठ': 't', 'ड': 'd', 'ढ': 'd', 'ण': 'n', 'त': 't', 'थ': 't', 'द': 'd', 'ध': 'd', 'न': 'n',
    'प': 'p', 'फ': 'p', 'ब': 'b', 'भ': 'b', 'म': 'm', 'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
    'श': 's', 'ष': 's', 'स': 's', 'ह': 'h', 'ळ': 'l', 'ं': 'n', 'ँ': 'n',
}

def skel_dev(t):
    return ''.join(CONS.get(ch, '') for ch in t)

def skel_lat(w):
    w = w.lower()
    for a, b in (('chh', 'c'), ('ch', 'c'), ('sh', 's'), ('kh', 'k'), ('gh', 'g'), ('th', 't'), ('dh', 'd'),
                 ('ph', 'p'), ('bh', 'b'), ('jh', 'j'), ('w', 'v'), ('x', 'ks')):
        w = w.replace(a, b)
    return re.sub(r'[aeiouh]', '', w)

NUM = {  # English number words -> Sanskrit consonant skeleton stems
    'two': 'dv', 'three': 'tr', 'four': 'ctv', 'five': 'pnc', 'six': 'sd', 'seven': 'spt', 'eight': 'st',
    'nine': 'nv', 'ten': 'ds', 'twenty': 'vns', 'thirty': 'trns', 'hundred': 'st', 'thousand': 'sdsr',
}
STOP = set('''The This That These Those There Then Thus When Where What Which Who Whom Whose With Without
For From Having Being Like Even Also And But Not Nor Let One King Lord Best Great Hear Listen Know Said
Brahmin Brahmins Kshatriya Kshatriyas Vaishya Shudra Veda Vedas Dharma Gods God Goddess Sage Sages
Shastras Rishi Rishis Svaha'''.split())

def names(en):
    out = []
    for w in re.findall(r"[A-Z][a-z]{3,}", en):
        if w in STOP: continue
        s = skel_lat(w)
        if len(s) >= 3: out.append(s)
    for w in re.findall(r"[a-z]+", en.lower()):
        if w in NUM: out.append(NUM[w])
    return out

def score(ns, sk):
    return sum(1 for n in ns if n in sk)

def scan(lang, part=None):
    root = 'books-src/mahabharata'
    hits = 0
    for f in sorted(glob.glob(os.path.join(root, '[0-9]*', '[0-9]*.json'))):
        p = int(os.path.basename(os.path.dirname(f))[:2])
        if part and p != part: continue
        d = json.load(open(f))
        vs = [(f'{si}.{vi}', v) for si, s in enumerate(d['sections']) for vi, v in enumerate(s['verses'])]
        sk = [skel_dev(v['text']) for _, v in vs]
        en = [(v.get('meaning') or {}).get('en', '') for _, v in vs]
        flag = []
        for i in range(len(vs)):
            ns = names(en[i])
            if not ns: flag.append(0); continue
            own = score(ns, sk[i])
            nxt = score(ns, sk[i + 1]) if i + 1 < len(vs) else 0
            prv = score(ns, sk[i - 1]) if i else 0
            flag.append(1 if own == 0 and nxt > 0 else -1 if own == 0 and prv > 0 else 0)
        run = []
        for i, fl in enumerate(flag + [0]):
            if fl and (not run or flag[run[-1]] == fl) and i - (run[-1] if run else i) <= 3:
                run.append(i)
            else:
                if len(run) >= 2:
                    hits += 1
                    print('%s\t%s..%s\t%s (%d verses with names matching the %s verse)' % (
                        os.path.relpath(f, root), vs[run[0]][0], vs[run[-1]][0],
                        'meaning lags' if flag[run[0]] == 1 else 'meaning leads', len(run),
                        'next' if flag[run[0]] == 1 else 'previous'))
                run = [i] if fl else []
    print(hits, 'suspect runs')

if __name__ == '__main__':
    a = sys.argv[1:]
    part = int(a[a.index('--part') + 1]) if '--part' in a else None
    scan(a[0] if a and a[0] in ('en', 'hi') else 'en', part)
