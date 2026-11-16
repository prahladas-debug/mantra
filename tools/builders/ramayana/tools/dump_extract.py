import bz2, glob, json, re, sys, os
import xml.etree.ElementTree as ET
R = sys.argv[1]
pages = {}
for f in glob.glob(os.path.join(R, 'dl/dump/s*.bz2')):
    data = bz2.decompress(open(f, 'rb').read()).decode('utf8')
    root = ET.fromstring('<r>' + data + '</r>')
    for p in root.iter('page'):
        t = p.find('title').text
        if not t.startswith('रामायणम्/'):
            continue
        rev = p.find('revision')
        pages[t] = {'text': rev.find('text').text or '', 'rev': rev.find('id').text, 'ts': rev.find('timestamp').text}
json.dump(pages, open(os.path.join(R, 'work/ws_pages.json'), 'w'), ensure_ascii=False)
print(len(pages))
