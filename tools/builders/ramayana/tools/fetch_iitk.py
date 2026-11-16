"""Fetch IITK VRAM: sections (kanda->sarga) and per-verse moolam, politely, resumable."""
import json, os, sys, time, urllib.request, ssl
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(R, 'dl/iitk'); os.makedirs(os.path.join(D, 'sec'), exist_ok=True); os.makedirs(os.path.join(D, 'm'), exist_ok=True)
ctx = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
def get(url, out):
    if os.path.exists(out) and os.path.getsize(out) > 20:
        return json.load(open(out))
    for a in range(6):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'TextCollationScript/1.0'})
            with urllib.request.urlopen(req, timeout=60, context=ctx) as r:
                b = r.read()
            d = json.loads(b)
            open(out, 'wb').write(b)
            time.sleep(0.08)
            return d
        except urllib.error.HTTPError as e:
            if e.code == 404:
                open(out, 'w').write('{"detail":"404"}'); return None
            time.sleep(5 * (a + 1))
        except Exception as e:
            time.sleep(5 * (a + 1))
    return None
kandas = [int(x) for x in sys.argv[3:]]
SH, NSH = int(sys.argv[1]), int(sys.argv[2])
for k in kandas:
    kd = get(f'https://heritage.iitk.ac.in/api/sections/{k}/', os.path.join(D, 'sec', f'{k}.json'))
    for i, ch in enumerate(kd['children']):
        if i % NSH != SH: continue
        sd = get(f'https://heritage.iitk.ac.in/api/sections/{ch["id"]}/', os.path.join(D, 'sec', f'{ch["id"]}.json'))
        for v in sd['verses']:
            ref = v['ref']
            get(f'https://heritage.iitk.ac.in/api/VRAM/{ref.replace(".", "/")}/moolam/', os.path.join(D, 'm', ref + '.json'))
        print(k, ch['hierarchical_label'], len(sd['verses']), flush=True)
print('done')
