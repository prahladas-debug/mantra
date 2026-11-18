#!/usr/bin/env python3
"""Build books-src/ramcharitmanas/<part>/<NNN>.json (no meanings) and logs/<part>.tsv from the collated witnesses.
Run after b_fetch.py / b_fetch2.py. Base text: ramcharit.in (Gita Press text); fixes in b_fixes.py."""
import json, os, re, sys, unicodedata
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import b_parse as p
from b_fixes import FIX, KEPT
from b_meta import META

ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
PARTS = {
    'aranya': (3, '3-aranya', 46), 'kishkindha': (4, '4-kishkindha', 30), 'lanka': (6, '6-lanka', 121), 'uttar': (7, '7-uttar', 130),
}
HDR = re.compile(r'^(श्लोक|सोरठा|चौपाई|दोहा|छंद|छन्द)\s*[–:\-]*\s*$')

def nn(s):
    s = unicodedata.normalize('NFD', s).replace('़', '')
    return unicodedata.normalize('NFC', s)

def fmt(line):
    s = line.replace('-', ' ').replace(',', ' ')
    s = re.sub(r'\s*([।॥])\s*', r' \1 ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def build(k):
    num, folder, ndoha = PARTS[k]
    r = p.parse_rc(k)
    log = []
    groups = {}
    for n in sorted(r['groups']):
        g = r['groups'][n]
        lines = []
        for kd, l in zip(g['kinds'], g['lines']):
            l = nn(l)
            if HDR.match(l):
                log.append((n, l, '(removed)', 'base', 'stray section heading typed into the verse'))
                continue
            lines.append([kd, l])
        groups[n] = lines
    # fixes
    for (kk, old, new, wit, why) in FIX:
        if kk != k: continue
        old, new = nn(old), nn(new)
        hits = [(n, i) for n, ls in groups.items() for i, (kd, l) in enumerate(ls) if old in l]
        tot = sum(l.count(old) for n, ls in groups.items() for kd, l in ls)
        if tot != 1:
            raise SystemExit(f'{k}: {old!r} occurs {tot} times')
        n, i = hits[0]
        groups[n][i][1] = groups[n][i][1].replace(old, new)
        log.append((n, old, new, wit, why))
    # global spelling: ऐहि -> एहि (Awadhi lines)
    pat = re.compile(r'(?<![ऀ-ॿ])ऐहि(?![ऀ-ॿ])')
    for n, ls in groups.items():
        for it in ls:
            if pat.search(it[1]):
                new = pat.sub('एहि', it[1])
                log.append((n, 'ऐहि' + ' (in: ' + it[1][:24] + '…)', 'एहि', 'WA', 'base ऐहि for एहि (एहि throughout the base)'))
                it[1] = new
    # missing final danda
    for n, ls in groups.items():
        for it in ls:
            if not it[1].endswith(('।', '॥')):
                end = '।' if it[0] in ('doha', 'sortha') else '॥'
                log.append((n, it[1][-14:], it[1][-14:] + end, 'base page', 'line printed without its closing danda'))
                it[1] += end
    for (kk, old, new, wit, why) in KEPT:
        if kk != k: continue
        old = nn(old)
        n = next((n for n, ls in groups.items() if any(old in l for kd, l in ls)), None)
        if n is None: raise SystemExit(f'{k}: kept phrase {old!r} not found')
        log.append((n, old, old, wit, why + ' [base kept; alternative ' + nn(new) + ']'))
    # opening verses
    opening = []
    for kd, ls in r['opening']:
        ls = [nn(x) for x in ls]
        if kd == 'shloka':
            cur = []
            for l in ls:
                l2, mk = p.split_marker(l)
                cur.append(l2)
                if mk:
                    opening.append(cur); cur = []
            if cur: opening.append(cur)
        else:
            for i in range(0, len(ls), 2): opening.append(ls[i:i + 2])
    # closing
    closing = []
    cl = [nn(x) for x in r.get('closing_raw', {}).get('lines', [])]
    for i in range(0, len(cl), 4): closing.append(cl[i:i + 4])
    colophon = nn(r['colophon']).replace(': ', 'ः ').replace(':', 'ः').replace('समाप्त ः', 'समाप्तः')
    closing.append([colophon])
    return num, folder, ndoha, opening, groups, closing, log

def write(k):
    num, folder, ndoha, opening, groups, closing, log = build(k)
    meta = META[k]
    nunits = len(meta)
    bk = json.load(open(os.path.join(ROOT, 'books-src/ramcharitmanas/book.json')))
    part = next(x for x in bk['parts'] if x['part'] == num)
    assert part['units'] == nunits and part['verses'] == ndoha, (part['units'], part['verses'])
    outdir = os.path.join(ROOT, 'books-src/ramcharitmanas', folder)
    os.makedirs(outdir, exist_ok=True)
    nlines = 0
    for u in range(1, nunits + 1):
        a, b = 10 * (u - 1) + 1, (ndoha if u == nunits else 10 * u)
        verses = []
        if u == 1:
            for v in opening: verses.append({'text': '\n'.join(fmt(x) for x in v)})
        for n in range(a, b + 1):
            verses.append({'n': n, 'text': '\n'.join(fmt(l) for kd, l in groups[n])})
        if u == nunits:
            for v in closing: verses.append({'text': '\n'.join(fmt(x) for x in v)})
        nlines += sum(v['text'].count('\n') + 1 for v in verses)
        t, ten, sen, shi = meta[u]
        t = re.sub(r'\s+', ' ', nn(re.sub(r'[,\-]+', ' ', t))).strip()
        d = {
            'id': f'ramcharitmanas-{num}-{u:03d}', 'work': 'ramcharitmanas', 'part': num,
            'partName': part['name'], 'partNameEn': part['nameEn'], 'unit': u,
            'title': t, 'titleEn': f'Dohas {a}–{b} · {ten}',
            'summary': {'en': sen, 'hi': shi},
            'source': f'Gita Press, Shri Ramcharitmanas, {part["nameEn"]}, dohas {a}–{b}',
            'sections': [{'verses': verses}],
        }
        with open(os.path.join(outdir, f'{u:03d}.json'), 'w', encoding='utf-8') as f:
            json.dump(d, f, ensure_ascii=False, indent=2); f.write('\n')
    with open(os.path.join(HERE, 'logs', folder + '.tsv'), 'w', encoding='utf-8') as f:
        f.write('doha\tbase\tchosen\twitnesses\treason\n')
        for n, a_, b_, w, why in sorted(log, key=lambda x: (x[0], x[1])):
            f.write(f'{n}\t{a_}\t{b_}\t{w}\t{why}\n')
    print(k, 'units', nunits, 'lines', nlines, 'log', len(log), 'CHECK', sum('CHECK' in x[4] for x in log))

if __name__ == '__main__':
    for k in (sys.argv[1:] or PARTS): write(k)
