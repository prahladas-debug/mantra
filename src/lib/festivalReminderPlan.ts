/**
 * Which festival / ekādaśī reminders to schedule, and their text. Pure (no native
 * modules), so scripts/test-festival-reminders.ts can run it; festivalReminders.ts
 * schedules the result with expo-notifications.
 *
 * One notification per observance day at most, at `time` (city-local) on the evening
 * before. An ekādaśī reminder names the fast and its pāraṇa (by the same rule) and
 * mentions any major festival on that day; other days get a festival reminder. Names are in
 * plain English spelling (Ekadashi, Mokshada), as on the app's screens.
 */
import { festivalsBetween, type CalendarMode, type EkadashiRule, type Festival } from './festivals';
import { addDays, cityDateOf, parseIso, utcOffsetMinutes, weekdayOf, type CalcMethod, type City } from './panchanga';
import { paranaTimes, shortDay } from './parana';
import { plain } from './plain';
import { dayMonth, hasTr, tr, weekdayName, type UiLang } from './tr';
import { translit, type ScriptId } from './transliterate';
import type { SauraStart } from './sauramana';

/**
 * Festival keys that get a reminder (Festival.key; 'vaikuntha-ekadashi' also matches its
 * dated keys). Keys that only exist in one calendar mode (Udupi Sauramāna ones) simply
 * never occur in the other.
 */
export const MAJOR_FESTIVAL_KEYS = [
  'makara-sankranti',
  'maha-shivaratri',
  'yugadi',
  'sauramana-yugadi',
  'rama-navami',
  'narasimha-jayanti',
  'varamahalakshmi',
  'raghavendra-aradhana',
  'krishna-janmashtami',
  'udupi-krishna-janmashtami',
  'ganesha-chaturthi',
  'navaratri',
  'vijayadashami',
  'madhva-jayanti',
  'deepavali',
  'vaikuntha-ekadashi',
  'madhva-navami',
  'paryaya',
] as const;

/** How far ahead reminders are scheduled. */
export const REMINDER_DAYS = 60;
/** Upper bound on scheduled notifications (iOS keeps at most 64 per app, shared with plan reminders). */
export const MAX_REMINDERS = 40;
/** Notification identifiers start with this (festivalReminders.ts cancels by it, too). */
export const REMINDER_ID_PREFIX = 'festival-reminder-';

export interface FestivalReminderOptions {
  city: City;
  rule: EkadashiRule;
  mode: CalendarMode;
  start: SauraStart;
  /** Calculation method (default: the one set in panchanga.ts, normally drik). */
  method?: CalcMethod;
  /** 'HH:MM', city-local, on the evening before (e.g. '19:00'). */
  time: string;
  kinds: { ekadashi: boolean; festivals: boolean };
  /** Interface language of the notification text (default English) and the reading script for names. */
  lang?: UiLang;
  script?: ScriptId;
}

export interface PlannedReminder {
  /** Notification identifier, `${REMINDER_ID_PREFIX}<date>`. */
  id: string;
  /** Day of the observance, 'YYYY-MM-DD'. */
  date: string;
  /** When to deliver. */
  at: Date;
  title: string;
  body: string;
  /** Delivered with the notification (for the tap handler). */
  data: {
    kind: 'ekadashi' | 'festival';
    date: string;
    /** Festival keys covered. */
    keys: string[];
    /** Text to open, if any, and its route. */
    textId?: string;
    url?: string;
  };
}

const MAJOR = new Set<string>(MAJOR_FESTIVAL_KEYS);
/** Is this a festival that gets a reminder? */
export const isMajorFestival = (f: Festival) =>
  f.kind !== 'ekadashi' && (MAJOR.has(f.key) || (f.key.startsWith('vaikuntha-ekadashi-') && MAJOR.has('vaikuntha-ekadashi')));

/** 'HH:MM' → [h, m]; falls back to 19:00 for anything malformed. */
export function parseTime(time: string): [number, number] {
  const m = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  const h = m ? Number(m[1]) : NaN;
  const mi = m ? Number(m[2]) : NaN;
  return h >= 0 && h < 24 && mi >= 0 && mi < 60 ? [h, mi] : [19, 0];
}

