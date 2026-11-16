import json,sys,re
k,u,mf=sys.argv[1:4]
p=f'/home/user/mantra/books-src/ramayana/{k}/{u}.json'
raw=open(p,encoding='utf-8').read()
d=json.loads(raw)
M={}
for line in open(mf,encoding='utf-8'):
    line=line.strip()
    if not line: continue
    m=re.match(r'(\d+)\.\s*(.*?)\s*\|\|\|\s*(.*)$',line)
    assert m,line
    M[int(m[1])]=(m[2],m[3])
need=[v['n'] for s in d['sections'] for v in s['verses'] if 'n' in v and not (v.get('meaning') or {}).get('en')]
miss=[n for n in need if n not in M]; extra=[n for n in M if n not in need]
if miss or extra: print('MISSING',miss,'EXTRA',extra); sys.exit(1)
for s in d['sections']:
    for v in s['verses']:
        if v.get('n') in M: v['meaning']={'en':M[v['n']][0],'kn':M[v['n']][1]}
open(p,'w',encoding='utf-8').write(json.dumps(d,ensure_ascii=False,indent=2)+('\n' if raw.endswith('\n') else ''))
print('ok',u,len(M))
