import { router, Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Chip, SectionHeading } from '../components/ui';
import { ALL_MANTRAS, categoryById, search, type Mantra } from '../data';
import { localDate, READTHROUGH_DAYS, VOW_DAYS, VOW_PER_DAY, type PlanKind } from '../lib/plans';
import { useSettings } from '../lib/settings';
import { translitTitle } from '../lib/transliterate';

interface Work {
  key: string;
  title: string;
  items: Mantra[];
}

/** Multi-part works that can be read through: texts sharing a series, in order. */
function works(): Work[] {
  const groups = new Map<string, Mantra[]>();
  for (const m of ALL_MANTRAS) {
    if (m.order === undefined) continue;
    const k = m.series ?? m.category;
    groups.set(k, [...(groups.get(k) ?? []), m]);
  }
  return [...groups.entries()]
    .filter(([, items]) => items.length > 1)
    .map(([key, items]) => {
      const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      const cat = categoryById[sorted[0].category];
      const title = key === sorted[0].category ? cat.titleEn : sorted[0].titleEn.split(' · ')[0].replace(/\s+\d+$/, '');
      return { key, title: `${title} (${sorted.length} parts)`, items: sorted };
    });
}

export default function NewPlan() {
  const { theme, settings, addPlan } = useSettings();
  const [kind, setKind] = useState<PlanKind>('readthrough');
  const [work, setWork] = useState<Work | null>(null);
  const [text, setText] = useState<Mantra | null>(null);
  const [query, setQuery] = useState('');
  const [days, setDays] = useState(7);
  const [perDay, setPerDay] = useState(1);
  const allWorks = useMemo(() => works(), []);
  const textChoices = useMemo(
    () => (query.trim().length >= 2 ? search(query).filter((r) => !r.verse).map((r) => r.mantra) : ALL_MANTRAS.filter((m) => m.order === undefined)),
    [query],
  );

  const ready = kind === 'readthrough' ? !!work : !!text;
  const create = () => {
    if (!ready) return;
    const id = `${Date.now()}`;
    if (kind === 'readthrough' && work) {
      addPlan({ id, kind, title: `${work.title.replace(/ \(\d+ parts\)$/, '')} in ${days} day${days > 1 ? 's' : ''}`, items: work.items.map((m) => m.id), days, start: localDate(), read: [], counts: {}, perDay: 1 });
    } else if (text) {
      addPlan({ id, kind, title: `${text.titleEn} · ${days} days${perDay > 1 ? ` · ${perDay}×` : ''}`, items: [text.id], days, start: localDate(), read: [], counts: {}, perDay });
    }
    router.back();
  };

  const card = { marginHorizontal: 16, marginBottom: 8, padding: 12, borderRadius: 12, borderWidth: 1 };
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <Stack.Screen options={{ title: 'New pārāyaṇa' }} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} keyboardShouldPersistTaps="handled">
        <SectionHeading>Type · ವಿಧ</SectionHeading>
        <View style={{ flexDirection: 'row', gap: 8, marginHorizontal: 16 }}>
          <Chip label="Read a whole work" active={kind === 'readthrough'} onPress={() => { setKind('readthrough'); setDays(7); }} />
          <Chip label="Daily vow (vrata)" active={kind === 'vow'} onPress={() => { setKind('vow'); setDays(40); }} />
        </View>

        {kind === 'readthrough' ? (
          <>
            <SectionHeading>Work · ಗ್ರಂಥ</SectionHeading>
            {allWorks.map((w) => (
              <Pressable key={w.key} onPress={() => setWork(w)} style={[card, { borderColor: work?.key === w.key ? theme.accent : theme.cardBorder, backgroundColor: work?.key === w.key ? theme.accentSoft : theme.card }]}>
                <Text style={{ color: theme.text, fontSize: 16 }}>{w.title}</Text>
              </Pressable>
            ))}
          </>
        ) : (
          <>
            <SectionHeading>Text · ಸ್ತೋತ್ರ</SectionHeading>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search, e.g. lalitha, vishnu, ವಾಯು"
              placeholderTextColor={theme.textMuted}
              style={[card, { borderColor: theme.cardBorder, backgroundColor: theme.card, color: theme.text, fontSize: 16 }]}
            />
            {textChoices.slice(0, 40).map((m) => (
              <Pressable key={m.id} onPress={() => setText(m)} style={[card, { borderColor: text?.id === m.id ? theme.accent : theme.cardBorder, backgroundColor: text?.id === m.id ? theme.accentSoft : theme.card }]}>
                <Text style={{ color: theme.text, fontSize: 16 }}>{translitTitle(m.title, settings.script)}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 13 }}>{m.titleEn}</Text>
              </Pressable>
            ))}
          </>
        )}

        <SectionHeading>Days · ದಿನಗಳು</SectionHeading>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16 }}>
          {(kind === 'readthrough' ? READTHROUGH_DAYS : VOW_DAYS).map((d) => (
            <Chip key={d} label={String(d)} active={days === d} onPress={() => setDays(d)} />
          ))}
        </View>
        {kind === 'vow' && (
          <>
            <SectionHeading>Times a day · ಆವರ್ತನ</SectionHeading>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16 }}>
              {VOW_PER_DAY.map((n) => (
                <Chip key={n} label={`${n}×`} active={perDay === n} onPress={() => setPerDay(n)} />
              ))}
            </View>
          </>
        )}
      </ScrollView>
      <Pressable
        onPress={create}
        disabled={!ready}
        style={{ position: 'absolute', left: 16, right: 16, bottom: 24, padding: 14, borderRadius: 14, alignItems: 'center', backgroundColor: ready ? theme.accent : theme.cardBorder }}
      >
        <Text style={{ color: ready ? theme.onAccent : theme.textMuted, fontSize: 16, fontWeight: '700' }}>Start · ಪ್ರಾರಂಭಿಸಿ</Text>
      </Pressable>
    </View>
  );
}
