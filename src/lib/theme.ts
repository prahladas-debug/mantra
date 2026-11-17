export type ThemeName = 'light' | 'sepia' | 'dark' | 'contrast' | 'night';

/**
 * Semantic colour tokens. Every screen takes its colours from here, so Light and Dark are the same
 * design with different values (same layouts, sizes and spacing).
 */
export interface Theme {
  name: ThemeName;
  /** Main page background. */
  bg: string;
  /** Secondary background: bands, wells, icon circles. */
  bgSecondary: string;
  /** Card surface. */
  card: string;
  /** Elevated surface: sheets, menus, highlighted cards. */
  elevated: string;
  cardBorder: string;
  /** Primary text. */
  text: string;
  /** Secondary text. */
  textMuted: string;
  /** Primary accent (terracotta): what you act on, selected states, important dates. */
  accent: string;
  /** Selected background (chips, the continue-reading card, highlighted rows). */
  accentSoft: string;
  /** Text on an accent fill. */
  onAccent: string;
  verseNumber: string;
  warningBg: string;
  warningText: string;
  statusBar: 'light' | 'dark';
  /** Reading surface. */
  page: string;
  pageEdge: string;
  ornament: string;
  /** Sacred gold: icons that mark rather than act, labels, ornaments. */
  gold: string;
  /** Behind gold icons (circles on tiles). */
  goldSoft: string;
  /** Completed practice: a quiet, desaturated green. */
  success: string;
  /** Bottom navigation surface. */
  bar: string;
  /** Artwork (book covers, deity discs) is the same in both themes; at night it is dimmed a touch. */
  artOpacity: number;
}

/**
 * Nandadeepa's two themes, one design ("contemporary Indian sacred minimalism").
 * Light: sandalwood, parchment and ivory, like a manuscript. Dark: a temple interior lit by an oil
 * lamp — warm espresso, never pure black; ivory text, never pure white. Terracotta for actions,
 * sacred gold for ornament. Sepia and the old night theme map to these (their stored names still
 * work); contrast is the large-print theme.
 */
const LIGHT: Omit<Theme, 'name'> = {
  bg: '#FAF7F0',
  bgSecondary: '#F3EDE2',
  card: '#FFFEFA',
  elevated: '#FFFFFF',
  cardBorder: '#E8DFD0',
  text: '#332B25',
  textMuted: '#756A60',
  accent: '#A94730',
  accentSoft: '#F4E5D7',
  onAccent: '#FFFEFA',
  verseNumber: '#A94730',
  warningBg: '#F6EBD3',
  warningText: '#6B4E12',
  statusBar: 'dark',
  page: '#FFFEFA',
  pageEdge: '#E8DFD0',
  ornament: '#AD8435',
  gold: '#AD8435',
  goldSoft: '#F3EDE2',
  success: '#5E7D58',
  bar: '#FFFEFA',
  artOpacity: 1,
};
/**
 * Dark: a lamp-lit page at night. Deep warm near-black (never pure black), cards a shade lighter
 * with no visible borders, ivory text (never pure white), and antique lamp-gold as the one accent.
 */
const DARK: Omit<Theme, 'name'> = {
  bg: '#12100D',
  bgSecondary: '#1A1612',
  card: '#1D1915',
  elevated: '#25201A',
  cardBorder: '#2A241D',
  text: '#EFE6D6',
  textMuted: '#A99B88',
  accent: '#D9AE62',
  accentSoft: '#2B241A',
  onAccent: '#17120B',
  verseNumber: '#D9AE62',
  warningBg: '#2E2616',
  warningText: '#E6CD96',
  statusBar: 'light',
  page: '#16130F',
  pageEdge: '#2A241D',
  ornament: '#B8944F',
  gold: '#CFA65C',
  goldSoft: '#26201A',
  success: '#8FA37F',
  bar: '#16130F',
  artOpacity: 0.86,
};

export const THEMES: Record<ThemeName, Theme> = {
  light: { name: 'light', ...LIGHT },
  sepia: { name: 'light', ...LIGHT },
  dark: { name: 'dark', ...DARK },
  night: { name: 'dark', ...DARK },
  contrast: {
    name: 'contrast',
    bg: '#FFFFFF',
    bgSecondary: '#F2F2F2',
    card: '#FFFFFF',
    elevated: '#FFFFFF',
    cardBorder: '#000000',
    text: '#000000',
    textMuted: '#1A1A1A',
    accent: '#7A1F00',
    accentSoft: '#FFE3C7',
    onAccent: '#FFFFFF',
    verseNumber: '#7A1F00',
    warningBg: '#FFF1C9',
    warningText: '#3D2A00',
    statusBar: 'dark',
    page: '#FFFFFF',
    pageEdge: '#000000',
    ornament: '#7A1F00',
    gold: '#7A1F00',
    goldSoft: '#FFE3C7',
    success: '#1F5A1F',
    bar: '#FFFFFF',
    artOpacity: 1,
  },
};
