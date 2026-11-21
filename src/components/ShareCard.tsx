import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { type HostInstance, Image, Modal, PixelRatio, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';
import { scriptFor } from '../data';
import type { Mantra, Verse } from '../data/types';
import { leading, meaningFont, scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { APP_NAME } from '../lib/config';
import { ART } from '../lib/art';
import { artFor } from '../lib/textArt';
import { meaningsToShow } from '../lib/meaning';
import { useSettings } from '../lib/settings';
import { shareVerse } from '../lib/share';
import { fitLines } from '../lib/lines';
import { bindDandas, isRoman, nameOf, translit, translitInline, verseNumber } from '../lib/transliterate';

/** The card designs: a parchment page, a lamp-lit night page, and the text's painting. */
const CARD = {
  light: { bg: '#FAF4E6', frame: '#B8913F', text: '#332B25', muted: '#6E6156', accent: '#A94730' },
  dark: { bg: '#14110D', frame: '#C9A15A', text: '#EFE6D6', muted: '#B4A792', accent: '#D9AE62' },
  // The text's own painting above, darkening into the night page the verse is set on.
  art: { bg: '#0E0905', frame: '#D9B26A', text: '#F6EBD6', muted: '#E1D1B2', accent: '#E8BE6E' },
} as const;
type CardStyle = keyof typeof CARD;

/** A verse laid out as a card, sized for sharing (4:5, like a phone photo). */
function VerseCardView({ mantra, verse, style, withMeaning, width }: { mantra: Mantra; verse: Verse; style: CardStyle; withMeaning: boolean; width: number }) {
  const { settings } = useSettings();
  const c = CARD[style];
  const art = artFor(mantra);
  const painting = style === 'art' && art ? ART[art].card : undefined;
  const script = scriptFor(mantra, settings.script);
  const font = scriptFont(script, true);
  const raw = translit(verse.n !== undefined ? verse.text.replace(/\s*॥\s*$/, '') : verse.text, script);
  const meaning = withMeaning ? meaningsToShow(verse.meaning, settings.meaningLang, settings.script)[0] : undefined;
  // Fit the verse: long verses get a smaller size so the card never overflows, and a line too long
  // for the card is cut at its half-line (pada), not wherever the letters run out.
  const textW = width * 0.76;
  const sizeFor = (t: string) => {
    const lines = t.split('\n').length;
    // The same proportions at any card width (the preview, and the larger card that is saved).
    return Math.min(((isRoman(script) ? 22 : 25) * width) / 360, (width * 0.075 * 4) / Math.max(4, lines)) * (t.length > 220 ? 0.85 : 1) * (painting ? 0.8 : 1);
  };
  let text = raw;
  for (let i = 0; i < 2; i++) text = fitLines(text, textW, sizeFor(text));
  const fs = sizeFor(text);
  const body = bindDandas(text);
  return (
    <View style={{ width, height: width * 1.25, backgroundColor: c.bg, padding: width * 0.045 }}>
      <View style={{ flex: 1, borderWidth: 1.5, borderColor: c.frame, padding: 4 }}>
        <View style={{ flex: 1, borderWidth: 0.75, borderColor: c.frame, overflow: 'hidden', paddingHorizontal: width * 0.06, paddingVertical: width * 0.05, alignItems: 'center', justifyContent: painting ? 'flex-end' : 'space-between', gap: painting ? width * 0.05 : 0 }}>
          {/* The painting sits inside the frame, as a framed picture does: the gold lines go round it, never across it. */}
          {painting && (
            <>
              <Image source={painting} style={StyleSheet.absoluteFill} resizeMode="cover" />
              <LinearGradient
                colors={['rgba(14,9,5,0)', 'rgba(14,9,5,0.5)', 'rgba(14,9,5,0.9)', 'rgba(14,9,5,0.96)']}
                locations={[0.12, 0.34, 0.52, 1]}
                style={StyleSheet.absoluteFill}
              />
            </>
          )}
          {!painting && <MaterialCommunityIcons name="spa-outline" size={width * 0.07} color={c.frame} />}
          <View style={{ alignItems: 'center', gap: width * 0.04 }}>
            <Text style={{ color: c.text, fontSize: fs, lineHeight: fs * leading(script, true), fontFamily: font, textAlign: 'center' }}>
              {body}
              {verse.n !== undefined && <Text style={{ color: c.accent }}>{' ' + verseNumber(verse.n, script)}</Text>}
            </Text>
            {meaning && (
              <Text
                numberOfLines={painting ? 4 : 6}
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
  const hasArt = !!artFor(mantra);
  const [style, setStyle] = useState<CardStyle>(hasArt ? 'art' : theme.name === 'dark' ? 'dark' : 'light');
  const [withMeaning, setWithMeaning] = useState(true);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HostInstance>(null);
  const full = useRef<HostInstance>(null);
  const fullW = 1080 / PixelRatio.get();
  const cardW = Math.min(width - 48, (height * 0.55) / 1.25, 420);
  const script = scriptFor(mantra, settings.script);
  const meaning = meaningsToShow(verse.meaning, settings.meaningLang, settings.script)[0]?.text;
  const canImage = Platform.OS !== 'web';

  const shareImage = async () => {
    if (!full.current || busy) return;
    setBusy(true);
    try {
      // The card is drawn a second time, off screen, 1080 px wide whatever the phone, and saved as it is
      // drawn: scaling up the small preview instead is what made the shared image soft.
      const uri = await captureRef(full as Parameters<typeof captureRef>[0], { result: 'tmpfile', format: 'png', quality: 1 });
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
            // Off screen: the card at full size, for saving. It is laid out and drawn but never seen.
            <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: width * 2 }}>
              <View ref={full} collapsable={false}>
                <VerseCardView mantra={mantra} verse={verse} style={style} withMeaning={withMeaning && !!meaning} width={fullW} />
              </View>
            </View>
          )}
          {canImage && (
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {hasArt && <Chip active={style === 'art'} label={tr('Painting')} onPress={() => setStyle('art')} />}
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
