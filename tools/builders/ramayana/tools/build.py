"""Build books-src/ramayana/<k>-<kanda>/<NNN>.json from the Wikisource base, collated with IITK and CE.

    python3 -I tools/build.py <kanda> [<kanda> ...] [--write]

Stages per sarga: structural fixes (numbering, lost verses, prakshipta), word-split sargas
re-set from IITK half-lines, orthographic cleaning, word-level typo collation, formatting.
Every change is logged to work/log_<k>.tsv.
"""
import collections, difflib, json, os, re, sys
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(R, 'tools'))
from align import norm, align, halves, HalfIndex, grams, pieces, padas  # noqa
from metre import count  # noqa
from common import ORD, KANDA, nasals  # noqa
import manual  # noqa

REPO = '/home/user/mantra'
args = [a for a in sys.argv[1:] if not a.startswith('--')]
WRITE = '--write' in sys.argv
base = json.load(open(f'{R}/work/base_raw.json'))
iitk = json.load(open(f'{R}/work/iitk.json'))
ce = json.load(open(f'{R}/work/ce.json'))

VOWEL_SIGN = {'अ': '', 'आ': 'ा', 'इ': 'ि', 'ई': 'ी', 'उ': 'ु', 'ऊ': 'ू', 'ऋ': 'ृ', 'ॠ': 'ॄ', 'ए': 'े', 'ऐ': 'ै', 'ओ': 'ो', 'औ': 'ौ'}
PADA = manual.PADA  # word-split sargas re-set from IITK


def wordset(texts):
    c = collections.Counter()
    for t in texts:
        for w in re.split(r'[\s।॥|\-]+', t):
            if w: c[norm(w)] += 1
    return c


def clean_iitk(t):
    t = re.sub(r'[0-9०-९]+(?:\.[0-9०-९]+)*', '', t)
    t = t.replace(':', 'ः')
    t = re.sub(r'\s+', ' ', t).strip(' ।॥|')
    t = re.sub(r'\s*ऽ\s*', 'ऽ', t)
    t = re.sub(r'(?<=\S)(?<!नि)(?<!दु) ?स्स', 'ः स', t)
    t = re.sub(r'(?<=\S)(?<!नि)(?<!दु) ?श्श', 'ः श', t)
    return t


VOICED = 'गघजझडढदधबभयरवअआइईउऊऋएऐओऔ'
SHORT = set('िुृ')


def sandhi(l):
    """External sandhi where the source leaves a word-final consonant unjoined (orthography only)."""
    def vow(m):
        pre, c, v = m.group(1), m.group(2), m.group(3)
        c2 = {'त': 'द', 'क': 'ग', 'ट': 'ड', 'प': 'ब'}.get(c, c)
        if c in 'नङ' and (pre == '' or pre in SHORT or ('क' <= pre <= 'ह')):
            return pre + c + '्' + c + VOWEL_SIGN[v]
        return pre + c2 + VOWEL_SIGN[v]
    l = re.sub(r'([क-हळािीुूृेैोौ]?)([क-हळ])्\s+([अआइईउऊऋॠएऐओऔ])', vow, l)
    # final t/k/T/p before a voiced consonant
    l = re.sub(r'([तकटप])्(?=\s+[गघजझडढदधबभयरव])', lambda m: {'त': 'द', 'क': 'ग', 'ट': 'ड', 'प': 'ब'}[m.group(1)] + '्', l)
    l = re.sub(r'त्(?=\s+[चछ])', 'च्', l)
    l = re.sub(r'त्(?=\s+[जझ])', 'ज्', l)
    l = re.sub(r'त्(?=\s+ल)', 'ल्', l)
    l = re.sub(r'त्\s+न', 'न्न', l)
    l = re.sub(r'न्\s+न', 'न्न', l)
    l = re.sub(r'त्(?=\s+म)', 'न्', l)
    # visarga before t/th, c/ch, T/Th -> sibilant, joined
    l = re.sub(r'ः\s+([तथ])', r'स्\1', l)
    l = re.sub(r'ः\s+([चछ])', r'श्\1', l)
    l = re.sub(r'ः\s+([टठ])', r'ष्\1', l)
    # Southern geminate sibilant for visarga (दशरथस्सुतम्) -> visarga, as printed in the vulgate
    l = re.sub(r'(?<![\s])(?<!नि)(?<!दु)(?<!बहि)(?<!आवि)स्स', 'ः स', l)
    l = re.sub(r'त्\s+श', 'च्छ', l)
    # word-final m before a consonant inside the line -> anusvara
    l = re.sub(r'म्(?=\s+[क-हळ])', 'ं', l)
    return l


