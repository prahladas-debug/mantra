import { router, Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Chip, SectionHeading } from '../components/ui';
import { ALL_MANTRAS, categoryById, getMantraInfo, search, verseCount, type Mantra } from '../data';
import { BOOKS, partItems, workSequence } from '../data/books';
import { LONG_READTHROUGH_DAYS, localDate, READTHROUGH_DAYS, VOW_DAYS, VOW_PER_DAY, type PlanKind } from '../lib/plans';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { foldMixed } from '../lib/groups';
import { categoryTitle } from '../lib/labels';
import { translit, type ScriptId, nameOf } from '../lib/transliterate';
import { useShowEnglish } from '../components/useGloss';

/**
 * A kanda, a parva or a whole epic: offered over longer spans (9 days to a year). Not the
 * Sundarakanda of the library (68 sargas), which is read in 7 days, 9 or 40 as before.
 */
const isLong = (w: Work | null) => !!w?.weights && w.items.length > 60;

interface Work {
  key: string;
  /** English name (stored in the plan's title). */
  title: string;
  /** The name in the reading script, for the list when the interface is not English. */
  native: (script: ScriptId) => string;
  count: number;
  items: Mantra[];
  /** Verses of each item, for the long works: each day gets about the same number of verses. */
  weights?: number[];
}

/** The Ramayana and the Mahabharata whole, and each kanda/parva, from the manifest. */
function bookWorks(): Work[] {
  const out: Work[] = [];
  const make = (key: string, title: string, native: (sc: ScriptId) => string, ids: string[], unit: string): Work | null => {
    const items = ids.map(getMantraInfo).filter((m): m is Mantra => !!m);
    if (items.length < 2) return null;
    return { key, title: `${title} (${items.length} ${unit}s)`, native: (sc) => `${native(sc)} (${items.length})`, count: items.length, items, weights: items.map(verseCount) };
  };
  for (const w of BOOKS) {
    const whole = make(w.work, w.titleEn, (sc) => translit(w.title, sc), workSequence(w), w.unitLabel);
    if (whole) out.push(whole);
    for (const p of w.parts) {
      const part = make(`${w.work}-${p.part}`, `${w.titleEn} · ${p.nameEn}`, (sc) => `${translit(w.title, sc)} · ${translit(p.name, sc)}`, partItems(p).map((x) => x.id), w.unitLabel);
      // A kanda that is a section of the library (the Sundarakanda) is offered as that section.
      if (part && !(p.links.length && !p.units.length)) out.push(part);
    }
  }
  return out;
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
      const sa = key === sorted[0].category ? undefined : foldMixed(sorted)[0]?.seriesTitle?.title;
      const native = (sc: ScriptId) => `${sa ? translit(sa, sc) : categoryTitle(cat, sc)} (${sorted.length})`;
      return { key, title: `${title} (${sorted.length} parts)`, native, count: sorted.length, items: sorted } as Work;
    })
    .concat(bookWorks());
}

export default function NewPlan() {
  const { theme, settings, addPlan } = useSettings();
  const { lang, tr } = useI18n();
  const showEn = useShowEnglish();
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
      addPlan({ id, kind, title: `${work.title.replace(/ \(\d+ \w+\)$/, '')} in ${days} day${days > 1 ? 's' : ''}`, items: work.items.map((m) => m.id), weights: work.weights, days, start: localDate(), read: [], counts: {}, perDay: 1 });
    } else if (text) {
      addPlan({ id, kind, title: `${text.titleEn} · ${days} days${perDay > 1 ? ` · ${perDay}×` : ''}`, items: [text.id], days, start: localDate(), read: [], counts: {}, perDay });
    }
    if (router.canGoBack()) router.back();
    else router.replace('/parayana');
  };

  const card = { marginHorizontal: 16, marginBottom: 8, padding: 12, borderRadius: 16, borderWidth: 1 };
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <Stack.Screen options={{ title: tr('New parayana') }} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} keyboardShouldPersistTaps="handled">
        <SectionHeading>{tr('Type')}</SectionHeading>
        <View style={{ flexDirection: 'row', gap: 8, marginHorizontal: 16 }}>
          <Chip label={tr('Read a whole work')} active={kind === 'readthrough'} onPress={() => { setKind('readthrough'); setDays(7); }} />
          <Chip label={tr('Daily vow (vrata)')} active={kind === 'vow'} onPress={() => { setKind('vow'); setDays(40); }} />
        </View>

        {kind === 'readthrough' ? (
          <>
            <SectionHeading>{tr('Work')}</SectionHeading>
            {allWorks.map((w) => (
              <Pressable key={w.key} onPress={() => {
                  setWork(w);
                  const long = isLong(w);
                  if (!(long ? LONG_READTHROUGH_DAYS : READTHROUGH_DAYS).includes(days)) setDays(long ? 40 : 7);
                }} style={[card, { borderColor: work?.key === w.key ? theme.accent : theme.cardBorder, backgroundColor: work?.key === w.key ? theme.accentSoft : theme.card }]}>
                <Text style={{ color: theme.text, fontSize: 16 }}>{lang === 'en' ? w.title : w.native(settings.script)}</Text>
              </Pressable>
            ))}
          </>
        ) : (
          <>
            <SectionHeading>{tr('Text')}</SectionHeading>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder={tr('Search, e.g. lalitha, vishnu, ವಾಯು')}
              placeholderTextColor={theme.textMuted}
              style={[card, { borderColor: theme.cardBorder, backgroundColor: theme.card, color: theme.text, fontSize: 16 }]}
            />
            {textChoices.slice(0, 40).map((m) => (
              <Pressable key={m.id} onPress={() => setText(m)} style={[card, { borderColor: text?.id === m.id ? theme.accent : theme.cardBorder, backgroundColor: text?.id === m.id ? theme.accentSoft : theme.card }]}>
                <Text style={{ color: theme.text, fontSize: 16 }}>{nameOf(m, settings.script)}</Text>
                {showEn && <Text style={{ color: theme.textMuted, fontSize: 14.5 }}>{m.titleEn}</Text>}
              </Pressable>
            ))}
          </>
        )}

        <SectionHeading>{tr('Days')}</SectionHeading>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16 }}>
          {(kind === 'readthrough' ? (isLong(work) ? LONG_READTHROUGH_DAYS : READTHROUGH_DAYS) : VOW_DAYS).map((d) => (
            <Chip key={d} label={String(d)} active={days === d} onPress={() => setDays(d)} />
          ))}
        </View>
        {kind === 'vow' && (
          <>
            <SectionHeading>{tr('Times a day')}</SectionHeading>
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
        <Text style={{ color: ready ? theme.onAccent : theme.textMuted, fontSize: 16, fontWeight: '700' }}>{tr('Start')}</Text>
      </Pressable>
    </View>
  );
}
