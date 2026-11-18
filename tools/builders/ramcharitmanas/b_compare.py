#!/usr/bin/env python3
"""Word-level collation of ramcharit.in (RC, base) against WirelessAlien (WA) per doha group."""
import difflib, re, sys, unicodedata
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p

NUKTA = {'क़': 'क', 'ख़': 'ख', 'ग़': 'ग', 'ज़': 'ज', 'ड़': 'ड', 'ढ़': 'ढ', 'फ़': 'फ', 'य़': 'य'}
def norm_word(w):
    w = unicodedata.normalize('NFC', w)
    for a, b in NUKTA.items():
        w = w.replace(a, b)
    w = w.replace('़', '')
    w = re.sub(r'[‌‍।॥.,;:!?\'"“”‘’\-–()\[\]|*]', '', w)
    return w

def words(lines):
    out = []
    for l in lines:
        for w in l.split():
            w = norm_word(w)
            if w and not re.fullmatch(r'[0-9०-९]+', w):
                out.append(w)
    return out

def diffs(a, b):
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    return [(op, a[i1:i2], b[j1:j2], i1) for op, i1, i2, j1, j2 in sm.get_opcodes() if op != 'equal']

if __name__ == '__main__':
    k = sys.argv[1]
    rc, wa = p.parse_rc(k), p.parse_wa(k)
    tot = 0
    for n in sorted(rc['groups']):
        a = words(rc['groups'][n]['lines'])
        b = words(wa['groups'][n]['lines'])
        for op, x, y, i in diffs(a, b):
            ctx = ' '.join(a[max(0, i - 2):i])
            print(f'{n}\t{op}\t{" ".join(x)}\t{" ".join(y)}\t[{ctx}]')
            tot += 1
    print('TOTAL', tot, file=sys.stderr)
