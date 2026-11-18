#!/usr/bin/env python3
"""Line-by-line comparison of base (A) and the WirelessAlien segments (WA), by doha number.
Usage: compare.py bal|ayodhya  -> $RCM_WORK/parsed/diff_<kanda>.json  (list of diffs) and a summary on stdout.
"""
import json, os, re, sys, unicodedata, difflib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK, loose

def a_lines(g):
    return [l for it in g['items'] for l in it['lines']]

def main(kanda):
    A = json.load(open(f'{WORK}/parsed/a_{kanda}.json'))
    W = json.load(open(f'{WORK}/parsed/wa_{kanda}.json'))
    wa = {g['idx']: g for g in W}
    diffs = []
    nl_diff = 0
    for g in A['groups']:
        n = g['n']
        al = a_lines(g)
        wl = [it['line'] for it in wa[n]['items']] if n in wa else []
        ka = [loose(x) for x in al]
        kw = [loose(x) for x in wl]
        if ka == kw:
            continue
        diffs.append({'n': n, 'a': al, 'w': wl, 'same_count': len(al) == len(wl)})
    json.dump(diffs, open(f'{WORK}/parsed/diff_{kanda}.json', 'w'), ensure_ascii=False, indent=1)
    print(kanda, 'groups with a difference:', len(diffs), ' different line counts:', sum(1 for d in diffs if not d['same_count']))

main(sys.argv[1])
