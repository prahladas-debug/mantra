import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams, type Href } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { useCalcMethod, useCalendarMode, useEkadashiRule, useSauraStart } from '../components/PanchangaCard';
import { SectionHeading } from '../components/ui';
import { useI18n } from '../lib/i18n';
import { festivalsBetween, type Festival } from '../lib/festivals';
import { cityById, todayIn, type CalcMethod } from '../lib/panchanga';
import { plain } from '../lib/plain';
import { useSettings } from '../lib/settings';
import { searchKey, translit, translitTitle } from '../lib/transliterate';

const FIRST_YEAR = 2025;
const LAST_YEAR = 2036;

/** Everyday names people type, mapped to the names the calendar uses. */
const ALIASES: [RegExp, string][] = [
  [/^u?gadi|^ugadi/, 'yugadi'],
  [/^diwali|^dipavali|^divali/, 'deepavali dipavali'],
  [/^dasara|^dussehra|^dasera/, 'vijayadashami'],
  [/^ganesh|^ganapati|^vinayaka/, 'ganesha'],
  [/^janmasht|^krishnasht|^gokulasht|^krishna jayanti/, 'janmashtami jayanti'],
  [/^shivarat|^sivarat/, 'shivaratri'],
  [/^sankrant|^sankranthi|^pongal/, 'sankranti'],
  [/^rama navami|^ramnavami/, 'rama navami'],
  [/^ekadasi|^ekadashi/, 'ekadashi'],
  [/^navarat/, 'navaratri'],
  [/^varalakshmi|^varamahalakshmi/, 'varamahalakshmi'],
  [/^madhva/, 'madhva'],
  [/^aradhana|^raghavendra/, 'aradhana'],
  [/^hanuman|^hanumad|^hanumat|^anjaneya/, 'hanuman hanumat hanumad'],
  [/^gowri|^gauri|^gouri/, 'gauri'],
  [/^holi|^kama ?dahan/, 'holika kama'],
  [/^vat |^vata |^vat$|^vata$|^vatasavitri|^vat savitri/, 'vata savitri'],
];

/** Twelve years of festivals take a moment to compute; keep the last result per choice set. */
const cache = new Map<string, Festival[]>();
type Choice = { city: ReturnType<typeof cityById>; rule: Parameters<typeof festivalsBetween>[3]; mode: Parameters<typeof festivalsBetween>[4]; start: Parameters<typeof festivalsBetween>[5]; method: CalcMethod };
const cacheKey = ({ city, rule, mode, start, method }: Choice) => `${method}|${city.id}|${rule}|${mode}|${start}`;
function allFestivals(c: Choice) {
  const key = cacheKey(c);
  let list = cache.get(key);
  if (!list) {
    list = festivalsBetween(c.city, `${FIRST_YEAR}-01-01`, `${LAST_YEAR}-12-31`, c.rule, c.mode, c.start, c.method);
    cache.clear();
    cache.set(key, list);
  }
  return list;
}

