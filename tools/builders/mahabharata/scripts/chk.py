import json,sys,glob,re
R={'te':(0x0C00,0x0C7F),'ta':(0x0B80,0x0BFF),'kn':(0x0C80,0x0CFF),'hi':(0x0900,0x097F)}
ok=re.compile(r"[\s0-9.,;:!?'\"()\-–—‘’“”]")
bad=0
for f in sorted(glob.glob(sys.argv[1])):
  for l in open(f):
    if not l.strip(): continue
    d=json.loads(l)
    if not all(ord(c)<128 for c in d['en']+d['t']): print(f,d['a'],'en non-ascii');bad+=1
    for k,(a,b) in R.items():
      for c in d[k]:
        o=ord(c)
        if not(a<=o<=b or ok.match(c) or c in '‌‍' or (k=='hi' and c=='।')):
          print(f,d['a'],k,repr(c));bad+=1;break
print('bad',bad)
