"""Generate a homa text file and its hi/te/ta pack entries from a Python data module.

usage: python3 gen.py <data_module> [--write-packs]
The data module defines META (dict), HEADER (str), SECTIONS (list of section dicts) and
SUMMARIES (dict hi/te/ta).
"""
import importlib.util
import json
import re
import sys

BUILD = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/build'
REPO = '/home/user/mantra'
LANGS = ['en', 'kn', 'hi', 'te', 'ta']

_old = {}


def old(id_):
    if id_ not in _old:
        _old[id_] = json.load(open(f'{BUILD}/old-{id_}.json'))
    return _old[id_]


def V(text, en, kn, hi, te, ta, when=None, n=None):
    return {'text': text, 'en': en, 'kn': kn, 'hi': hi, 'te': te, 'ta': ta, 'when': when, 'n': n}


def OLD(id_, si, vi, when='keep', **over):
    v = dict(old(id_)['sections'][si]['verses'][vi])
    if when != 'keep':
        v['when'] = when
    v.pop('n', None) if 'n' not in over else None
    v.update(over)
    return v


def S(title, titleEn, note, noteKn, verses, when=None):
    return {'title': title, 'titleEn': titleEn, 'note': note, 'noteKn': noteKn, 'when': when, 'verses': verses}


def OLDS(id_, si, **over):
    """An old section with its notes and verses as they were."""
    s = old(id_)['sections'][si]
    d = S(s['title'], s['titleEn'], s.get('note'), s.get('noteKn'), [OLD(id_, si, vi) for vi in range(len(s['verses']))], s.get('when'))
    d.update(over)
    return d


def q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"


def when_ts(w):
    if not w:
        return None
    parts = []
    for k, vals in w.items():
        parts.append(f"{k}: [{', '.join(q(x) for x in vals)}]")
    return '{ ' + ', '.join(parts) + ' }'


def gen_ts(mod):
    M = mod.META
    out = ['/**']
    for line in mod.HEADER.strip('\n').split('\n'):
        out.append((' * ' + line).rstrip())
    out.append(' */')
    out.append("import type { Mantra } from '../types';")
    out.append('')
    out.append(f"export const {M['export']}: Mantra = {{")
    for k in ['id', 'title', 'titleEn']:
        out.append(f'  {k}: {q(M[k])},')
    out.append("  category: 'homa',")
    out.append(f"  order: {M['order']},")
    for k in ['deity', 'source', 'summary', 'summaryKn']:
        out.append(f'  {k}: {q(M[k])},')
    if M.get('variants'):
        out.append('  variants: [')
        for var in M['variants']:
            out.append('    {')
            out.append(f"      key: {q(var['key'])},")
            out.append(f"      title: {q(var['title'])},")
            out.append(f"      titleKn: {q(var['titleKn'])},")
            out.append('      options: [')
            for o in var['options']:
                out.append(f"        {{ id: {q(o[0])}, label: {q(o[1])}, labelKn: {q(o[2])} }},")
            out.append('      ],')
            out.append('    },')
        out.append('  ],')
    out.append(f"  difficulty: {q(M['difficulty'])},")
    out.append(f"  completeness: {q(M['completeness'])},")
    out.append(f"  contentNote: {q(M['contentNote'])},")
    out.append('  sections: [')
    for s in mod.SECTIONS:
        out.append('    {')
        out.append(f"      title: {q(s['title'])},")
        out.append(f"      titleEn: {q(s['titleEn'])},")
        if s.get('note'):
            out.append(f"      note: {q(s['note'])},")
        if s.get('noteKn'):
            out.append(f"      noteKn: {q(s['noteKn'])},")
        if s.get('when'):
            out.append(f"      when: {when_ts(s['when'])},")
        out.append('      verses: [')
        for v in s['verses']:
            out.append('        {')
            if v.get('n'):
                out.append(f"          n: {v['n']},")
            out.append(f"          text: {q(v['text'])},")
            out.append('          meaning: {')
            out.append(f"            en: {q(v['en'])},")
            out.append(f"            kn: {q(v['kn'])},")
            out.append('          },')
            if v.get('when'):
                out.append(f"          when: {when_ts(v['when'])},")
            out.append('        },')
        out.append('      ],')
        out.append('    },')
    out.append('  ],')
    out.append('};')
    return '\n'.join(out) + '\n'


