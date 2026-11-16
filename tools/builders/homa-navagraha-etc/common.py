"""Shared helpers for the four homa builders (navagraha, mrityunjaya, lakshmi, ayushya).
Builds a Mantra as Python data, writes the .ts text file (en/kn inline) and merges the
hi/te/ta meanings into src/data/meanings/{hi,te,ta}/homa.ts, replacing only this text's block."""
import json, os, re, copy

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = '/home/user/mantra'
LIB = json.load(open(os.path.join(HERE, 'lib.new.json'), encoding='utf-8'))
# the library before this work (for the earlier versions of the four homa texts and their pack meanings)
LIBO = json.load(open(os.path.join(HERE, 'lib.old.json'), encoding='utf-8'))
LANGS = ('en', 'kn', 'hi', 'te', 'ta')
M = {'tradition': ['madhva']}
S = {'tradition': ['smarta']}
RIG = {'veda': ['rigveda']}
YAJ = {'veda': ['yajurveda']}

def V(text, en, kn, hi, te, ta, when=None, n=None):
    v = {'text': text, 'm': {'en': en, 'kn': kn, 'hi': hi, 'te': te, 'ta': ta}}
    if when: v['when'] = when
    if n: v['n'] = n
    return v

def C(text_id, si, vi, when=None, text=None, n=None, add=None, repl=None, lib=None):
    """Copy a verse (text and all five meanings) from a library text.
    add: {lang: text} appended to each meaning; repl: {lang: text} replaces it."""
    src = (lib or LIB)[text_id]['sections'][si]['verses'][vi]
    m = src.get('meaning') or {}
    missing = [l for l in LANGS if not m.get(l)]
    if missing:
        raise SystemExit(f'{text_id} {si}.{vi} lacks {missing}')
    v = {'text': text or src['text'], 'm': {l: m[l] for l in LANGS}}
    if add:
        for l in LANGS: v['m'][l] = v['m'][l].rstrip() + ' ' + add[l]
    if repl:
        v['m'].update(repl)
    w = when if when is not None else src.get('when')
    if w: v['when'] = w
    if n: v['n'] = n
    return v

def svaha_add(en, kn, hi, te, ta):
    return {'en': f'Svaha; this is for {en}, not for me.', 'kn': f'ಸ್ವಾಹಾ; ಇದು {kn}, ನನ್ನದಲ್ಲ.',
            'hi': f'स्वाहा; यह {hi} है, मेरा नहीं।', 'te': f'స్వాహా; ఇది {te}, నాది కాదు.', 'ta': f'ஸ்வாஹா; இது {ta}, என்னுடையதல்ல.'}

def CS(text_id, si, when='keep', title=None, titleEn=None, note=None, noteKn=None, verses=None):
    """Copy a whole section."""
    s = LIB[text_id]['sections'][si]
    vs = [C(text_id, si, vi) for vi in range(len(s['verses']))] if verses is None else [C(text_id, si, vi) for vi in verses]
    out = {'title': title or s.get('title'), 'titleEn': titleEn or s.get('titleEn'),
           'note': note or s.get('note'), 'noteKn': noteKn or s.get('noteKn'), 'verses': vs}
    w = s.get('when') if when == 'keep' else when
    if w: out['when'] = w
    return out

def Sec(title, titleEn, note, noteKn, verses, when=None):
    s = {'title': title, 'titleEn': titleEn, 'note': note, 'noteKn': noteKn, 'verses': verses}
    if when: s['when'] = when
    return s

def js(x):
    return json.dumps(x, ensure_ascii=False)

def ts_when(w):
    return '{ ' + ', '.join(f"{k}: [{', '.join(js(o) for o in v)}]" for k, v in w.items()) + ' }'

