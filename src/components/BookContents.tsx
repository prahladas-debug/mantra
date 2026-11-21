import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { getMantraInfo, type Category, type Mantra } from '../data';
import { linkedWhole, partItems, workSequence } from '../data/books';
import type { BookPartEntry, BookWork } from '../data/types';
import { scriptFont } from '../lib/fonts';
import { primaryLang } from '../lib/meaning';
import { useI18n } from '../lib/i18n';
import { plain } from '../lib/plain';
import { useSettings } from '../lib/settings';
import { searchKey, translit, translitTitle } from '../lib/transliterate';
import { BookBanner } from './Shelf';
import { TextRow } from './TextList';
import { useShowEnglish } from './useGloss';
import { readBookAsset } from '../lib/bookFile';
import { STORIES } from '../data/stories';
import { Folded } from './OtherLanguages';

interface Row {
  mantra: Mantra;
  unit: number;
  /** Its titles as a search key (worked out once: a work has hundreds of units). */
  key: string;
}

type Topics = Record<number, Record<string, string>>;
/** Each part's chapter topics in other languages, read once from its asset. */
const topicCache = new Map<BookPartEntry, Promise<Topics>>();
function loadTopics(p: BookPartEntry): Promise<Topics> {
  if (!p.topics) return Promise.resolve({});
  let t = topicCache.get(p);
  if (!t) {
    t = readBookAsset(p.topics()).then((j) => JSON.parse(j) as Topics).catch(() => ({}));
    topicCache.set(p, t);
  }
  return t;
}

/** Lines shown at most while filtering: a word like "adhyaya" matches every unit of the work. */
const MAX_FILTERED = 100;

/**
 * The page of a long work (Ramayana, Ramcharitmanas, Mahabharata): its parts (kandas, parvas) with the units of
 * each under them, from the manifest only. Nothing is read from the assets until a unit is opened.
 * A part that is a section of the library (the Sundarakanda) opens that section.
 */
