# Writes books-src/mahabharata/ from the CE e-text + my summaries. python3 -I build.py [parva ...]
import sys, os, json, re
H = '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/mahabharata/'
sys.path.insert(0, H + 'scripts')
from ce import load, verses
from upa import UPA, PARTS, upa_of
from ordinal import title as sa_title
OUT = '/home/user/mantra/books-src/mahabharata/'
LANGS = ['en', 'kn', 'hi', 'te', 'ta']
VERSION = {}  # "Last updated" of each parvan file
for p in range(1, 19):
    head = open(f'{H}dl/smith/UD/MBh{p:02d}.txt', encoding='utf-8').read(400)
    VERSION[p] = re.search(r'Last updated: (.+)', head).group(1).strip()

NOTES = {
 (6, 23): 'gita', **{(6, a): 'gita' for a in range(23, 41)},
 (13, 135): 'vsn', (12, 47): 'bhishma',
}
def note_for(p, a):
    k = NOTES.get((p, a))
    if k == 'gita':
        ch = a - 22
        return (f'This adhyaya is chapter {ch} of the Bhagavad Gita (Critical Edition text and verse numbers). '
                f'The app\'s annotated Gita, with meanings, is in the Library under the category \'gita\' (text id bhagavad-gita-{ch:02d}).')
    if k == 'vsn':
        return ('This adhyaya contains the Vishnu Sahasranama in the Critical Edition text, without the later dhyana and nyasa portions. '
                'The app\'s recitation text, with meanings, is the text id vishnu-sahasranama.')
    if k == 'bhishma':
        return ('This adhyaya contains Bhishma\'s hymn to Krishna on the bed of arrows (Bhishmastavaraja) as given in the Mahabharata. '
                'The app\'s Bhishma Stuti (text id bhishma-stuti) is the related hymn from the Bhagavata Purana (1.9), a different text.')
    return None

def clean(t):
    t = re.sub(r'\s*\[[0-9=]+\]', '', t)   # numbering of the names in 12.325 (editorial)
    return re.sub(r'\s+', ' ', t).strip()

def fmt(item):
    out = []
    lines = item[2]
    for i, l in enumerate(lines):
        end = ' ॥' if i == len(lines) - 1 else ' ।'
        if item[3] == 'verse':
            # ';' marks the pada break; with no space after it a word runs on into the next pada
            l = re.sub(r';(?=\S)', '-;', l)
            padas = [clean(x) for x in l.split(';')]
        else:
            padas = [clean(l)]
        padas = [x for x in padas if x]
        out += padas[:-1] + [padas[-1] + end]
    return '\n'.join(out)

def load_sum(p):
    import glob
    d = {}
    for f in sorted(glob.glob(f'{H}sum/{p:02d}*.jsonl')):
        for ln in open(f, encoding='utf-8'):
            ln = ln.strip()
            if not ln: continue
            o = json.loads(ln); d[o['a']] = o
    return d

def unit(p, a, lines, s):
    dirname, pname, pen = PARTS[p - 1]
    vs = []
    for it in verses(lines):
        if it[0] == 'spk': vs.append({'text': clean(it[2])})
        elif it[1] == 0: vs.append({'text': fmt(it)})
        else: vs.append({'n': it[1], 'text': fmt(it)})
    usa, uen = upa_of(p, a)
    u = {'id': f'mahabharata-{p}-{a:03d}', 'work': 'mahabharata', 'part': p, 'partName': pname, 'partNameEn': pen,
         'unit': a, 'title': sa_title(a), 'titleEn': f'Adhyaya {a} · {s["t"]}',
         'summary': {l: s[l] for l in LANGS},
         'source': f'Mahabharata, Critical Edition (BORI, Pune) {p}.{a}; e-text by M. Tokunaga and J. D. Smith, © BORI 1999, version of {VERSION[p]}'}
    n = note_for(p, a)
    if n: u['contentNote'] = n
    u['sections'] = [{'title': usa, 'titleEn': uen, 'verses': vs}]
    return u, sum(1 for v in vs if 'n' in v)

def main(parvas):
    data = load('UD')
    for p in parvas:
        s = load_sum(p)
        dirname = PARTS[p - 1][0]
        os.makedirs(OUT + dirname, exist_ok=True)
        wrote = 0
        for a, lines in data[p].items():
            if linked(p, a): continue   # the library's own text stands for this adhyaya
            if a not in s: break   # write a consecutive prefix only
            u, nv = unit(p, a, lines, s[a])
            with open(f'{OUT}{dirname}/{a:03d}.json', 'w', encoding='utf-8') as f:
                json.dump(u, f, ensure_ascii=False, indent=1); f.write('\n')
            wrote += 1
        print(f'parva {p}: wrote {wrote}/{len(data[p])}')