def ortho(l, log, ref):
    """Orthographic cleaning of one line (no change of reading)."""
    o = l
    l = l.replace('‍', '').replace('‌', '').replace('﻿', '').replace(' ', ' ')
    l = l.replace('््', '्')
    l = l.replace('.', ' ').replace('ॆ', 'ै').replace('ऺ', '').replace("'", '').replace('‘', '').replace('’', '')
    l = re.sub(r'\([^)]*\)', ' ', l)                  # glosses in brackets
    l = re.sub(r'(?<=[ऀ-ॿ])(?<!्) (र्)(?=[क-ह])', r'\1', l)   # 'पुन र्जातु' -> 'पुनर्जातु'
    l = re.sub(r'^[:\s।॥|]+', '', l)
    l = re.sub(r'[\s।॥|]+$', '', l)
    l = l.replace('।', ' ').replace('॥', ' ')
    l = re.sub(r'(?<=[ऀ-ॿ]):', 'ः', l)
    l = re.sub(r'\s+ऽ', 'ऽ', l)
    l = re.sub(r'(?<=\S)-(?=\S)', '', l)            # hyphens inside a line (compound marks of the source)
    l = re.sub(r'र्([यतमधदव])्\1', r'र्\1', l)       # आर्य्य, मुहूर्त्त, धर्म्म -> modern spelling
    l = sandhi(l)
    l = re.sub(r'\s+', ' ', l).strip()
    l = nasals(l)
    return l


def normlines(lines):
    # leading visarga/anusvara belongs to the previous line
    out = []
    for l in lines:
        if out and re.match(r'^[ःं]', l):
            out[-1] += l[0]; l = l[1:].strip()
        if l: out.append(l)
    # quarter lines of an anuṣṭubh -> half-lines
    res = []; i = 0
    while i < len(out):
        if i + 1 < len(out) and 6 <= count(out[i]) <= 11 and 6 <= count(out[i + 1]) <= 11 and 14 <= count(out[i]) + count(out[i + 1]) <= 18:
            res.append(out[i] + ' ' + out[i + 1]); i += 2
        else:
            res.append(out[i]); i += 1
    return res


def fmt(lines):
    lines = list(lines)
    for i in range(len(lines) - 1):
        if re.match(r'^(र्[क-ह]|श्च|ञ्च|च्च|च्छ|न्न|ङ्ग|ण्ड|न्त|न्द|ल्ल|द्ध|द्भ|ग्ध|त्त|स्स)', lines[i + 1]) and not lines[i].endswith('-'):
            lines[i] = lines[i] + '-'
    n = len(lines)
    counts = [count(l.rstrip('-')) for l in lines]
    out = []
    par = 0  # position within a pair of long-metre pādas
    for i, l in enumerate(lines):
        pada = 9 <= counts[i] <= 13
        if i == n - 1:
            out.append(l + ' ॥'); continue
        if pada and par == 0:
            out.append(l); par = 1; continue
        par = 0
        out.append(l if l.endswith('-') else l + ' ।')
    return '\n'.join(out)


def split_halves_base(t):
    """Base verse -> half-lines, keeping its own line structure (danda marks half-verse ends)."""
    lines = [x.strip() for x in t.split('\n') if x.strip()]
    return lines


def edits(a, b):
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    return len(a) + len(b) - 2 * sum(x.size for x in sm.get_matching_blocks())