export function BookContents({ category, work }: { category: Category; work: BookWork }) {
  const { theme, settings, recent, finished, update } = useSettings();
  const { lang: ui, tr } = useI18n();
  const showEn = useShowEnglish();
  // What a unit is called in the interface: sarga, adhyaya, or (the Ramcharitmanas's ten-doha groups) section.
  const unitName = work.unitLabel === 'sarga' ? 'sarga' : work.unitLabel === 'adhyaya' ? 'adhyaya' : 'section';
  const workTitle = ui === 'en' ? work.titleEn : translit(work.title, settings.script);
  const font = scriptFont(settings.script, settings.bookFonts);
  const [q, setQ] = useState('');

  const seq = useMemo(() => workSequence(work), [work]);
  // Each part's lines, linked texts in their places (the Gita inside the Bhishma Parva).
  const rows = useMemo(
    () =>
      new Map(
        work.parts.map((p) => [
          p.part,
          partItems(p)
            .map((x) => ({ mantra: getMantraInfo(x.id), unit: x.unit }))
            .filter((r): r is Omit<Row, 'key'> => !!r.mantra)
            .map((r) => ({ ...r, key: `${searchKey(r.mantra.title)} ${searchKey(r.mantra.titleEn)}` })),
        ]),
      ),
    [work],
  );
  const partOf = useMemo(() => {
    const m = new Map<string, BookPartEntry>();
    for (const p of work.parts) for (const r of rows.get(p.part) ?? []) m.set(r.mantra.id, p);
    return m;
  }, [work, rows]);

  const lastRead = recent.find((r) => partOf.has(r.id));
  const lastPart = lastRead ? partOf.get(lastRead.id) : undefined;
  const [open, setOpen] = useState<ReadonlySet<number>>(() => {
    const first = lastPart ?? work.parts.find((p) => p.units.length && !linkedWhole(p));
    return new Set(first ? [first.part] : []);
  });
  const toggle = (part: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(part)) next.delete(part);
      else next.add(part);
      return next;
    });

  const key = searchKey(q.trim());
  const filtering = key.length >= 2;

  // Chapter topics in the interface's language, read for the parts that are open (all of them
  // while filtering, so a topic can be searched for).
  const [topics, setTopics] = useState<ReadonlyMap<number, Topics>>(new Map());
  useEffect(() => {
    if (ui === 'en') return;
    let live = true;
    for (const p of work.parts)
      if ((filtering || open.has(p.part)) && !topics.has(p.part) && p.topics)
        void loadTopics(p).then((t) => live && setTopics((prev) => new Map(prev).set(p.part, t)));
    return () => {
      live = false;
    };
  }, [ui, work, open, filtering, topics]);
  /** A unit's topic as the reader sees it: in their language, or English in an English interface. */
  const topicOf = (p: BookPartEntry, r: Row): string | undefined =>
    ui === 'en' ? r.mantra.titleEn.split(' · ').slice(1).join(' · ') || undefined : topics.get(p.part)?.[r.unit]?.[ui];
  // While filtering, the matches of each part (at most MAX_FILTERED lines in all).
  const matches = useMemo(() => {
    if (!filtering) return null;
    let left = MAX_FILTERED;
    let total = 0;
    const byPart = new Map<number, Row[]>();
    for (const p of work.parts) {
      const hits = (rows.get(p.part) ?? []).filter((r) => r.key.includes(key) || searchKey(topics.get(p.part)?.[r.unit]?.[ui] ?? '').includes(key));
      total += hits.length;
      byPart.set(p.part, hits.slice(0, Math.max(0, left)));
      left -= hits.length;
    }
    return { byPart, total };
  }, [filtering, key, rows, work, topics, ui]);
  const shown = (p: BookPartEntry) => (matches ? matches.byPart.get(p.part) ?? [] : rows.get(p.part) ?? []);
  const written = work.parts.reduce((n, p) => n + p.units.length, 0);
  const lang = primaryLang(settings.meaningLang, settings.script);
  const lastLabel = lastRead && lastPart ? `${lastPart.part}.${rows.get(lastPart.part)?.find((r) => r.mantra.id === lastRead.id)?.unit ?? ''}` : undefined;

  return (
    <View>
      {seq.length > 0 && <BookBanner category={category.id} firstId={seq[0]} lastId={lastRead?.id} lastLabel={lastLabel} parts={seq} />}
      <View style={{ marginHorizontal: 20, marginTop: 12, marginBottom: 4 }}>
        {ui === 'en' && (
          <>
            <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginTop: 6, lineHeight: 19 }}>{category.description}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 13, textAlign: 'center', marginTop: 4, lineHeight: 17 }} numberOfLines={4}>
              {plain(work.edition)}
            </Text>
          </>
        )}
      </View>

      {!filtering && (
        // The epics are read for their story too: the meanings as prose, each verse a tap away.
        <Pressable
          onPress={() => update({ storyMode: !settings.storyMode })}
          accessibilityRole="switch"
          accessibilityState={{ checked: !!settings.storyMode }}
          style={({ pressed }) => [s.storyRow, { borderColor: settings.storyMode ? theme.gold : theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}
        >
          <MaterialCommunityIcons name={settings.storyMode ? 'book-open-variant' : 'book-open-outline'} size={20} color={settings.storyMode ? theme.gold : theme.textMuted} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.text, fontSize: 16 }}>{tr('Read as a story: meanings first')}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 13 }}>{tr('Each verse opens on a tap under its meaning.')}</Text>
          </View>
          <MaterialCommunityIcons name={settings.storyMode ? 'toggle-switch' : 'toggle-switch-off-outline'} size={34} color={settings.storyMode ? theme.gold : theme.textMuted} />
        </Pressable>
      )}

      {!!STORIES[work.work] && !filtering && (
        // The episodes people look for (Nala and Damayanti, the Yaksha Prashna), each opening its chapter.
        <View style={{ marginTop: 12 }}>
          <Folded label={tr('Well-known stories')} count={STORIES[work.work].length} icon="book-open-page-variant-outline">
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16, marginBottom: 8 }}>
              {STORIES[work.work].map((st) => {
                const [kind, id] = st.to.includes(':') ? st.to.split(':') : ['unit', st.to];
                const href = kind === 'category' ? `/category/${id}` : `/mantra/${id}`;
                return (
                  <Pressable
                    key={st.to}
                    onPress={() => router.push(href as Href)}
                    accessibilityRole="link"
                    style={({ pressed }) => ({ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
                  >
                    <Text style={{ color: theme.text, fontSize: 15 }}>{st.name[ui] ?? st.name.en}</Text>
                  </Pressable>
                );
              })}
            </View>
          </Folded>
        </View>
      )}

      {written > 12 && (
        <View style={[s.search, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
          <MaterialCommunityIcons name="magnify" size={18} color={theme.accent} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={unitName === 'sarga' ? tr('Find a sarga in {title}', { title: workTitle }) : unitName === 'adhyaya' ? tr('Find an adhyaya in {title}', { title: workTitle }) : tr('Find a section in {title}', { title: workTitle })}
            placeholderTextColor={theme.textMuted}
            autoCorrect={false}
            style={{ flex: 1, color: theme.text, fontSize: 16, paddingVertical: 9, paddingHorizontal: 8 }}
            accessibilityLabel={tr('Filter this list')}
          />
          {q.length > 0 && (
            <Pressable onPress={() => setQ('')} hitSlop={10} accessibilityLabel={tr('Clear')}>
              <MaterialCommunityIcons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
      )}

      <View style={[s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, marginTop: 14 }]}>
        {work.parts.map((p, i) => {
          const list = shown(p);
          if (filtering && !list.length) return null;
          const linked = linkedWhole(p);
          const count = linked ? p.unitCount : list.length;
          const ready = count > 0;
          const expanded = filtering || (open.has(p.part) && !linked);
          const sizes = [
            ...(showEn ? [p.nameEn] : []),
            !linked && count < p.unitCount
              ? unitName === 'sarga' ? tr('{count} of {total} sargas', { count, total: p.unitCount }) : unitName === 'adhyaya' ? tr('{count} of {total} adhyayas', { count, total: p.unitCount }) : tr('{count} of {total} sections', { count, total: p.unitCount })
              : unitName === 'sarga' ? tr('{n} sargas', { n: p.unitCount }) : unitName === 'adhyaya' ? tr('{n} adhyayas', { n: p.unitCount }) : tr('{n} sections', { n: p.unitCount }),
            tr('{n} verses', { n: p.verseCount.toLocaleString('en-IN') }),
          ];
          // How much of the part has been read to the end, chapter by chapter.
          const units = rows.get(p.part) ?? [];
          const read = linked ? 0 : units.filter((r) => finished[r.mantra.id]).length;
          const summary = p.summary[lang] ?? (ui === 'en' ? p.summary.en : undefined);
          return (
            <View key={p.part}>
              <Pressable
                disabled={!ready || filtering}
                onPress={() => (linked ? router.push((linked.category ? `/category/${linked.category}` : `/mantra/${linked.text}`) as Href) : toggle(p.part))}
                accessibilityRole={linked ? 'link' : 'button'}
                accessibilityState={linked ? undefined : { expanded }}
                style={({ pressed }) => [s.part, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : ready ? 1 : 0.55 }]}
              >
                <View style={[s.badge, { backgroundColor: theme.accentSoft }]}>
                  <Text style={{ color: theme.accent, fontSize: 14, fontWeight: '700' }}>{p.part}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: theme.text, fontSize: 18, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
                    {(settings.script === 'english' ? p.nameEn : translitTitle(p.name, settings.script))}
                  </Text>
                  <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 1 }} numberOfLines={1}>
                    {ready ? sizes.join(' · ') : tr('{name} · to be added', { name: ui === 'en' ? p.nameEn : translit(p.name, settings.script) })}
                  </Text>
                </View>
                {ready && !filtering && <MaterialCommunityIcons name={linked ? 'chevron-right' : expanded ? 'chevron-up' : 'chevron-down'} size={22} color={linked ? theme.textMuted : theme.accent} />}
              </Pressable>
              {read > 0 && !filtering && (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingLeft: 56, paddingRight: 16, paddingBottom: 10, marginTop: -4 }} accessibilityLabel={tr('{read} of {total} read', { read, total: units.length })}>
                  <View style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: theme.cardBorder, overflow: 'hidden' }}>
                    <View style={{ width: `${Math.round((read / units.length) * 100)}%`, height: 4, backgroundColor: theme.gold }} />
                  </View>
                  <Text style={{ color: theme.textMuted, fontSize: 12 }}>{tr('{read} of {total} read', { read, total: units.length })}</Text>
                </View>
              )}
              {expanded && (
                <View>
                  {!filtering && summary && (
                    <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 21, paddingHorizontal: 16, paddingBottom: 8 }}>{lang === 'en' ? plain(summary) : summary}</Text>
                  )}
                  {list.map((r) => (
                    <TextRow
                      key={r.mantra.id}
                      mantra={r.mantra}
                      divider
                      indent
                      badge={String(r.unit)}
                      heading={topicOf(p, r)}
                      subtitle={r.mantra.titleEn.split(' · ').pop()}
                      current={r.mantra.id === lastRead?.id}
                      done={!!finished[r.mantra.id]}
                    />
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
      {matches && matches.total === 0 && <Text style={{ color: theme.textMuted, margin: 16 }}>{tr('Nothing matches “{q}”.', { q })}</Text>}
      {matches && matches.total > MAX_FILTERED && (
        <Text style={{ color: theme.textMuted, margin: 16 }}>
          {tr('The first {max} of {total} that match. Type more to narrow the list.', { max: MAX_FILTERED, total: matches.total.toLocaleString('en-IN') })}
        </Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  search: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1 },
  card: { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  part: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12, paddingRight: 12, paddingLeft: 14 },
  badge: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  storyRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1 },
});
