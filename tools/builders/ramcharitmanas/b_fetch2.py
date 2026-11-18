#!/usr/bin/env python3
"""Third witness: the Hindi 'katha-prasang' pages of ramcharit.in (one page per episode; links from rch_<kanda>.html)."""
import json, os, subprocess, time
RAW = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm/raw2'
links = json.load(open(f'{RAW}/rch_links.json'))
for k, ls in links.items():
    for i, (u, title) in enumerate(ls):
        path = f'{RAW}/rcp_{k}_{i:02d}.html'
        if os.path.exists(path) and os.path.getsize(path) > 20000:
            continue
        subprocess.run(['curl', '-sL', '-m', '60', u, '-o', path], check=True)
        time.sleep(1)
print('done')