/** The instant of HH:MM city-local time on `day` (follows the city's DST rule). */
export function cityInstant(city: City, day: string, time: string): Date {
  const [y, mo, d] = parseIso(day);
  const [h, mi] = parseTime(time);
  const wall = Date.UTC(y, mo - 1, d, h, mi);
  const guess = wall - city.tz * 3600000;
  return new Date(wall - utcOffsetMinutes(city, guess) * 60000);
}

/**
 * Reminders for observances on the next `days` days (tomorrow … today + days, city dates),
 * whose delivery time is still ahead of `now`. `titleOf` maps a library text id to the
 * title to show ("Read: …"); without it the line is left out.
 */
export function planFestivalReminders(
  opts: FestivalReminderOptions,
  now: Date = new Date(),
  titleOf?: (textId: string) => string | undefined,
  days: number = REMINDER_DAYS,
): PlannedReminder[] {
  const { city, rule, mode, start, method, time, kinds, lang = 'en', script = 'devanagari' } = opts;
  // A festival's name: the English gloss, its translation, else the Sanskrit name in the reading script.
  const name = (f: Festival) => (lang === 'en' ? plain(f.en) : f.kind !== 'ekadashi' && hasTr(lang, f.en) ? tr(lang, f.en) : translit(f.name, script));
  const day = (iso: string) => {
    if (lang === 'en') return shortDay(iso);
    const [, m, d] = parseIso(iso);
    return `${weekdayName(lang, weekdayOf(iso))} ${dayMonth(lang, m, d)}`;
  };
  if (!kinds.ekadashi && !kinds.festivals) return [];
  const today = cityDateOf(city, now.getTime());
  const from = addDays(today, 1);
  const to = addDays(today, days);
  const byDate = new Map<string, Festival[]>();
  for (const f of festivalsBetween(city, from, to, rule, mode, start, method)) {
    if (f.date < from) continue; // a period that began earlier
    if (!(f.kind === 'ekadashi' ? kinds.ekadashi : kinds.festivals && isMajorFestival(f))) continue;
    byDate.set(f.date, [...(byDate.get(f.date) ?? []), f]);
  }

  const out: PlannedReminder[] = [];
  for (const [date, fs] of byDate) {
    const at = cityInstant(city, addDays(date, -1), time);
    if (at.getTime() <= now.getTime()) continue;
    const ek = fs.find((f) => f.kind === 'ekadashi');
    const others = fs.filter((f) => f !== ek);
    const textId = ek?.textId ?? others.find((f) => f.textId)?.textId;
    const read = textId ? titleOf?.(textId) : undefined;
    let title: string;
    const body: string[] = [];
    if (ek) {
      title = tr(lang, 'Ekadashi tomorrow — {name}', { name: name(ek) });
      if (ek.parana) body.push(tr(lang, 'Parana on {day} {times}.', { day: day(ek.parana.date), times: paranaTimes(ek.parana, city, lang) }));
      if (others.length) body.push(tr(lang, 'Also {names}.', { names: others.map(name).join(' · ') }));
    } else {
      title = tr(lang, 'Tomorrow: {names}', { names: others.map(name).join(' · ') });
      const place = others.every((f) => f.place === others[0].place) ? others[0].place : undefined;
      body.push(`${day(date)}${place ? ` · ${place}` : ''}.`);
    }
    if (read) body.push(tr(lang, 'Read: {title}.', { title: read }));
    out.push({
      id: `${REMINDER_ID_PREFIX}${date}`,
      date,
      at,
      title,
      body: body.join(' '),
      data: { kind: ek ? 'ekadashi' : 'festival', date, keys: fs.map((f) => f.key), textId, url: textId ? `/mantra/${textId}` : undefined },
    });
  }
  return out.sort((a, b) => a.at.getTime() - b.at.getTime()).slice(0, MAX_REMINDERS);
}
