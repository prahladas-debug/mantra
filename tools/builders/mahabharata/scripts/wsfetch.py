# polite fetcher for sa.wikisource raw pages: python3 -I wsfetch.py outdir title...
import sys, os, time, urllib.parse, urllib.request, re
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
UA = 'MantraContentBot/1.0 (personal research; 1 req/3s)'
def raw(title):
    url = 'https://sa.wikisource.org/w/index.php?title=' + urllib.parse.quote(title) + '&action=raw'
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read().decode('utf-8')
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(20 * (attempt + 1))
        except Exception:
            time.sleep(20 * (attempt + 1))
    return None
for t in sys.argv[2:]:
    fn = os.path.join(out, t.replace('/', '__') + '.txt')
    if os.path.exists(fn): continue
    s = raw(t); time.sleep(3)
    hops = 0
    while s is not None and hops < 3:
        m = re.match(r'\s*#(?:पुनर्निदेशन|REDIRECT)\s*\[\[([^\]|]+)', s, re.I)
        if not m: break
        s = raw(m.group(1)); time.sleep(3); hops += 1
    if s is None: print('MISSING', t, flush=True); continue
    open(fn, 'w').write(s)
    print('ok', t, len(s), flush=True)
