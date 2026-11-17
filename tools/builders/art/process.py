#!/usr/bin/env python3
"""Crop the public-domain paintings (Wikimedia Commons; see SOURCES.md) into the app's art.

  python3 tools/builders/art/process.py <dir with <key>.jpg>

For each key: <key>-card.jpg (3:4 book card), <key>-hero.jpg (wide banner for the Home card)
and <key>-thumb.jpg (square, for round deity images), into assets/art/. FOCUS gives the point
(fractions of width and height) that each crop centres on: the deity's face or the scene.
"""
import os, sys
from PIL import Image, ImageEnhance

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), '../../../assets/art')
os.makedirs(OUT, exist_ok=True)
# (x, y) focus for card / hero, and for the round thumbnail (usually the face).
FOCUS = {
    'gita': ((0.38, 0.5), (0.5, 0.4), (0.5, 0.24)),
    'mahabharata': ((0.5, 0.45), (0.5, 0.34), (0.5, 0.33)),
    'vishnu': ((0.34, 0.5), (0.4, 0.5), (0.22, 0.5)),
    'ramayana': ((0.5, 0.40), (0.5, 0.33), (0.5, 0.28)),
    'hanuman': ((0.5, 0.40), (0.5, 0.30), (0.55, 0.22)),
    'durga': ((0.5, 0.45), (0.45, 0.33), (0.45, 0.31)),
    'lakshmi': ((0.5, 0.35), (0.5, 0.25), (0.5, 0.16)),
    'shiva': ((0.5, 0.40), (0.5, 0.38), (0.5, 0.36)),
    'ganesha': ((0.4, 0.45), (0.4, 0.45), (0.26, 0.42)),
    'subrahmanya': ((0.45, 0.55), (0.5, 0.45), (0.42, 0.42)),
    'surya': ((0.5, 0.40), (0.5, 0.30), (0.5, 0.22)),
    'krishna': ((0.35, 0.45), (0.5, 0.40), (0.28, 0.42)),
}

def crop(im, ar, fx, fy, scale=1.0):
    """Largest crop of aspect `ar` (w/h) times `scale`, centred on (fx, fy) as far as it fits."""
    W, H = im.size
    if W / H > ar: h = H; w = h * ar
    else: w = W; h = w / ar
    w *= scale; h *= scale
    x = min(max(fx * W - w / 2, 0), W - w); y = min(max(fy * H - h / 2, 0), H - h)
    return im.crop((int(x), int(y), int(x + w), int(y + h)))

THUMB_SCALE = {'gita': 0.34, 'subrahmanya': 0.4, 'surya': 0.45, 'krishna': 0.5, 'vishnu': 0.4, 'durga': 0.5, 'ganesha': 0.3, 'mahabharata': 0.5}

# Cards whose subject is small in a busy scene: a tighter crop, so it clears the title at the foot.
CARD_SCALE = {'vishnu': 0.72}

for key, (card, hero, thumb) in FOCUS.items():
    p = os.path.join(SRC, key + '.jpg')
    if not os.path.exists(p): print('missing', key); continue
    im = Image.open(p).convert('RGB')
    # Old prints are often faded: a touch more contrast and colour, never garish.
    im = ImageEnhance.Contrast(im).enhance(1.06); im = ImageEnhance.Color(im).enhance(1.05)
    crop(im, 3 / 4, *card, scale=CARD_SCALE.get(key, 1.0)).resize((600, 800), Image.LANCZOS).save(f'{OUT}/{key}-card.jpg', quality=80, optimize=True, progressive=True)
    crop(im, 16 / 9, *hero).resize((960, 540), Image.LANCZOS).save(f'{OUT}/{key}-hero.jpg', quality=80, optimize=True, progressive=True)
    crop(im, 1, *thumb, scale=THUMB_SCALE.get(key, 0.55)).resize((240, 240), Image.LANCZOS).save(f'{OUT}/{key}-thumb.jpg', quality=82, optimize=True)
    print('ok', key, im.size)
