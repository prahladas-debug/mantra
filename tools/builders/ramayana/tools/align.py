import re
NAS = {}
for nas, row in (('ङ', 'कखगघ'), ('ञ', 'चछजझ'), ('ण', 'टठडढ'), ('न', 'तथदध'), ('म', 'पफबभ')):
    for c in row: NAS[c] = nas

def norm(t):
    """Spelling-insensitive key: no spaces, punctuation, anusvara/nasal distinctions, sibilant gemination."""
    t = t.replace('‍', '').replace('‌', '')
    t = re.sub(r'[^ऀ-ॿ]', '', t)
    t = re.sub(r'[०-९।॥ऽ॰]', '', t)
    t = t.replace('ँ', 'ं').replace(':', 'ः')
    t = re.sub(r'[ङञणनम]्(?=[कखगघचछजझटठडढतथदधपफबभ])', 'ं', t)
    t = t.replace('म्', 'ं')
    t = re.sub(r'ः(?=[सशषकखपफ])', '', t)
    t = re.sub(r'([सशष])्(?=\1)', '', t)
    t = re.sub(r'र्([यतमधदव])्\1', r'र्\1', t)
    t = re.sub(r'[ंन]्?(?=ल्ल)', 'ं', t)
    t = t.replace('न्न', 'ंन')
    return t

def grams(t, n=3):
    return {t[i:i+n] for i in range(len(t) - n + 1)} if len(t) >= n else {t}

def sim(a, b):
    ga, gb = grams(a), grams(b)
    if not ga or not gb: return 0.0
    return len(ga & gb) / max(1, min(len(ga), len(gb)))

def align(A, B, th=0.45):
    """DP alignment of two lists of normalised strings. Returns list of (i, j, score)."""
    n, m = len(A), len(B)
    GA = [grams(x) for x in A]; GB = [grams(x) for x in B]
    def s(i, j):
        ga, gb = GA[i], GB[j]
        return len(ga & gb) / max(1, min(len(ga), len(gb)))
    import array
    INF = -1e9
    D = [[0.0] * (m + 1) for _ in range(n + 1)]
    P = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1): P[i][0] = 1
    for j in range(1, m + 1): P[0][j] = 2
    for i in range(1, n + 1):
        Di, Dp = D[i], D[i - 1]
        for j in range(1, m + 1):
            sc = s(i - 1, j - 1)
            best, p = Dp[j - 1] + (sc - th), 0
            if Dp[j] > best: best, p = Dp[j], 1
            if Di[j - 1] > best: best, p = Di[j - 1], 2
            Di[j] = best; P[i][j] = p
    i, j, out = n, m, []
    while i > 0 or j > 0:
        p = P[i][j]
        if p == 0:
            out.append((i - 1, j - 1, s(i - 1, j - 1))); i -= 1; j -= 1
        elif p == 1: i -= 1
        else: j -= 1
    return out[::-1]

import sys as _s, os as _o
_s.path.insert(0, _o.path.dirname(_o.path.abspath(__file__)))
from metre import pattern as _pattern

def syl_cut(line, n):
    """Index in line just after the n-th syllable's vowel (+ following non-vowel chars up to next syllable start)."""
    # walk characters, counting vowels (independent vowels or consonants with inherent/matra vowel)
    VOW = set('अआइईउऊऋॠऌएऐओऔ'); MAT = set('ािीुूृॄॢेैोौ')
    cnt = 0; i = 0; L = len(line)
    while i < L:
        c = line[i]
        if c in VOW:
            cnt += 1; i += 1
        elif 'क' <= c <= 'ह' or c == 'ळ':
            nxt = line[i + 1] if i + 1 < L else ''
            if nxt == '्': i += 2; continue
            cnt += 1; i += 2 if nxt in MAT else 1
        else:
            i += 1; continue
        if cnt == n:
            # include following anusvara/visarga and trailing consonants up to a space if there is one soon
            while i < L and line[i] in 'ंःँ': i += 1
            return i
    return None

def halves(text):
    """Split a verse text into half-lines (anuṣṭubh-aware)."""
    t = re.sub(r'[0-9०-९]+(?:\.[0-9०-९]+)*', '', text)
    parts = [p.strip(' ।॥|') for p in re.split(r'[\n।॥|]+', t)]
    parts = [p for p in parts if p.strip()]
    out = []
    for p in parts:
        c = len(_pattern(p))
        if 29 <= c <= 35:
            k = syl_cut(p, 16)
            # move to the nearest space if within 3 chars
            sp = p.rfind(' ', 0, k + 1)
            if sp != -1 and k - sp <= 2: k = sp
            out += [p[:k].strip(), p[k:].strip()]
        else:
            out.append(p.strip())
    return [o for o in out if o]

class HalfIndex:
    """Trigram index over (ref, half-line) pairs for best-match lookup."""
    def __init__(self, items):
        import collections
        self.items = items                      # [(ref, raw_half)]
        self.keys = [norm(t) for _, t in items]
        self.grams = [grams(k) for k in self.keys]
        self.inv = collections.defaultdict(set)
        for i, g in enumerate(self.grams):
            for x in g: self.inv[x].add(i)
    def best(self, raw, k=1):
        import collections
        g = grams(norm(raw))
        c = collections.Counter()
        for x in g:
            for i in self.inv.get(x, ()): c[i] += 1
        res = []
        for i, hits in c.most_common(8):
            sc = hits / max(1, min(len(g), len(self.grams[i])))
            sc2 = hits / max(1, max(len(g), len(self.grams[i])))
            res.append((sc2, sc, i))
        res.sort(reverse=True)
        return [(self.items[i][0], self.items[i][1], s2) for s2, s, i in res[:k]]


def _cut_near(p, n):
    k = syl_cut(p, n)
    if k is None: return None
    # nearest space within the word around k
    left = p.rfind(' ', 0, k + 1); right = p.find(' ', k)
    cands = [x for x in (left, right) if x != -1]
    if cands:
        best = min(cands, key=lambda x: abs(x - k))
        if abs(best - k) <= 6: k = best
    return k


def padas(piece):
    """Split a piece of verse into pādas/half-lines by syllable count (for matching only)."""
    c = len(_pattern(piece))
    if 20 <= c <= 27:
        k = _cut_near(piece, round(c / 2)); return [piece[:k].strip(), piece[k:].strip()] if k else [piece]
    if 29 <= c <= 35:
        k = _cut_near(piece, 16); return [piece[:k].strip(), piece[k:].strip()] if k else [piece]
    if 40 <= c <= 54:
        k = _cut_near(piece, round(c / 2))
        if not k: return [piece]
        return padas(piece[:k].strip()) + padas(piece[k:].strip())
    if 58 <= c <= 70:
        k = _cut_near(piece, 32)
        if not k: return [piece]
        return padas(piece[:k].strip()) + padas(piece[k:].strip())
    return [piece]


def pieces(text):
    t = re.sub(r'[0-9०-९]+(?:\.[0-9०-९]+)*', '', text)
    parts = [p.strip(' ।॥|') for p in re.split(r'[\n।॥|]+', t)]
    out = []
    for p in parts:
        if p.strip(): out += padas(p.strip())
    return [o for o in out if o]
