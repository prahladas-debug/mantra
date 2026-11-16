"""Build IITK witness (work/iitk.json: {kanda: {sarga: [[verse, text], ...]}}) and CE word lists."""
import json, os, re, glob, collections
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KS = {1: 754, 2: 755, 3: 756, 4: 757, 6: 759, 7: 760}
out = {}
missing = []
for k, sid in KS.items():
    kd = json.load(open(f'{R}/dl/iitk/sec/{sid}.json'))
    for ch in kd['children']:
        s = int(ch['hierarchical_label'].split('.')[1])
        sd = json.load(open(f'{R}/dl/iitk/sec/{ch["id"]}.json'))
        vs = []
        for v in sd['verses']:
            f = f'{R}/dl/iitk/m/{v["ref"]}.json'
            try:
                d = json.load(open(f)); t = d['text']
            except Exception:
                missing.append(v['ref']); continue
            # an entry sometimes carries the previous verse too: keep the part ending with its own ref
            segs = re.split(r'[।॥|]*[ \t]*\d+\.\d+\.\d+[ \t]*[।॥|]*', t)
            refs = re.findall(r'\d+\.\d+\.\d+', t)
            if len(refs) > 1 and v['ref'] in refs:
                t = segs[refs.index(v['ref'])]
            else:
                t = segs[0] if segs[0].strip() else t
            t = re.sub(r'[।॥|]*[ \t]*\d+(?:\.\d+)+[ \t]*[।॥|]*', '', t)
            t = '\n'.join(x.strip(' \t।॥|') for x in t.split('\n') if x.strip(' \t।॥|'))
            vs.append([v['ref'], t])
        out.setdefault(k, {})[s] = vs
json.dump(out, open(f'{R}/work/iitk.json', 'w'), ensure_ascii=False)
print('missing', len(missing), missing[:10])
# CE
ce = open(f'{R}/dl/ambuda/ramayanam.txt', encoding='utf8').read()
cev = collections.defaultdict(list)
for m in re.finditer(r'^# (\d+)\.(\d+)\.(\S+)\n(.*?)(?=^# |\Z)', ce, re.M | re.S):
    t = re.sub(r'[।॥]\s*[०-९0-9]+\s*[।॥]', '', m.group(4)).strip()
    cev[m.group(1)].append([f'{m.group(1)}.{m.group(2)}.{m.group(3)}', t])
json.dump(cev, open(f'{R}/work/ce.json', 'w'), ensure_ascii=False)
print({k: len(v) for k, v in cev.items()})