/** Find when a festival falls in any year from 2025 to 2036, for your place and tradition. */
export default function FestivalSearch() {
  const params = useLocalSearchParams<{ q?: string }>();
  const { theme, settings } = useSettings();
  const { lang, tr, has, month, weekday } = useI18n();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  const [q, setQ] = useState(params.q ?? '');
  const city = cityById(settings.city);
  const today = todayIn(city);

  // The twelve years are worked out after the screen has appeared (about a second on a
  // phone; it used to hold up opening the screen), unless they are already in the cache.
  const choice = useMemo(() => ({ city, rule, mode, start, method }), [city, rule, mode, start, method]);
  const [computed, setComputed] = useState<{ choice: Choice; list: Festival[] } | null>(null);
  const all = cache.get(cacheKey(choice)) ?? (computed?.choice === choice ? computed.list : null);
  const pending = all === null;
  useEffect(() => {
    if (!pending) return;
    const t = setTimeout(() => setComputed({ choice, list: allFestivals(choice) }), 50);
    return () => clearTimeout(t);
  }, [choice, pending]);

  const results = useMemo(() => {
    const typed = q.trim().toLowerCase();
    if (typed.length < 3 || !all) return [];
    // Everyday names first (Ugadi, Diwali …), then the same loose key used for text search.
    const words = (ALIASES.find(([re]) => re.test(typed))?.[1] ?? typed).split(' ').map(searchKey).filter(Boolean);
    const hits = all.filter((f) => {
      const hay = `${searchKey(f.en)} ${searchKey(plain(f.en))} ${searchKey(f.name)}`;
      return words.some((w) => hay.includes(w));
    });
    // Coming dates first, then past ones (most recent first).
    const upcoming = hits.filter((f) => (f.endDate ?? f.date) >= today);
    const past = hits.filter((f) => (f.endDate ?? f.date) < today).reverse();
    return [...upcoming, ...past].slice(0, 120);
  }, [q, all, today]);

  const fmt = (iso: string) => {
    const [y, m, d] = iso.split('-').map(Number);
    return { dayMonthYear: `${d} ${month(m, true)} ${y}`, weekday: weekday(new Date(Date.UTC(y, m - 1, d)).getUTCDay()) };
  };

  return (
    <FlatList
      style={{ backgroundColor: theme.bg }}
      keyboardShouldPersistTaps="handled"
      data={results}
      keyExtractor={(f) => `${f.key}-${f.date}`}
      ListHeaderComponent={
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16, marginBottom: 6, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
            <MaterialCommunityIcons name="magnify" size={20} color={theme.textMuted} />
            <TextInput
              value={q}
              onChangeText={setQ}
              autoFocus
              placeholder={tr('Festival name — e.g. Ganesha Chaturthi, Ugadi')}
              placeholderTextColor={theme.textMuted}
              autoCorrect={false}
              style={{ flex: 1, color: theme.text, fontSize: 16, paddingVertical: 12, paddingHorizontal: 8 }}
              accessibilityLabel={tr('Search festivals')}
            />
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 13, marginHorizontal: 16, marginBottom: 8 }}>
            {city.name} · {rule === 'madhva' ? tr('Madhva') : tr('Smarta')} · {mode === 'saura' ? tr('Sauramana') : tr('Chandramana')} · {FIRST_YEAR}–{LAST_YEAR}
          </Text>
        </View>
      }
      ListEmptyComponent={
        q.trim().length >= 3 && pending ? (
          <Text style={{ color: theme.textMuted, margin: 16 }}>{tr('Working out the dates…')}</Text>
        ) : q.trim().length >= 3 ? (
          <Text style={{ color: theme.textMuted, margin: 16 }}>{tr('No festival by that name. Try another spelling, or the name in Kannada or Sanskrit.')}</Text>
        ) : (
          <Text style={{ color: theme.textMuted, margin: 16, lineHeight: 20 }}>
            {tr('Type a festival or vrata to see its date in every year up to {year}. You can also type in Kannada or Devanagari.', { year: LAST_YEAR })}
          </Text>
        )
      }
      renderItem={({ item: f, index }) => {
        const past = (f.endDate ?? f.date) < today;
        const firstPast = past && (index === 0 || (results[index - 1].endDate ?? results[index - 1].date) >= today);
        return (
          <View>
            {firstPast && <SectionHeading>{tr('Earlier')}</SectionHeading>}
            <Pressable
              onPress={() => router.push({ pathname: '/panchanga', params: { date: f.date } } as Href)}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginBottom: 8, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : past ? 0.7 : 1 })}
              accessibilityRole="button"
            >
              <View style={{ width: 112 }}>
                <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '700' }}>{fmt(f.date).dayMonthYear}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 12 }}>{fmt(f.date).weekday}{f.endDate ? ` → ${f.endDate.slice(8)}/${f.endDate.slice(5, 7)}` : ''}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: theme.text, fontSize: 16 }} numberOfLines={1}>{settings.script === 'english' ? translitTitle(f.name, settings.script) : translit(f.name, settings.script)}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={2}>{lang === 'en' ? plain(f.en) : has(f.en) ? tr(f.en) : ''}</Text>
                {f.parana && <Text style={{ color: theme.textMuted, fontSize: 12 }}>{tr('Parana {label}', { label: f.parana.label })}</Text>}
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color={theme.textMuted} />
            </Pressable>
          </View>
        );
      }}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}
