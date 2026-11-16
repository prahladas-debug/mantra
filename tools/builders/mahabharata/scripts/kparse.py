# parse a K-edition wikisource page into (topic lines, [(id, lines)])
import re, html
def parse(s):
    s = s.replace('‍','').replace('‌','')
    body = s.split('{{footer')[0]
    pre = body.split('<table>')[0]
    pre = re.sub(r'\{\{[^}]*\}\}', '', pre, flags=re.S)
    topics = [re.sub(r'[।\s]*\d+\s*[।\s]*$', '', t).strip() for t in pre.strip().split('\n') if t.strip()]
    rows = []
    for m in re.finditer(r'<tr><td>(.*?)<td>(.*?)</tr>', body, re.S):
        txt, ids = m.group(1), m.group(2)
        txt = re.sub(r"'''", '', txt).strip()
        lines = [l.strip() for l in re.split(r'<BR>', txt, flags=re.I)]
        ids = [i.strip() for i in re.split(r'<BR>', ids.strip(), flags=re.I) if i.strip()]
        rows.append((ids, lines))
    return topics, rows