def write_ts(path, header, export_name, m):
    L = [header.rstrip(), "import type { Mantra } from '../types';", '', f'export const {export_name}: Mantra = {{']
    for k in ('id', 'title', 'titleEn', 'category'):
        L.append(f'  {k}: {js(m[k])},')
    L.append(f"  order: {m['order']},")
    for k in ('deity', 'source', 'summary', 'summaryKn'):
        L.append(f'  {k}: {js(m[k])},')
    if m.get('variants'):
        L.append('  variants: [')
        for vc in m['variants']:
            L.append('    {')
            L.append(f"      key: {js(vc['key'])},")
            L.append(f"      title: {js(vc['title'])},")
            L.append(f"      titleKn: {js(vc['titleKn'])},")
            L.append('      options: [')
            for o in vc['options']:
                L.append(f"        {{ id: {js(o['id'])}, label: {js(o['label'])}, labelKn: {js(o['labelKn'])} }},")
            L.append('      ],')
            L.append('    },')
        L.append('  ],')
    L.append(f"  difficulty: {js(m['difficulty'])},")
    L.append(f"  completeness: {js(m['completeness'])},")
    if m.get('contentNote'):
        L.append(f"  contentNote: {js(m['contentNote'])},")
    L.append('  sections: [')
    for s in m['sections']:
        L.append('    {')
        for k in ('title', 'titleEn', 'note', 'noteKn'):
            if s.get(k):
                L.append(f'      {k}: {js(s[k])},')
        if s.get('when'):
            L.append(f"      when: {ts_when(s['when'])},")
        L.append('      verses: [')
        for v in s['verses']:
            L.append('        {')
            if v.get('n'):
                L.append(f"          n: {v['n']},")
            L.append(f"          text: {js(v['text'])},")
            L.append('          meaning: {')
            L.append(f"            en: {js(v['m']['en'])},")
            L.append(f"            kn: {js(v['m']['kn'])},")
            L.append('          },')
            if v.get('when'):
                L.append(f"          when: {ts_when(v['when'])},")
            L.append('        },')
        L.append('      ],')
        L.append('    },')
    L.append('  ],')
    L.append('};')
    open(path, 'w', encoding='utf-8').write('\n'.join(L) + '\n')

def check(m):
    for si, s in enumerate(m['sections']):
        assert s['verses'], (m['id'], si)
        for vi, v in enumerate(s['verses']):
            for l in LANGS:
                assert v['m'].get(l, '').strip(), (m['id'], si, vi, l, v['text'][:40])
            assert not re.search(r'[A-Za-z]', v['text']), (m['id'], si, vi, v['text'])
            assert not re.search(r'॥\s*[०-९0-9]+\s*॥', v['text']), (m['id'], si, vi)

def merge_packs(m, summaries):
    check(m)
    for lang in ('hi', 'te', 'ta'):
        path = f'{REPO}/src/data/meanings/{lang}/homa.ts'
        lines = open(path, encoding='utf-8').read().split('\n')  # re-read right before editing
        block = [f"    '{m['id']}': {{", f'      summary: {js(summaries[lang])},', '      verses: {']
        for si, s in enumerate(m['sections']):
            for vi, v in enumerate(s['verses']):
                block.append(f"        '{si}.{vi}': {js(v['m'][lang])},")
        block += ['      },', '    },']
        start = next((i for i, l in enumerate(lines) if l == f"    '{m['id']}': {{"), None)
        if start is None:
            end_i = max(i for i, l in enumerate(lines) if l == '  },')
            lines[end_i:end_i] = block
        else:
            end = next(i for i in range(start + 1, len(lines)) if lines[i] == '    },')
            lines[start:end + 1] = block
        open(path, 'w', encoding='utf-8').write('\n'.join(lines))

def count(m):
    return sum(len(s['verses']) for s in m['sections'])

# ---------- shared uttaranga / closing ----------
PURV = 'homa-purvanga'

