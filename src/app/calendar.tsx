import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { FestivalLine, NavButton, useCalcMethod, useCalendarMode, useSauraStart, useEkadashiRule } from '../components/PanchangaCard';
import { CalendarBar } from '../components/CalendarBar';
import { Chip, SectionHeading } from '../components/ui';
import { T, useI18n } from '../lib/i18n';
import { plain } from '../lib/plain';
import { festivalsBetween, type CalendarMode, type Festival } from '../lib/festivals';
import { sauraDay, type SauraStart } from '../lib/sauramana';
import { MASA, RASHI, cityById, isoDate, lunarMonthAt, sunriseJd, sunriseTithi, todayIn, withMethod, type CalcMethod, type City } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { translit, translitTitle } from '../lib/transliterate';

const WEEK = [T('Su'), T('Mo'), T('Tu'), T('We'), T('Th'), T('Fr'), T('Sa')];

/** Short tithi label for a grid cell: pakṣa abbreviation + number; पूर्णिमा / अमा(वास्या) spelled out. */
function tithiShort(i: number): string {
  if (i === 15) return 'पूर्णिमा';
  if (i === 30) return 'अमा';
  return `${i <= 15 ? 'शु' : 'कृ'} ${((i - 1) % 15) + 1}`;
}

function shiftMonth(ym: string, n: number): string {
  const [y, m] = ym.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1 + n, 1));
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}`;
}

interface Cell {
  iso: string;
  day: number;
  /** Tithi (1–30) at sunrise. */
  tithi: number;
  /** Solar (Sauramāna) month 0–11 and day number. */
  saura: number;
  sauraDayNo: number;
}

/** Grid data for a Gregorian month 'YYYY-MM' at a city, by the given calculation method. */
function buildMonth(city: City, month: string, mode: CalendarMode, start: SauraStart, method: CalcMethod) {
  return withMethod(method, () => buildMonthOf(city, month, mode, start));
}

function buildMonthOf(city: City, month: string, mode: CalendarMode, start: SauraStart) {
  const [y, m] = month.split('-').map(Number);
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const lead = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
  const cells: (Cell | null)[] = Array(lead).fill(null);
  for (let d = 1; d <= days; d++) {
    const iso = isoDate(y, m, d);
    const sd = sauraDay(city, iso, start);
    cells.push({ iso, day: d, tithi: sunriseTithi(city, iso), saura: sd.rasi, sauraDayNo: sd.day });
  }
  while (cells.length % 7) cells.push(null);
  const weeks: (Cell | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const names: string[] = [];
  for (const d of [1, 15, days]) {
    const iso = isoDate(y, m, d);
    let n: string;
    if (mode === 'saura') n = `${RASHI[sauraDay(city, iso, start).rasi]}`;
    else {
      const l = lunarMonthAt(sunriseJd(city, iso));
      n = `${l.adhika ? 'अधिक ' : ''}${MASA[l.masa]}`;
    }
    if (!names.includes(n)) names.push(n);
  }
  return { y, m, first: isoDate(y, m, 1), last: isoDate(y, m, days), weeks, lunarLabel: names.join(' – ') };
}

export default function CalendarScreen() {
  const { theme, settings } = useSettings();
  const { lang, tr, has, month: monthOf, dayMonth } = useI18n();
  const params = useLocalSearchParams<{ month?: string }>();
  const city = cityById(settings.city);
  const today = todayIn(city);
  const [picked, setPicked] = useState<string | null>(null);
  const month = picked ?? (params.month && /^\d{4}-\d{2}$/.test(params.month) ? params.month : today.slice(0, 7));
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  // Names (tithi, month, festival): in plain English they read best capitalised.
  const t = (s: string) => (settings.script === 'english' ? translitTitle(s, settings.script) : translit(s, settings.script));
  // The English name is only a gloss: in another language it shows when translated, else the Sanskrit name.
  const glossOf = (f: Festival) => (lang === 'en' ? plain(f.en) : has(f.en) ? tr(f.en) : t(f.name));

  // Cheap (sunrise times and festival lists are cached in the libraries). Worked out on each
  // render: the React Compiler is not switched on for this app (app.json experiments).
  const { y, m, first, last, weeks, lunarLabel } = buildMonth(city, month, mode, start, method);
  const festivals = festivalsBetween(city, first, last, rule, mode, start, method);
  const byDate = new Map<string, Festival[]>();
  for (const f of festivals) byDate.set(f.date, [...(byDate.get(f.date) ?? []), f]);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: tr('Calendar') }} />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
        <NavButton icon="chevron-left" label={tr('Previous month')} onPress={() => setPicked(shiftMonth(month, -1))} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700' }}>
            {monthOf(m)} {y}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>
            {t(lunarLabel)}
          </Text>
        </View>
        <NavButton icon="chevron-right" label={tr('Next month')} onPress={() => setPicked(shiftMonth(month, 1))} />
      </View>

      <CalendarBar
        trailing={
          <Pressable
            onPress={() => router.push({ pathname: '/festivals', params: { year: String(y) } } as Href)}
            accessibilityRole="button"
            accessibilityLabel={tr('Festivals of {year} as a list', { year: y })}
            hitSlop={8}
            style={({ pressed }) => ({ padding: 8, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
          >
            <MaterialCommunityIcons name="format-list-bulleted" size={20} color={theme.accent} />
          </Pressable>
        }
      />
      {month !== today.slice(0, 7) && (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Chip label={tr('Back to this month')} onPress={() => setPicked(today.slice(0, 7))} />
        </View>
      )}

      <View style={{ marginHorizontal: 8, marginTop: 14 }}>
        <View style={{ flexDirection: 'row' }}>
          {WEEK.map((w, i) => (
            <Text key={w} style={{ flex: 1, textAlign: 'center', color: i === 0 ? theme.accent : theme.textMuted, fontSize: 12, fontWeight: '700' }}>
              {tr(w)}
            </Text>
          ))}
        </View>
        {weeks.map((week, wi) => (
          <View key={wi} style={{ flexDirection: 'row' }}>
            {week.map((c, ci) => {
              if (!c) return <View key={ci} style={{ flex: 1, margin: 2 }} />;
              const fs = byDate.get(c.iso) ?? [];
              const ek = fs.some((f) => f.kind === 'ekadashi');
              const fest = fs.some((f) => f.kind !== 'ekadashi');
              const isToday = c.iso === today;
              const special = c.tithi === 15 || c.tithi === 30;
              return (
                <Pressable
                  key={ci}
                  onPress={() => router.push({ pathname: '/panchanga', params: { date: c.iso } } as Href)}
                  accessibilityRole="button"
                  accessibilityLabel={`${dayMonth(m, c.day)}${fs.length ? ', ' + fs.map(glossOf).join(', ') : ''}`}
                  style={({ pressed }) => ({
                    flex: 1, margin: 2, minHeight: mode === 'saura' ? 72 : 58, paddingVertical: 4, borderRadius: 8, alignItems: 'center',
                    borderWidth: isToday ? 2 : 1,
                    borderColor: isToday ? theme.accent : theme.cardBorder,
                    backgroundColor: ek ? theme.accentSoft : theme.card,
                    opacity: pressed ? 0.6 : 1,
                  })}
                >
                  <Text style={{ color: ci === 0 ? theme.accent : theme.text, fontSize: 16, fontWeight: '700' }}>{c.day}</Text>
                  {mode === 'saura' && (
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: c.sauraDayNo === 1 ? theme.accent : theme.textMuted, fontSize: 10, fontWeight: c.sauraDayNo === 1 ? '700' : '400' }}>
                      {c.sauraDayNo === 1 ? t(RASHI[c.saura]) : `☉ ${c.sauraDayNo}`}
                    </Text>
                  )}
                  <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: special ? theme.accent : theme.textMuted, fontSize: 11 }}>
                    {t(tithiShort(c.tithi))}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 3, marginTop: 2, height: 6 }}>
                    {ek && <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: theme.accent }} />}
                    {fest && <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: theme.text }} />}
                  </View>
                </Pressable>
              );
            })}
          </View>
        ))}
        <Text style={{ color: theme.textMuted, fontSize: 12, marginHorizontal: 8, marginTop: 6, lineHeight: 17 }}>
          {mode === 'saura'
            ? tr('Solar month and day (day 1 = the day after the sankranti day, Tulu/Udupi rule), then the Tithi at sunrise ({shukla} = shukla, {krishna} = krishna). Shaded with a coloured dot: ekadashi; dark dot: festival. Tap a day for its full panchanga.', { shukla: t('शु'), krishna: t('कृ') })
            : tr('Tithi at sunrise ({shukla} = shukla, {krishna} = krishna). Shaded with a coloured dot: ekadashi; dark dot: festival. Tap a day for its full panchanga.', { shukla: t('शु'), krishna: t('कृ') })}
        </Text>
      </View>

      <SectionHeading>{tr('This month')}</SectionHeading>
      <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, paddingHorizontal: 12, paddingVertical: 8 }}>
        {festivals.length === 0 && <Text style={{ color: theme.textMuted }}>{tr('No listed festivals.')}</Text>}
        {festivals.map((f) => (
          <View key={`${f.key}-${f.date}`} style={{ paddingVertical: 2 }}>
            <FestivalLine f={f} showDate />
          </View>
        ))}
      </View>
      <Text style={{ color: theme.textMuted, fontSize: 13, margin: 16, lineHeight: 19 }}>
        {tr('Ekadashi — Smarta: ekadashi at sunrise. Madhva: ekadashi must be free of dashami at arunodaya ({arunodaya}), otherwise the fast moves to the next day. Tap ⓘ beside a festival for details. Local matha and temple calendars can differ by a day — follow your family panchanga.', {
          arunodaya: method === 'surya' ? tr('about 2¾–3 hours before sunrise, as the matha panchangas count it') : tr('96 minutes before sunrise'),
        })}
      </Text>
    </ScrollView>
  );
}
