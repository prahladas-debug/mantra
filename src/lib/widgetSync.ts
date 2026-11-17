/**
 * The data behind the Android "Today" widget: the next few days of pañcāṅga at the reader's
 * city, in their language and script. Pure (no React), so it can be tested; the widget itself
 * is src/widgets/TodayWidget.tsx and src/components/WidgetSync.tsx pushes this to it.
 */
import { festivalsOn, type CalendarMode, type EkadashiRule } from './festivals';
import { addDays, formatTime, panchanga, parseIso, utcOffsetMinutes, type CalcMethod, type City } from './panchanga';
import type { SauraStart } from './sauramana';
import { translit, translitTitle, type ScriptId } from './transliterate';
import { tr, weekdayName, type UiLang } from './tr';
import type { TodayWidgetDay } from '../widgets/TodayWidget';

/** How many days are sent: the widget cannot wake itself at midnight on every phone, so it gets a week's worth. */
export const WIDGET_DAYS = 7;

export interface WidgetInput {
  city: City;
  /** Today at the city, 'YYYY-MM-DD'. */
  today: string;
  rule: EkadashiRule;
  mode: CalendarMode;
  start: SauraStart;
  method: CalcMethod;
  lang: UiLang;
  script: ScriptId;
}

/** Midnight at the city of a civil date, in ms since 1970. */
function cityMidnight(city: City, iso: string): number {
  const [y, m, d] = parseIso(iso);
  const utc = Date.UTC(y, m - 1, d);
  return utc - utcOffsetMinutes(city, utc - city.tz * 3600000) * 60000;
}

export function buildWidgetDays(input: WidgetInput): TodayWidgetDay[] {
  const { city, today, rule, mode, start, method, lang, script } = input;
  // Names in the reader's script; in plain English they read best capitalised.
  const t = (s: string) => (script === 'english' ? translitTitle(s, script) : translit(s, script));
  const out: TodayWidgetDay[] = [];
  for (let i = 0; i < WIDGET_DAYS; i++) {
    const iso = addDays(today, i);
    const p = panchanga(iso, city, method);
    const fest = festivalsOn(city, iso, rule, mode, start, method).filter((f) => !f.endDate || f.date === iso);
    const tm = (d: Date) => formatTime(d, city, iso, lang);
    out.push({
      // The first day also covers any time before it, so the widget always has something to show.
      from: i === 0 ? 0 : cityMidnight(city, iso),
      heading: `${weekdayName(lang, p.weekday)} · ${city.name}`,
      tithi: t(`${p.adhika ? 'अधिक ' : ''}${p.paksha} ${p.tithi}`),
      nakshatra: `${tr(lang, 'Nakshatra')}: ${t(p.nakshatra)}`,
      rahu: `${tr(lang, 'Rahu kala')} ${tm(p.rahuKala[0])} – ${tm(p.rahuKala[1])}`,
      festival: fest.map((f) => t(f.name)).join(' · '),
    });
  }
  return out;
}
