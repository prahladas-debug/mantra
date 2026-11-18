#!/usr/bin/env python3
"""Fetch the Gita Press text pages of Ramcharitmanas from bhaktibharat.com by following the
"next" (अगला) link from a kanda's index page. Raw HTML is cached; nothing is re-fetched.
Usage: fetch.py <slug-of-first-page> <outdir> [maxpages]
  e.g. fetch.py shri-ramcharitmanas-balkand RAW/bal
"""
import os, re, subprocess, sys, time

BASE = 'https://www.bhaktibharat.com/granth/'

def get(slug, outdir):
    path = os.path.join(outdir, slug + '.html')
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        return open(path, encoding='utf8').read()
    for attempt in range(4):
        time.sleep(1.0)
        r = subprocess.run(['curl', '-s', '-m', '40', '-o', path, '-w', '%{http_code}', BASE + slug],
                           capture_output=True, text=True)
        if r.stdout.strip() == '200' and os.path.getsize(path) > 5000:
            return open(path, encoding='utf8').read()
        time.sleep(2 * (attempt + 1))
    raise SystemExit('failed: ' + slug + ' ' + r.stdout)

def main():
    slug, outdir = sys.argv[1], sys.argv[2]
    limit = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
    os.makedirs(outdir, exist_ok=True)
    order = []
    while slug and len(order) < limit:
        html = get(slug, outdir)
        order.append(slug)
        m = re.search(r'href="https://www\.bhaktibharat\.com/(?:\.\./)?granth/([^"]+)"[^>]*>अगला', html)
        nxt = m.group(1) if m else None
        if nxt in order or (nxt and not nxt.startswith('shri-ramcharitmanas')):
            break
        slug = nxt
    open(os.path.join(outdir, 'ORDER.txt'), 'w').write('\n'.join(order) + '\n')
    print(len(order), 'pages; last:', order[-1])

main()
