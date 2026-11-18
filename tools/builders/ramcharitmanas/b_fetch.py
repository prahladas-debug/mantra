#!/usr/bin/env python3
"""Fetch the witnesses for Aranya, Kishkindha, Lanka and Uttar Kand into scratchpad raw2/.
bhaktibharat.com has one page per doha for Lanka Kand only (Aranya, Kishkindha, Uttar are not on the site);
ramcharit.in has the Gita Press text of all four kandas, one page each."""
import os, subprocess, sys, time
RAW = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm/raw2'
os.makedirs(RAW, exist_ok=True)
def get(url, path):
    if os.path.exists(path) and os.path.getsize(path) > 20000:
        return
    subprocess.run(['curl', '-sL', '-m', '60', url, '-o', path], check=True)
    time.sleep(1)
RC = {
 'aranya': 'ramcharitmanas-aranya-kand-with-english-meaning-romanised-edition-with-english-translation-transliteration',
 'kishkindha': 'ramcharitmanas-kishkindha-kand-with-english-meaning-romanised-edition-with-english-translation-transliteration',
 'lanka': 'ramcharitmanas-lanka-kand-in-english-transliteration-meaning-translation',
 'uttar': 'ramcharitmanas-uttar-kand-in-english-transliteration-meaning-translation',
}
for k, s in RC.items():
    get('https://ramcharit.in/' + s, f'{RAW}/ramcharit_{k}.html')
get('https://www.bhaktibharat.com/granth/shri-ramcharitmanas-lanka-kand', f'{RAW}/bb_lanka_idx.html')
for n in range(1, 122):
    get(f'https://www.bhaktibharat.com/granth/shri-ramcharitmanas-lanka-kand-pad-{n}', f'{RAW}/bb_lanka_{n:03d}.html')
print('done')
