import type { Mantra, VariantKey, When } from '../data/types';

export type Choices = Partial<Record<VariantKey, string>>;

/** Time-of-day default from the clock: before 11:00 morning, until 16:00 midday, then evening. */
function timeFromClock(ids: string[]): string | undefined {
  const h = new Date().getHours();
  const guess = h < 11 ? 'morning' : h < 16 ? 'midday' : 'evening';
  return ids.includes(guess) ? guess : undefined;
}

/** The reader's effective choices for a text: saved choice, else a sensible default. */
export function choicesFor(m: Mantra, saved: Partial<Record<string, string>>): Choices {
  const out: Choices = {};
  for (const v of m.variants ?? []) {
    const ids = v.options.map((o) => o.id);
    const s = saved[v.key];
    out[v.key] = s && ids.includes(s) ? s : (v.key === 'time' && timeFromClock(ids)) || ids[0];
  }
  return out;
}

/** True if an item tagged `when` should be shown for these choices. */
export function matches(when: When | undefined, choices: Choices): boolean {
  if (!when) return true;
  return (Object.keys(when) as VariantKey[]).every((k) => {
    const allowed = when[k];
    const chosen = choices[k];
    return !allowed || !chosen || allowed.includes(chosen);
  });
}
