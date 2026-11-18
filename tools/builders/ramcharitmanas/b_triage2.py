import json, sys, re
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
from b_collate import toks
from b_review import sk
from b_triage import cnt, OUT
from b_compare import norm_word
k = sys.argv[1]
rcg = p.parse_rc(k)['groups']; wag = p.parse_wa(k)['groups']
d = json.load(open(f'{OUT}/col_{k}.json'))
def find(lines, ctx, ws):
    key = ctx[-1:] + ws[:1] if ctx else ws[:1]
    for l in lines:
        t = toks([l])
        for i in range(len(t)):
            if t[i:i+len(ws)] == ws and (not ctx or i == 0 or t[i-1] == ctx[-1]):
                return l
    for l in lines:
        if ws and ws[0] in toks([l]): return l
    return ''
for r in d['rows']:
    g = r['group']
    if g in (0, 999, -1): continue
    wa = r['wa'][1] if r['wa'] else None; rcp = r['rcp'][1] if r['rcp'] else None; rc = r['rc']
    if max(len(rc), len(wa or []), len(rcp or [])) > 4: continue
    if wa is None and rcp is None: continue
    if wa is not None and rcp is None and sk(wa) == sk(rc): continue
    if wa is None and rcp is not None and sk(rcp) == sk(rc): continue
    if rc and wa and not (set(rc) and len(rc) == 1): pass
    n1 = cnt[' '.join(rc)] if len(rc) == 1 else 0
    n2 = cnt[' '.join(wa)] if wa and len(wa) == 1 else 0
    show = (len(rc) == 0 or len(rc) > 1 or n1 <= 2 or (wa is not None and len(wa) != 1) or rcp is not None)
    if not show: continue
    print(f"{g}\t[{' '.join(rc)}] -> WA:[{' '.join(wa) if wa is not None else '='}] RCP:[{' '.join(rcp) if rcp is not None else '='}] n={n1}/{n2}")
    print('   RC:', find(rcg[g]['lines'], r['ctx'], rc) if rc else ' '.join(r['ctx']))
    if wa: print('   WA:', find(wag[g]['lines'], r['ctx'], wa))