def counts():
    data = load('UD'); r = {}
    for p, ads in data.items():
        r[p] = (len(ads), sum(sum(1 for it in verses(l) if it[0] == 'v' and it[1] > 0) for l in ads.values()))
    return r


LINKS = {6: [{'from': 23, 'to': 40, 'category': 'gita'}], 13: [{'from': 135, 'to': 135, 'text': 'vishnu-sahasranama'}]}
def linked(p, a): return any(l['from'] <= a <= l['to'] for l in LINKS.get(p, []))

EDITION = ('Critical Edition of the Mahabharata, Bhandarkar Oriental Research Institute, Pune (1933–1966; '
  'general editors V. S. Sukthankar, S. K. Belvalkar, P. L. Vaidya): the constituted text only, 18 parvas, '
  '1,995 adhyayas, without the star passages and appendices of the apparatus. The Harivamsha (a khila, '
  'edited separately) is not included. Text from the BORI electronic text (typed by Muneo Tokunaga, revised '
  'by John D. Smith and checked in duplicate by a team at BORI), Unicode Devanagari version from '
  'indology.info, downloaded 15 November 2026. Verse numbers are those of the edition; prose paragraphs keep '
  'their numbers; the invocation नारायणं नमस्कृत्य (1.1.0) and speaker lines are unnumbered. Dandas, the '
  'division of triṣṭubh lines into pādas and the removal of the editorial numbering of the names in 12.325 '
  'were added for reading (a word running on into the next pāda ends its line with a hyphen). The Bhagavad Gita (6.23–40) and the Vishnu Sahasranama adhyaya (13.135) are links to the library\'s annotated texts; Bhishma\'s hymn to Krishna (12.47) is given in full, because the library\'s Bhishma Stuti is the different hymn of the Bhagavata Purana (1.9). Why this edition: it is the only complete, carefully proofread digital text. The '
  'Southern (Kumbhakonam, 1906–1914) text that Madhva and South Indian readers follow is online only in an '
  'unproofread typed copy on Sanskrit Wikisource (frequent typing errors, about ten times as many unmetrical '
  'half-verses), so it was not used. Southern readings and passages that the critical edition relegates to '
  'its apparatus are therefore absent. Note: the electronic text is © BORI; it is distributed by J. D. Smith '
  'with BORI\'s agreement, and no open licence is stated.')
SOURCES = [
  'Mahabharata, Critical Edition, ed. V. S. Sukthankar et al., Bhandarkar Oriental Research Institute, Pune, 1933–1966 (19 volumes).',
  'Electronic text of the Critical Edition, © BORI 1999; input by Muneo Tokunaga, revised by John D. Smith (University of Cambridge) and a BORI team: https://indology.info/bombay/mahabharata/welcome.html (Unicode Devanagari and ISO 15919 Roman, each parvan dated; downloaded 15 November 2026).',
  'GRETIL (Göttingen) copy of the same e-text with the star passages and appendices: https://gretil.sub.uni-goettingen.de/ (used to identify passages outside the constituted text).',
  'Ambuda (ambuda.org), Devanagari text of the Critical Edition, and the Kumbhakonam edition on Sanskrit Wikisource (महाभारतम्), used only for spot-checks of the Devanagari.',
  'Titles and summaries of the adhyayas and parvas are original.',
]
def book():
    c = counts()
    ps = json.load(open(H + 'parts_sum.json', encoding='utf-8'))
    parts = []
    for i, (d, sa, en) in enumerate(PARTS, 1):
        pt = {'part': i, 'name': sa, 'nameEn': en, 'units': c[i][0], 'verses': c[i][1], 'summary': ps[str(i)]}
        if i in LINKS: pt['links'] = LINKS[i]
        parts.append(pt)
    b = {'work': 'mahabharata', 'title': 'महाभारतम्', 'titleEn': 'Mahabharata', 'partLabel': 'parva', 'unitLabel': 'adhyaya',
         'edition': EDITION, 'sources': SOURCES, 'parts': parts}
    os.makedirs(OUT, exist_ok=True)
    with open(OUT + 'book.json', 'w', encoding='utf-8') as f:
        json.dump(b, f, ensure_ascii=False, indent=1); f.write('\n')
    up = {'note': 'Sub-parvas (upaparvas) of the Critical Edition with their adhyaya ranges. book.json has no field for them yet; each adhyaya file names its sub-parva in sections[0].title / titleEn.',
          'parts': [{'part': p, 'upaparvas': [{'name': sa, 'nameEn': en, 'from': f, 'to': t} for sa, en, f, t in UPA[p]]} for p in range(1, 19)]}
    with open(OUT + 'upaparvas.json', 'w', encoding='utf-8') as f:
        json.dump(up, f, ensure_ascii=False, indent=1); f.write('\n')
    print('book.json written')

if __name__ == '__main__':
    main([int(x) for x in sys.argv[1:]] or range(1, 19))
