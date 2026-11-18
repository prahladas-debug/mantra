#!/usr/bin/env python3
"""Collate RC (ramcharit.in English edition = base) against WA (WirelessAlien) and RCP (ramcharit.in Hindi
prasang pages) word by word. Writes /scratchpad/rcm/col_<k>.json: list of {i,j,group,rc,wa,rcp}."""
import difflib, json, re, sys, unicodedata
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
from b_compare import norm_word

OUT = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm'

def toks(lines):
    out = []
    for l in lines:
        for w in l.split():
            w = norm_word(w)
            if w and not re.fullmatch(r'[0-9०-९]+', w):
                out.append(w)
    return out

def rc_stream(r):
    toks_, grp = [], []
    for kind, lines in r['opening']:
        t = toks(lines); toks_ += t; grp += [0] * len(t)
    for n in sorted(r['groups']):
        t = toks(r['groups'][n]['lines']); toks_ += t; grp += [n] * len(t)
    if r.get('closing_raw'):
        t = toks(r['closing_raw']['lines']); toks_ += t; grp += [999] * len(t)
    if r.get('colophon'):
        t = toks([r['colophon']]); toks_ += t; grp += [999] * len(t)
    return toks_, grp

def wa_stream(w):
    t, g = [], []
    for n in sorted(w['groups']):
        x = toks(w['groups'][n]['lines']); t += x; g += [n] * len(x)
    return t, g

def rcp_stream(k):
    t = []
    for kind, lines in p.parse_rcp(k):
        t += toks(lines)
    return t

def ops(a, b):
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    return [o for o in sm.get_opcodes() if o[0] != 'equal']

def run(k):
    rc = p.parse_rc(k)
    a, grp = rc_stream(rc)
    wa, wag = wa_stream(p.parse_wa(k))
    rcp = rcp_stream(k)
    res = {}
    for name, b in (('wa', wa), ('rcp', rcp)):
        for op, i1, i2, j1, j2 in ops(a, b):
            res.setdefault((i1, i2), {})[name] = (op, b[j1:j2])
    rows = []
    for (i1, i2), d in sorted(res.items()):
        rows.append({'i': i1, 'j': i2, 'group': grp[i1] if i1 < len(grp) else -1, 'rc': a[i1:i2], 'ctx': a[max(0, i1 - 3):i1],
                     'wa': d.get('wa'), 'rcp': d.get('rcp')})
    json.dump({'rows': rows, 'n': len(a), 'nwa': len(wa), 'nrcp': len(rcp)}, open(f'{OUT}/col_{k}.json', 'w'), ensure_ascii=False)
    print(k, len(a), len(wa), len(rcp), len(rows))

if __name__ == '__main__':
    run(sys.argv[1])
