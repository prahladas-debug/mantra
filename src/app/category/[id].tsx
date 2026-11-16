import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { BookContents } from '../../components/BookContents';
import { BookBanner } from '../../components/Shelf';
import { EntryCard } from '../../components/TextList';
import { Chip, SectionHeading } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { bookWork } from '../../data/books';
import { scriptFont } from '../../lib/fonts';
import { BOOK_CATEGORIES, groupsFor } from '../../lib/groups';
import { categoryTitle } from '../../lib/labels';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { searchKey, translit } from '../../lib/transliterate';

/** A section of the library: sub-headings, compact lines, a filter for long lists. */
export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, recent } = useSettings();
  const { lang, tr } = useI18n();
  const [only, setOnly] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const category = categoryById[id as CategoryId];
  const all = category ? mantrasInCategory(category.id) : [];
  const isBook = !!category && BOOK_CATEGORIES.has(category.id);
  const font = scriptFont(settings.script, settings.bookFonts);

  const key = searchKey(q.trim());
  const filtered = key.length >= 2 ? all.filter((m) => `${searchKey(m.title)} ${searchKey(m.titleEn)}`.includes(key)) : all;
  const groups = category ? groupsFor(category.id, filtered) : [];
  const allGroups = category ? groupsFor(category.id, all) : [];
  const shown = only ? groups.filter((g) => g.id === only) : groups;

  const lastRead = recent.find((r) => all.some((m) => m.id === r.id));
  const first = all[0];
  const opening = first?.sections.flatMap((x) => x.verses).find((v) => v.n !== undefined)?.text.split('\n').slice(0, 2).join('\n');

  if (!category) return <Stack.Screen options={{ title: tr('Not found') }} />;

  // The Ramayana and the Mahabharata: kandas/parvas and their sargas/adhyayas, from the manifest.
  const work = bookWork(category.id);
  if (work) {
    return (
      <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
        <Stack.Screen options={{ title: lang === 'en' ? category.titleEn : categoryTitle(category, settings.script) }} />
        <BookContents category={category} work={work} />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
      <Stack.Screen options={{ title: lang === 'en' ? category.titleEn : categoryTitle(category, settings.script) }} />

      {isBook && first ? (
        <>
          <BookBanner category={category.id} firstId={first.id} lastId={lastRead?.id} lastLabel={lastRead ? String(all.findIndex((m) => m.id === lastRead.id) + 1) : undefined} />
          <View style={{ marginHorizontal: 20, marginTop: 12, marginBottom: 4 }}>
            {opening && first.sourceScript !== 'tamil' && (
              <Text style={{ color: theme.text, fontSize: 16, lineHeight: 27, textAlign: 'center', fontFamily: font }}>{translit(opening, settings.script)}</Text>
            )}
            <Text style={{ color: theme.textMuted, fontSize: 13, textAlign: 'center', marginTop: 6, lineHeight: 19 }}>{category.description}</Text>
          </View>
        </>
      ) : (
        <View style={{ paddingTop: 14, paddingHorizontal: 16, paddingBottom: 4 }}>
          <Text style={{ color: theme.accent, fontSize: 26, fontFamily: font, fontWeight: font ? undefined : '700' }}>{categoryTitle(category, settings.script)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 2 }}>
            {category.description} · {tr('{n} texts', { n: all.length })}
          </Text>
        </View>
      )}

      {all.length > 12 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
          <MaterialCommunityIcons name="magnify" size={18} color={theme.accent} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={tr('Find in {title}', { title: category.titleEn })}
            placeholderTextColor={theme.textMuted}
            autoCorrect={false}
            style={{ flex: 1, color: theme.text, fontSize: 15, paddingVertical: 9, paddingHorizontal: 8 }}
            accessibilityLabel={tr('Filter this list')}
          />
          {q.length > 0 && (
            <Pressable onPress={() => setQ('')} hitSlop={10} accessibilityLabel={tr('Clear')}>
              <MaterialCommunityIcons name="close-circle" size={19} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
      )}

      {allGroups.length > 2 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginTop: 10 }}>
          <Chip label={tr('All')} active={!only} onPress={() => setOnly(null)} />
          {allGroups.map((g) => (
            <Chip key={g.id} label={`${g.title} ${g.entries.reduce((n, e) => n + (e.parts?.length ?? 1), 0)}`} active={only === g.id} onPress={() => setOnly(only === g.id ? null : g.id)} />
          ))}
        </ScrollView>
      )}

      {shown.map((g) => (
        <View key={g.id} style={{ marginTop: g.title ? 0 : 12 }}>
          {!!g.title && (
            <SectionHeading>{g.title}</SectionHeading>
          )}
          <EntryCard entries={g.entries} numbered={isBook || category.id === 'homa'} />
        </View>
      ))}
      {shown.length === 0 && <Text style={{ color: theme.textMuted, margin: 16 }}>{tr('Nothing matches “{q}”.', { q })}</Text>}
    </ScrollView>
  );
}