def plain_en(s):
    import unicodedata
    for a, b in [('ṣ', 'sh'), ('ś', 'sh'), ('Ś', 'Sh'), ('Ṣ', 'Sh'), ('ṛ', 'ri'), ('Ṛ', 'Ri'), ('ṝ', 'ri'), ('ḷ', 'li'), ('ñ', 'n'), ('ṅ', 'n'), ('c', 'c')]:
        s = s.replace(a, b)
    s = unicodedata.normalize('NFD', s)
    s = ''.join(ch for ch in s if not unicodedata.combining(ch))
    return unicodedata.normalize('NFC', s)


def check(mod):
    for s in mod.SECTIONS:
        for v in s['verses']:
            v['en'] = plain_en(v['en'])
    errs = []
    for si, s in enumerate(mod.SECTIONS):
        if not s.get('note') or not s.get('noteKn'):
            errs.append(f'section {si} missing note/noteKn')
        for vi, v in enumerate(s['verses']):
            for l in LANGS:
                if not v.get(l) or not str(v[l]).strip():
                    errs.append(f'{si}.{vi} missing {l}')
            if re.search(r'[A-Za-z]', v['te'] + v['ta']):
                errs.append(f'{si}.{vi} Latin in te/ta')
            if re.search(r'[\u0900-\u097f]', (v['te'] + v['ta'] + v['kn']).replace('।', '').replace('॥', '')):
                errs.append(f'{si}.{vi} Devanagari in kn/te/ta')
            if re.search(r'[\u0900-\u097f]', v['en']):
                errs.append(f'{si}.{vi} Devanagari in en')
            if re.search(r'[āīūṛṝḷēōṃḥñṅṇṭḍśṣĀĪŪṚṢŚ]', v['en']):
                errs.append(f'{si}.{vi} diacritics in en')
    for l in ['hi', 'te', 'ta']:
        if not mod.SUMMARIES.get(l):
            errs.append(f'summary {l} missing')
    return errs


def pack_block(mod, lang):
    id_ = mod.META['id']
    lines = [f"    '{id_}': {{", f"      summary: {json.dumps(mod.SUMMARIES[lang], ensure_ascii=False)},", '      verses: {']
    for si, s in enumerate(mod.SECTIONS):
        for vi, v in enumerate(s['verses']):
            lines.append(f"        '{si}.{vi}': {json.dumps(v[lang], ensure_ascii=False)},")
    lines += ['      },', '    },']
    return '\n'.join(lines)


def write_pack(mod, lang):
    path = f'{REPO}/src/data/meanings/{lang}/homa.ts'
    src = open(path, encoding='utf-8').read()  # re-read immediately before editing
    id_ = mod.META['id']
    start = src.find(f"\n    '{id_}': {{\n")
    if start < 0:
        raise SystemExit(f'{id_} not found in {path}')
    start += 1
    end = src.find('\n    },\n', start)
    # the block ends at the first "    }," at 4-space indent after the verses close
    end = end + len('\n    },')
    new = src[:start] + pack_block(mod, lang) + src[end:]
    open(path, 'w', encoding='utf-8').write(new)


def main():
    path = sys.argv[1]
    spec = importlib.util.spec_from_file_location('data', path)
    mod = importlib.util.module_from_spec(spec)
    sys.path.insert(0, BUILD)
    spec.loader.exec_module(mod)
    errs = check(mod)
    for e in errs:
        print('ERR', e)
    if errs:
        sys.exit(1)
    ts = gen_ts(mod)
    open(f"{REPO}/src/data/texts/{mod.META['id']}.ts", 'w', encoding='utf-8').write(ts)
    n = sum(len(s['verses']) for s in mod.SECTIONS)
    print('wrote', mod.META['id'], 'sections', len(mod.SECTIONS), 'verses', n)
    if '--write-packs' in sys.argv:
        for lang in ['hi', 'te', 'ta']:
            write_pack(mod, lang)
        print('packs updated')


if __name__ == '__main__':
    main()
