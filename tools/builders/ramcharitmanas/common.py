"""Shared helpers for the Ramcharitmanas (Bal and Ayodhya Kand) build. Python 3, standard library only.

Scratch directory (raw downloads, parsed witnesses) is given by the RCM_WORK environment variable.
"""
import os, re, unicodedata

WORK = os.environ.get('RCM_WORK', '/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm')
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))

NUKTA = {'क़': 'क', 'ख़': 'ख', 'ग़': 'ग', 'ज़': 'ज', 'ड़': 'ड',
         'ढ़': 'ढ', 'फ़': 'फ', 'य़': 'य'}

def no_nukta(s):
    """Letters with a nukta are written without the dot (library convention)."""
    s = s.replace('़', '')
    return ''.join(NUKTA.get(c, c) for c in s)

def spacing(line):
    """One line: ' ।' / ' ॥' with a space before, a space after an inner danda, no double/edge spaces."""
    line = line.replace('|', '।')
    line = re.sub(r'[‌‍]', '', line)
    line = re.sub(r'\s*([।॥])\s*', r' \1 ', line)
    line = re.sub(r'(?<=[।॥]) (?=[।॥])', '', line)   # '। ।' kept as typed if it ever occurs
    line = re.sub(r'\s+', ' ', line).strip()
    return line

def loose(s):
    """Comparison key: nukta, danda forms, spacing, quotes and digits removed."""
    s = no_nukta(unicodedata.normalize('NFC', s))
    s = re.sub(r'[।॥|.,;:!?\'‘’"“”\-–—()\[\]*\s‌‍]', '', s)
    s = re.sub(r'[०-९0-9]', '', s)
    return s

def skeleton(s):
    """Coarse key: nukta, nasal signs, virama, ri-matra and vowel length are ignored (orthographic variants)."""
    s = loose(s)
    s = re.sub('[ँंः्ृॄं]', '', s)
    s = s.translate(str.maketrans({'ी': 'ि', 'ू': 'ु', 'ई': 'इ', 'ऊ': 'उ'}))
    return s

def skeleton2(s):
    """Coarser than skeleton(): also final -u/-i, v/b, s/ś/ṣ, n/ṇ, e/ai and anusvara-homorganic nasals are ignored."""
    s = skeleton(s)
    s = re.sub(r'[ुि]( |$)', r'\1', s)
    s = s.translate(str.maketrans({'व': 'ब', 'श': 'स', 'ष': 'स', 'ण': 'न', 'ङ': 'न', 'ञ': 'न', 'ै': 'े', 'ौ': 'ो', 'ह': 'ह'}))
    s = re.sub(r'[ुि]$', '', s)
    return s
