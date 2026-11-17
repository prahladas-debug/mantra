import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';

/**
 * Hands-free reading: the page scrolls (or turns) by itself while you recite. Play or pause,
 * slower or faster, and close. A touch on the text pauses it.
 */
export function AutoControl({ playing, setPlaying, onClose, bottom }: { playing: boolean; setPlaying: (p: boolean) => void; onClose: () => void; bottom: number }) {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const speed = settings.autoSpeed ?? 4;
  const btn = (icon: keyof typeof MaterialCommunityIcons.glyphMap, label: string, onPress: () => void, disabled = false) => (
    <Pressable onPress={onPress} disabled={disabled} hitSlop={8} accessibilityRole="button" accessibilityLabel={label} style={({ pressed }) => [a.btn, { opacity: disabled ? 0.35 : pressed ? 0.6 : 1 }]}>
      <MaterialCommunityIcons name={icon} size={24} color={theme.onAccent} />
    </Pressable>
  );
  return (
    <View style={[a.pill, { bottom, backgroundColor: theme.accent }]}>
      {btn(playing ? 'pause' : 'play', playing ? tr('Pause') : tr('Play'), () => setPlaying(!playing))}
      <View style={[a.sep, { backgroundColor: theme.onAccent }]} />
      {btn('minus', tr('Slower'), () => update({ autoSpeed: speed - 1 }), speed <= 1)}
      <Text style={{ color: theme.onAccent, fontSize: 15, fontWeight: '700', minWidth: 54, textAlign: 'center' }} accessibilityLabel={tr('Speed {n}', { n: speed })}>
        {tr('Speed {n}', { n: speed })}
      </Text>
      {btn('plus', tr('Faster'), () => update({ autoSpeed: speed + 1 }), speed >= 9)}
      <View style={[a.sep, { backgroundColor: theme.onAccent }]} />
      {btn('close', tr('Stop hands-free reading'), onClose)}
    </View>
  );
}

const a = StyleSheet.create({
  pill: { position: 'absolute', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 2, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 26, elevation: 6, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 8, shadowOffset: { width: 0, height: 3 } },
  btn: { padding: 8 },
  sep: { width: StyleSheet.hairlineWidth, height: 22, opacity: 0.5, marginHorizontal: 4 },
});
