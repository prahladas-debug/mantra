import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/mahabharata/scripts')
from ce import load, verses
import re
p,a0,a1=int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]); W=int(sys.argv[4]) if len(sys.argv)>4 else 100
d=load('UR')[p]
for a,l in d.items():
    if not a0<=a<=a1: continue
    it=verses(l); vs=[i for i in it if i[0]=='v' and i[1]>0]
    n=len(vs); idx=sorted(set([0,n//3,2*n//3,n-1])) if n>4 else range(n)
    spk=[]
    for i in it:
        if i[0]=='spk':
            s=re.sub(r' (uvāca|ūcuḥ)','',i[2])
            if not spk or spk[-1]!=s: spk.append(s)
    print(f'## {p}.{a} {n}v [{">".join(spk)[:70]}]')
    for k in idx:
        if 0<=k<n: print(f' {vs[k][1]}: '+' '.join(vs[k][2]).replace(';','')[:W])
