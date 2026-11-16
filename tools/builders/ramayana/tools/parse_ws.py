"""Parse Wikisource wikitext (from the dump) into work/base_raw.json:
{kanda: {sarga: {"items": [[n|null, text]], "colophon": str|null, "rev": id}}}"""
import json, os, re, sys
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIG = str.maketrans('०१२३४५६७८९', '0123456789')
K = {'बालकाण्डम्': 1, 'अयोध्याकाण्डम्': 2, 'अरण्यकाण्डम्': 3, 'किष्किन्धाकाण्डम्': 4, 'युद्धकाण्डम्': 6, 'उत्तरकाण्डम्': 7}
pages = json.load(open(os.path.join(R, 'work/ws_pages.json')))
NUM = re.compile(r'(?:[।॥|]+[ \t]*([०-९0-9]+(?:[ \t]*[-\.][ \t]*[०-९0-9]+)*)[ \t]*(?:[।॥|]+|(?=\n|$))|(?<![०-९0-9])([०-९0-9]+(?:[ \t]*[-\.][ \t]*[०-९0-9]+)*)[ \t]*[।॥|]+)')
SPK = re.compile(r'^[ऀ-ॿ\s]{0,40}उवाच\s*[।॥]?\s*$')
out = {}
log = []
for t, pg in pages.items():
    m = re.match(r'रामायणम्/(\S+)/सर्गः (\S+)$', t)
    if not m or m.group(1) not in K:
        continue
    k = K[m.group(1)]; s = int(m.group(2).translate(DIG))
    c = pg['text']
    c = re.sub(r'==\s*स्रोतः\s*==.*', '', c, flags=re.S)
    # remove templates (non-nested ok, repeat for nesting)
    for _ in range(3):
        c = re.sub(r'\{\{[^{}]*\}\}', '', c)
    c = re.sub(r'\[\[(?:File|चित्रम्|वर्गः|Category):[^\]]*\]\]', '', c)
    c = re.sub(r'<br\s*/?>', '\n', c)
    c = re.sub(r'<[^>]+>', '\n', c)
    c = c.replace("'''", '').replace("''", '')
    c = c.replace('‍', '').replace('‌', '').replace('﻿', '').replace(' ', ' ')
    c = re.sub(r'(?<=[ऀ-ॿ]):', 'ः', c)        # ASCII colon used as visarga
    c = re.sub(r'(?<=[ऀ-ॿ])\s*:(?=\s)', 'ः', c)
    lines = [l.strip() for l in c.split('\n')]
    colophon = None
    body = []
    for l in lines:
        if not l: continue
        if re.match(r'^[।॥\s]*(इत्यार्षे|इति\s*श्रीमद्|इति वाल्मीकि)', l) or ('सर्गः' in l and re.search(r'इत्यार्षे|वाल्मीकीये|इति वाल्मीकि', l)):
            colophon = re.sub(r'[।॥|]+\s*[०-९0-9\-\. ]*[।॥|]*\s*$', '', l).strip(); continue
        if re.search(r'श्रीमद्वाल्मीक[िी]+य?रामायणे', l) and 'सर्गः' in l and not l.startswith('इत्या'):
            continue
        body.append(l)
    text = '\n'.join(body)
    items = []
    pos = 0
    for mm in NUM.finditer(text):
        nums = [int(x.translate(DIG)) for x in re.findall(r'[०-९0-9]+', mm.group(1) or mm.group(2))]
        chunk = text[pos:mm.start()]
        pos = mm.end()
        if len(nums) == 2 and nums == [k, s] and not chunk.strip():
            continue
        if len(nums) == 3 and nums[:2] != [k, s]:
            log.append(f'{k}.{s}: ref mismatch {nums}')
        n = nums[-1]
        ls = [x.strip() for x in chunk.split('\n') if x.strip()]
        vl = []
        for x in ls:
            if SPK.match(x) and len(x) < 45:
                if vl:
                    log.append(f'{k}.{s}.{n}: speaker line inside verse: {x}')
                items.append([None, re.sub(r'[।॥]\s*$', '', x).strip()])
            else:
                vl.append(x)
        if not vl:
            log.append(f'{k}.{s}.{n}: empty verse'); continue
        items.append([n, '\n'.join(vl)])
    tail = text[pos:].strip()
    if tail:
        log.append(f'{k}.{s}: trailing text: {tail[:120]!r}')
    out.setdefault(k, {})[s] = {'items': items, 'colophon': colophon, 'rev': pg['rev']}
json.dump(out, open(os.path.join(R, 'work/base_raw.json'), 'w'), ensure_ascii=False, indent=0)
open(os.path.join(R, 'work/parse_log.txt'), 'w').write('\n'.join(log))
for k in sorted(out):
    tot = 0; issues = []
    for s in sorted(out[k]):
        ns = [n for n, _ in out[k][s]['items'] if n is not None]
        tot += len(ns)
        exp = list(range(1, len(ns) + 1))
        if ns != exp:
            issues.append((s, [ (i, a) for i, a in enumerate(ns, 1) if a != i][:3]))
    print(k, len(out[k]), tot, 'numbering issues', len(issues), issues[:8])
print('log', len(log))
