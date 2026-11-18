#!/usr/bin/env python3
"""Download the base pages (Bal Kand and Ayodhya Kand with Hindi bhavartha, one page per kanda) from ramcharit.in
into $RCM_WORK/raw/. Polite: one request per kanda. Raw downloads are not committed."""
import os, subprocess, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK

PAGES = {
    'bal': 'https://www.ramcharit.in/%e0%a4%ac%e0%a4%be%e0%a4%b2%e0%a4%95%e0%a4%be%e0%a4%a3%e0%a5%8d%e0%a4%a1-bal-kand-with-meaning/',
    'ayodhya': 'https://www.ramcharit.in/%e0%a4%85%e0%a4%af%e0%a5%8b%e0%a4%a7%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%95%e0%a4%be%e0%a4%a3%e0%a5%8d%e0%a4%a1-ayodhya-kand-with-meaning/',
}
os.makedirs(f'{WORK}/raw', exist_ok=True)
for k, url in PAGES.items():
    out = f'{WORK}/raw/ramcharit_in_{k}.html'
    if os.path.exists(out) and os.path.getsize(out) > 1_000_000:
        continue
    subprocess.run(['curl', '-sL', '-m', '120', '-o', out, url], check=True)
    time.sleep(1)
    print(k, os.path.getsize(out))
