# Parse Smith's Unicode Devanagari CE e-text into parva -> adhyaya -> items
import re, collections
DL = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/mahabharata/dl/smith/'
FIXES = {  # (line id) -> (old, new)  e-text slips found during checks
    '07068004c': ('जिगीषन्तṃ', 'जिगीषन्तं'),
    '12059005a': ('राजा-राजेति', 'राजा राजेति'),
}
def load(enc='UD'):
    data = collections.OrderedDict()
    for p in range(1, 19):
        for raw in open(f'{DL}{enc}/MBh{p:02d}.txt', encoding='utf-8'):
            raw = raw.rstrip('\r\n')
            m = re.match(r'^(\d\d)(\d{3})(\d{3})([a-zA-Z ]) ?(.*)$', raw)
            if not m: continue
            pp, aa, vv, x, t = int(m[1]), int(m[2]), int(m[3]), m[4], m[5].strip()
            lid = raw[:9]
            if lid in FIXES and enc == 'UD':
                o, n = FIXES[lid]; assert o in t, lid; t = t.replace(o, n)
            data.setdefault(pp, collections.OrderedDict()).setdefault(aa, []).append((vv, x, t, lid))
    return data
def verses(lines):
    """group an adhyaya's lines into items: ('spk', text) / ('v', n, [lines], kind)"""
    items = []
    cur = None
    for vv, x, t, lid in lines:
        if x == ' ':
            items.append(['spk', vv, t]); cur = None; continue
        kind = 'prose' if x.isupper() else 'verse'
        if cur is None or cur[1] != vv:
            cur = ['v', vv, [], kind, []]; items.append(cur)
        cur[2].append(t); cur[4].append(x)
        if kind == 'prose': cur[3] = 'prose'
    return items
