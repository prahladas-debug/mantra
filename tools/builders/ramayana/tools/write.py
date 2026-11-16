"""Write books-src/ramayana/<k>-<slug>/NNN.json from work/units_<k>.json and summ/k<k>*.py."""
import glob, json, os, runpy, sys
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, f'{R}/tools')
from common import ORD, KANDA
REPO = '/home/user/mantra'
k = int(sys.argv[1])
slug, name, nameEn, loc = KANDA[k]
S = {}
for f in sorted(glob.glob(f'{R}/summ/k{k}*.py')):
    S.update(runpy.run_path(f)['S'])
units = json.load(open(f'{R}/work/units_{k}.json'))
log = [l.rstrip('\n').split('\t') for l in open(f'{R}/work/log_{k}.tsv')]
book = json.load(open(f'{REPO}/books-src/ramayana/book.json'))
part = book['parts'][k - 1]
assert part['name'] == name, (part['name'], name)
d = f'{REPO}/books-src/ramayana/{k}-{slug}'
os.makedirs(d, exist_ok=True)
total = 0
for s in range(1, len(units) + 1):
    sec = units[str(s)]
    path = f'{d}/{s:03d}.json'
    old = json.load(open(path)) if os.path.exists(path) else None
    if old:  # keep meanings already written
        mean = {v['n']: v['meaning'] for x in old['sections'] for v in x['verses'] if 'n' in v and 'meaning' in v}
        for x in sec:
            for v in x['verses']:
                if v.get('n') in mean: v['meaning'] = mean[v['n']]
    title, en, kn, hi, te, ta = S[s]
    fixes = [r for r in log if r[0].startswith(f'{k}.{s}.') or r[0] == f'{k}.{s}']
    nfix = sum(1 for r in fixes if r[1] in ('fix', 'restored', 'structure'))
    src = f'Valmiki Ramayana (Southern vulgate), {nameEn}, sarga {s}: Sanskrit Wikisource'
    if any(r[1] == 'reset' for r in fixes):
        src += ' (a word-split copy there; each half-line re-set in sandhi from heritage.iitk.ac.in, the same recension, keeping the Wikisource verse division)'
    vv = sorted({int(r[0].split('.')[2]) for r in fixes if r[1] in ('fix', 'restored', 'structure') and r[0].count('.') == 2})
    if vv:
        lst = ', '.join(f'{s}.{v}' for v in vv) if len(vv) <= 12 else f'{len(vv)} verses'
        src += f'; collated with heritage.iitk.ac.in (VRAM) and the Baroda critical edition, which settled typos or unmetrical readings in {lst}'
    if any(r[1] == 'restored' for r in fixes):
        src += ' (a verse lost in the base restored)'
    src += '.'
    unit = {
        'id': f'ramayana-{k}-{s:03d}', 'work': 'ramayana', 'part': k,
        'partName': name, 'partNameEn': nameEn, 'unit': s,
        'title': f'{ORD[s - 1]} सर्गः',
        'titleEn': f'Sarga {s} · {title}',
        'summary': {'en': en, 'kn': kn, 'hi': hi, 'te': te, 'ta': ta},
        'source': src,
        'sections': sec,
    }
    total += sum(1 for x in sec[:1] for v in x['verses'] if 'n' in v)
    with open(path, 'w', encoding='utf8') as f:
        json.dump(unit, f, ensure_ascii=False, indent=2)
        f.write('\n')
part['units'] = len(units)
part['verses'] = total
with open(f'{REPO}/books-src/ramayana/book.json', 'w', encoding='utf8') as f:
    json.dump(book, f, ensure_ascii=False, indent=2)
    f.write('\n')
print(f'wrote {len(units)} sargas, {total} verses to {d}')
