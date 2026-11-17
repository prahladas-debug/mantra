import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { useDeferredValue, useMemo, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { MantraRow } from '../components/ui';
import { search } from '../data';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { translit, nameOf } from '../lib/transliterate';

export default function SearchScreen() {
  const { theme, settings } = useSettings();
  const { lang, tr } = useI18n();
  const [query, setQuery] = useState('');
  const deferred = useDeferredValue(query);
  const results = useMemo(() => search(deferred), [deferred]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, margin: 16, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}>
        <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
        <TextInput
          autoFocus
          value={query}
          onChangeText={setQuery}
          placeholder={tr('e.g. vishnu, ವಾಯು, कमलाकुच, govinda')}
          placeholderTextColor={theme.textMuted}
          style={{ flex: 1, paddingVertical: 12, fontSize: 18, color: theme.text }}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />
      </View>
      <FlatList
        data={results}
        keyExtractor={(r, i) => `${r.mantra.id}-${r.verse?.sectionIndex ?? 't'}-${r.verse?.verseIndex ?? i}`}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          deferred.trim().length >= 2 ? (
            <Text style={{ color: theme.textMuted, textAlign: 'center', marginTop: 32 }}>{tr('No matches')}</Text>
          ) : (
            <Text style={{ color: theme.textMuted, marginHorizontal: 16, lineHeight: 22 }}>
              {tr('Type in English, IAST or any Indian script. Searches titles and every verse.')}
            </Text>
          )
        }
        renderItem={({ item }) =>
          item.verse ? (
              <Pressable
                onPress={() => router.push(`/mantra/${item.mantra.id}?si=${item.verse!.sectionIndex}&vi=${item.verse!.verseIndex}` as Href)}
                style={{ marginHorizontal: 16, marginBottom: 10, padding: 14, borderRadius: 16, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}>
                <Text style={{ color: theme.accent, fontSize: 14, fontWeight: '600', marginBottom: 4 }}>
                  {lang === 'en' ? item.mantra.titleEn : nameOf(item.mantra, settings.script)}
                  {item.verse.n !== undefined ? ` · ${tr('verse {n}', { n: item.verse.n })}` : ''}
                </Text>
                <Text style={{ color: theme.text, fontSize: 18, lineHeight: 29 }} numberOfLines={3}>
                  {translit(item.verse.text, settings.script)}
                </Text>
              </Pressable>
          ) : (
            <MantraRow mantra={item.mantra} />
          )
        }
      />
    </View>
  );
}
