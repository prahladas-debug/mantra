#!/usr/bin/env python3
"""Cross-check the base's Devanagari against the romanised lines printed under it on ramcharit.in."""
import re, sys, unicodedata
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p

DC = {'क':'k','ख':'k','ग':'g','घ':'g','च':'c','छ':'c','ज':'j','झ':'j','ट':'t','ठ':'t','त':'t','थ':'t','ड':'d','ढ':'d','द':'d','ध':'d','प':'p','फ':'p','ब':'b','भ':'b','व':'b','य':'y','र':'r','ल':'l','श':'s','ष':'s','स':'s','ऋ':'r','ृ':'r','ज़':'j','फ़':'p','ड़':'d','ढ़':'d'}
def dev_sk(w):
    w = unicodedata.normalize('NFC', w)
    for a, b in {'ड़':'ड','ढ़':'ढ','फ़':'फ','ज़':'ज','क़':'क','ख़':'ख','ग़':'ग','य़':'य'}.items(): w = w.replace(a, b)
    out = ''
    for i, c in enumerate(w):
        if c in DC: out += DC[c]
        elif c == 'ृ': out += 'r'
    return out
def lat_sk(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    w = w.replace('ṭ','t').replace('ḍ','d').replace('ś','s').replace('ṣ','s').replace('ṛ','r').replace('ṃ','').replace('ṅ','').replace('ñ','').replace('ṇ','')
    w = re.sub(r'(kh|gh|ch|jh|th|dh|ph|bh)', lambda m: m.group(1)[0], w)
    w = w.replace('v', 'b').replace('w','b').replace('f','p').replace('z','j').replace('x','k').replace('q','k')
    return re.sub(r'[^a-z]', '', re.sub(r'[aeiouhmn]', '', w))

HDR = re.compile(r'^(श्लोक|सोरठा|चौपाई|दोहा|छंद|छन्द)(?=[\s|:])[^॥।]*$')
def isdev(l):
    return bool(p.DEV.search(l)) and not p.LAT.search(l) and '|' not in l and not (len(l) < 40 and HDR.match(l)) and not re.match(r'^(भावार्थ|इति|मासपारायण|नवाह्न|कलियुग)', l)

def pairs(k):
    L = p.html_text(f'{p.RAW}/ramcharit_{k}.html')
    out = []
    i = 0
    while i < len(L):
        l = L[i]
        if isdev(l):
            D = []
            j = i
            while j < len(L) and isdev(L[j]):
                D.append(L[j]); j += 1
            T = L[j:j + len(D)]
            if len(T) == len(D) and all(p.LAT.search(t) for t in T):
                out += list(zip(D, T))
            i = j
        else:
            i += 1
    return out

def run(k):
    import difflib
    bad = []
    n = 0
    for d, t in pairs(k):
        if not re.search(r'[āīūṛṭḍṇśṣḥṃñḷṅ]|\.\.', t) or len(t) > 220: continue
        d = p.clean(d); dm, _ = p.split_marker(d)
        dw = [x for x in re.split(r'[\s।॥]+', dm) if x]
        tw = [x for x in re.split(r'[\s.]+', re.sub(r'\.\.\s*\d.*$', '', t)) if x]
        # glue split words: compare on the concatenation of skeletons when counts differ
        a = [dev_sk(x) for x in dw]; b = [lat_sk(x) for x in tw]
        n += 1
        sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
        for op, i1, i2, j1, j2 in sm.get_opcodes():
            if op == 'equal': continue
            if ''.join(a[i1:i2]) == ''.join(b[j1:j2]): continue   # only word division differs
            bad.append((' '.join(dw[i1:i2]), ' '.join(tw[j1:j2]), dm))
    return n, bad

if __name__ == '__main__':
    for k in sys.argv[1:]:
        n, bad = run(k)
        print('==', k, n, len(bad))
        for b in bad: print(b)
