import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { scriptFor } from '../data';
import { leading, meaningFont, scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { meaningsToShow } from '../lib/meaning';
import { useSettings } from '../lib/settings';
import { bindDandas, isRoman, nameOf, translit, translitInline, verseNumber } from '../lib/transliterate';
import { verseOfDay } from '../lib/verseOfDay';
import { ShareSheet } from './ShareCard';

/** Home: today's verse, with its meaning, a link into the text and sharing as an image. */
export function VerseOfDayCard() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const [sharing, setSharing] = useState(false);
  const today = new Date().toDateString();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const v = useMemo(() => verseOfDay(), [today]);
  if (!v) return null;
  const script = scriptFor(v.mantra, settings.script);
  const font = scriptFont(script, settings.bookFonts);
  const fs = isRoman(script) ? 17 : 19;
  const body = bindDandas(translit(v.verse.n !== undefined ? v.verse.text.replace(/\s*॥\s*$/, '') : v.verse.text, script));
  const meaning = meaningsToShow(v.verse.meaning, settings.meaningLang, settings.script)[0];
  const open = () => router.push(`/mantra/${v.mantra.id}?si=${v.si}&vi=${v.vi}` as Href);
  return (
    <View style={{ marginHorizontal: 16, marginTop: 14, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.page, paddingHorizontal: 18, paddingTop: 14, paddingBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <MaterialCommunityIcons name="white-balance-sunny" size={16} color={theme.gold} />
        <Text style={{ flex: 1, color: theme.textMuted, fontSize: 13, fontWeight: '700', letterSpacing: 0.8 }}>{tr('VERSE OF THE DAY')}</Text>
        <Pressable onPress={() => setSharing(true)} hitSlop={10} accessibilityLabel={tr('Share this verse')}>
          <MaterialCommunityIcons name="share-variant-outline" size={20} color={theme.accent} />
        </Pressable>
      </View>
      <Pressable onPress={open} accessibilityRole="link" style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}>
        <Text style={{ color: theme.text, fontSize: fs, lineHeight: fs * leading(script, settings.bookFonts), fontFamily: font, textAlign: 'center', marginTop: 12 }}>
          {body}
          {v.verse.n !== undefined && <Text style={{ color: theme.verseNumber }}>{' ' + verseNumber(v.verse.n, script)}</Text>}
        </Text>
        {meaning && (
          <Text
            numberOfLines={4}
            style={{ color: theme.textMuted, fontSize: 15, lineHeight: 23, textAlign: 'center', marginTop: 10, fontFamily: meaningFont(meaning.lang, settings.bookFonts) }}
          >
            {meaning.lang === 'en' ? translitInline(meaning.text, settings.script) : meaning.text}
          </Text>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 10, paddingVertical: 4 }}>
          <Text style={{ color: theme.accent, fontSize: 14, fontFamily: font }} numberOfLines={1}>
            {nameOf(v.mantra, settings.script)}
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={18} color={theme.accent} />
        </View>
      </Pressable>
      {sharing && <ShareSheet mantra={v.mantra} verse={v.verse} visible onClose={() => setSharing(false)} />}
    </View>
  );
}
