import json, os, subprocess, sys, time, urllib.parse
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t = json.load(open(os.path.join(R, 'dl/titles.json')))
t = [x for x in t if x.count('/') == 2 and 'सर्गः' in x and 'सुन्दर' not in x]
B = 20
for i in range(0, len(t), B):
    out = os.path.join(R, 'dl/ws', f'b{i//B:03d}.json')
    if os.path.exists(out) and os.path.getsize(out) > 1000:
        continue
    titles = '|'.join(t[i:i+B])
    qs = 'action=query&prop=revisions&rvprop=content|ids&rvslots=main&format=json&formatversion=2&titles=' + urllib.parse.quote(titles)
    subprocess.run([sys.executable, '-I', os.path.join(R, 'tools/wsget.py'), out, qs])
    time.sleep(4)
print('done', len(t))
