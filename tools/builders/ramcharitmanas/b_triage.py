import collections, json, sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
from b_collate import toks
from b_review import sk
OUT = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm'
cnt = collections.Counter()
for k in ['aranya', 'kishkindha', 'lanka', 'uttar']:
    r = p.parse_rc(k)
    for n in r['groups']:
        for w in toks(r['groups'][n]['lines']): cnt[w] += 1
if __name__ == '__main__':
    k = sys.argv[1]
    d = json.load(open(f'{OUT}/col_{k}.json'))
    for r in d['rows']:
        wa = r['wa'][1] if r['wa'] else None
        rcp = r['rcp'][1] if r['rcp'] else None
        rc = r['rc']
        if max(len(rc), len(wa or []), len(rcp or [])) > 4: continue
        if r['group'] in (0, 999): continue
        if wa is not None and rcp is None and sk(wa) == sk(rc): continue   # WA orthography only
        if wa is None and rcp is not None and sk(rcp) == sk(rc): continue
        c1 = ' '.join(rc); c2 = ' '.join(wa) if wa is not None else '-'
        n1 = cnt[c1] if len(rc) == 1 else '-'
        n2 = cnt[c2] if wa is not None and len(wa) == 1 else '-'
        print(f"{r['group']}\t{' '.join(r['ctx'])} [{c1}] -> WA:{c2} RCP:{' '.join(rcp) if rcp is not None else '='}\t{n1}/{n2}")
