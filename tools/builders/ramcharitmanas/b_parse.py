#!/usr/bin/env python3
"""Parsers for the witnesses of Aranya/Kishkindha/Lanka/Uttar Kand (see b_fetch.py).
Common shape: {'opening': [verse...], 'groups': {n: {'lines': [...], 'kinds': [...]}}, 'closing': [verse...]}
where a verse is a list of lines (str, danda kept, doha numbers removed)."""
import html, json, re, unicodedata
RAW = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm/raw2'
DEV = re.compile(r'[ऀ-ॿ]')
LAT = re.compile(r'[A-Za-zāīūṛṭḍṇśṣḥṃñḷṅ]')
KINDS = {'श्लोक': 'shloka', 'सोरठा': 'sortha', 'चौपाई': 'chaupai', 'दोहा': 'doha', 'छंद': 'chhand', 'छन्द': 'chhand'}
LETTERS = {'क': 'a', 'ख': 'b', 'ग': 'c', 'घ': 'd'}
MARK = re.compile(r'॥\s*(\d+)\s*\(?([कखगघङचछ])?\)?\s*॥?\s*\(?([कखगघङचछ])?\)?\s*॥?\s*$|।\s*(\d+)\s*\(?([कखगघङचछ])?\)?\s*॥\s*$')

def clean(l):
    l = l.lstrip('* ').strip()
    l = l.replace('\u200d', '').replace('\u200c', '')
    l = l.replace('।।', '॥').replace('`', '')
    l = re.sub(r'॥\s*(\d+)\s*।\s*$', r'॥\1॥', l)
    l = re.sub(r'(॥\s*\d+\s*॥)\s*।\s*$', r'\1', l)
    l = re.sub(r'\s*\d+\s*-\s*\d+\s*॥\s*$', '॥', l)
    l = re.sub(r'(॥\s*\d+\s*[कखगघङचछ]?\s*॥)\s*॥\s*\d+\s*॥\s*$', r'\1', l)
    l = re.sub(r'॥\s*॥', '॥', l)
    l = re.sub(r'(?<=\s)\u093f(\S)', lambda m: m.group(1) + '\u093f', l)
    l = re.sub(r'\s+', ' ', l)
    l = re.sub(r'\s*॥\s*$', '॥', l)
    return l

def html_text(path):
    t = open(path, encoding='utf-8').read()
    t = re.sub(r'<script.*?</script>|<style.*?</style>', '', t, flags=re.S)
    t = re.sub(r'</p>|<br\s*/?>|</div>|</li>|</h\d>', '\n', t)
    x = html.unescape(re.sub(r'<[^>]+>', '', t))
    x = x.replace('\xa0', ' ')
    return [l.strip() for l in x.split('\n') if l.strip()]

def split_marker(line):
    """-> (line with the printed number removed and ॥ restored, (int, letter) or None)"""
    m = MARK.search(line)
    if not m:
        return line, None
    num = m.group(1) or m.group(4)
    let = m.group(2) or m.group(3) or m.group(5)
    return line[:m.start()].rstrip() + '॥', (int(num), let)

def build(blocks, firstgroup=1):
    """blocks: [(kind, [line...])] in order -> opening / groups / closing using doha markers."""
    out = {'opening': [], 'groups': {}, 'closing': []}
    # opening: every block before the first chaupai block
    i = 0
    while i < len(blocks) and blocks[i][0] != 'chaupai':
        i += 1
    op = blocks[:i]
    blocks = blocks[i:]
    for kind, lines in op:
        out['opening'].append((kind, lines))
    expected = firstgroup
    cur = {'lines': [], 'kinds': []}
    closed = None   # number of the group that has just been closed (letter continuations)
    for kind, lines in blocks:
        for ln in lines:
            ln2, mk = split_marker(ln)
            if closed is not None:
                # (ख), (ग)... couplets of the group just closed: unmarked first line, marked second line
                if mk and mk[0] == closed and mk[1]:
                    g = out['groups'][closed]
                    g['lines'] += cur['lines'] + [ln2]; g['kinds'] += cur['kinds'] + [kind]
                    cur = {'lines': [], 'kinds': []}
                    continue
                if mk:
                    closed = None
            if mk and kind in ('doha', 'sortha') and mk[0] == expected:
                cur['lines'].append(ln2); cur['kinds'].append(kind)
                out['groups'][expected] = cur
                closed = expected
                expected += 1
                cur = {'lines': [], 'kinds': []}
                continue
            cur['lines'].append(ln2); cur['kinds'].append(kind)
    if cur['lines']:
        out['closing_raw'] = cur
    return out

