import { CITY_NAMES } from '../data/cityNames';
import type { City } from './panchanga';
import type { UiLang } from './tr';

const COLUMN: Partial<Record<UiLang, number>> = { kn: 0, hi: 1, te: 2, ta: 3, ml: 4 };

/** A city's name in the interface language where it has one written, else its English name. */
export function cityName(city: City, lang: UiLang): string {
  const i = COLUMN[lang];
  return (i !== undefined && city.state && CITY_NAMES[`${city.name}|${city.state}`]?.[i]) || city.name;
}
