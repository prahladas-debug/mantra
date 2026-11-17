import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { headingFont } from '../../lib/fonts';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';

type Mdi = keyof typeof MaterialCommunityIcons.glyphMap;
const icon = (name: Mdi, focused: Mdi = name) =>
  function TabIcon({ color, focused: f }: { color: ColorValue; focused: boolean; size: number }) {
    return <MaterialCommunityIcons name={f ? focused : name} size={26} color={color as string} />;
  };

/** Four tabs: Home, Panchanga, Library, My practice. Everything else opens on top of them. */
export default function TabLayout() {
  const { theme, settings } = useSettings();
  const { tr, lang } = useI18n();
  const hf = headingFont(lang, settings.bookFonts);
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
        headerTitleStyle: { color: theme.text, fontFamily: hf, fontSize: 21 },
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: theme.bg },
        // The standard bar (49) fits a 10-point label; ours is 12, and its lower half was cut off
        // where there is no bottom inset (web, phones with a home button). A set height must
        // include the inset.
        tabBarStyle: { backgroundColor: theme.bar, borderTopColor: theme.cardBorder, height: 56 + insets.bottom },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: tr('Home'), headerShown: false, tabBarIcon: icon('temple-hindu-outline', 'temple-hindu') }} />
      <Tabs.Screen name="panchanga" options={{ title: tr('Panchanga'), headerShown: false, tabBarIcon: icon('weather-sunny') }} />
      <Tabs.Screen name="library" options={{ title: tr('Library'), tabBarIcon: icon('book-open-page-variant-outline', 'book-open-page-variant') }} />
      <Tabs.Screen name="practice" options={{ title: tr('My practice'), tabBarIcon: icon('meditation') }} />
    </Tabs>
  );
}
