import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';
import { DeityBanner } from '../../components/Shelf';
import { DEITY_ART } from '../../lib/art';
import { EntryCard } from '../../components/TextList';
import { SectionHeading } from '../../components/ui';
import { ALL_MANTRAS, categoryById } from '../../data';
import { DEITIES, deitiesOf } from '../../lib/deities';
import { foldMixed } from '../../lib/groups';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { categoryTitle } from '../../lib/labels';
import { isRoman, translit } from '../../lib/transliterate';
import { useShowEnglish } from '../../components/useGloss';

/** Every text for a deity, under the library section it belongs to. */
export default function DeityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings } = useSettings();
  const { lang, tr } = useI18n();
  const showEn = useShowEnglish();
  const group = DEITIES.find((d) => d.id === id);
  const all = group ? ALL_MANTRAS.filter((m) => deitiesOf(m).includes(group.id)) : [];
  const cats = [...new Set(all.map((m) => m.category))];
  // The painted banner carries the name: the header shows it only once the banner has scrolled away.
  const painted = !!group && !!DEITY_ART[group.id];
  const [pastBanner, setPastBanner] = useState(false);
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const past = e.nativeEvent.contentOffset.y > 140;
    if (past !== pastBanner) setPastBanner(past);
  };
  const name = group ? (lang === 'en' ? group.titleEn : translit(group.title, settings.script)) : tr('Not found');
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }} onScroll={painted ? onScroll : undefined} scrollEventThrottle={50}>
      <Stack.Screen options={{ title: painted && !pastBanner ? '' : name }} />
      {group && painted && <DeityBanner deity={group} count={all.length} />}
      {group && !painted && (
        <Text style={{ color: theme.textMuted, fontSize: 14, paddingHorizontal: 16, paddingTop: 6 }}>
          {lang === 'en' ? (isRoman(settings.script) ? '' : `${translit(group.title, settings.script)} · `) : showEn ? `${group.titleEn} · ` : ''}
          {tr('{n} texts', { n: all.length })}
        </Text>
      )}
      {cats.map((c) => (
        <View key={c}>
          <SectionHeading>{lang === 'en' ? categoryById[c].titleEn : categoryTitle(categoryById[c], settings.script)}</SectionHeading>
          <EntryCard entries={foldMixed(all.filter((m) => m.category === c))} />
        </View>
      ))}
    </ScrollView>
  );
}
