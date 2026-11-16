export type ThemeName = 'light' | 'sepia' | 'dark' | 'contrast' | 'night';

export interface Theme {
  name: ThemeName;
  bg: string;
  card: string;
  cardBorder: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  onAccent: string;
  verseNumber: string;
  warningBg: string;
  warningText: string;
  statusBar: 'light' | 'dark';
  /** Book page colours. */
  page: string;
  pageEdge: string;
  ornament: string;
  /** Temple gold: icons that mark rather than act, ornaments, rules. */
  gold: string;
  /** A wash of gold behind icons and tiles. */
  goldSoft: string;
}

/**
 * One design, "Deepa": sandalwood and ivory by day, lamp-lit brown by night, kumkum red for what you
 * act on and temple gold for ornament. Sepia and the old night theme are folded into these two (their
 * stored names still work); contrast is the large-print theme.
 */
const DAY: Omit<Theme, 'name'> = {
  bg: '#FAF4E8',
  card: '#FFFDF8',
  cardBorder: '#EBDDC3',
  text: '#2B1A0E',
  textMuted: '#75604B',
  accent: '#9E2B14',
  accentSoft: '#F6E4D2',
  onAccent: '#FFF8EE',
  verseNumber: '#9E2B14',
  warningBg: '#FFF1C9',
  warningText: '#6B4A00',
  statusBar: 'dark',
  page: '#FFFCF4',
  pageEdge: '#E8D6B6',
  ornament: '#B5832A',
  gold: '#A8741C',
  goldSoft: '#F4E7C8',
};
const NIGHT: Omit<Theme, 'name'> = {
  bg: '#140E09',
  card: '#1F170F',
  cardBorder: '#3A2C1C',
  text: '#F2E5CF',
  textMuted: '#B29C7E',
  accent: '#EBA45C',
  accentSoft: '#3A2614',
  onAccent: '#1A0E04',
  verseNumber: '#E59A52',
  warningBg: '#3A2E10',
  warningText: '#F3D88A',
  statusBar: 'light',
  page: '#1A130C',
  pageEdge: '#3A2D1E',
  ornament: '#C99A4E',
  gold: '#D8AC5A',
  goldSoft: '#33271A',
};

export const THEMES: Record<ThemeName, Theme> = {
  light: { name: 'light', ...DAY },
  sepia: { name: 'light', ...DAY },
  dark: { name: 'dark', ...NIGHT },
  night: { name: 'dark', ...NIGHT },
  contrast: {
    name: 'contrast',
    bg: '#FFFFFF',
    card: '#FFFFFF',
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
  },
};
