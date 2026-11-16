"""Polite MediaWiki API getter with backoff. usage: wsget.py <out> <query-string>"""
import sys, time, urllib.request, json, os, ssl
out, qs = sys.argv[1], sys.argv[2]
url = 'https://sa.wikisource.org/w/api.php?' + qs
ctx = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
for attempt in range(8):
    req = urllib.request.Request(url, headers={'User-Agent': 'TextCollationScript/1.0 (offline research; python-urllib)', 'Accept-Encoding': 'identity'})
    try:
        with urllib.request.urlopen(req, timeout=60, context=ctx) as r:
            b = r.read()
        json.loads(b)
        open(out, 'wb').write(b); print('ok', out); sys.exit(0)
    except Exception as e:
        print('retry', attempt, str(e)[:100], file=sys.stderr)
        time.sleep(10 * (attempt + 1))
sys.exit(1)
