import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { isRoman } from '../lib/transliterate';

/**
 * Whether an English secondary name (titleEn, nameEn, English descriptions) may be shown:
 * only in the English interface, and only when the reading script is an Indian script
 * (a Roman script already shows the name itself).
 */
export function useShowEnglish(): boolean {
  const { lang } = useI18n();
  const { settings } = useSettings();
  return lang === 'en' && !isRoman(settings.script);
}