def parse_rc(k):
    L = html_text(f'{RAW}/ramcharit_{k}.html')
    # start at the first header after "सोपान"
    s = next(i for i, l in enumerate(L) if 'सोपान |' in l and 'Descent' in l)
    e = next(i for i, l in enumerate(L) if i > s and l.startswith('इति श्रीमद्रामचरितमानसे'))
    blocks = []
    kind = None
    colophon = None
    for l in L[s + 1:e + 1]:
        if l.startswith('इति श्रीमद्रामचरितमानसे'):
            colophon = l
            continue
        hm = re.match(r'^(श्लोक|सोरठा|चौपाई|दोहा|छंद|छन्द)(?=[\s|:])[^॥।]*$', l) if len(l) < 40 else None
        if hm and not LAT.search(l.split('|')[0]):
            kind = KINDS[hm.group(1)]
            blocks.append((kind, []))
            continue
        if re.match(r'^(मासपारायण|मासपरायण|नवाह्न|भावार्थ)', l) or l.startswith('कलियुग के'):
            continue
        if not DEV.search(l) or LAT.search(l):
            continue
        l = clean(l)
        if not l:
            continue
        if kind is None:
            continue
        blocks[-1][1].append(l)
    r = build(blocks)
    r['colophon'] = colophon
    return r

def parse_wa(k):
    """WA segment i = doha group i (the doha markers are missing from most of its lines)."""
    d = json.load(open(f'{RAW}/wa.json'))[k]
    WK = {'चौपाई': 'chaupai', 'दोहा/सोरठा': 'doha', 'छंद': 'chhand', 'श्लोक': 'shloka'}
    out = {'opening': [], 'groups': {}, 'closing': []}
    for i, seg in enumerate(d, 1):
        lines, kinds, kind = [], [], None
        for l in seg['devanagari'].split('\n'):
            l = l.strip()
            if not l:
                continue
            if l in WK:
                kind = WK[l]
                continue
            l = clean(l)
            l, mk = split_marker(l)
            lines.append(l); kinds.append(kind)
        out['groups'][i] = {'lines': lines, 'kinds': kinds}
    return out

def parse_bb(n):
    L = html_text(f'{RAW}/bb_lanka_{n:03d}.html')
    s = next(i for i, l in enumerate(L) if re.match(r'^श्री रामचरितमानस: लंका काण्ड: पद \d+ \(', l))
    e = next(i for i, l in enumerate(L) if i > s and l.startswith('हिन्दी भावार्थ'))
    blocks = []
    for l in L[s + 1:e]:
        hm = re.match(r'^(श्लोक|सोरठा|चौपाई|दोहा|छंद|छन्द)\s*:\s*$', l)
        if hm:
            blocks.append((KINDS[hm.group(1)], []))
            continue
        blocks[-1][1].append(l)
    return blocks

def parse_rcp(k):
    """Third witness: the Hindi katha-prasang pages of ramcharit.in (verse text, bhavartha dropped)."""
    import glob
    blocks, titles = [], []
    for path in sorted(glob.glob(f'{RAW}/rcp_{k}_*.html')):
        L = html_text(path)
        try:
            s = next(i for i, l in enumerate(L) if l.startswith('Spread the Glory')) + 1
            e = next(i for i, l in enumerate(L) if i > s and l.startswith('Spread the Glory'))
        except StopIteration:
            continue
        titles.append(L[s - 4 if False else s - 4])
        kind = 'chaupai'
        started = False
        for l in L[s:e]:
            hm = re.match(r'^(श्लोक|सोरठा|चौपाई|दोहा|छंद|छन्द)\s*[:ः]?\s*$', l)
            if hm:
                kind = KINDS[hm.group(1)]
                blocks.append((kind, []))
                started = True
                continue
            if re.match(r'^(भावार्थ|मासपारायण|नवाह्न|\[)', l) or not DEV.search(l) or LAT.search(l):
                continue
            l = clean(l)
            if not l:
                continue
            l, _mk = split_marker(l)
            if not started or not blocks:
                blocks.append((kind, []))
                started = True
            blocks[-1][1].append(l)
    return blocks
