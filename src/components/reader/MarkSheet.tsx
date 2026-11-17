import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { T, useI18n } from '../../lib/i18n';
import { MARK_COLORS, MARK_INK, useSettings, type MarkColor } from '../../lib/settings';

const COLOR_NAMES: Record<MarkColor, string> = { gold: T('Gold'), green: T('Green'), blue: T('Blue'), rose: T('Rose') };

/** Ink for a mark colour on the current page (light or dark). */
export function useMarkInk() {
  const { theme } = useSettings();
  const dark = theme.name === 'dark';
  return (c: MarkColor | undefined) => MARK_INK[c ?? 'gold'][dark ? 'dark' : 'light'];
}

/**
 * Mark a verse, as with a highlighter in a printed book: a colour (gold is a plain bookmark) and
 * a note of the reader's own. Every marked verse is listed under Bookmarks.
 */
export function MarkSheet({ mantraId, rowKey, onClose }: { mantraId: string; rowKey: string; onClose: () => void }) {
  const { theme, bookmarks, setMark } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const ink = useMarkInk();
  const mark = bookmarks.find((b) => b.mantraId === mantraId && b.key === rowKey);
  const [note, setNote] = useState(mark?.note ?? '');
  // Opening the sheet on an unmarked verse marks it (gold): one tap still makes a bookmark.
  const [color, setColor] = useState<MarkColor>(mark?.color ?? 'gold');
  const save = (c = color, n = note) => setMark(mantraId, rowKey, { color: c === 'gold' ? undefined : c, note: n });
  const close = () => {
    save();
    onClose();
  };
  return (
    <Modal visible transparent animationType="slide" onRequestClose={close} onShow={() => {
      if (!mark) save();
    }}>
      <Pressable style={{ flex: 1, backgroundColor: '#0005' }} onPress={close} accessibilityLabel={tr('Close')} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={{ backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingHorizontal: 16, paddingBottom: insets.bottom + 16 }}>
          <View style={{ alignSelf: 'center', width: 40, height: 4, borderRadius: 2, marginTop: 8, backgroundColor: theme.cardBorder }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 12 }}>
            <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700', flex: 1 }}>{tr('Mark this verse')}</Text>
            <Pressable onPress={close} hitSlop={10} accessibilityRole="button">
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>{tr('Done')}</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', gap: 14, marginBottom: 14 }}>
            {MARK_COLORS.map((c) => (
              <Pressable
                key={c}
                onPress={() => {
                  setColor(c);
                  save(c);
                }}
                accessibilityRole="radio"
                accessibilityState={{ selected: c === color }}
                accessibilityLabel={tr(COLOR_NAMES[c])}
                style={{ alignItems: 'center', gap: 4 }}
              >
                <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: ink(c), alignItems: 'center', justifyContent: 'center', borderWidth: c === color ? 3 : 0, borderColor: theme.text }}>
                  {c === color && <MaterialCommunityIcons name="check" size={20} color="#fff" />}
                </View>
                <Text style={{ color: theme.textMuted, fontSize: 12 }}>{tr(COLOR_NAMES[c])}</Text>
              </Pressable>
            ))}
          </View>
          <TextInput
            value={note}
            onChangeText={setNote}
            onBlur={() => save()}
            placeholder={tr('Add a note (optional)')}
            placeholderTextColor={theme.textMuted}
            multiline
            style={{ minHeight: 80, maxHeight: 180, textAlignVertical: 'top', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, color: theme.text, fontSize: 16 }}
          />
          <Pressable
            onPress={() => {
              setMark(mantraId, rowKey, null);
              onClose();
            }}
            accessibilityRole="button"
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12, paddingVertical: 10 }}
          >
            <MaterialCommunityIcons name="bookmark-remove-outline" size={20} color={theme.textMuted} />
            <Text style={{ color: theme.textMuted, fontSize: 15 }}>{tr('Remove the mark')}</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
