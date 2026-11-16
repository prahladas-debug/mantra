"""List IITK verses that no base verse aligns with, when the CE also has them: candidate lost verses."""
import json, sys, os, re
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, f'{R}/tools')
from align import norm, align, halves, HalfIndex
k = sys.argv[1]
u = json.load(open(f'{R}/work/units_{k}.json'))
iitk = json.load(open(f'{R}/work/iitk.json'))[k]
ce = json.load(open(f'{R}/work/ce.json'))[k]
C = HalfIndex([(r, h) for r, t in ce for h in halves(t)])
allbase = []
for s in sorted(u, key=int):
    for v in u[s][0]['verses']:
        if 'n' in v: allbase.append((f'{k}.{s}.{v["n"]}', v['text']))
BI = HalfIndex([(r, h) for r, t in allbase for h in t.split('\n')])
out = []
for s in sorted(u, key=int):
    B = [(r, t) for r, t in iitk.get(s, [])]
    for r, t in B:
        hs = halves(t)
        if not hs: continue
        bb = [BI.best(h) for h in hs]
        if all(x and x[0][2] >= 0.5 for x in bb): continue
        miss = [h for h, x in zip(hs, bb) if not (x and x[0][2] >= 0.5)]
        cc = [C.best(h) for h in miss]
        if all(x and x[0][2] >= 0.6 for x in cc):
            out.append((r, ' / '.join(miss), cc[0][0][0]))
for o in out: print(o)
print(len(out))
