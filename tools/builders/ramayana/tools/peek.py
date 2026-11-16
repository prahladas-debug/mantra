import json,sys
k=sys.argv[1]; u=json.load(open(f'work/units_{k}.json'))
for s in sys.argv[2:]:
    vs=[v for sec in u[s] for v in sec['verses']]
    n=len(vs); idx=sorted(set([0,1,n//4,n//2,3*n//4,n-2,n-1]))
    print('==',s,n)
    for i in idx:
        if 0<=i<n: print(' ',vs[i].get('n'),vs[i]['text'].replace('\n',' ')[:110])