def run(k):
    K = str(k)
    log = []
    stats = {}
    kbase = base[K]
    kiitk = iitk.get(K, {})
    # corpora for the collation
    iitk_words = wordset(t for s in kiitk.values() for _, t in s)
    ce_words = wordset(t for kk in ce for _, t in ce[kk])
    base_words = wordset(t for s in kbase.values() for n, t in s['items'] if n)
    ihalf = HalfIndex([(r, clean_iitk(h)) for s in kiitk.values() for r, t in s for h in halves(t) + pieces(t)])
    cek = {'1': '1', '2': '2', '3': '3', '4': '4', '6': '6', '7': '7'}[K]
    chalf = HalfIndex([(r, h) for r, t in ce[cek] for h in halves(t) + pieces(t)])
    units = {}
    global ATTESTED
    pada_s = {str(s) for (kk, s) in PADA if kk == k}
    clean_base = wordset(t for s, v in kbase.items() if s not in pada_s for n, t in v['items'] if n)
    ATTESTED = lambda x: clean_base[x] > 0 or iitk_words[x] > 0 or ce_words[x] > 0
    for s in range(1, len(kbase) + 1):
        S = str(s)
        ref = f'{k}.{s}'
        items = [list(x) for x in kbase[S]['items']]
        # ---- manual structural edits first
        items = manual.structural(k, s, items, log)
        for it in items:
            if it[0] is not None and re.search(r'ति भावः|त्यर्थः|योजनीयम्|ति गम्यते|पुनरुक्तिः|त्वेन सम्मतम्', it[1]) and count(it[1]) < 24:
                iv = dict(kiitk.get(S, [])).get(f'{k}.{s}.{it[0]}')
                log.append((f'{ref}.{it[0]}', 'restored', "the base has a commentator's note in place of the verse; verse taken from IITK", iv or '(none: dropped)'))
                it[1] = '\n'.join(clean_iitk(h) for h in halves(iv)) if iv else ''
        items = [it for it in items if it[1].strip()]
        # prakshipta split
        praksh = []
        if (k, s) in manual.PRAKSHIPTA:
            cut = manual.PRAKSHIPTA[(k, s)]
            praksh = items[cut:]
            items = items[:cut]
            log.append((ref, 'structure', f'interpolated sarga after {ref} ({len([1 for n, _ in praksh if n])} verses) kept as an unnumbered section', ''))
        # ---- IITK alignment (window s-1..s+3 for shifted kandas)
        win = []
        for sx in range(max(1, s - 2), s + 4):
            win += [(r, t) for r, t in kiitk.get(str(sx), [])]
        nums = [i for i, (n, _) in enumerate(items) if n is not None]
        A = [norm(items[i][1]) for i in nums]
        B = [norm(t) for _, t in win]
        al = align(A, B, th=0.45)
        amap = {nums[i]: (j, sc) for i, j, sc in al if sc >= 0.45}
        # ---- lost verses: a skip in numbering with exactly one unaligned IITK verse in the gap
        seq = [items[i][0] for i in nums]
        if seq != list(range(1, len(seq) + 1)):
            inserted = 0
            for pos in range(1, len(nums)):
                a, b2 = items[nums[pos - 1]][0], items[nums[pos]][0]
                if b2 == a + 2 and (k, s, a + 1) not in manual.NO_RESTORE:
                    # IITK neighbours
                    ja = next((amap[nums[q]][0] for q in range(pos - 1, max(-1, pos - 4), -1) if nums[q] in amap), None)
                    jb = next((amap[nums[q]][0] for q in range(pos, min(len(nums), pos + 3)) if nums[q] in amap), None)
                    if ja is None or jb is None: continue
                    used = {v[0] for v in amap.values()}
                    cand = [j for j in range(ja + 1, jb) if j not in used]
                    if len(cand) == 1:
                        r, t = win[cand[0]]
                        hs = [clean_iitk(h) for h in halves(t)]
                        cm = [chalf.best(h)[0][2] if chalf.best(h) else 0 for h in hs]
                        if hs and min(cm) >= 0.5:
                            # insert after the base item aligned to ja
                            after = next(q for q in range(pos - 1, -1, -1) if nums[q] in amap and amap[nums[q]][0] < cand[0])
                            ins_at = nums[after] + 1
                            items.insert(ins_at, [a + 1, '\n'.join(hs)])
                            log.append((f'{ref}.{a + 1}', 'restored', 'missing in the base (numbering skips it); taken from IITK ' + r + ', confirmed by CE', '\n'.join(hs)))
                            inserted += 1
                            break  # recompute positions on next pass
            if inserted:
                return_items = items
            # renumber sequentially
            c = 0
            ren = []
            for it in items:
                if it[0] is not None:
                    c += 1
                    if it[0] != c: ren.append(f'{it[0]}→{c}')
                    it[0] = c
            if ren:
                log.append((ref, 'renumbered', 'base numbering not sequential: ' + ', '.join(ren[:12]) + (' …' if len(ren) > 12 else ''), ''))
            # recompute alignment
            nums = [i for i, (n, _) in enumerate(items) if n is not None]
            A = [norm(items[i][1]) for i in nums]
            al = align(A, B, th=0.45)
            amap = {nums[i]: (j, sc) for i, j, sc in al if sc >= 0.45}
        # ---- word-split sargas: re-set each half-line from IITK
        if (k, s) in PADA:
            items = reset_from_iitk(k, s, items, win, ihalf, chalf, log)
            nums = [i for i, (n, _) in enumerate(items) if n is not None]
            A = [norm(items[i][1]) for i in nums]
            al = align(A, B, th=0.45)
            amap = {nums[i]: (j, sc) for i, j, sc in al if sc >= 0.45}
        # ---- clean, collate, format
        out_items = []
        for idx, (n, t) in enumerate(items):
            vref = f'{ref}.{n}' if n else ref
            if n is None:
                out_items.append({'text': ortho(t, log, vref) + ' ॥'})
                continue
            lines = [ortho(x, log, vref) for x in split_halves_base(t)]
            lines = [x for x in lines if x]
            lines = normlines(lines)
            for gk, a_, b_ in manual.GLOBAL:
                if gk == k and any(a_ in x for x in lines):
                    lines = [x.replace(a_, b_) for x in lines]
                    log.append((vref, 'fix', 'spelling slip repeated in the base', f'{a_} → {b_}'))
            # manual replacements
            for a_, b_ in manual.REPLACE.get((k, s, n), []):
                j = '\n'.join(lines)
                if a_ not in j:
                    raise SystemExit(f'manual replace not found {vref}: {a_} IN {j!r}')
                lines = j.replace(a_, b_).split('\n')
                log.append((vref, 'fix', 'manual (see note)', f'{a_} → {b_}'))
            if idx in amap:
                j, sc = amap[idx]
                lines = collate(vref, lines, clean_iitk(win[j][1]), win[j][0], iitk_words, ce_words, base_words, log, loose=(k, s) in PADA)
            out_items.append({'n': n, 'text': fmt(lines)})
        # prakshipta section
        sections = [{'verses': out_items}]
        if praksh:
            pv = []
            for n, t in praksh:
                if n is None and re.search(r'प्रक्षिप्त', t):
                    continue
                lines = [ortho(x, log, ref) for x in split_halves_base(t)]
                lines = [re.sub(r'^[०-९0-9]+[अ-ह]?\s*', '', x) for x in lines if x and 'प्रक्षिप्त' not in x]
                if lines:
                    pv.append({'text': fmt(lines)})
            sections.append({'title': 'प्रक्षिप्तः सर्गः', 'titleEn': 'Interpolated sarga',
                             'note': manual.PRAKSHIPTA_NOTE[(k, s)], 'verses': pv})
        colo = f'इत्यार्षे श्रीमद्रामायणे वाल्मीकीये आदिकाव्ये\n{KANDA[k][3]} {ORD[s - 1]} सर्गः ॥'
        out_items.append({'text': colo})
        stats[s] = sum(1 for v in out_items if 'n' in v)
        units[s] = sections
    return units, stats, log


