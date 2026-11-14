import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, type Href } from 'expo-router';
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Pressable, Text, View } from 'react-native';
import { defaultRule, festivalsOn, type EkadashiRule, type Festival } from '../lib/festivals';
import { cityById, panchanga, todayIn } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

// ---------- ekādaśī tradition (Smārta / Mādhva), shared by the pañcāṅga screens ----------

const RULE_KEY = 'mantra.panchanga.ekadashiRule';
let storedRule: EkadashiRule | null | undefined; // undefined = not loaded yet
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
function subscribe(l: () => void) {
  listeners.add(l);
  if (storedRule === undefined) {
    storedRule = null;
    AsyncStorage.getItem(RULE_KEY)
      .then((v) => {
        if (v === 'smarta' || v === 'madhva') {
          storedRule = v;
          emit();
        }
      })
      .catch(() => {});
  }
  return () => {
    listeners.delete(l);
  };
}

/**
 * The reader's ekādaśī rule: their explicit choice (stored under its own key), else the
 * tradition chosen for texts with variants (settings.variants.tradition), else Mādhva.
 */
export function useEkadashiRule(): [EkadashiRule, (r: EkadashiRule) => void] {
  const { settings } = useSettings();
  const stored = useSyncExternalStore(subscribe, () => storedRule ?? null, () => null);
  const set = useCallback((r: EkadashiRule) => {
    storedRule = r;
    AsyncStorage.setItem(RULE_KEY, r).catch(() => {});
    emit();
  }, []);
  return [stored ?? defaultRule(settings.variants.tradition), set];
}

/** Today's date at the selected city. */
function useToday() {
  const { settings } = useSettings();
  const city = cityById(settings.city);
  const [, setTick] = useState(0);
  const today = todayIn(city);
  // Re-render every hour so the card does not go stale past midnight at the city.
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 3600000);
    return () => clearInterval(id);
  }, []);
  return { city, today };
}

function usePanchanga() {
  const { city, today } = useToday();
  const p = useMemo(() => panchanga(today, city), [city, today]);
  return { p, city, today };
}

/** Round ‹ / › button for day and month navigation. */
export function NavButton({ icon, label, onPress }: { icon: 'chevron-back' | 'chevron-forward'; label: string; onPress: () => void }) {
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
      <Ionicons name={icon} size={20} color={theme.accent} />
    </Pressable>
  );
}

/** One festival as a tappable line (opens the linked text when there is one). */
export function FestivalLine({ f, showDate }: { f: Festival; showDate?: boolean }) {
  const { theme, settings } = useSettings();
  const body = (
    <>
      <Text style={{ color: f.kind === 'ekadashi' ? theme.accent : theme.text, fontSize: 16, fontWeight: '600' }}>
        {showDate ? `${f.date.slice(8)}/${f.date.slice(5, 7)} · ` : ''}
        {translit(f.name, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }}>
        {f.en}
        {f.endDate ? ` (to ${f.endDate.slice(8)}/${f.endDate.slice(5, 7)})` : ''}
        {f.textId ? '  ·  read ›' : ''}
      </Text>
    </>
  );
  if (!f.textId) return <View style={{ paddingVertical: 4 }}>{body}</View>;
  return (
    <Pressable
      onPress={() => router.push(`/mantra/${f.textId}` as Href)}
      accessibilityRole="link"
      style={({ pressed }) => ({ paddingVertical: 4, opacity: pressed ? 0.6 : 1 })}
    >
      {body}
    </Pressable>
  );
}

/** Compact "today" card for the home screen. */
export function TodayCard() {
  const { theme, settings } = useSettings();
  const { p, city, today } = usePanchanga();
  const [rule] = useEkadashiRule();
  const fest = useMemo(() => festivalsOn(city, today, rule), [city, today, rule]);
  const t = (s: string) => translit(s, settings.script);
  return (
    <Pressable
      onPress={() => router.push('/panchanga')}
      style={({ pressed }) => ({
        marginHorizontal: 16, marginTop: 16, padding: 14, borderRadius: 14, borderWidth: 1,
        backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1,
      })}
      accessibilityRole="link"
    >
      <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>
        TODAY · ಇಂದು · {city.name.toUpperCase()}
      </Text>
      <Text style={{ color: theme.accent, fontSize: 18, fontWeight: '700', marginTop: 4 }}>
        {t(`${p.adhika ? 'अधिक ' : ''}${p.masa} ${p.paksha} ${p.tithi}`)}
      </Text>
      <Text style={{ color: theme.text, fontSize: 15, marginTop: 2 }}>
        {t(`${p.samvatsara} · ${p.nakshatra} · ${p.vasara}`)}
      </Text>
      {fest.length > 0 && (
        <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '600', marginTop: 6 }}>
          {fest.map((f) => t(f.name)).join(' · ')}
        </Text>
      )}
    </Pressable>
  );
}

/** Saṅkalpa phrase for today, shown at the top of Sandhyāvandane / pūjā texts. */
export function SankalpaCard() {
  const { theme, settings } = useSettings();
  const { p, city } = usePanchanga();
  return (
    <View style={{ marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
        Today’s saṅkalpa details · ಇಂದಿನ ಸಂಕಲ್ಪ ({city.name})
      </Text>
      <Text style={{ color: theme.text, fontSize: 17, lineHeight: 28 }} selectable>
        {translit(p.sankalpa, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
        Use in place of the samvatsara…tithi placeholders. Computed for sunrise; change city in Pañcāṅga.
      </Text>
    </View>
  );
}
