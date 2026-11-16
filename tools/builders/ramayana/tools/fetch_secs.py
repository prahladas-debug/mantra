import json, os, sys, time, urllib.request, ssl
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(R, 'dl/iitk/sec')
ctx = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
for k in [754, 755, 756, 757, 759, 760]:
    kd = json.load(open(os.path.join(D, f'{k}.json')))
    for ch in kd['children']:
        out = os.path.join(D, f'{ch["id"]}.json')
        if os.path.exists(out): continue
        for a in range(5):
            try:
                with urllib.request.urlopen(urllib.request.Request(f'https://heritage.iitk.ac.in/api/sections/{ch["id"]}/', headers={'User-Agent': 'TextCollationScript/1.0'}), timeout=60, context=ctx) as r:
                    b = r.read()
                json.loads(b); open(out, 'wb').write(b); break
            except Exception:
                time.sleep(3)
print('ok')
