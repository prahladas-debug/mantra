import json, sys, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, f'{R}/tools')
from align import halves, HalfIndex
from metre import count
k = sys.argv[1]
d = json.load(open(f'{R}/work/check_{k}.json'))
iitk = json.load(open(f'{R}/work/iitk.json'))[k]
ce = json.load(open(f'{R}/work/ce.json'))[k]
I = HalfIndex([(r, h) for s in iitk.values() for r, t in s for h in halves(t)])
C = HalfIndex([(r, h) for r, t in ce for h in halves(t)])
for ref, i, c, h in d['unmet']:
    a = I.best(h); b = C.best(h)
    ia = a[0] if a else ('', '', 0); cb = b[0] if b else ('', '', 0)
    print(f'{ref}.{i} [{c}] {h}\n     I {ia[0]} [{count(ia[1])}] {ia[1]}  ({ia[2]:.2f})\n     C {cb[0]} [{count(cb[1])}] {cb[1]}  ({cb[2]:.2f})')
