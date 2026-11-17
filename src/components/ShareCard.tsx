import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import { useRef, useState } from 'react';
import { type HostInstance, Modal, PixelRatio, Platform, Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';
import { scriptFor } from '../data';
import type { Mantra, Verse } from '../data/types';
import { leading, meaningFont, scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { APP_NAME } from '../lib/config';
import { meaningsToShow } from '../lib/meaning';
import { useSettings } from '../lib/settings';
import { shareVerse } from '../lib/share';
import { bindDandas, isRoman, nameOf, translit, translitInline, verseNumber } from '../lib/transliterate';

/** The two card designs: a parchment page and a lamp-lit night page. */
const CARD = {
  light: { bg: '#FAF4E6', frame: '#B8913F', text: '#332B25', muted: '#6E6156', accent: '#A94730' },
  dark: { bg: '#14110D', frame: '#C9A15A', text: '#EFE6D6', muted: '#B4A792', accent: '#D9AE62' },
} as const;
type CardStyle = keyof typeof CARD;

/** A verse laid out as a card, sized for sharing (4:5, like a phone photo). */
function VerseCardView({ mantra, verse, style, withMeaning, width }: { mantra: Mantra; verse: Verse; style: CardStyle; withMeaning: boolean; width: number }) {
  const { settings } = useSettings();
  const c = CARD[style];
  const script = scriptFor(mantra, settings.script);
  const font = scriptFont(script, true);
  const body = bindDandas(translit(verse.n !== undefined ? verse.text.replace(/\s*॥\s*$/, '') : verse.text, script));
  const meaning = withMeaning ? meaningsToShow(verse.meaning, settings.meaningLang, settings.script)[0] : undefined;
  const lines = body.split('\n').length;
  // Fit the verse: long verses get a smaller size so the card never overflows.
  const fs = Math.min(isRoman(script) ? 22 : 25, (width * 0.075 * 4) / Math.max(4, lines)) * (body.length > 220 ? 0.85 : 1);
  return (
    <View style={{ width, height: width * 1.25, backgroundColor: c.bg, padding: width * 0.045 }}>
      <View style={{ flex: 1, borderWidth: 1.5, borderColor: c.frame, padding: 4 }}>
        <View style={{ flex: 1, borderWidth: 0.75, borderColor: c.frame, paddingHorizontal: width * 0.06, paddingVertical: width * 0.05, alignItems: 'center', justifyContent: 'space-between' }}>
          <MaterialCommunityIcons name="spa-outline" size={width * 0.07} color={c.frame} />
          <View style={{ alignItems: 'center', gap: width * 0.04 }}>
            <Text style={{ color: c.text, fontSize: fs, lineHeight: fs * leading(script, true), fontFamily: font, textAlign: 'center' }}>
              {body}
              {verse.n !== undefined && <Text style={{ color: c.accent }}>{' ' + verseNumber(verse.n, script)}</Text>}
            </Text>
            {meaning && (
              <Text
                numberOfLines={6}
                style={{ color: c.muted, fontSize: width * 0.038, lineHeight: width * 0.058, textAlign: 'center', fontFamily: meaningFont(meaning.lang, true) }}
              >
                {meaning.lang === 'en' ? translitInline(meaning.text, settings.script) : meaning.text}
              </Text>
            )}
          </View>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={{ color: c.accent, fontSize: width * 0.036, fontFamily: font, textAlign: 'center' }} numberOfLines={2}>
              {nameOf(mantra, settings.script)}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <MaterialCommunityIcons name="oil-lamp" size={width * 0.032} color={c.frame} />
              <Text style={{ color: c.muted, fontSize: width * 0.028, letterSpacing: 1 }}>{APP_NAME}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Chip({ active, label, onPress }: { active: boolean; label: string; onPress: () => void }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      style={{ paddingHorizontal: 14, paddingVertical: 7, borderRadius: 16, borderWidth: 1, borderColor: active ? theme.accent : theme.cardBorder, backgroundColor: active ? theme.accentSoft : 'transparent' }}
    >
      <Text style={{ color: active ? theme.accent : theme.text, fontSize: 14 }}>{label}</Text>
    </Pressable>
  );
}

/** Bottom sheet: preview the verse card, pick a style, then share it as an image or as text. */
export function ShareSheet({ mantra, verse, visible, onClose }: { mantra: Mantra; verse: Verse; visible: boolean; onClose: () => void }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const [style, setStyle] = useState<CardStyle>(theme.name === 'dark' ? 'dark' : 'light');
  const [withMeaning, setWithMeaning] = useState(true);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HostInstance>(null);
  const cardW = Math.min(width - 48, (height * 0.55) / 1.25, 420);
  const script = scriptFor(mantra, settings.script);
  const meaning = meaningsToShow(verse.meaning, settings.meaningLang, settings.script)[0]?.text;
  const canImage = Platform.OS !== 'web';

  const shareImage = async () => {
    if (!ref.current || busy) return;
    setBusy(true);
    try {
      // 1080 px wide whatever the screen, so the image is sharp in WhatsApp and on status.
      const w = 1080 / PixelRatio.get();
      const uri = await captureRef(ref as Parameters<typeof captureRef>[0], { result: 'tmpfile', format: 'png', quality: 1, width: w, height: w * 1.25 });
      if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri, { mimeType: 'image/png', dialogTitle: tr('Share') });
    } catch {
      // cancelled or not available
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0008' }} onPress={onClose} accessibilityLabel={tr('Close')} />
      <View style={{ backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: insets.bottom + 16, paddingTop: 14, maxHeight: '92%' }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16, gap: 14 }}>
          <View ref={ref} collapsable={false} style={{ borderRadius: 4, overflow: 'hidden' }}>
            <VerseCardView mantra={mantra} verse={verse} style={style} withMeaning={withMeaning && !!meaning} width={cardW} />
          </View>
          {canImage && (
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Chip active={style === 'light'} label={tr('Parchment')} onPress={() => setStyle('light')} />
              <Chip active={style === 'dark'} label={tr('Night')} onPress={() => setStyle('dark')} />
              {!!meaning && <Chip active={withMeaning} label={tr('With meaning')} onPress={() => setWithMeaning(!withMeaning)} />}
            </View>
          )}
          <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch' }}>
            {canImage && (
              <Pressable
                onPress={shareImage}
                accessibilityRole="button"
                style={({ pressed }) => ({ flex: 1, flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 12, backgroundColor: theme.accent, opacity: pressed || busy ? 0.7 : 1 })}
              >
                <MaterialCommunityIcons name="image-outline" size={20} color={theme.onAccent} />
                <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '600' }}>{tr('Share image')}</Text>
              </Pressable>
            )}
            <Pressable
              onPress={() => shareVerse(mantra, verse, script, withMeaning ? meaning : undefined)}
              accessibilityRole="button"
              style={({ pressed }) => ({ flex: 1, flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 })}
            >
              <MaterialCommunityIcons name="text" size={20} color={theme.accent} />
              <Text style={{ color: theme.text, fontSize: 16 }}>{tr('Share text')}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