DIFFS = []
ATTESTED = None


def merge(w, h):
    """IITK piece w gives sandhi and spacing; the base piece h (word-split vulgate) gives the reading.
    Token spans whose letters differ (beyond spelling) keep the base's words, joined by rule."""
    hb = sandhi(manual.join_split(h))
    if re.search(r'[A-Za-z.()=]', hb):
        return w
    wt, ht = w.split(), hb.split()
    A = [norm(x) for x in wt]; B = [norm(x) for x in ht]
    sm = difflib.SequenceMatcher(None, A, B, autojunk=False)
    out = []
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == 'equal' or ''.join(A[i1:i2]) == ''.join(B[j1:j2]):
            out += wt[i1:i2]
        elif ATTESTED is not None and all(ATTESTED(x) for x in B[j1:j2]):
            out += ht[j1:j2]          # a genuine reading of the base
        else:
            out += wt[i1:i2]          # base letters unattested anywhere: a slip of the word-split copy
    if not out:
        return w
    return ' '.join(out)


def reset_from_iitk(k, s, items, win, ihalf, chalf, log):
    ref = f'{k}.{s}'
    # local IITK half-lines in sarga order
    loc = []
    for r, t in win:
        for h in pieces(t):
            loc.append((r, clean_iitk(h)))
    out = []
    bh = []  # (item index, half text)
    for i, (n, t) in enumerate(items):
        if n is None: continue
        segs = [x.strip() for x in re.split(r'[।॥]', t.replace('\n', ' ')) if x.strip()]
        merged = []
        for sg in segs:
            sg = re.sub(r'\s+', ' ', sg)
            if merged and count(merged[-1]) < 12:
                merged[-1] = merged[-1] + ' ' + sg
            else:
                merged.append(sg)
        if len(merged) > 1 and count(merged[-1]) < 12:
            merged[-2] += ' ' + merged.pop()
        for sg in merged:
            for pd in padas(sg):
                bh.append((i, pd))
    al = align([norm(h) for _, h in bh], [norm(h) for _, h in loc], th=0.4)
    m = {i: (j, sc) for i, j, sc in al if sc >= 0.5}
    new = collections.defaultdict(list)
    src = collections.Counter()
    def agree(h, w):
        return norm(manual.join_split(h)) == norm(w)
    for bi, (i, h) in enumerate(bh):
        if bi in m:
            w = loc[m[bi][0]][1]
            mw = merge(w, h)
            new[i].append(mw); src['iitk'] += 1
            if not agree(h, w): DIFFS.append((f'{ref}.{items[i][0]}', h, w, mw))
            continue
        g = ihalf.best(h)
        c = chalf.best(h)
        gs = g[0][2] if g else 0
        cs = c[0][2] if c else 0
        if gs >= 0.6 or (gs >= 0.4 and gs + 0.1 >= cs):
            new[i].append(merge(g[0][1], h)); src['iitk-global'] += 1; continue
        if c and cs >= 0.45:
            new[i].append(merge(c[0][1], h)); src['ce'] += 1
            log.append((f'{ref}.{items[i][0]}', 'reset-ce', 'half-line not in IITK; set from CE ' + c[0][0], c[0][1]))
            continue
        j = manual.join_split(h)
        new[i].append(j); src['joined'] += 1
        log.append((f'{ref}.{items[i][0]}', 'reset-joined', 'half-line in neither IITK nor CE; sandhi joined by rule from the word-split base — CHECK', f'{h} → {j}'))
    for i, (n, t) in enumerate(items):
        if n is None:
            out.append([n, t]); continue
        out.append([n, '\n'.join(new[i]) if new[i] else t])
    log.append((ref, 'reset', f'word-split base re-set from IITK half-lines ({dict(src)})', ''))
    return out


