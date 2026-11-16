import json, re, sys, os, collections
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, f'{R}/tools')
from metre import count
k = sys.argv[1]
u = json.load(open(f'{R}/work/units_{k}.json'))
iitk = json.load(open(f'{R}/work/iitk.json'))[k]
BAD_START = re.compile(r'(^|\s)([ािीुूृेैोौंः्ँ]|र्[क-ह]|[क-ह]्(\s|$))')
unmet = []; anomalies = []; cnts = []
for s in sorted(u, key=int):
    vs = [v for sec in u[s][:1] for v in sec['verses'] if 'n' in v]
    ic = len(iitk.get(s, []))
    cnts.append((int(s), len(vs), ic))
    for v in vs:
        t = v['text']
        if re.search(r'[^ऀ-ॿ\s\-।॥]', t) or re.search(r'[0-9०-९]', t):
            anomalies.append((f'{k}.{s}.{v["n"]}', 'chars', t))
        for line in t.split('\n'):
            body = line.strip(' ।॥')
            if BAD_START.search(body):
                m = BAD_START.search(body)
                anomalies.append((f'{k}.{s}.{v["n"]}', 'token', body))
        halves = [l.strip(' ।॥-') for l in t.split('\n')]
        c = [count(h) for h in halves]
        if 2 <= len(c) <= 3 and all(13 <= x <= 19 for x in c):
            for i, x in enumerate(c):
                if x != 16: unmet.append((f'{k}.{s}.{v["n"]}', i + 1, x, halves[i]))
        elif not (len(c) in (2, 3, 4) and all(x >= 9 for x in c)):
            anomalies.append((f'{k}.{s}.{v["n"]}', f'shape {c}', t))
print('unmetrical half-lines', len(unmet))
print('anomalies', len(anomalies))
for a in anomalies[:80]: print('  ', a[0], a[1], a[2].replace('\n', ' / ')[:140])
json.dump({'unmet': unmet, 'anom': anomalies, 'counts': cnts}, open(f'{R}/work/check_{k}.json', 'w'), ensure_ascii=False)
d = [(s, a, b) for s, a, b in cnts if a != b]
print('sargas differing from IITK count', len(d), d[:40])
