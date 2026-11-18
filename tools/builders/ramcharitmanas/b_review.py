#!/usr/bin/env python3
import json, re, sys
OUT = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm'
def sk(ws):
    s = ''.join(ws)
    s = s.replace('ँ', 'ं')
    s = re.sub(r'[ङञणनम]्(?=[क-ह])', 'ं', s)
    s = s.replace('ी', 'ि').replace('ू', 'ु').replace('ै', 'े').replace('ौ', 'ो').replace('ृ', 'र')
    s = s.replace('श', 'स').replace('ष', 'स').replace('व', 'ब').replace('ऐ', 'ए').replace('औ', 'ओ')
    s = s.replace('ऊ', 'उ').replace('ई', 'इ').replace('ं', '').replace('ः', '').replace('्', '')
    return s
def load(k):
    return json.load(open(f'{OUT}/col_{k}.json'))
if __name__ == '__main__':
    k = sys.argv[1]; mode = sys.argv[2]
    d = load(k)
    out = []
    for r in d['rows']:
        rc = r['rc']; wa = r['wa'][1] if r['wa'] else None; rcp = r['rcp'][1] if r['rcp'] else None
        big = max(len(rc), len(wa or []), len(rcp or [])) > 5
        sw = wa is not None and sk(wa) != sk(rc)
        sr = rcp is not None and sk(rcp) != sk(rc)
        cat = None
        if big: cat = 'big'
        elif wa is not None and rcp is not None and wa == rcp: cat = 'both_agree_vs_rc' + ('' if (sw or sr) else '_orth')
        elif wa is not None and rcp is not None: cat = 'three_way' + ('' if (sw or sr) else '_orth')
        elif wa is not None: cat = 'wa_only' + ('' if sw else '_orth')
        else: cat = 'rcp_only' + ('' if sr else '_orth')
        r['cat'] = cat
        out.append(r)
    from collections import Counter
    print(Counter(r['cat'] for r in out))
    for r in out:
        if r['cat'] == mode or (mode == 'all'):
            print(r['group'], r['cat'], '|', ' '.join(r['ctx']), '[', ' '.join(r['rc']), '] WA:', (r['wa'] or (None, None))[1] and ' '.join(r['wa'][1]), '/ RCP:', (r['rcp'] or (None, None))[1] and ' '.join(r['rcp'][1]))
