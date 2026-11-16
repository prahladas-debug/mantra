/**
 * Pāraṇa: the time to break the Ekādaśī fast, on the day after the fast.
 *
 * Common rules (Hari-bhakti-vilāsa, Dharma-sindhu; drikpanchang's "Ekadashi Vrat Parana"):
 * - after sunrise of the pāraṇa day, and within dvādaśī (breaking it after dvādaśī is a
 *   fault) — unless dvādaśī is already over at sunrise, when any time of the morning will do;
 * - never during Hari-vāsara, the first quarter of dvādaśī;
 * - preferably in the prātaḥkāla, the first fifth of the daytime (sunrise→sunset in five).
 *
 * Smārta (as drikpanchang computes it, verified for Bengaluru and New York in
 * scripts/test-panchanga.ts):
 *   window = [max(sunrise, Hari-vāsara end), min(prātaḥkāla end, dvādaśī end)].
 *   When Hari-vāsara lasts beyond the prātaḥkāla the madhyāhna is avoided and the window is
 *   the aparāhṇa (4th fifth of the day) after Hari-vāsara; drik does this even when
 *   Hari-vāsara ends in the 2nd fifth (saṅgava). If Hari-vāsara outlasts the aparāhṇa too,
 *   pāraṇa is "after" its end (until dvādaśī ends or sunset). If dvādaśī ends before the
 *   aparāhṇa, pāraṇa is after Hari-vāsara and before dvādaśī ends (staying within dvādaśī
 *   outranks avoiding madhyāhna) — no drik example of this was found.
 *
 * Mādhva (Uttarādi Maṭha pañcāṅgas, e.g. the 2025–26 Los Angeles and 2026–27 London
 * editions on dvaitavedanta.com / hindupad.com): pāraṇe is done early on the dvādaśī
 * morning, right after the morning pūjā, and those pañcāṅgas state only the binding
 * limit for the day:
 *   "Harivasara 8:23"                     — Hari-vāsara ends then: pāraṇe after it;
 *   "Udayath Poorva Harivasara 5:17"      — Hari-vāsara ended before sunrise: no limit;
 *   "Alpa Dwadashi, Parane before 7:11"   — short dvādaśī: pāraṇe before it ends.
 * There is no aparāhṇa rule: if Hari-vāsara ends late, pāraṇe follows it immediately.
 * Implemented as window = [max(sunrise, Hari-vāsara end), min(prātaḥkāla end, dvādaśī end)],
 * or, when Hari-vāsara ends after the prātaḥkāla, [Hari-vāsara end, min(dvādaśī end, sunset)].
 * The Mādhva fast itself moves to dvādaśī when ekādaśī is daśamī-viddhā (see festivals.ts);
 * the pāraṇe is then on trayodaśī morning, with dvādaśī usually over before sunrise.
 *
 * Accuracy: tithi ends here are ≈½ min later than drik's (see panchanga.ts), so windows
 * agree to about ±2 min; Mādhva maṭha pañcāṅgas use the Sūrya-siddhānta and can differ by
 * much more — the note says which limit applies so the reader can check theirs. With the
 * 'surya' method (setCalcMethod) the dvādaśī and sunrise are the SS ones, as in those
 * pañcāṅgas.
 */
import { addDays, formatTime, fromJulian, julianDay, parseIso, sunriseJd, sunsetJd, weekdayOf, type City } from './panchanga';
import { dayMonth, tr, type UiLang } from './tr';

export type ParanaRule = 'smarta' | 'madhva';

/** What fixed the pāraṇa window. */
export type ParanaKind =
  /** The whole prātaḥkāla (sunrise → first fifth of the day). */
  | 'pratah'
  /** Starts when Hari-vāsara ends (within the prātaḥkāla). */
  | 'harivasara'
  /** Ends when dvādaśī ends (alpa dvādaśī). */
  | 'dvadashi-end'
  /** Smārta: Hari-vāsara outlasts the prātaḥkāla — the aparāhṇa after it. */
  | 'aparahna'
  /** Hari-vāsara outlasts the prātaḥkāla (Mādhva) or the aparāhṇa: right after it. */
  | 'after-harivasara'
  /** Dvādaśī was over before sunrise: the prātaḥkāla of the trayodaśī day. */
  | 'trayodashi';

export interface Parana {
  /** The fasting day, 'YYYY-MM-DD'. */
  fastDate: string;
  /** The pāraṇa day (the day after the fast), 'YYYY-MM-DD'. */
  date: string;
  start: Date;
  end: Date;
  /** Hari-vāsara (first quarter of dvādaśī) ends. */
  harivasaraEnd: Date;
  /** Dvādaśī ends. */
  dvadashiEnd: Date;
  kind: ParanaKind;
  /** Short explanation for the reader (city-local times), if the window is not the plain prātaḥkāla. */
  note?: string;
  /** The same explanation as translatable sentences: English template and the instants it names. */
  noteParts?: { key: string; at: Record<string, Date> }[];
  /** "06:21–08:40 on 16 Nov" (city-local). */
  label: string;
}

