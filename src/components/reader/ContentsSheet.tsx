import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Mantra } from '../../data';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';
import type { Row } from './rows';

/** Sections actually shown (the reader's tradition/time choices hide some). */
export function shownSections(mantra: Mantra, rows: Row[]) {
  const shown = new Set(rows.map((r) => r.key));
  return mantra.sections.map((s, si) => ({ s, si })).filter(({ s, si }) => (s.title || s.titleEn) && shown.has(`s${si}`));
}

/** The reader's contents: tap a section to go there. */
export function ContentsSheet({ visible, onClose, mantra, rows, onJump }: { visible: boolean; onClose: () => void; mantra: Mantra; rows: Row[]; onJump: (key: string) => void }) {
  const { theme, settings } = useSettings();
  const { lang, tr } = useI18n();
  const insets = useSafeAreaInsets();
  const sections = shownSections(mantra, rows);
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0005' }} onPress={onClose} accessibilityLabel={tr('Close contents')} />
      <View style={{ maxHeight: '70%', backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
        <View style={{ alignSelf: 'center', width: 40, height: 4, borderRadius: 2, marginTop: 8, backgroundColor: theme.cardBorder }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 6, paddingBottom: 8 }}>
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700', flex: 1 }}>{tr('Contents')}</Text>
          <Pressable onPress={onClose} hitSlop={10} accessibilityRole="button">
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>{tr('Close')}</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}>
          <View style={{ borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, overflow: 'hidden' }}>
            {sections.map(({ s, si }, i) => (
              <Pressable
                key={si}
                onPress={() => onJump(`s${si}`)}
                style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 })}
              >
                <Text style={{ color: theme.text, fontSize: 16, flex: 1 }} numberOfLines={1}>
                  {lang === 'en' ? (s.titleEn ?? translit(s.title!, settings.script)) : s.title ? translit(s.title, settings.script) : s.titleEn}
                </Text>
                <MaterialCommunityIcons name="chevron-right" size={18} color={theme.textMuted} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
