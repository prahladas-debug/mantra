import json,sys
k,u=sys.argv[1],sys.argv[2]
d=json.load(open(f'/home/user/mantra/books-src/ramayana/{k}/{u}.json'))
print(d['titleEn'],'|',d['source'].split('which')[-1][:150] if 'which' in d['source'] else '')
for s in d['sections']:
    for v in s['verses']:
        if 'n' in v and not (v.get('meaning') or {}).get('en'): print(v['n'],v['text'].replace('\n',' / '))
