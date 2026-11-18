#!/usr/bin/env python3
"""Rare word forms of the base text that sit one edit from a frequent form: candidates for typing slips."""
import collections, itertools, sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
from b_collate import toks

def lev1(a, b):
    if a == b: return False
    if abs(len(a) - len(b)) > 1: return False
    if len(a) == len(b):
        return sum(x != y for x, y in zip(a, b)) == 1
    if len(a) > len(b): a, b = b, a
    for i in range(len(b)):
        if b[:i] + b[i+1:] == a: return True
    return False

def run(ks):
    cnt = collections.Counter(); where = collections.defaultdict(list)
    for k in ks:
        r = p.parse_rc(k)
        for n in sorted(r['groups']):
            for line in r['groups'][n]['lines']:
                for w in toks([line]):
                    cnt[w] += 1; where[w].append((k, n))
    frequent = [w for w, c in cnt.items() if c >= 4]
    byl = collections.defaultdict(list)
    for w in frequent: byl[len(w)].append(w)
    out = []
    for w, c in cnt.items():
        if c > 2: continue
        for L in (len(w) - 1, len(w), len(w) + 1):
            for f in byl.get(L, []):
                if lev1(w, f):
                    out.append((w, c, f, cnt[f], where[w][0])); break
            else: continue
            break
    return out

if __name__ == '__main__':
    o = run(['aranya', 'kishkindha', 'lanka', 'uttar'])
    print(len(o))
    for x in o: print(x)
