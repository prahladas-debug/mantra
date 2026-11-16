import json,glob,sys
for k in sys.argv[1:]:
    tot=miss=0;ms=[]
    for f in sorted(glob.glob(k+'/*.json')):
        d=json.load(open(f));t=m=0
        for s in d['sections']:
            for v in s['verses']:
                t+=1
                me=v.get('meaning') or {}
                if not(me.get('en') and me.get('kn')): m+=1
        tot+=t;miss+=m
        if m: ms.append((f[-8:-5],m,t))
    print(k,tot,miss,ms)
