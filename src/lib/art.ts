/**
 * Paintings made for the app by its author, one for each work and each deity of the day: see
 * assets/art/SOURCES.md. Cropped by tools/builders/art/process.py into a 3:4 card, a wide banner
 * and a square for round images. A work gets a painting only where one shows its own subject;
 * any other keeps its cloth cover.
 */
import type { ImageSourcePropType } from 'react-native';

export interface Art {
  card: ImageSourcePropType;
  hero: ImageSourcePropType;
  thumb: ImageSourcePropType;
}

export const ART = {
  gita: { card: require('../../assets/art/gita-card.jpg'), hero: require('../../assets/art/gita-hero.jpg'), thumb: require('../../assets/art/gita-thumb.jpg') },
  sundarakanda: { card: require('../../assets/art/sundarakanda-card.jpg'), hero: require('../../assets/art/sundarakanda-hero.jpg'), thumb: require('../../assets/art/sundarakanda-thumb.jpg') },
  ramayana: { card: require('../../assets/art/ramayana-card.jpg'), hero: require('../../assets/art/ramayana-hero.jpg'), thumb: require('../../assets/art/ramayana-thumb.jpg') },
  mahabharata: { card: require('../../assets/art/mahabharata-card.jpg'), hero: require('../../assets/art/mahabharata-hero.jpg'), thumb: require('../../assets/art/mahabharata-thumb.jpg') },
  vishnu: { card: require('../../assets/art/vishnu-card.jpg'), hero: require('../../assets/art/vishnu-hero.jpg'), thumb: require('../../assets/art/vishnu-thumb.jpg') },
  devimahatmya: { card: require('../../assets/art/devimahatmya-card.jpg'), hero: require('../../assets/art/devimahatmya-hero.jpg'), thumb: require('../../assets/art/devimahatmya-thumb.jpg') },
  lalita: { card: require('../../assets/art/lalita-card.jpg'), hero: require('../../assets/art/lalita-hero.jpg'), thumb: require('../../assets/art/lalita-thumb.jpg') },
  saundaryalahari: { card: require('../../assets/art/saundaryalahari-card.jpg'), hero: require('../../assets/art/saundaryalahari-hero.jpg'), thumb: require('../../assets/art/saundaryalahari-thumb.jpg') },
  vayustuti: { card: require('../../assets/art/vayustuti-card.jpg'), hero: require('../../assets/art/vayustuti-hero.jpg'), thumb: require('../../assets/art/vayustuti-thumb.jpg') },
  sumadhvavijaya: { card: require('../../assets/art/sumadhvavijaya-card.jpg'), hero: require('../../assets/art/sumadhvavijaya-hero.jpg'), thumb: require('../../assets/art/sumadhvavijaya-thumb.jpg') },
  harikathamrutasara: { card: require('../../assets/art/harikathamrutasara-card.jpg'), hero: require('../../assets/art/harikathamrutasara-hero.jpg'), thumb: require('../../assets/art/harikathamrutasara-thumb.jpg') },
  surya: { card: require('../../assets/art/surya-card.jpg'), hero: require('../../assets/art/surya-hero.jpg'), thumb: require('../../assets/art/surya-thumb.jpg') },
  shiva: { card: require('../../assets/art/shiva-card.jpg'), hero: require('../../assets/art/shiva-hero.jpg'), thumb: require('../../assets/art/shiva-thumb.jpg') },
  subrahmanya: { card: require('../../assets/art/subrahmanya-card.jpg'), hero: require('../../assets/art/subrahmanya-hero.jpg'), thumb: require('../../assets/art/subrahmanya-thumb.jpg') },
  krishna: { card: require('../../assets/art/krishna-card.jpg'), hero: require('../../assets/art/krishna-hero.jpg'), thumb: require('../../assets/art/krishna-thumb.jpg') },
  lakshmi: { card: require('../../assets/art/lakshmi-card.jpg'), hero: require('../../assets/art/lakshmi-hero.jpg'), thumb: require('../../assets/art/lakshmi-thumb.jpg') },
  hanuman: { card: require('../../assets/art/hanuman-card.jpg'), hero: require('../../assets/art/hanuman-hero.jpg'), thumb: require('../../assets/art/hanuman-thumb.jpg') },
  ganesha: { card: require('../../assets/art/ganesha-card.jpg'), hero: require('../../assets/art/ganesha-hero.jpg'), thumb: require('../../assets/art/ganesha-thumb.jpg') },
  durga: { card: require('../../assets/art/durga-card.jpg'), hero: require('../../assets/art/durga-hero.jpg'), thumb: require('../../assets/art/durga-thumb.jpg') },
} satisfies Record<string, Art>;

export type ArtKey = keyof typeof ART;

/**
 * Where the face is in each wide banner (a fraction of its height). The banners keep the painting's
 * top, so this is the face's height in the painting scaled to the 16:9 crop (see process.py).
 */
export const HERO_FACE_Y: Record<ArtKey, number> = {
  gita: 0.28, sundarakanda: 0.36, ramayana: 0.24, mahabharata: 0.21, vishnu: 0.24, devimahatmya: 0.23, lalita: 0.26,
  saundaryalahari: 0.24, vayustuti: 0.28, sumadhvavijaya: 0.26, harikathamrutasara: 0.36, surya: 0.21, shiva: 0.21,
  subrahmanya: 0.24, krishna: 0.26, lakshmi: 0.24, hanuman: 0.2, ganesha: 0.28, durga: 0.2,
};

/** Painting for a deity group (src/lib/deities.ts): the gurus have Madhva's. */
export const DEITY_ART: Partial<Record<string, ArtKey>> = { vishnu: 'vishnu', devi: 'lakshmi', shiva: 'shiva', ganesha: 'ganesha', vayu: 'hanuman', surya: 'surya', subrahmanya: 'subrahmanya', guru: 'sumadhvavijaya' };

/** The deity of the day for the Home card: by tithi on its special days, else by weekday. */
export function dayArt(weekday: number, tithiIndex: number): ArtKey {
  const t = ((tithiIndex - 1) % 15) + 1;
  if (t === 11) return 'vishnu'; // Ekādaśī
  if (t === 4) return 'ganesha'; // Caturthī
  if (t === 6) return 'subrahmanya'; // Ṣaṣṭhī
  if (t === 8 && tithiIndex <= 15) return 'durga'; // śukla Aṣṭamī
  return (['surya', 'shiva', 'subrahmanya', 'krishna', 'vishnu', 'lakshmi', 'hanuman'] as const)[weekday];
}