def uttaranga_step(extra_en='', extra_kn='', verses=()):
    """The step that sends the reader to the Common Procedure for the uttaranga."""
    head = V('उत्तराङ्गम् — स्विष्टकृदादि ॥',
             'The uttaranga, beginning with the svishtakrit. (A heading: do these steps from "Homa: Common Procedure".)',
             'ಸ್ವಿಷ್ಟಕೃತ್‌ನಿಂದ ಆರಂಭವಾಗುವ ಉತ್ತರಾಂಗ. (ಶೀರ್ಷಿಕೆ: ಈ ಹಂತಗಳನ್ನು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಿಂದ ಮಾಡಿ.)',
             'स्विष्टकृत् से आरम्भ होने वाला उत्तरांग। (शीर्षक: ये चरण "होमविधि — पूर्वांग उत्तरांग" पाठ से करें।)',
             'స్విష్టకృత్‌తో మొదలయ్యే ఉత్తరాంగం. (శీర్షిక: ఈ దశలను "హోమవిధి — పూర్వాంగం ఉత్తరాంగం" పాఠం నుండి చేయండి.)',
             'ஸ்விஷ்டக்ருத்தில் தொடங்கும் உத்தராங்கம். (தலைப்பு: இந்தப் படிகளை "ஹோமவிதி — பூர்வாங்கம் உத்தராங்கம்" பாடத்திலிருந்து செய்யவும்.)')
    return Sec('उत्तराङ्गम्', 'Uttaranga: do the Common Procedure from the svishtakrit to the closing prayers',
               'After the last main oblation, do the uttaranga as given in full in "Homa: Common Procedure", for your tradition: the svishtakrit (offered with a little of each material used in the main homa), the prayaschitta offerings, the purnahuti and vasordhara, the samsrava, the marjana, the agni upasthana, the raksha and the closing prayers. Keep the samarpana and the farewell to Agni for the end of this text, after the closing puja. ' + extra_en,
               'ಕೊನೆಯ ಪ್ರಧಾನ ಆಹುತಿಯ ನಂತರ “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿರುವಂತೆ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಉತ್ತರಾಂಗ ಮಾಡಿ: ಸ್ವಿಷ್ಟಕೃತ್ (ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗದಿಂದ), ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ–ವಸೋರ್ಧಾರಾ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮಾಪ್ತಿ ಪ್ರಾರ್ಥನೆಗಳು. ಸಮರ್ಪಣೆ ಮತ್ತು ಅಗ್ನಿವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತರಪೂಜೆಯ ನಂತರ, ಈ ಪಠ್ಯದ ಕೊನೆಯಲ್ಲಿ ಮಾಡಿ. ' + extra_kn,
               [head] + list(verses))

def closing_puja(deity_note_en, deity_note_kn):
    """Uttara puja of the deity: arati, mantrapushpa, pradakshina (from the Daily Puja)."""
    NP = 'nitya-puja'
    return [
        Sec('उत्तरपूजा — नीराजनम्', 'Closing puja: arati', deity_note_en + ' Wave the lamp (mangalarati) before the deity.',
            deity_note_kn + ' ದೇವತೆಗೆ ಮಂಗಳಾರತಿ ಬೆಳಗಿ.', [C(NP, 30, 0, when=M), C(NP, 31, 0, when=S), C(NP, 31, 1, when=S)]),
        Sec('मन्त्रपुष्पम्', 'Mantrapushpa', 'Stand, hold flowers in the joined palms, recite and offer them at the feet of the deity.',
            'ಎದ್ದು ನಿಂತು ಬೊಗಸೆಯಲ್ಲಿ ಹೂವು ಹಿಡಿದು ಮಂತ್ರ ಹೇಳಿ ದೇವತೆಯ ಪಾದಗಳಿಗೆ ಅರ್ಪಿಸಿ.',
            [C(NP, 32, 0, when=M), C(NP, 32, 1, when=M), C(NP, 33, 0, when=S), C(NP, 33, 1, when=S)]),
        Sec('प्रदक्षिणनमस्काराः', 'Pradakshina and namaskara', 'Go round the fire and the deity clockwise (three times, or as many as you can) and prostrate.',
            'ಅಗ್ನಿ ಮತ್ತು ದೇವತೆಗೆ ಪ್ರದಕ್ಷಿಣೆ (ಮೂರು ಬಾರಿ ಅಥವಾ ಸಾಧ್ಯವಾದಷ್ಟು) ಮಾಡಿ ನಮಸ್ಕರಿಸಿ.',
            [C(NP, 35, 0, when=M), C(NP, 35, 1, when=M), C(NP, 36, 0, when=S)]),
    ]

def samarpana(madhva_verse, smarta_verse):
    """Kshamapana, samarpana with the homa's own wording, and farewell to Agni."""
    NP = 'nitya-puja'
    return [
        Sec('क्षमापनं समर्पणं च', 'Kshamapana, samarpana and farewell to Agni',
            'Ask pardon for any fault, and offer the whole rite to the Lord with water from the hand, saying this homa\'s own samarpana (it takes the place of अनेन अमुकहोमेन… in "Homa: Common Procedure"). Then bid Agni farewell; the fire is left to die down, never put out with water.',
            'ಯಾವುದೇ ದೋಷಕ್ಕೆ ಕ್ಷಮೆ ಬೇಡಿ, ಈ ಹೋಮದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಹೇಳುತ್ತಾ (“ಹೋಮವಿಧಿ” ಪಠ್ಯದ “ಅನೇನ ಅಮುಕಹೋಮೇನ…” ಬದಲು) ಕೈಯಿಂದ ನೀರು ಬಿಟ್ಟು ಇಡೀ ಕರ್ಮವನ್ನು ಭಗವಂತನಿಗೆ ಸಮರ್ಪಿಸಿ. ನಂತರ ಅಗ್ನಿಯನ್ನು ವಿಸರ್ಜಿಸಿ; ಅಗ್ನಿಯನ್ನು ನೀರಿನಿಂದ ನಂದಿಸಬಾರದು, ತಾನಾಗಿ ಶಾಂತವಾಗಲಿ.',
            [C(NP, 37, 0, when=M), C(NP, 37, 2, when=M), madhva_verse, C(PURV, 32, 3, when=M, lib=LIBO),
             C(NP, 38, 0, when=S), C(NP, 38, 1, when=S), smarta_verse]),
    ]

