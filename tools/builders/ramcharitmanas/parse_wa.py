#!/usr/bin/env python3
"""Parse the WirelessAlien/Ramcharitmanas segments (npm hindu-devotional-texts 0.7.0) into doha groups.
Usage: parse_wa.py bal|ayodhya  -> $RCM_WORK/parsed/wa_<kanda>.json
(The segments were dumped to $RCM_WORK/wa/<kanda>.json by wa/dump.mjs: one string per doha-group.)
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK

HEAD = {'चौपाई': 'chaupai', 'दोहा/सोरठा': 'doha', 'छंद': 'chhand', 'छन्द': 'chhand', 'दोहा': 'doha', 'सोरठा': 'sortha', 'श्लोक': 'shloka'}
MARK = re.compile(r'[।|]{1,2}\s*(\d+)\s*(?:\(?\s*([क-ह])\s*\)?)?\s*[।|]{1,2}\s*$')

def main(kanda):
    segs = json.load(open(f'{WORK}/wa/{kanda}.json'))
    out = []
    for si, seg in enumerate(segs):
        kind, items = None, []
        for l in seg.split('\n'):
            l = l.strip()
            if not l:
                continue
            if l in HEAD:
                kind = HEAD[l]
                continue
            items.append({'kind': kind, 'line': l})
        # markers: the last line (and the (क)(ख) lines) carry the doha number
        marks = []
        for it in items:
            m = MARK.search(it['line'])
            if m:
                marks.append((int(m.group(1)), m.group(2)))
                it['line'] = MARK.sub('।।', it['line'])
        out.append({'idx': si + 1, 'marks': marks, 'items': items})
    json.dump(out, open(f'{WORK}/parsed/wa_{kanda}.json', 'w'), ensure_ascii=False, indent=1)
    nums = [(g['marks'][-1][0] if g['marks'] else None) for g in out]
    print(kanda, len(out), 'segments; last marks', nums[-3:], 'no mark:', [i + 1 for i, n in enumerate(nums) if n is None][:20])
    bad = [(i + 1, n) for i, n in enumerate(nums) if n is not None and n != i + 1]
    print('segment idx != doha mark:', bad[:20])

main(sys.argv[1])
