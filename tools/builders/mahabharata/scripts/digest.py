# python3 -I digest.py parva [from] [to] [maxv] : compact IAST digest per adhyaya for summary writing
import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/mahabharata/scripts')
from ce import load, verses
p = int(sys.argv[1]); a0 = int(sys.argv[2]) if len(sys.argv) > 2 else 1; a1 = int(sys.argv[3]) if len(sys.argv) > 3 else 999
maxv = int(sys.argv[4]) if len(sys.argv) > 4 else 3
d = load('UR')[p]
for a, lines in d.items():
    if not (a0 <= a <= a1): continue
    it = verses(lines)
    vs = [i for i in it if i[0] == 'v' and i[1] > 0]
    spk = []
    for i in it:
        if i[0] == 'spk':
            s = i[2].replace(' uvāca', '').replace(' ūcuḥ', '+').replace(' ūcatuḥ', '2')
            if not spk or spk[-1] != s: spk.append(s)
    def vt(v): return ' / '.join(l.replace('; ', ' ') for l in v[2])[:int(sys.argv[5]) if len(sys.argv)>5 else 150]
    pick = vs[:maxv]
    # verses right after the middle and the end
    if len(vs) > maxv + 2: pick += [vs[len(vs)//2]]
    if len(vs) > maxv: pick += [vs[-1]]
    print(f'## {p}.{a} ({len(vs)}v) [{" > ".join(spk)[:160]}]')
    for v in pick: print(f'  {v[1]}: {vt(v)}')