TRADITION = {
    'key': 'tradition', 'title': 'Tradition', 'titleKn': 'ಸಂಪ್ರದಾಯ',
    'options': [{'id': 'madhva', 'label': 'Madhva', 'labelKn': 'ಮಾಧ್ವ'}, {'id': 'smarta', 'label': 'Smarta', 'labelKn': 'ಸ್ಮಾರ್ತ'}],
}
VEDA = {
    'key': 'veda', 'title': 'Veda (for the graha mantras)', 'titleKn': 'ವೇದ (ಗ್ರಹಮಂತ್ರಗಳಿಗೆ)',
    'options': [{'id': 'rigveda', 'label': 'Rigveda', 'labelKn': 'ಋಗ್ವೇದ'}, {'id': 'yajurveda', 'label': 'Yajurveda (Taittiriya)', 'labelKn': 'ಯಜುರ್ವೇದ (ತೈತ್ತಿರೀಯ)'}],
}

def purvanga_step(madhva_upto_en, madhva_upto_kn):
    """The one-line step that sends the reader to the Common Procedure for the agnimukha."""
    return Sec('अग्निमुखम्', 'Agnimukha: do the purvanga (Homa: Common Procedure) up to the ajyabhaga',
               'Now do the purvanga as given in "Homa: Common Procedure", from the kalasha and punyahavachana up to the ajyabhaga: preparing the sthandila, installing and meditating on the fire, paristarana, purifying the ghee, the fuel, the aghara and ajyabhaga. ' + madhva_upto_en + ' Smartas then give the four vyahriti offerings. Come back here for the main offerings.',
               '“ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿರುವಂತೆ ಕಲಶ–ಪುಣ್ಯಾಹವಾಚನದಿಂದ ಆಜ್ಯಭಾಗದವರೆಗೆ ಪೂರ್ವಾಂಗ ಮಾಡಿ: ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ–ಧ್ಯಾನ, ಪರಿಸ್ತರಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ. ' + madhva_upto_kn + ' ಸ್ಮಾರ್ತರು ನಂತರ ನಾಲ್ಕು ವ್ಯಾಹೃತಿ ಆಹುತಿಗಳನ್ನು ನೀಡುತ್ತಾರೆ. ಪ್ರಧಾನ ಆಹುತಿಗಳಿಗಾಗಿ ಇಲ್ಲಿಗೆ ಹಿಂತಿರುಗಿ.',
               [V('अग्निमुखम् — आज्यभागान्तम् ॥',
                  'The agnimukha, up to the ajyabhaga. (A heading: do these steps from "Homa: Common Procedure".)',
                  'ಅಗ್ನಿಮುಖ, ಆಜ್ಯಭಾಗದವರೆಗೆ. (ಶೀರ್ಷಿಕೆ: ಈ ಹಂತಗಳನ್ನು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಿಂದ ಮಾಡಿ.)',
                  'अग्निमुख, आज्यभाग तक। (शीर्षक: ये चरण "होमविधि — पूर्वांग उत्तरांग" पाठ से करें।)',
                  'అగ్నిముఖం, ఆజ్యభాగం వరకు. (శీర్షిక: ఈ దశలను "హోమవిధి — పూర్వాంగం ఉత్తరాంగం" పాఠం నుండి చేయండి.)',
                  'அக்னிமுகம், ஆஜ்யபாகம் வரை. (தலைப்பு: இந்தப் படிகளை "ஹோமவிதி — பூர்வாங்கம் உத்தராங்கம்" பாடத்திலிருந்து செய்யவும்.)')])
