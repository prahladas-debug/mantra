#!/usr/bin/env python3
"""Build books-src/ramcharitmanas/<part>/<NNN>.json for Bal Kand and Ayodhya Kand.

Usage: build.py bal|ayodhya [--text-only]
Inputs (see fetch/parse scripts):
  $RCM_WORK/parsed/a_<kanda>.json   base text (Gita Press text as typed on ramcharit.in) parsed by parse_a.py
  $RCM_WORK/parsed/wa_<kanda>.json  WirelessAlien/Ramcharitmanas segments parsed by parse_wa.py
  overrides.py                      readings taken against the base, with witnesses and reasons
  units/<part>.json                 unit titles and summaries (hand-written)
Outputs: books-src/ramcharitmanas/<part>/<NNN>.json and logs/<part>.tsv
Meanings are not written here (another agent adds them).
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import WORK, HERE, ROOT, no_nukta, loose, skeleton
from align import align, word_ops
from overrides import OVERRIDES

PARTS = {
    'bal': dict(part=1, folder='1-bala', name='बालकाण्ड', nameEn='Bal Kand', dohas=361, units=36, ordinal='प्रथमः'),
    'ayodhya': dict(part=2, folder='2-ayodhya', name='अयोध्याकाण्ड', nameEn='Ayodhya Kand', dohas=326, units=33, ordinal='द्वितीयः'),
}
# Hindi commentary that the source page prints between the verses (not part of the text)
DROP_LINES = [('bal', 319, 'श्री रामचन्द्रजी का वर वेश'), ('ayodhya', 325, 'संस्कृत कोष में')]
# A line of the base that runs two ardhalis together (Ayodhya 2: "...राखें॥वन तीनि काल ..." lost तिभु)
LINE_FIXES = [('ayodhya', 2, 'राखें॥वन तीनि काल जग माहीं। भूरिभाग दसरथ सम नाहीं ॥',
               'राखें ॥\nतिभुवन तीनि काल जग माहीं। भूरिभाग दसरथ सम नाहीं ॥',
               'WA has the line तिभुवन तीनि काल जग माहीं । भूरि भाग दसरथ सम नाहीं', 'base ran two ardhalis into one and lost तिभु')]


# Punctuation the base lost (a danda missing inside an ardhali, or at the end of a line)
PUNCT_FIXES = [
    ('bal', 47, 'चाहहु सुनै राम गुन गूढ़ा कीन्हिहु', 'चाहहु सुनै राम गुन गूढ़ा। कीन्हिहु'),
    ('bal', 215, 'मूरति मधुर मनोहर देखी भयउ', 'मूरति मधुर मनोहर देखी। भयउ'),
    ('bal', 325, 'जगमगात मनि खंभन माहीं', 'जगमगात मनि खंभन माहीं॥'),
    ('ayodhya', 226, 'नहाने पूजि पुरारि', 'नहाने। पूजि पुरारि'),
]


def fix_marks(line):
    """Danda forms: '।।' -> '॥', stray marks after '॥' removed, one space before every danda, one after an inner one."""
    line = line.replace('|', '।')
    line = re.sub(r'[॥।]{2,}', lambda m: '॥' if '॥' in m.group(0) or len(m.group(0)) == 2 else '।', line)
    line = re.sub(r'\s*([।॥])\s*', r' \1 ', line)
    line = re.sub(r'\s+', ' ', line).strip()
    return line


def clean(line, log, n):
    l = no_nukta(line).replace('‌', '').replace('‍', '')
    if '-' in l:
        log.append((n, l, l.replace('-', ' '), 'ramcharit.in', 'hyphen between repeated words written as a space (builder allows hyphens only at line ends)', ''))
        l = l.replace('-', ' ')
    return l


def load(kanda):
    A = json.load(open(f'{WORK}/parsed/a_{kanda}.json'))
    W = json.load(open(f'{WORK}/parsed/wa_{kanda}.json'))
    return A, {g['idx']: g for g in W}


def build_text(kanda):
    cfg = PARTS[kanda]
    A, wa = load(kanda)
    log = []          # (doha, base, chosen, witnesses, reason, flag)
    groups = {}       # n -> dict(lines=[..], kinds=[..])
    for g in A['groups']:
        n = g['n']
        lines, kinds = [], []
        for it in g['items']:
            for l in it['lines']:
                if any(k == kanda and n == nn and l.startswith(s) for k, nn, s in DROP_LINES):
                    log.append((n, l[:60] + '…', '(dropped)', 'ramcharit.in', 'Hindi commentary printed among the verses, not text', ''))
                    continue
                lines.append(clean(l, log, n)); kinds.append(it['kind'])
        groups[n] = {'lines': lines, 'kinds': kinds}
    # line repairs and readings, applied to the group text
    for k, n, old, new, wit, reason in LINE_FIXES:
        if k != kanda:
            continue
        gr = groups[n]
        text = '\n'.join(gr['lines'])
        old, new = no_nukta(old), no_nukta(new)
        assert text.count(old) == 1, (n, old)
        text = text.replace(old, new)
        gr['lines'] = text.split('\n')
        # kinds: the repaired line added one chaupai line
        i = next(i for i, l in enumerate(gr['lines']) if l.startswith('तिभुवन'))
        gr['kinds'].insert(i, gr['kinds'][i - 1])
        log.append((n, old, new, wit, reason, ''))
    for k, n, old, new, wit, reason in OVERRIDES:
        if k != kanda:
            continue
        gr = groups[n]
        text = '\n'.join(gr['lines'])
        old, new = no_nukta(old), no_nukta(new)
        if text.count(old) != 1:
            raise SystemExit(f'override not unique/absent: {kanda} {n} {old!r} ({text.count(old)})')
        text = text.replace(old, new)
        gr['lines'] = text.split('\n')
        flag = 'CHECK' if reason.startswith('CHECK') else ''
        if old != new:
            log.append((n, old, new, wit, reason, flag))
        else:
            log.append((n, old, new, wit, reason, 'CHECK'))
    for k, n, old, new in PUNCT_FIXES:
        if k != kanda:
            continue
        gr = groups[n]
        text = '\n'.join(gr['lines'])
        old, new = no_nukta(old), no_nukta(new)
        assert text.count(old) == 1, (n, old)
        gr['lines'] = text.replace(old, new).split('\n')
        log.append((n, old, new, 'WA (punctuation)', 'danda missing in the base text; added', ''))
    for n, gr in groups.items():
        gr['lines'] = [fix_marks(l) for l in gr['lines']]
        for i, (l, kd) in enumerate(zip(gr['lines'], gr['kinds'])):
            # the inner danda of an ardhali typed as '॥'
            if kd == 'chaupai' and l.count('।') == 0 and l.count('॥') == 2:
                gr['lines'][i] = l.replace(' ॥', ' ।', 1)
                log.append((n, l, gr['lines'][i], 'ramcharit.in', 'inner danda of a chaupai ardhali written । (base had ॥)', ''))
                continue
            # an ardhali typed with a final '।' instead of '॥' (two dandas, no double danda)
            if kd == 'chaupai' and l.count('।') == 2 and l.count('॥') == 0 and l.endswith('।'):
                gr['lines'][i] = l[:-1].rstrip() + ' ॥'
                log.append((n, l, gr['lines'][i], 'ramcharit.in', 'final danda of a chaupai ardhali written ॥ as in the rest of the text', ''))
    # prelude and closing
    prelude = []
    for b in A['prelude']:
        prelude.append({'kind': b['kind'], 'lines': [fix_marks(clean(l, log, 0)) for l in b['lines']]})
    closing = []
    for pos, l in A['free']:
        m = re.search(r'इति श्रीमद्रामचरितमानसे[^।]*।', l)
        if m:
            closing.append([fix_marks(m.group(0))])
    return A, wa, groups, prelude, closing, log


def collate_log(kanda, A, wa, groups):
    """Count agreement with the second witness after the readings above (statistics for the report)."""
    stats = dict(lines=0, same=0, orth=0, subst=0, a_only=0, w_only=0)
    for n, gr in groups.items():
        wl = [it['line'] for it in wa[n]['items']]
        for i, j in align(gr['lines'], wl):
            stats['lines'] += 1 if i is not None else 0
            if i is None:
                stats['w_only'] += 1
            elif j is None:
                stats['a_only'] += 1
            elif loose(gr['lines'][i]) == loose(wl[j]):
                stats['same'] += 1
            elif skeleton(gr['lines'][i]) == skeleton(wl[j]):
                stats['orth'] += 1
            else:
                stats['subst'] += 1
    return stats


def main():
    kanda = sys.argv[1]
    cfg = PARTS[kanda]
    A, wa, groups, prelude, closing, log = build_text(kanda)
    ns = sorted(groups)
    assert ns == list(range(1, cfg['dohas'] + 1)), 'doha numbering is not 1..%d' % cfg['dohas']
    # line-shape checks
    bad = 0
    for n in ns:
        gr = groups[n]
        for i, (l, kd) in enumerate(zip(gr['lines'], gr['kinds'])):
            inner = l.count('।'); end = l.rstrip().endswith('॥')
            if kd == 'chaupai' and not (inner == 1 and l.count('॥') == 1 and end):
                print('chaupai line shape', kanda, n, l); bad += 1
            if kd in ('doha', 'sortha') and not ((l.endswith('।') and l.count('॥') == 0 and l.count('।') == 1) or (l.endswith('॥') and l.count('॥') == 1 and l.count('।') == 0)):
                print('doha line shape', kanda, n, l); bad += 1
        if not gr['lines'][-1].endswith('॥'):
            print('group does not end with ॥', kanda, n, gr['lines'][-1]); bad += 1
    print('line shape problems:', bad)
    stats = collate_log(kanda, A, wa, groups)
    print('collation after readings:', stats)
    kinds = {}
    for n in ns:
        for kd in groups[n]['kinds']:
            kinds[kd] = kinds.get(kd, 0) + 1
    print('line counts by kind:', kinds, 'prelude blocks', len(prelude))
    json.dump({'groups': {str(n): groups[n] for n in ns}, 'prelude': prelude, 'closing': closing, 'stats': stats, 'kinds': kinds},
              open(f'{WORK}/parsed/final_{kanda}.json', 'w'), ensure_ascii=False, indent=1)
    # log
    os.makedirs(f'{HERE}/logs', exist_ok=True)
    with open(f'{HERE}/logs/{cfg["folder"]}.tsv', 'w', encoding='utf8') as f:
        f.write('doha\tbase\tchosen\twitnesses\treason\n')
        for n, base, chosen, wit, reason, flag in sorted(log, key=lambda x: x[0]):
            r = reason if not flag or reason.startswith('CHECK') else 'CHECK: ' + reason
            row = [str(n or 'opening'), base, chosen, wit, r]
            f.write('\t'.join(x.replace('\n', ' / ').replace('\t', ' ') for x in row) + '\n')
    if '--text-only' in sys.argv:
        return
    meta = json.load(open(f'{HERE}/units/{cfg["folder"]}.json'))
    assert len(meta) == cfg['units'], len(meta)
    out_dir = f'{ROOT}/books-src/ramcharitmanas/{cfg["folder"]}'
    os.makedirs(out_dir, exist_ok=True)
    for u in range(1, cfg['units'] + 1):
        lo, hi = 10 * (u - 1) + 1, (cfg['dohas'] if u == cfg['units'] else 10 * u)
        m = meta[u - 1]
        verses = []
        if u == 1:
            for b in prelude:
                verses.append({'text': '\n'.join(b['lines'])})
        for n in range(lo, hi + 1):
            verses.append({'n': n, 'text': '\n'.join(groups[n]['lines'])})
        if u == cfg['units']:
            for c in closing:
                verses.append({'text': '\n'.join(c)})
        sections = m.get('sections')
        if sections:
            # a unit may split at an episode boundary: sections = [{title, titleEn, from}]; verses are cut by doha number
            secs = []
            for si, s in enumerate(sections):
                start = s['from']
                end = sections[si + 1]['from'] if si + 1 < len(sections) else hi + 1
                vs = [v for v in verses if (v.get('n') is None and ((si == 0 and u == 1) or (si == len(sections) - 1 and u == cfg['units']))) or ('n' in v and start <= v['n'] < end)]
                secs.append({'title': s['title'], 'titleEn': s['titleEn'], 'verses': vs})
            # keep opening/closing unnumbered verses in order
            sections_out = secs
        else:
            sections_out = [{'verses': verses}]
        unit = {
            'id': f'ramcharitmanas-{cfg["part"]}-{u:03d}',
            'work': 'ramcharitmanas',
            'part': cfg['part'],
            'partName': cfg['name'],
            'partNameEn': cfg['nameEn'],
            'unit': u,
            'title': m['title'],
            'titleEn': f'Dohas {lo}–{hi} · {m["titleEn"]}',
            'summary': m['summary'],
            'source': f'Gita Press, Shri Ramcharitmanas, {cfg["nameEn"]}, dohas {lo}–{hi}',
            'sections': sections_out,
        }
        with open(f'{out_dir}/{u:03d}.json', 'w', encoding='utf8') as f:
            json.dump(unit, f, ensure_ascii=False, indent=2)
            f.write('\n')
    print('wrote', cfg['units'], 'units to', out_dir)


main()
