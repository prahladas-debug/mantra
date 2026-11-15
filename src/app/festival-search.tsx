import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams, type Href } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { useCalendarMode, useEkadashiRule, useSauraStart } from '../components/PanchangaCard';
import { festivalsBetween, type Festival } from '../lib/festivals';
import { cityById, todayIn } from '../lib/panchanga';
import { plain } from '../lib/plain';
import { useSettings } from '../lib/settings';
import { searchKey, translit } from '../lib/transliterate';

const FIRST_YEAR = 2025;
const LAST_YEAR = 2036;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
];

/** Twelve years of festivals take a moment to compute; keep the last result per choice set. */
const cache = new Map<string, Festival[]>();
function allFestivals(city: ReturnType<typeof cityById>, rule: Parameters<typeof festivalsBetween>[3], mode: Parameters<typeof festivalsBetween>[4], start: Parameters<typeof festivalsBetween>[5]) {
  const key = `${city.id}|${rule}|${mode}|${start}`;
  let list = cache.get(key);
  if (!list) {
    list = festivalsBetween(city, `${FIRST_YEAR}-01-01`, `${LAST_YEAR}-12-31`, rule, mode, start);
    cache.clear();
    cache.set(key, list);
  }
  return list;
}

/** Find when a festival falls in any year from 2025 to 2036, for your place and tradition. */
export default function FestivalSearch() {
  const params = useLocalSearchParams<{ q?: string }>();
  const { theme, settings } = useSettings();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [q, setQ] = useState(params.q ?? '');
  const city = cityById(settings.city);
  const today = todayIn(city);

  const all = useMemo(() => allFestivals(city, rule, mode, start), [city, rule, mode, start]);

  const results = useMemo(() => {
    const typed = q.trim().toLowerCase();
    if (typed.length < 3) return [];
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
    return `${WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]} ${d} ${MONTHS[m - 1]} ${y}`;
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
            <Ionicons name="search" size={18} color={theme.textMuted} />
            <TextInput
              value={q}
              onChangeText={setQ}
              autoFocus
              placeholder="Festival name — e.g. Ganesha Chaturthi, Ugadi"
              placeholderTextColor={theme.textMuted}
              autoCorrect={false}
              style={{ flex: 1, color: theme.text, fontSize: 16, paddingVertical: 12, paddingHorizontal: 8 }}
              accessibilityLabel="Search festivals"
            />
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 13, marginHorizontal: 16, marginBottom: 8 }}>
            {city.name} · {rule === 'madhva' ? 'Madhva' : 'Smarta'} · {mode === 'saura' ? 'Sauramana' : 'Chandramana'} · {FIRST_YEAR}–{LAST_YEAR}
          </Text>
        </View>
      }
      ListEmptyComponent={
        q.trim().length >= 3 ? (
          <Text style={{ color: theme.textMuted, margin: 16 }}>No festival by that name. Try another spelling, or the name in Kannada or Sanskrit.</Text>
        ) : (
          <Text style={{ color: theme.textMuted, margin: 16, lineHeight: 20 }}>
            Type a festival or vrata to see its date in every year up to {LAST_YEAR}. You can also type in Kannada or Devanagari.
          </Text>
        )
      }
      renderItem={({ item: f, index }) => {
        const past = (f.endDate ?? f.date) < today;
        const firstPast = past && (index === 0 || (results[index - 1].endDate ?? results[index - 1].date) >= today);
        return (
          <View>
            {firstPast && <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginHorizontal: 16, marginTop: 14, marginBottom: 4 }}>EARLIER</Text>}
            <Pressable
              onPress={() => router.push({ pathname: '/panchanga', params: { date: f.date } } as Href)}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginBottom: 8, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : past ? 0.7 : 1 })}
              accessibilityRole="button"
            >
              <View style={{ width: 112 }}>
                <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '700' }}>{fmt(f.date).split(' ').slice(1).join(' ')}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 12 }}>{fmt(f.date).split(' ')[0]}{f.endDate ? ` → ${f.endDate.slice(8)}/${f.endDate.slice(5, 7)}` : ''}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: theme.text, fontSize: 16 }} numberOfLines={1}>{translit(f.name, settings.script)}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={2}>{plain(f.en)}</Text>
                {f.parana && <Text style={{ color: theme.textMuted, fontSize: 12 }}>Parana {f.parana.label}</Text>}
              </View>
              <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
            </Pressable>
          </View>
        );
      }}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}
