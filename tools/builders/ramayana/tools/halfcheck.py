"""List numbered verses that are a single half-line and see whether IITK has the full verse."""
import json, sys
sys.path.insert(0, 'tools')
from align import norm, sim
k = sys.argv[1]
u = json.load(open(f'work/units_{k}.json'))
I = json.load(open('work/iitk.json'))[k]
tot = cand = 0
for s, secs in u.items():
    iv = {r.split('.')[-1]: t for r, t in I.get(s, [])}
    for sec in secs:
        for v in sec['verses']:
            if v.get('n') is None or '\n' in v['text']:
                continue
            tot += 1
            w = iv.get(str(v['n']))
            if not w:
                print(s, v['n'], 'NOIITK', v['text']); continue
            halves = [h.strip() for h in w.replace('॥', '।').split('।') if h.strip()]
            sc = [round(sim(norm(v['text']), norm(h)), 2) for h in halves]
            print(s, v['n'], len(halves), sc, '|', v['text'][:50], '|', w[:90])
            if len(halves) == 2 and max(sc) > .6: cand += 1
print('total', tot, 'cand', cand, file=sys.stderr)
