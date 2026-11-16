import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, type Href } from 'expo-router';
import { useCallback, useMemo, useState, useSyncExternalStore } from 'react';
import { Pressable, Text, View } from 'react-native';
import { defaultRule, festivalsOn, type CalendarMode, type EkadashiRule, type Festival } from '../lib/festivals';
import { sauraDay, sauraSankalpa, type SauraStart } from '../lib/sauramana';
import { addDays, cityById, panchanga, setCalcMethod, todayIn, type CalcMethod } from '../lib/panchanga';
import { getMantraInfo } from '../data';
import { useClockTick, useSettings } from '../lib/settings';
import { plain } from '../lib/plain';
import { translit } from '../lib/transliterate';
import { useI18n } from '../lib/i18n';
import { paranaLabel, paranaNote, paranaTimes } from '../lib/parana';

// ---------- small persisted preferences shared by the pañcāṅga screens ----------

/** A string preference kept under its own AsyncStorage key, shared across screens.
 *  `onChange` runs whenever the value is loaded or set, before the screens re-render. */
function makePref<T extends string>(key: string, allowed: readonly T[], onChange?: (v: T) => void) {
  let value: T | null | undefined; // undefined = not loaded yet
  const listeners = new Set<() => void>();
  const emit = () => {
    if (value) onChange?.(value);
    listeners.forEach((l) => l());
  };
  const subscribe = (l: () => void) => {
    listeners.add(l);
    if (value === undefined) {
      value = null;
      AsyncStorage.getItem(key)
        .then((v) => {
          if (v && (allowed as readonly string[]).includes(v)) {
            value = v as T;
            emit();
          }
        })
        .catch(() => {});
    }
    return () => {
      listeners.delete(l);
    };
  };
  const set = (v: T) => {
    value = v;
    AsyncStorage.setItem(key, v).catch(() => {});
    emit();
  };
  return { subscribe, get: () => value ?? null, set };
}

const rulePref = makePref<EkadashiRule>('mantra.panchanga.ekadashiRule', ['smarta', 'madhva']);
const modePref = makePref<CalendarMode>('mantra.panchanga.calendarMode', ['chandra', 'saura']);
const startPref = makePref<SauraStart>('mantra.panchanga.sauraStart', ['next', 'same']);
// The pañcāṅga library keeps the method module-wide; the preference drives it.
const calcPref = makePref<CalcMethod>('mantra.panchanga.calcMethod', ['drik', 'surya'], setCalcMethod);

/**
 * The reader's ekādaśī rule: their explicit choice (stored under its own key), else the
 * tradition chosen for texts with variants (settings.variants.tradition), else Mādhva.
 */
export function useEkadashiRule(): [EkadashiRule, (r: EkadashiRule) => void] {
  const { settings } = useSettings();
  const stored = useSyncExternalStore(rulePref.subscribe, rulePref.get, () => null);
  const set = useCallback((r: EkadashiRule) => rulePref.set(r), []);
  return [stored ?? defaultRule(settings.variants.tradition), set];
}

/** Cāndramāna (lunar, default) or Sauramāna (solar, Udupi / Tuḷu Nāḍu) month reckoning. */
export function useCalendarMode(): [CalendarMode, (m: CalendarMode) => void] {
  const stored = useSyncExternalStore(modePref.subscribe, modePref.get, () => null);
  const set = useCallback((m: CalendarMode) => modePref.set(m), []);
  return [stored ?? 'chandra', set];
}

/** Sauramāna month start for a daytime saṅkrānti: the next day (default) or the same day. */
export function useSauraStart(): [SauraStart, (s: SauraStart) => void] {
  const stored = useSyncExternalStore(startPref.subscribe, startPref.get, () => null);
  const set = useCallback((s: SauraStart) => startPref.set(s), []);
  return [stored ?? 'next', set];
}

/**
 * Calculation method: drik (modern positions, default) or the Surya Siddhanta, as in matha
 * panchangas. The preference also sets it in the library (setCalcMethod) as soon as it is
 * loaded or changed, so every computation follows; still pass the returned value to the
 * library calls and memo deps, so screens recompute when it changes.
 */
export function useCalcMethod(): [CalcMethod, (m: CalcMethod) => void] {
  const stored = useSyncExternalStore(calcPref.subscribe, calcPref.get, () => null);
  const set = useCallback((m: CalcMethod) => calcPref.set(m), []);
  return [stored ?? 'drik', set];
}

/** "Drik" / "Surya Siddhanta" for labels. */
export const calcMethodLabel = (m: CalcMethod) => (m === 'surya' ? 'Surya Siddhanta' : 'Drik');

/** Today's date at the selected city. */
function useToday() {
  const { settings } = useSettings();
  const city = cityById(settings.city);
  // Looked at again every few minutes and when the app is reopened, so the card does not
  // show yesterday after midnight at the city or in the morning.
  useClockTick(5 * 60 * 1000);
  const today = todayIn(city);
  return { city, today };
}

