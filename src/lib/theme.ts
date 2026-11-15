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
}

export const THEMES: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    bg: '#FFF9F0',
    card: '#FFFFFF',
    cardBorder: '#F0E2CC',
    text: '#2A1A0C',
    textMuted: '#7A6552',
    accent: '#B23A12',
    accentSoft: '#FBE6D6',
    onAccent: '#FFFFFF',
    verseNumber: '#B23A12',
    warningBg: '#FFF1C9',
    warningText: '#6B4A00',
    statusBar: 'dark',
    page: '#FFFCF5',
    pageEdge: '#EADBC2',
    ornament: '#C8873F',
  },
  sepia: {
    name: 'sepia',
    bg: '#F4E8D0',
    card: '#FBF3E2',
    cardBorder: '#E2D0AE',
    text: '#3B2A17',
    textMuted: '#7D6648',
    accent: '#8E3B12',
    accentSoft: '#EBD7B5',
    onAccent: '#FFFFFF',
    verseNumber: '#8E3B12',
    warningBg: '#EEDDB0',
    warningText: '#5A3F00',
    statusBar: 'dark',
    page: '#F7EEDB',
    pageEdge: '#D9C49C',
    ornament: '#9A6A2C',
  },
  dark: {
    name: 'dark',
    bg: '#14100C',
    card: '#1F1914',
    cardBorder: '#33291F',
    text: '#F2E7D8',
    textMuted: '#A8957F',
    accent: '#F29A5C',
    accentSoft: '#3A2617',
    onAccent: '#1A0E05',
    verseNumber: '#F29A5C',
    warningBg: '#3A2E10',
    warningText: '#F3D88A',
    statusBar: 'light',
    page: '#1B1612',
    pageEdge: '#3A2F24',
    ornament: '#C98A4E',
  },
  /** Warm and dim for reading at night: amber on near-black, no bright whites. */
  night: {
    name: 'night',
    bg: '#0E0A07',
    card: '#17110C',
    cardBorder: '#2A2016',
    text: '#E8C9A0',
    textMuted: '#9C7F5E',
    accent: '#E0904E',
    accentSoft: '#2C1C10',
    onAccent: '#140A03',
    verseNumber: '#D9844A',
    warningBg: '#2E2410',
    warningText: '#E2C27A',
    statusBar: 'light',
    page: '#120D09',
    pageEdge: '#2C2218',
    ornament: '#A8703C',
  },
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
  },
};
