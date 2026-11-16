import re
V = 'अआइईउऊऋॠऌॡएऐओऔ'
M = 'ािीुूृॄॢॣेैोौ'
def syl_deva(s):
    s = re.sub(r'[^ऀ-ॿ]', '', s)
    n = 0
    for i,ch in enumerate(s):
        if ch in V: n += 1
        elif 'क' <= ch <= 'ह' or ch in 'ॐ':
            nx = s[i+1] if i+1 < len(s) else ''
            if nx == '्': continue
            n += 1  # consonant with inherent vowel or matra
    return n
IV = ['ai','au','ā','ī','ū','ṛ','ṝ','ḷ','ḹ','a','i','u','e','o']
def syl_iast(s):
    s = s.lower()
    s = s.replace('ai','A').replace('au','U')
    return len(re.findall(r'[aāiīuūṛṝḷḹeoAU]', s))