function usePanchanga() {
  const { city, today } = useToday();
  const [method] = useCalcMethod();
  const p = useMemo(() => panchanga(today, city, method), [city, today, method]);
  return { p, city, today, method };
}

/** Round ‹ / › button for day and month navigation. */
export function NavButton({ icon, label, onPress }: { icon: 'chevron-left' | 'chevron-right'; label: string; onPress: () => void }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => ({
        padding: 8, borderRadius: 20, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1,
      })}
    >
      <MaterialCommunityIcons name={icon} size={22} color={theme.accent} />
    </Pressable>
  );
}

/** One festival: name, plain-English name, a "read" link to its text and an ⓘ that opens its note. */
export function FestivalLine({ f, showDate, showNote }: { f: Festival; showDate?: boolean; showNote?: boolean }) {
  const { theme, settings } = useSettings();
  const { lang, tr, has, dayMonth } = useI18n();
  const city = cityById(settings.city);
  const [open, setOpen] = useState(!!showNote);
  // The English name is a gloss under the Sanskrit one: in another language it shows only when
  // translated (an ekādaśī's name alone is already the Sanskrit line).
  const gloss = lang === 'en' ? plain(f.en) : has(f.en) ? tr(f.en) : '';
  const note = f.note ? (lang === 'en' || !has(f.note) ? plain(f.note) : tr(f.note)) : undefined;
  const pNote = f.parana ? paranaNote(f.parana, city, lang) : undefined;
  const md = (iso: string) => dayMonth(Number(iso.slice(5, 7)), Number(iso.slice(8)));
  return (
    <View style={{ paddingVertical: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
        <Pressable
          disabled={!f.textId}
          onPress={() => router.push(`/mantra/${f.textId}` as Href)}
          accessibilityRole={f.textId ? 'link' : undefined}
          style={({ pressed }) => ({ flex: 1, opacity: pressed ? 0.6 : 1 })}
        >
          <Text style={{ color: f.kind === 'ekadashi' ? theme.accent : theme.text, fontSize: 16, fontWeight: '600' }}>
            {showDate ? `${f.date.slice(8)}/${f.date.slice(5, 7)} · ` : ''}
            {translit(f.name, settings.script)}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }}>
            {gloss}
            {f.endDate ? `${gloss ? ' ' : ''}(${tr('to {date}', { date: md(f.endDate) })})` : ''}
            {f.textId ? <Text style={{ color: theme.accent }}>{`${gloss || f.endDate ? '  ·  ' : ''}${tr('read')} ›`}</Text> : null}
          </Text>
          {f.parana && (
            <Text style={{ color: theme.text, fontSize: 13, marginTop: 1 }}>
              {tr('Parana (break the fast): {label}', { label: paranaLabel(f.parana, city, lang) })}
            </Text>
          )}
        </Pressable>
        {(note || pNote) && !showNote ? (
          <Pressable onPress={() => setOpen(!open)} hitSlop={10} accessibilityRole="button" accessibilityLabel={open ? tr('Hide details') : tr('Show details')}>
            <MaterialCommunityIcons name={open ? 'information' : 'information-outline'} size={22} color={theme.textMuted} />
          </Pressable>
        ) : null}
      </View>
      {open && note ? <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 18, marginTop: 3 }}>{note}</Text> : null}
      {open && pNote ? <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 18, marginTop: 3 }}>{tr('Parana: {note}', { note: lang === 'en' ? plain(pNote) : pNote })}</Text> : null}
    </View>
  );
}