def collate(vref, lines, itext, iref, iw, cw, bw, log, loose=False):
    """Single-word typo fixes: base word unattested anywhere, IITK word attested in CE, close in spelling,
    and the metre of the half-line not made worse."""
    ilines = halves(itext)
    out = []
    itoks_all = re.split(r'\s+', ' '.join(ilines))
    for li, l in enumerate(lines):
        toks = l.split(' ')
        A = [norm(x) for x in toks]
        Bt = [x for x in itoks_all if x]
        B = [norm(x) for x in Bt]
        sm = difflib.SequenceMatcher(None, A, B, autojunk=False)
        new = list(toks)
        for op, i1, i2, j1, j2 in sm.get_opcodes():
            if op != 'replace' or i2 - i1 != 1 or j2 - j1 != 1:
                continue
            a, b = A[i1], B[j1]
            if not a or not b or a == b: continue
            if edits(a, b) > 2 or len(a) < 3: continue
            if bw[a] > 1 or iw[a] > 0 or cw[a] > 0: continue      # base form is attested: a variant, keep it
            if cw[b] == 0 and not (loose and iw[b] > 1): continue  # IITK form not confirmed by CE
            if a.replace('ण', 'न') == b.replace('ण', 'न') and not loose: continue  # n/ṇ: leave the base's spelling
            if (vref, toks[i1]) in manual.REJECT: continue      # judged a genuine variant
            cand = new[:i1] + [Bt[j1]] + new[i2:]
            before, after = count(' '.join(new)), count(' '.join(cand))
            if before == 16 and after != 16: continue
            if before != 16 and after != 16 and abs(after - 16) > abs(before - 16): continue
            old = new[i1]
            nb = nasals(Bt[j1].replace(':', 'ः'))
            # keep the base's punctuation-free token shape
            new[i1] = nb
            log.append((vref, 'fix', f'typo: base form unattested; IITK {iref} = CE', f'{old} → {nb}'))
        out.append(' '.join(new))
    return out


if __name__ == '__main__':
    for a in args:
        k = int(a)
        units, stats, log = run(k)
        slug = KANDA[k][0]
        with open(f'{R}/work/log_{k}.tsv', 'w') as f:
            for row in log:
                f.write('\t'.join(x.replace('\n', ' / ') for x in row) + '\n')
        tot = sum(stats.values())
        print(f'kanda {k}: sargas {len(stats)} verses {tot}; log {len(log)} ({collections.Counter(r[1] for r in log)})')
        json.dump({'stats': stats}, open(f'{R}/work/stats_{k}.json', 'w'))
        json.dump(DIFFS, open(f'{R}/work/resetdiff_{k}.json', 'w'), ensure_ascii=False, indent=0)
        json.dump({str(s): v for s, v in units.items()}, open(f'{R}/work/units_{k}.json', 'w'), ensure_ascii=False)
