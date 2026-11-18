import { audienceFor, type Audience } from './audience';
import { useI18n } from './i18n';
import { cityById } from './panchanga';
import { useSettings } from './settings';

/** The reader's audience (see audience.ts): what Home, the Library and the festival lists lead with. */
export function useAudience(): Audience {
  const { settings } = useSettings();
  const { lang } = useI18n();
  return audienceFor({ uiLang: lang, script: settings.script, cityState: cityById(settings.city).state, override: settings.contentFor });
}
