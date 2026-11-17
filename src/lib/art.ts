/**
 * Paintings in the public domain (Raja Ravi Varma and prints of his Ravi Varma Press), from
 * Wikimedia Commons: see assets/art/SOURCES.md. Cropped by tools/builders/art/process.py into a
 * 3:4 card, a wide banner and a square for round images. A work gets a painting only where one
 * shows its own subject; the others (the Gita, Sundarakanda, ...) keep their cloth covers.
 */
import type { ImageSourcePropType } from 'react-native';

export interface Art {
  card: ImageSourcePropType;
  hero: ImageSourcePropType;
  thumb: ImageSourcePropType;
}

export const ART = {
  mahabharata: { card: require('../../assets/art/mahabharata-card.jpg'), hero: require('../../assets/art/mahabharata-hero.jpg'), thumb: require('../../assets/art/mahabharata-thumb.jpg') },
  vishnu: { card: require('../../assets/art/vishnu-card.jpg'), hero: require('../../assets/art/vishnu-hero.jpg'), thumb: require('../../assets/art/vishnu-thumb.jpg') },
  ramayana: { card: require('../../assets/art/ramayana-card.jpg'), hero: require('../../assets/art/ramayana-hero.jpg'), thumb: require('../../assets/art/ramayana-thumb.jpg') },
  hanuman: { card: require('../../assets/art/hanuman-card.jpg'), hero: require('../../assets/art/hanuman-hero.jpg'), thumb: require('../../assets/art/hanuman-thumb.jpg') },
  durga: { card: require('../../assets/art/durga-card.jpg'), hero: require('../../assets/art/durga-hero.jpg'), thumb: require('../../assets/art/durga-thumb.jpg') },
  lakshmi: { card: require('../../assets/art/lakshmi-card.jpg'), hero: require('../../assets/art/lakshmi-hero.jpg'), thumb: require('../../assets/art/lakshmi-thumb.jpg') },
  shiva: { card: require('../../assets/art/shiva-card.jpg'), hero: require('../../assets/art/shiva-hero.jpg'), thumb: require('../../assets/art/shiva-thumb.jpg') },
  ganesha: { card: require('../../assets/art/ganesha-card.jpg'), hero: require('../../assets/art/ganesha-hero.jpg'), thumb: require('../../assets/art/ganesha-thumb.jpg') },
  subrahmanya: { card: require('../../assets/art/subrahmanya-card.jpg'), hero: require('../../assets/art/subrahmanya-hero.jpg'), thumb: require('../../assets/art/subrahmanya-thumb.jpg') },
  surya: { card: require('../../assets/art/surya-card.jpg'), hero: require('../../assets/art/surya-hero.jpg'), thumb: require('../../assets/art/surya-thumb.jpg') },
  krishna: { card: require('../../assets/art/krishna-card.jpg'), hero: require('../../assets/art/krishna-hero.jpg'), thumb: require('../../assets/art/krishna-thumb.jpg') },
} satisfies Record<string, Art>;

export type ArtKey = keyof typeof ART;

/** Painting for a deity group (src/lib/deities.ts); the gurus have none. */
export const DEITY_ART: Partial<Record<string, ArtKey>> = { vishnu: 'vishnu', devi: 'lakshmi', shiva: 'shiva', ganesha: 'ganesha', vayu: 'hanuman', surya: 'surya', subrahmanya: 'subrahmanya' };

/** The deity of the day for the Home card: by tithi on its special days, else by weekday. */
export function dayArt(weekday: number, tithiIndex: number): ArtKey {
  const t = ((tithiIndex - 1) % 15) + 1;
  if (t === 11) return 'vishnu'; // Ekādaśī
  if (t === 4) return 'ganesha'; // Caturthī
  if (t === 6) return 'subrahmanya'; // Ṣaṣṭhī
  if (t === 8 && tithiIndex <= 15) return 'durga'; // śukla Aṣṭamī
  return (['surya', 'shiva', 'subrahmanya', 'krishna', 'vishnu', 'lakshmi', 'hanuman'] as const)[weekday];
}
