"""Restore stanzas missing from dasara padas (Nov 2026 completeness audit).

Each change either inserts a new verse after an existing one (renumbering the caranas and
shifting the hi/te/ta meaning-pack keys of that section) or replaces a verse's text and
meanings. Run once from the repository root: python3 tools/builders/dasara-complete/apply.py
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SPEC = json.loads((Path(__file__).parent / 'changes.json').read_text())
TEXT_FILES = sorted((ROOT / 'src/data/texts').glob('dasara-pada*.ts'))
PACK_FILES = [p for l in ('hi', 'te', 'ta') for p in (ROOT / 'src/data/meanings' / l).glob('dasara*.ts')]

def q(s):  # TS single-quoted string literal
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"

def block_span(src, tid):
    m = re.search(r"\n  id: '" + re.escape(tid) + r"',", src)
    if not m: return None
    start = src.rfind('\nexport const', 0, m.start())
    end = src.find('\nexport const', m.end())
    return start, (end if end != -1 else len(src))

def match_brace(s, i):  # i at '{' or '['
    open_c = s[i]; close_c = '}' if open_c == '{' else ']'; depth = 0; j = i; inq = None
    while j < len(s):
        c = s[j]
        if inq:
            if c == '\\': j += 2; continue
            if c == inq: inq = None
        elif c in "'\"`": inq = c
        elif c == open_c: depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0: return j
        j += 1
    raise ValueError('unbalanced')

def sections(block):
    """[(verses_array_start, verses_array_end, [(verse_start, verse_end, text)])]"""
    out = []; pos = 0
    while True:
        k = block.find('verses: [', pos)
        if k == -1: break
        a = k + len('verses: '); b = match_brace(block, a); verses = []; p = a + 1
        while True:
            vs = block.find('{', p)
            if vs == -1 or vs > b: break
            ve = match_brace(block, vs)
            tm = re.search(r"text: '((?:[^'\\]|\\.)*)'", block[vs:ve])
            verses.append((vs, ve, tm.group(1).replace('\\n', '\n').replace("\\'", "'") if tm else ''))
            p = ve + 1
        out.append((a, b, verses)); pos = b
    return out

def verse_obj(text, en, kn, n, indent):
    i = ' ' * indent
    lines = [i + '{']
    if n is not None: lines.append(f'{i}  n: {n},')
    lines += [f'{i}  text: {q(text)},', f'{i}  meaning: {{', f'{i}    en: {q(en)},', f'{i}    kn: {q(kn)},', f'{i}  }},', i + '},']
    return '\n'.join(lines)

def find_verse(secs, snippet):
    for si, (_, _, vs) in enumerate(secs):
        for vi, (_, _, t) in enumerate(vs):
            if t.startswith(snippet) or snippet in t.split('\n')[0]:
                return si, vi
    raise KeyError(snippet)

def edit_packs(tid, si, vi, mode, values):
    """mode 'insert': shift keys si.k (k>vi) up by one and add si.(vi+1); 'replace': set si.vi."""
    for pf in PACK_FILES:
        lang = pf.parent.name
        src = pf.read_text()
        m = re.search(r"\n    ['\"]" + re.escape(tid) + r"['\"]: \{", src)
        if not m: continue
        vstart = src.find('verses: {', m.end()); a = vstart + len('verses: '); b = match_brace(src, a)
        body = src[a:b]
        quote = "'" if re.search(r"\n\s+'\d+\.\d+':", body) else '"'
        def lit(s): return q(s) if quote == "'" else json.dumps(s, ensure_ascii=False)
        if mode == 'insert':
            def shift(mm):
                s2, v2 = int(mm.group(2)), int(mm.group(3))
                if s2 == si and v2 > vi: v2 += 1
                return f'{mm.group(1)}{quote}{s2}.{v2}{quote}:'
            body = re.sub(r"(\n\s+)['\"](\d+)\.(\d+)['\"]:", shift, body)
            km = re.search(r"\n(\s+)['\"]" + f'{si}\\.{vi}' + r"['\"]: [^\n]*", body)
            if not km: sys.exit(f'{pf}: no key {si}.{vi} for {tid}')
            body = body[:km.end()] + f'\n{km.group(1)}{quote}{si}.{vi + 1}{quote}: {lit(values[lang])},' + body[km.end():]
        else:
            km = re.search(r"(\n\s+['\"]" + f'{si}\\.{vi}' + r"['\"]: )[^\n]*", body)
            if not km: sys.exit(f'{pf}: no key {si}.{vi} for {tid}')
            body = body[:km.start()] + km.group(1) + lit(values[lang]) + ',' + body[km.end():]
        pf.write_text(src[:a] + body + src[b:])

for ch in SPEC['changes']:
    tid = ch['id']
    tf = next(f for f in TEXT_FILES if block_span(f.read_text(), tid))
    src = tf.read_text(); s0, s1 = block_span(src, tid); block = src[s0:s1]
    secs = sections(block)
    si, vi = find_verse(secs, ch['at'])
    a, b, vs = secs[si]; vstart, vend, _ = vs[vi]
    indent = len(block[:vstart]) - len(block[:vstart].rstrip(' '))
    m = ch['meaning']
    if ch['op'] == 'insert':
        has_n = re.search(r'\bn: \d+', block[vstart:vend]) is not None
        new = verse_obj(ch['text'], m['en'], m['kn'], 0 if has_n else None, indent)
        cut = vend + 1 + (1 if block[vend + 1] == ',' else 0)
        block = block[:cut] + '\n' + new + block[cut:]
        # Renumber the caranas of this section in order.
        secs2 = sections(block); a2, b2, _ = secs2[si]
        arr = block[a2:b2]; counter = iter(range(1, 1000))
        first = re.search(r'\bn: (\d+)', arr)
        if first:
            base = int(first.group(1)); counter = iter(range(base, base + 1000))
            arr = re.sub(r'\bn: \d+', lambda _m: f'n: {next(counter)}', arr)
            block = block[:a2] + arr + block[b2:]
        edit_packs(tid, si, vi, 'insert', m)
    else:
        obj = block[vstart:vend + 1]
        obj = re.sub(r"text: '(?:[^'\\]|\\.)*'", lambda _m: 'text: ' + q(ch['text']), obj, count=1)
        obj = re.sub(r"en: '(?:[^'\\]|\\.)*'", lambda _m: 'en: ' + q(m['en']), obj, count=1)
        obj = re.sub(r"kn: '(?:[^'\\]|\\.)*'", lambda _m: 'kn: ' + q(m['kn']), obj, count=1)
        block = block[:vstart] + obj + block[vend + 1:]
        edit_packs(tid, si, vi, 'replace', m)
    tf.write_text(src[:s0] + block + src[s1:])
    print('ok', ch['op'], tid, f'{si}.{vi}')

for tid, meta in SPEC['meta'].items():
    tf = next(f for f in TEXT_FILES if block_span(f.read_text(), tid))
    src = tf.read_text(); s0, s1 = block_span(src, tid); block = src[s0:s1]
    block = block.replace("completeness: 'partial',", "completeness: 'complete',")
    block = re.sub(r"\n  contentNote: '(?:[^'\\]|\\.)*',", '', block)
    if meta.get('contentNote'):
        block = block.replace("completeness: 'complete',", "completeness: 'complete',\n  contentNote: " + q(meta['contentNote']) + ',', 1)
    tf.write_text(src[:s0] + block + src[s1:])
    print('meta', tid)
