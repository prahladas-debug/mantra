"""Syllable counting / light-heavy pattern for Devanagari lines."""
import re
VOW = {'अ':0,'आ':1,'इ':0,'ई':1,'उ':0,'ऊ':1,'ऋ':0,'ॠ':1,'ऌ':0,'ए':1,'ऐ':1,'ओ':1,'औ':1}
MAT = {'ा':1,'ि':0,'ी':1,'ु':0,'ू':1,'ृ':0,'ॄ':1,'े':1,'ै':1,'ो':1,'ौ':1,'ॢ':0}
def pattern(s):
    s = re.sub(r'[^ऀ-ॿ]', '', s)
    s = re.sub(r'[ऽ।॥०-९़]', '', s)
    toks = []; i = 0
    while i < len(s):
        c = s[i]
        if c in VOW: toks.append(['V', VOW[c]]); i += 1; continue
        if 'क' <= c <= 'ह' or c == 'ळ':
            toks.append(['C'])
            nxt = s[i+1] if i+1 < len(s) else ''
            if nxt == '्': i += 2; continue
            if nxt in MAT: toks.append(['V', MAT[nxt]]); i += 2; continue
            toks.append(['V', 0]); i += 1; continue
        if c in 'ंः': toks.append(['M']); i += 1; continue
        i += 1  # chandrabindu etc. ignored
    out = []
    for k, t in enumerate(toks):
        if t[0] != 'V': continue
        heavy = t[1] == 1
        j = k + 1; cons = 0
        while j < len(toks) and toks[j][0] != 'V':
            if toks[j][0] == 'M': heavy = True
            else: cons += 1
            j += 1
        if cons >= 2 or (j == len(toks) and cons >= 1): heavy = True
        out.append('-' if heavy else 'u')
    return ''.join(out)
def count(s):
    return len(pattern(s))
