#!/usr/bin/env python3
"""Parse the base text (Gita Press text as typed on ramcharit.in, one page per kanda) into doha groups.
Usage: parse_a.py bal|ayodhya  -> $RCM_WORK/parsed/a_<kanda>.json
Output: {"prelude":[block], "groups":[{n, suffix, items:[block]}], "closing":[lines], "free":[...]}
A block is {kind, lines, marker:[number, letter]|null}; kind is shloka|chaupai|doha|sortha|chhand.
"""
import html, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK

HEAD = re.compile(r'^(श्लोक|चौपाई|दोहा|दोहाः|सोरठा|छन्द|छंद)\s*-?\s*[:ः]?\s*$')
KIND = {'श्लोक': 'shloka', 'चौपाई': 'chaupai', 'दोहा': 'doha', 'दोहाः': 'doha', 'सोरठा': 'sortha', 'छन्द': 'chhand', 'छंद': 'chhand'}
MARK = re.compile(r'[॥।\s]*(\d+)\s*(?:\(?\s*([क-ह])\s*\)?)?\s*[॥।\s]*$')   # tolerant of typos such as ॥64॥ ॥ or ॥111।
SKIP = re.compile(r'पारायण.*विश्राम')

def text_of(kanda):
    t = open(f'{WORK}/raw/ramcharit_in_{kanda}.html', encoding='utf8').read()
    s = re.sub(r'<script.*?</script>|<style.*?</style>', '', t, flags=re.S)
    s = re.sub(r'<br\s*/?>|</p>|</div>|</li>|</h\d>', '\n', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s).replace('\xa0', ' ').replace('‌', '').replace('‍', '')
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n\s*\n+', '\n', s)
    i = s.find('श्लोक')
    j = s.find('Spread the Glory', i)
    return s[i:j].split('\n')

def main(kanda):
    blocks, free = [], []
    kind, cur, header_seen = None, None, False
    for raw in text_of(kanda):
        l = raw.strip()
        if not l:
            continue
        m = HEAD.match(l)
        if m:
            cur, kind, header_seen = None, KIND[m.group(1)], True
            continue
        if l.startswith('भावार्थ'):
            cur = None
            continue
        if SKIP.search(l):
            cur = None
            continue
        star = l.startswith('*')
        l = l.lstrip('*').strip()
        if l.startswith('दोहाथ '):
            l = l[len('दोहाथ '):]   # site typo: the header 'दोहा' run into the first word (Ayodhya 284)
        if star:
            cur = {'kind': kind, 'lines': [l], 'header': header_seen}
            header_seen = False
            blocks.append(cur)
        elif cur is not None and not MARK.search(cur['lines'][-1]):
            cur['lines'].append(l)
        elif cur is not None:
            # the previous line already carries a stanza number: this line starts a new block typed without its '*'
            cur = {'kind': kind, 'lines': [l], 'header': False}
            blocks.append(cur)
        elif re.search(r'[।॥]\s*$', l) and not l.startswith('(') and not l.startswith('इति') and not l.startswith('कलियुग'):
            cur = {'kind': kind, 'lines': [l], 'header': header_seen}   # a verse typed without its leading '*'
            header_seen = False
            blocks.append(cur)
        else:
            free.append((len(blocks), l))
    for b in blocks:
        m = MARK.search(b['lines'][-1])
        b['marker'] = None
        if m:
            b['marker'] = [int(m.group(1)), m.group(2)]
            b['lines'][-1] = MARK.sub(' ॥', b['lines'][-1]).strip()
    first = next(i for i, b in enumerate(blocks) if b['kind'] == 'chaupai' and b['header'])
    # Classify the blocks after the opening. A block under a doha/sortha header is a doha only if its number is
    # the next doha number (or the same number with another letter); the site sometimes labels a chaupai block "दोहा".
    last_n, prev, notes = 0, None, []
    for bi, b in enumerate(blocks):
        if bi < first:
            continue
        if not b['header'] and prev is not None:
            if prev['kind'] == 'chhand':
                b['kind'] = 'chhand' if len(b['lines']) >= 3 else 'chaupai'
            elif prev['kind'] in ('doha', 'sortha'):
                b['kind'] = prev['kind']
            else:
                b['kind'] = prev['kind']
        if b['kind'] == 'chaupai' and b['marker'] and b['marker'][0] == last_n + 1 and last_n + 1 > 20 and len(b['lines']) == 2:
            notes.append(('doha under a chaupai header', b['marker'], b['lines'][0][:30]))
            b['kind'] = 'doha'
        if b['kind'] in ('doha', 'sortha'):
            if b['marker'] is None:
                notes.append(('doha without number', last_n + 1, b['lines']))
                b['marker'] = [last_n + 1, None]
            elif b['marker'][0] == last_n + 1 or (b['marker'][0] == last_n and b['marker'][1]):
                pass
            elif b['marker'][0] == last_n and not b['marker'][1] and False:
                pass
            else:
                notes.append(('relabelled as chaupai', b['marker'], b['lines'][0][:30]))
                b['kind'] = 'chaupai'
        if b['kind'] in ('doha', 'sortha'):
            last_n = b['marker'][0]
        prev = b
    prelude = blocks[:first]
    groups, cur = [], []
    for b in blocks[first:]:
        cur.append(b)
        if b['kind'] in ('doha', 'sortha'):
            if groups and groups[-1][-1]['kind'] in ('doha', 'sortha') and False:
                pass
            groups.append(cur)
            cur = []
    leftover = cur
    # merge lettered series: consecutive groups whose closing marker has the same number
    merged = []
    for g in groups:
        n = g[-1]['marker'][0] if g[-1]['marker'] else None
        if merged and n is not None and merged[-1]['n'] == n:
            merged[-1]['items'].extend(g)
        else:
            merged.append({'n': n, 'items': list(g)})
    out = {'prelude': [{k: v for k, v in b.items() if k != 'header'} for b in prelude],
           'groups': [{'n': g['n'], 'items': [{k: v for k, v in b.items() if k != 'header'} for b in g['items']]} for g in merged],
           'leftover': [{k: v for k, v in b.items() if k != 'header'} for b in leftover],
           'free': free}
    os.makedirs(f'{WORK}/parsed', exist_ok=True)
    json.dump(out, open(f'{WORK}/parsed/a_{kanda}.json', 'w'), ensure_ascii=False, indent=1)
    ns = [g['n'] for g in out['groups']]
    print(kanda, 'groups', len(ns), 'first', ns[:3], 'last', ns[-3:], 'prelude', len(prelude), 'leftover blocks', len(leftover))
    nn = [x for x in ns if x is not None]
    print('missing', [x for x in range(1, max(nn) + 1) if x not in nn][:40], 'dups', sorted({x for x in nn if nn.count(x) > 1})[:30],
          'none', ns.count(None), 'in order', nn == sorted(nn))
    for n_ in notes:
        print('  note', n_)
    print('free lines', len(free))
    for pos, l in free:
        print('  free@', pos, l[:100])

main(sys.argv[1])
