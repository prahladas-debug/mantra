#!/usr/bin/env python3
"""Third witness where it exists: the few Bal/Ayodhya pages bhaktibharat.com has (cached in $RCM_WORK/raw/bhaktibharat).
Compares each page word by word with the final text of the same doha group. Usage: check_bb.py"""
import difflib, html, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK, loose, no_nukta
from align import words

PAGES = [('bal', 1, 'bal_guru_vandana'), ('bal', 2, 'bal_brahman_sant'), ('bal', 132, 'bal_132'), ('bal', 360, 'bal_360'),
         ('ayodhya', 100, 'ayodhya_100'), ('ayodhya', 101, 'ayodhya_101'), ('ayodhya', 103, 'ayodhya_103'), ('ayodhya', 104, 'ayodhya_104')]

def page_words(name):
    t = open(f'{WORK}/raw/bhaktibharat/{name}.html', encoding='utf8').read()
    i = t.find('<h1')
    s = re.sub(r'<script.*?</script>|<style.*?</style>', '', t[i:], flags=re.S)
    s = re.sub(r'<br\s*/?>|</p>|</div>|</li>', '\n', s)
    s = html.unescape(re.sub(r'<[^>]+>', '', s))
    j = s.find('« पिछला')
    s = s[:j]
    s = s.split('\n', 1)[1]
    s = re.sub(r'(चौपाई|दोहा|सोरठा|छंद|छन्द|पद)\s*[:/]*', ' ', s)
    s = re.sub(r'[०-९0-9]+', ' ', s)
    return [loose(w) for w in words(s)]

for kanda, n, name in PAGES:
    F = json.load(open(f'{WORK}/parsed/final_{kanda}.json'))
    a = [loose(w) for l in F['groups'][str(n)]['lines'] for w in words(l)]
    b = page_words(name)
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    ops = [(op, ' '.join(a[i1:i2]), ' '.join(b[j1:j2])) for op, i1, i2, j1, j2 in sm.get_opcodes() if op != 'equal']
    print(kanda, n, name, 'words', len(a), len(b), 'differences', len(ops))
    for o in ops[:12]:
        print('   ', o)
