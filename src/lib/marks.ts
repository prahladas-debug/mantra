/** Colours a verse can be marked in; gold is a plain bookmark. Pure, so backups and tests can use it. */
export const MARK_COLORS = ['gold', 'green', 'blue', 'rose'] as const;
export type MarkColor = (typeof MARK_COLORS)[number];

/** Each mark colour as ink (icons, edges) for the light and the dark pages. */
export const MARK_INK: Record<MarkColor, { light: string; dark: string }> = {
  gold: { light: '#B8862E', dark: '#D9AE62' },
  green: { light: '#3F8452', dark: '#74B985' },
  blue: { light: '#3A68A3', dark: '#7FA6DA' },
  rose: { light: '#B04565', dark: '#DD8AA3' },
};
