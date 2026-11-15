/**
 * Plain English spelling of Sanskrit words written in IAST, as most readers expect:
 * Pañcāṅga → Panchanga, Ekādaśī → Ekadashi, Kṛṣṇa → Krishna, Caturthī → Chaturthi.
 * Only words that carry an IAST mark are respelled, so ordinary English ("calendar") is left alone.
 */
const MARKED = /[āīūṛṝḷṅñṭḍṇśṣṃḥēōĀĪŪṚṜḶṄÑṬḌṆŚṢṂḤĒŌ]/;

function respell(w: string): string {
  return w
    // One pass: IAST ch (छ) → chh, c (च) → ch (two passes would turn ch into chhh).
    .replace(/[cC]h?/g, (x) => (x[0] === 'C' ? 'Ch' : 'ch') + (x.length > 1 ? 'h' : ''))
    .replace(/[śṣ]/g, 'sh').replace(/[ŚṢ]/g, 'Sh')
    .replace(/ṛ/g, 'ri').replace(/Ṛ/g, 'Ri').replace(/ṝ/g, 'ri').replace(/ḷ/g, 'l').replace(/Ḷ/g, 'L')
    .replace(/[ṅñṇ]/g, 'n').replace(/[ṄÑṆ]/g, 'N')
    .replace(/ṭ/g, 't').replace(/Ṭ/g, 'T').replace(/ḍ/g, 'd').replace(/Ḍ/g, 'D')
    .replace(/ṃ/g, 'm').replace(/Ṃ/g, 'M').replace(/ḥ/g, 'h').replace(/Ḥ/g, 'H')
    .replace(/ā/g, 'a').replace(/Ā/g, 'A').replace(/ī/g, 'i').replace(/Ī/g, 'I').replace(/ū/g, 'u').replace(/Ū/g, 'U')
    .replace(/ē/g, 'e').replace(/ō/g, 'o').replace(/Ē/g, 'E').replace(/Ō/g, 'O');
}

export function plain(s: string): string {
  return s.replace(/[\p{L}\p{M}]+/gu, (w) => (MARKED.test(w) ? respell(w) : w));
}
