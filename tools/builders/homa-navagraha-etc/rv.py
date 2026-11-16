import re,sys,html
t=open(sys.argv[1],encoding='utf-8').read()
for ref in sys.argv[2:]:
    m,s,v=ref.split('.')
    pid=f'RV_{int(m)}.{int(s):03d}.{int(v):02d}'
    i=t.find(f'id="{pid}"')
    if i<0: print(ref,'NOT FOUND'); continue
    j=t.find('</p>',i)
    seg=re.sub(r'<span class="ref">.*?</span>','',t[i:j],flags=re.S)
    seg=re.sub(r'<br\s*/?>',' / ',seg); seg=re.sub(r'<[^>]+>','',seg)
    print(ref, html.unescape(' '.join(seg.split()))[len(pid)+6:] if False else html.unescape(' '.join(seg.split())))
