import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';

type Icon = keyof typeof Ionicons.glyphMap;
const icon = (name: Icon, focused: Icon) =>
  function TabIcon({ color, focused: f, size }: { color: ColorValue; focused: boolean; size: number }) {
    return <Ionicons name={f ? focused : name} size={size} color={color as string} />;
  };

/** Four tabs: Home, Panchanga, Library, My practice. Everything else opens on top of them. */
export default function TabLayout() {
  const { theme } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      // Back retraces the tabs visited. With the default ('firstRoute'), a Panchanga day opened
      // from the calendar or the festival search (these tabs again, on top of that screen)
      // went Back to a second Home instead of back to the list it was opened from.
      backBehavior="history"
      screenOptions={{
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.accent,
        headerTitleStyle: { color: theme.text },
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: theme.bg },
        // The standard bar (49) fits a 10-point label; ours is 12, and its lower half was cut off
        // where there is no bottom inset (web, phones with a home button). A set height must
        // include the inset.
        tabBarStyle: { backgroundColor: theme.card, borderTopColor: theme.cardBorder, height: 56 + insets.bottom },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: tr('Home'), headerShown: false, tabBarIcon: icon('home-outline', 'home') }} />
      <Tabs.Screen name="panchanga" options={{ title: tr('Panchanga'), headerShown: false, tabBarIcon: icon('sunny-outline', 'sunny') }} />
      <Tabs.Screen name="library" options={{ title: tr('Library'), tabBarIcon: icon('library-outline', 'library') }} />
      <Tabs.Screen name="practice" options={{ title: tr('My practice'), tabBarIcon: icon('flower-outline', 'flower') }} />
    </Tabs>
  );
}
