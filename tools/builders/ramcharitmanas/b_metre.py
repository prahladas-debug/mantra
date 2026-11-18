#!/usr/bin/env python3
"""Matra counts of the base text: chaupai padas (16), doha/sortha lines (24: 13+11 / 11+13)."""
import re, sys, unicodedata
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p

LONG_V = set('आईऊएऐओऔ')
SHORT_V = set('अइउऋ')
LONG_M = set('ाीूेैोौ')
SHORT_M = set('िुृ')
CONS = [chr(c) for c in range(0x0915, 0x093A)] + ['क़','ख़','ग़','ज़','ड़','ढ़','फ़','य़']
def matras(s):
    s = unicodedata.normalize('NFC', s)
    s = re.sub(r'[‌‍।॥.,;:!?\'"“”‘’\-–()\[\]|*0-9]', '', s)
    s = s.replace('़', '')
    units = []   # (weight, is_conj_follow)
    i, n = 0, len(s)
    w = []  # list of syllable weights
    wstart = 0   # index in w where the current word begins
    while i < n:
        c = s[i]
        if c == ' ':
            wstart = len(w); i += 1; continue
        if c in CONS or c in LONG_V or c in SHORT_V:
            wt = 2 if c in LONG_V else 1
            i += 1
            # consonant: look for matra/virama
            if c in CONS or c in SHORT_V or c in LONG_V:
                while i < n and s[i] == '़':
                    i += 1
                if i < n and s[i] in LONG_M: wt = 2; i += 1
                elif i < n and s[i] in SHORT_M: wt = 1; i += 1
                elif i < n and s[i] == '्':
                    # virama: this consonant joins the next -> previous syllable becomes guru
                    if len(w) > wstart: w[-1] = 2
                    i += 1
                    continue
            if i < n and s[i] in 'ंँः':
                if s[i] != 'ँ': wt = 2
                i += 1
            w.append(wt)
        else:
            i += 1
    return sum(w)

def check(k):
    r = p.parse_rc(k)
    bad = []
    for n in sorted(r['groups']):
        g = r['groups'][n]
        for kind, line in zip(g['kinds'], g['lines']):
            if kind == 'chaupai':
                parts = [x for x in re.split(r'[।॥]', line) if x.strip()]
                for x in parts:
                    m = matras(x)
                    if m != 16: bad.append((n, kind, m, x.strip()))
            elif kind in ('doha', 'sortha'):
                m = matras(line)
                if m != 24: bad.append((n, kind, m, line))
    return bad

if __name__ == '__main__':
    for k in sys.argv[1:]:
        b = check(k)
        print('==', k, len(b))
        for n, kind, m, x in b: print(n, kind, m, x)
