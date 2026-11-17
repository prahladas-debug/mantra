import { useEffect } from 'react';
import { Platform } from 'react-native';
import { cityById, todayIn } from '../lib/panchanga';
import { useI18n } from '../lib/i18n';
import { useClockTick, useSettings } from '../lib/settings';
import { buildWidgetDays } from '../lib/widgetSync';
import { useCalcMethod, useCalendarMode, useEkadashiRule, useSauraStart } from './PanchangaCard';

/**
 * Keeps the Android "Today" home-screen widget up to date: pushes the next week of pañcāṅga for
 * the reader's city when the app opens or returns to the foreground, and when the place, the
 * language, the script or a calculation setting changes. Renders nothing; does nothing on the
 * web, iOS or in Expo Go (no widget module there).
 */
export function WidgetSync() {
  const { ready, settings } = useSettings();
  const { lang } = useI18n();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  const cityId = settings.city;
  const script = settings.script;
  // Also when the app is brought back to the front (and every half hour while it is open).
  const tick = useClockTick(30 * 60 * 1000);

  useEffect(() => {
    if (!ready || Platform.OS !== 'android') return;
    // After the screen has drawn: the calculation is a few hundred milliseconds of work.
    const id = setTimeout(() => {
      try {
        // Loaded here, not at the top: without the native module (Expo Go) the import throws.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const widget = (require('../widgets/TodayWidget') as typeof import('../widgets/TodayWidget')).default;
        const city = cityById(cityId);
        const days = buildWidgetDays({ city, today: todayIn(city), rule, mode, start, method, lang, script });
        widget.updateSnapshot({ days });
      } catch {
        // No widget support here, or the update failed: the widget keeps what it had.
      }
    }, 300);
    return () => clearTimeout(id);
  }, [ready, cityId, rule, mode, start, method, lang, script, tick]);

  return null;
}
