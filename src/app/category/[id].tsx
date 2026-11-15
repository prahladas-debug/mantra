import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { BookCover, GREAT_WORKS } from '../../components/Shelf';
import { EntryCard } from '../../components/TextList';
import { Chip } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { BOOK_CATEGORIES, groupsFor } from '../../lib/groups';
import { categoryTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { searchKey, translit } from '../../lib/transliterate';

/** A section of the library: sub-headings, compact lines, a filter for long lists. */
export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, recent } = useSettings();
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

  if (!category) return <Stack.Screen options={{ title: 'Not found' }} />;
  const work = GREAT_WORKS.find((w) => w.category === category.id);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
      <Stack.Screen options={{ title: category.titleEn }} />

      {isBook && first ? (
        <View style={{ margin: 16, marginBottom: 12, padding: 14, borderRadius: 16, borderWidth: 1, borderColor: theme.pageEdge, backgroundColor: theme.page }}>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            {work && <BookCover work={work} width={112} still />}
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {!work && (
                <Text style={{ color: theme.accent, fontSize: 26, fontFamily: font, fontWeight: font ? undefined : '700' }}>{categoryTitle(category, settings.script)}</Text>
              )}
              <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700' }}>{category.titleEn}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 4, lineHeight: 19 }}>
                {category.description} {all.length} parts.
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                {lastRead && lastRead.id !== first.id && (
                  <Pressable onPress={() => router.push(`/mantra/${lastRead.id}` as Href)} style={({ pressed }) => ({ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: theme.accent, opacity: pressed ? 0.7 : 1 })}>
                    <Text style={{ color: theme.onAccent, fontSize: 14, fontWeight: '700' }}>Continue ›</Text>
                  </Pressable>
                )}
                <Pressable onPress={() => router.push(`/mantra/${first.id}` as Href)} style={({ pressed }) => ({ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: theme.accent, opacity: pressed ? 0.7 : 1 })}>
                  <Text style={{ color: theme.accent, fontSize: 14, fontWeight: '700' }}>Begin</Text>
                </Pressable>
              </View>
            </View>
          </View>
          {opening && first.sourceScript !== 'tamil' && (
            <Text style={{ color: theme.text, fontSize: 16, lineHeight: 27, textAlign: 'center', fontFamily: font, marginTop: 12 }}>{translit(opening, settings.script)}</Text>
          )}
        </View>
      ) : (
        <View style={{ paddingTop: 14, paddingHorizontal: 16, paddingBottom: 4 }}>
          <Text style={{ color: theme.accent, fontSize: 26, fontFamily: font, fontWeight: font ? undefined : '700' }}>{categoryTitle(category, settings.script)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 2 }}>
            {category.description} · {all.length} texts
          </Text>
        </View>
      )}

      {all.length > 12 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
          <Ionicons name="search" size={16} color={theme.textMuted} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={`Find in ${category.titleEn}`}
            placeholderTextColor={theme.textMuted}
            autoCorrect={false}
            style={{ flex: 1, color: theme.text, fontSize: 15, paddingVertical: 9, paddingHorizontal: 8 }}
            accessibilityLabel="Filter this list"
          />
          {q.length > 0 && (
            <Pressable onPress={() => setQ('')} hitSlop={10} accessibilityLabel="Clear">
              <Ionicons name="close-circle" size={17} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
      )}

      {allGroups.length > 2 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginTop: 10 }}>
          <Chip label="All" active={!only} onPress={() => setOnly(null)} />
          {allGroups.map((g) => (
            <Chip key={g.id} label={`${g.title} ${g.entries.reduce((n, e) => n + (e.parts?.length ?? 1), 0)}`} active={only === g.id} onPress={() => setOnly(only === g.id ? null : g.id)} />
          ))}
        </ScrollView>
      )}

      {shown.map((g) => (
        <View key={g.id} style={{ marginTop: g.title ? 16 : 12 }}>
          {!!g.title && (
            <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginHorizontal: 16, marginBottom: 6 }}>{g.title.toUpperCase()}</Text>
          )}
          <EntryCard entries={g.entries} numbered={isBook || category.id === 'homa'} />
        </View>
      ))}
      {shown.length === 0 && <Text style={{ color: theme.textMuted, margin: 16 }}>Nothing matches “{q}”.</Text>}
    </ScrollView>
  );
}
