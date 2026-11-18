import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import b_parse as p
k, n = sys.argv[1], int(sys.argv[2]); pats = sys.argv[3:]
rc = p.parse_rc(k)['groups'][n]; wa = p.parse_wa(k)['groups'][n]
for nm, g in (('RC', rc), ('WA', wa)):
    for l in g['lines']:
        if not pats or any(x in l for x in pats): print(nm, l)
