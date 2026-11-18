"""Line alignment between base lines (A) and witness lines (W) of one doha group, and word-level diffs."""
import difflib, re
from common import loose, no_nukta, skeleton

def words(line):
    return re.sub(r'[।॥|]', ' ', no_nukta(line)).replace('‘', '').replace('’', '').split()

def sim(a, b):
    ka, kb = skeleton(a), skeleton(b)
    if ka == kb:
        return 1.0
    return difflib.SequenceMatcher(None, ka, kb, autojunk=False).ratio()

def align(al, wl, thr=0.55):
    """Returns list of (i or None, j or None) in order."""
    n, m = len(al), len(wl)
    S = [[sim(al[i], wl[j]) for j in range(m)] for i in range(n)]
    best = [[0.0] * (m + 1) for _ in range(n + 1)]
    back = [[None] * (m + 1) for _ in range(n + 1)]
    for i in range(n + 1):
        for j in range(m + 1):
            if i == 0 and j == 0:
                continue
            cands = []
            if i > 0:
                cands.append((best[i - 1][j], 'a'))
            if j > 0:
                cands.append((best[i][j - 1], 'w'))
            if i > 0 and j > 0 and S[i - 1][j - 1] >= thr:
                cands.append((best[i - 1][j - 1] + S[i - 1][j - 1], 'm'))
            best[i][j], back[i][j] = max(cands, key=lambda x: x[0])
    i, j, out = n, m, []
    while i > 0 or j > 0:
        mv = back[i][j]
        if mv == 'm':
            out.append((i - 1, j - 1)); i -= 1; j -= 1
        elif mv == 'a':
            out.append((i - 1, None)); i -= 1
        else:
            out.append((None, j - 1)); j -= 1
    return out[::-1]

def word_ops(a, w):
    ta, tw = words(a), words(w)
    sm = difflib.SequenceMatcher(None, [loose(x) for x in ta], [loose(x) for x in tw], autojunk=False)
    ops = []
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op != 'equal':
            ops.append((i1, i2, j1, j2, ' '.join(ta[i1:i2]), ' '.join(tw[j1:j2])))
    return ta, tw, ops
