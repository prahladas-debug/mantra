import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
from b_collate import toks
k = sys.argv[1]
r = p.parse_rc(k)
for item in sys.argv[2:]:
    n, t = item.split(':')
    n = int(n)
    for l in r['groups'][n]['lines']:
        if t in toks([l]) or t in l: print(f'{k} {n} {t}: {l}')