/** Minimal ekādaśī data the window needs (EkadashiInfo from festivals.ts fits). */
export interface DvadashiSpan {
  /** Ekādaśī ends = dvādaśī begins. */
  end: Date;
  dvadashiEnd: Date;
}

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** "16 Nov" (or the month name in the interface language). */
export function shortDate(iso: string, lang: UiLang = 'en'): string {
  const [, m, d] = parseIso(iso);
  return lang === 'en' ? `${d} ${MON[m - 1]}` : dayMonth(lang, m, d);
}
/** "Sun 16 Nov" */
export const shortDay = (iso: string) => `${WD[weekdayOf(iso)]} ${shortDate(iso)}`;

/** "06:21–08:40" in city time (an end on another day gets ", 6 Dec"). */
export const paranaTimes = (p: Pick<Parana, 'start' | 'end' | 'date'>, city: City, lang: UiLang = 'en') =>
  `${formatTime(p.start, city, p.date, lang)}–${formatTime(p.end, city, p.date, lang)}`;

/** "06:21–08:40 on 16 Nov" in the interface language. */
export const paranaLabel = (p: Parana, city: City, lang: UiLang) =>
  tr(lang, '{times} on {date}', { times: paranaTimes(p, city, lang), date: shortDate(p.date, lang) });

/** The window's explanation in the interface language (undefined when there is none). */
export function paranaNote(p: Parana, city: City, lang: UiLang): string | undefined {
  if (!p.noteParts?.length) return p.note;
  return p.noteParts
    .map(({ key, at }) => {
      const vars: Record<string, string> = {};
      for (const [k, d] of Object.entries(at)) vars[k] = formatTime(d, city, p.date, lang);
      return tr(lang, key, vars);
    })
    .join(' ');
}

/**
 * Pāraṇa window for a fast on `fastDate` (the day after it), given the ekādaśī's
 * dvādaśī span. Pure; all times are instants, formatted in the city's time.
 */
export function paranaWindow(city: City, e: DvadashiSpan, fastDate: string, rule: ParanaRule): Parana {
  const date = addDays(fastDate, 1);
  const r = sunriseJd(city, date);
  const s = sunsetJd(city, date);
  const dl = s - r;
  const pratahEnd = r + dl / 5;
  const ds = julianDay(e.end);
  const de = julianDay(e.dvadashiEnd);
  const hv = ds + (de - ds) / 4;

  let a: number;
  let b: number;
  let kind: ParanaKind;
  const parts: { key: string; at: Record<string, Date> }[] = [];
  const say = (key: string, at: Record<string, number>) =>
    parts.push({ key, at: Object.fromEntries(Object.entries(at).map(([k, v]) => [k, fromJulian(v)])) });
  if (de <= r) {
    // Dvādaśī is over before sunrise (typically after a mahādvādaśī fast).
    [a, b, kind] = [r, pratahEnd, 'trayodashi'];
    say('Dvādaśī ends before sunrise ({de}): pāraṇa after sunrise, in the prātaḥkāla.', { de });
  } else if (Math.max(r, hv) < pratahEnd) {
    a = Math.max(r, hv);
    b = Math.min(pratahEnd, de);
    kind = de < pratahEnd ? 'dvadashi-end' : hv > r ? 'harivasara' : 'pratah';
    if (kind === 'dvadashi-end') {
      if (rule === 'madhva') say('Alpa dvādaśī: pāraṇe before {de}, when dvādaśī ends.', { de });
      else say('Dvādaśī ends at {de}: break the fast before it ends.', { de });
      if (hv > r) say('Hari-vāsara ends {hv}.', { hv });
    } else if (kind === 'harivasara') {
      say('Hari-vāsara (first quarter of dvādaśī) ends {hv}: pāraṇa after it.', { hv });
    }
  } else if (rule === 'smarta') {
    const ap0 = r + (3 * dl) / 5;
    const ap1 = r + (4 * dl) / 5;
    if (de <= ap0) {
      [a, b, kind] = [hv, de, 'after-harivasara'];
      say('Hari-vāsara lasts until {hv} and dvādaśī ends at {de}: break the fast between them.', { hv, de });
    } else if (hv < ap1) {
      [a, b, kind] = [Math.max(ap0, hv), Math.min(ap1, de), 'aparahna'];
      say('Hari-vāsara lasts past the prātaḥkāla (until {hv}): pāraṇa after madhyāhna, in the aparāhṇa.', { hv });
    } else {
      [a, b, kind] = [hv, Math.min(de, s) > hv ? Math.min(de, s) : de, 'after-harivasara'];
      say('Hari-vāsara lasts until {hv}: pāraṇa after it, before dvādaśī ends ({de}).', { hv, de });
    }
  } else {
    [a, b, kind] = [hv, Math.min(de, s) > hv ? Math.min(de, s) : de, 'after-harivasara'];
    say('Hari-vāsara until {hv}: pāraṇe after it, before dvādaśī ends ({de}).', { hv, de });
  }
  const start = fromJulian(a);
  const end = fromJulian(b);
  return {
    fastDate, date, start, end, harivasaraEnd: fromJulian(hv), dvadashiEnd: e.dvadashiEnd, kind,
    note: parts.length ? parts.map(({ key, at }) => tr('en', key, Object.fromEntries(Object.entries(at).map(([k, d]) => [k, formatTime(d, city, date)])))).join(' ') : undefined,
    noteParts: parts.length ? parts : undefined,
    label: `${paranaTimes({ start, end, date }, city)} on ${shortDate(date)}`,
  };
}
