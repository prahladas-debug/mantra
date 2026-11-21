import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams, type Href } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';
import { BookContents } from '../../components/BookContents';
import { BookBanner } from '../../components/Shelf';
import { EntryCard } from '../../components/TextList';
import { Chip, SectionHeading } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { bookWork } from '../../data/books';
import { OtherLanguages, useSongSplit } from '../../components/OtherLanguages';
import { OWN_SONGS } from '../../lib/audience';
import { BOOK_CATEGORIES, SONG_CATEGORIES, filtersFor, groupsFor, type SongLang } from '../../lib/groups';
import { categoryTitle } from '../../lib/labels';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { searchKey } from '../../lib/transliterate';
import { useAudience } from '../../lib/useAudience';

/** A section of the library: sub-headings, compact lines, a filter for long lists. */
export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, recent } = useSettings();
  const { lang, tr } = useI18n();
  const [only, setOnly] = useState<string | null>(null);
  const [q, setQ] = useState('');
  // Song lists lead with the reader's own language; each other language opens on a tap.
  const audience = useAudience();
  const { isMine, split } = useSongSplit();
  // A book's banner carries its title: the header shows it only once the banner has scrolled away.
  const [pastBanner, setPastBanner] = useState(false);
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const past = e.nativeEvent.contentOffset.y > 140;
    if (past !== pastBanner) setPastBanner(past);
  };
  const category = categoryById[id as CategoryId];
  const all = category ? mantrasInCategory(category.id) : [];
  const isBook = !!category && BOOK_CATEGORIES.has(category.id);

  const key = searchKey(q.trim());
  const searching = key.length >= 2;
  const filtered = searching ? all.filter((m) => `${searchKey(m.title)} ${searchKey(m.titleEn)}`.includes(key)) : all;
  // A search looks through every language; otherwise songs in other languages are folded away.
  const { own, others } = searching ? { own: filtered, others: new Map<SongLang, typeof all>() } : split(filtered);
  // The chips: the headings themselves, or (the Dasara padas, headed by composer) the deity each praises.
  const visible = searching ? all : all.filter(isMine);
  const filters = category ? filtersFor(category.id, visible) : undefined;
  const chipIds = filters?.find((f) => f.id === only)?.ids;
  const groups = category ? groupsFor(category.id, chipIds ? own.filter((m) => chipIds.has(m.id)) : own) : [];
  const allGroups = category ? groupsFor(category.id, visible) : [];
  const chips = filters ?? allGroups.map((g) => ({ id: g.id, title: g.title, ids: new Set(g.entries.flatMap((e) => (e.parts ?? [e.mantra]).map((m) => m.id))) }));
  const shown = only && !filters ? groups.filter((g) => g.id === only) : groups;
  // On another song list, the audience's own songs (a Kannada reader on the kirtanas: the Dasara padas).
  const ownSongs = category && SONG_CATEGORIES.has(category.id) && OWN_SONGS[audience] && OWN_SONGS[audience] !== category.id ? categoryById[OWN_SONGS[audience] as CategoryId] : undefined;
  const ownSongsCount = ownSongs ? mantrasInCategory(ownSongs.id).length : 0;

  const lastRead = recent.find((r) => all.some((m) => m.id === r.id));
  const first = all[0];

  if (!category) return <Stack.Screen options={{ title: tr('Not found') }} />;
  const name = lang === 'en' ? category.titleEn : categoryTitle(category, settings.script);
  const header = <Stack.Screen options={{ title: isBook && !pastBanner ? '' : name }} />;

  // The Ramayana and the Mahabharata: kandas/parvas and their sargas/adhyayas, from the manifest.
  const work = bookWork(category.id);
  if (work) {
    return (
      <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled" onScroll={onScroll} scrollEventThrottle={50}>
        {header}
        <BookContents category={category} work={work} />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled" onScroll={onScroll} scrollEventThrottle={50}>
      {header}

      {isBook && first ? (
        <>
          <BookBanner category={category.id} firstId={first.id} lastId={lastRead?.id} lastLabel={lastRead ? String(all.findIndex((m) => m.id === lastRead.id) + 1) : undefined} parts={all.map((m) => m.id)} />
          {lang === 'en' && <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginHorizontal: 20, marginTop: 10, lineHeight: 19 }}>{category.description}</Text>}
        </>
      ) : (
        // The header names the section: under it, only what it holds.
        <Text style={{ color: theme.textMuted, fontSize: 14, paddingTop: 6, paddingHorizontal: 16, paddingBottom: 4 }}>
          {lang === 'en' ? `${category.description} · ` : ''}
          {tr('{n} texts', { n: all.length })}
        </Text>
      )}

      {all.length > 24 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
          <MaterialCommunityIcons name="magnify" size={18} color={theme.accent} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={tr('Find in {title}', { title: lang === 'en' ? category.titleEn : categoryTitle(category, settings.script) })}
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

      {!!ownSongs && !searching && (
        <Pressable
          onPress={() => router.push(`/category/${ownSongs.id}` as Href)}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginTop: 12, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: theme.gold, backgroundColor: theme.card }}
          accessibilityRole="link"
        >
          <MaterialCommunityIcons name="music-clef-treble" size={22} color={theme.gold} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.text, fontSize: 17, fontWeight: '600' }}>{lang === 'en' ? ownSongs.titleEn : categoryTitle(ownSongs, settings.script)}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 2 }}>{tr('{n} texts', { n: ownSongsCount })}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={theme.textMuted} />
        </Pressable>
      )}

      {chips.length > 2 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginTop: 10 }}>
          <Chip label={tr('All')} active={!only} onPress={() => setOnly(null)} />
          {chips.map((g) => (
            <Chip key={g.id} label={`${tr(g.title)} ${g.ids.size}`} active={only === g.id} onPress={() => setOnly(only === g.id ? null : g.id)} />
          ))}
        </ScrollView>
      )}

      {shown.map((g) => (
        <View key={g.id} style={{ marginTop: g.title ? 0 : 12 }}>
          {!!g.title && (
            <SectionHeading>{tr(g.title)}</SectionHeading>
          )}
          <EntryCard entries={g.entries} numbered={isBook || category.id === 'homa'} currentId={isBook ? lastRead?.id : undefined} />
        </View>
      ))}
      <OtherLanguages others={others} entriesFor={(list) => groupsFor(category.id, list)} />
      {shown.length === 0 && others.size === 0 && <Text style={{ color: theme.textMuted, margin: 16 }}>{tr('Nothing matches “{q}”.', { q })}</Text>}
    </ScrollView>
  );
}