/** Home card: today's month and tithi, today's festival with its text, and tomorrow's observance. */
export function TodayCard() {
  const { theme, settings } = useSettings();
  const { lang, tr, has, dayMonth } = useI18n();
  const gloss = (f: Festival) => (lang === 'en' ? plain(f.en) : has(f.en) ? tr(f.en) : translit(f.name, settings.script));
  const { p, city, today, method } = usePanchanga();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const all = useMemo(() => festivalsOn(city, today, rule, mode, start, method), [city, today, rule, mode, start, method]);
  // Month-long periods (Cāturmāsya, snāna months, Dhanurmāsa) get a full row on their first day
  // only; on the other days they share one quiet line, so the card stays short.
  const fest = all.filter((f) => !f.endDate || f.date === today);
  const ongoing = all.filter((f) => f.endDate && f.date !== today);
  const tomorrow = useMemo(
    () => festivalsOn(city, addDays(today, 1), rule, mode, start, method).filter((f) => f.kind === 'ekadashi' || f.kind === 'festival'),
    [city, today, rule, mode, start, method],
  );
  const saura = useMemo(() => (mode === 'saura' ? sauraDay(city, today, start, method) : null), [city, today, mode, start, method]);
  const breakFast = useMemo(
    () => festivalsOn(city, addDays(today, -1), rule, mode, start, method).find((f) => f.kind === 'ekadashi' && f.parana?.date === today)?.parana,
    [city, today, rule, mode, start, method],
  );
  const t = (s: string) => translit(s, settings.script);
  const read = (id: string | undefined) => (id ? getMantraInfo(id) : undefined);
  return (
    <View style={{ marginHorizontal: 16, marginTop: 16, borderRadius: 16, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder, overflow: 'hidden' }}>
      {/* No date: the Panchanga tab then shows today, also tomorrow. `at` changes with every tap, so a day picked there earlier gives way. */}
      <Pressable onPress={() => router.push({ pathname: '/panchanga', params: { at: String(Date.now()) } } as Href)} style={({ pressed }) => ({ padding: 14, opacity: pressed ? 0.7 : 1 })} accessibilityRole="link">
        <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>
          {tr('TODAY')} · {city.name.toUpperCase()}
        </Text>
        <Text style={{ color: theme.accent, fontSize: 18, fontWeight: '700', marginTop: 4 }}>
          {saura
            ? `${t(`${saura.name} ${saura.day} · ${p.paksha} ${p.tithi}`)}`
            : t(`${p.adhika ? 'अधिक ' : ''}${p.masa} ${p.paksha} ${p.tithi}`)}
        </Text>
        <Text style={{ color: theme.text, fontSize: 15, marginTop: 2 }}>
          {t(`${p.samvatsara} · ${p.nakshatra} · ${p.vasara}`)}
        </Text>
      </Pressable>
      {fest.map((f) => {
        const m = read(f.textId);
        return (
          <Pressable
            key={f.key}
            disabled={!m}
            onPress={() => m && router.push(`/mantra/${m.id}` as Href)}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingVertical: 10, borderTopWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.accentSoft, opacity: pressed ? 0.7 : 1 })}
            accessibilityRole={m ? 'link' : undefined}
          >
            <MaterialCommunityIcons name={f.kind === 'ekadashi' ? 'moon-waning-crescent' : 'creation-outline'} size={20} color={theme.gold} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '600' }}>{t(f.name)}</Text>
              {m && <Text style={{ color: theme.text, fontSize: 13 }}>{tr('Read: {title}', { title: lang === 'en' ? m.titleEn : translit(m.title, settings.script) })} ›</Text>}
              {f.parana && <Text style={{ color: theme.textMuted, fontSize: 12 }}>{tr('Parana {label}', { label: paranaLabel(f.parana, city, lang) })}</Text>}
            </View>
          </Pressable>
        );
      })}
      {ongoing.length > 0 && (
        <View style={{ paddingHorizontal: 14, paddingVertical: 8, borderTopWidth: 1, borderColor: theme.cardBorder }}>
          <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={2}>
            {ongoing.map((f) => `${gloss(f).replace(/ \(.*\)$/, '')} (${tr('to {date}', { date: dayMonth(Number(f.endDate!.slice(5, 7)), Number(f.endDate!.slice(8))) })})`).join(' · ')}
          </Text>
        </View>
      )}
      {breakFast && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingVertical: 10, borderTopWidth: 1, borderColor: theme.cardBorder }}>
          <MaterialCommunityIcons name="rice" size={20} color={theme.gold} />
          <Text style={{ color: theme.text, fontSize: 14, flex: 1 }}>
            {tr('Break the Ekadashi fast today:')} <Text style={{ fontWeight: '700' }}>{paranaTimes(breakFast, city, lang)}</Text>
            {breakFast.note ? <Text style={{ color: theme.textMuted, fontSize: 12 }}>{`\n${lang === 'en' ? plain(breakFast.note) : paranaNote(breakFast, city, lang)}`}</Text> : null}
          </Text>
        </View>
      )}
      {tomorrow.length > 0 && (
        <View style={{ paddingHorizontal: 14, paddingVertical: 9, borderTopWidth: 1, borderColor: theme.cardBorder }}>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>
            {tr('Tomorrow:')} <Text style={{ color: theme.text }}>{tomorrow.map(gloss).join(' · ')}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

/** Saṅkalpa phrase for today, shown at the top of Sandhyāvandane / pūjā texts. */
export function SankalpaCard() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const { p, city, today, method } = usePanchanga();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, sauraDay(city, today, start, method)) : p.sankalpa;
  return (
    <View style={{ marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
        {tr('Today’s sankalpa')} · {city.name}
      </Text>
      <Text style={{ color: theme.text, fontSize: 17, lineHeight: 28 }} selectable>
        {translit(sankalpa, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
        {tr('Use in place of the samvatsara…tithi placeholders. Computed for sunrise; change the place in Panchanga.')}
      </Text>
    </View>
  );
}
