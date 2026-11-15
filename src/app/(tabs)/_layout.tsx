import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';
import { useSettings } from '../../lib/settings';

type Icon = keyof typeof Ionicons.glyphMap;
const icon = (name: Icon, focused: Icon) =>
  function TabIcon({ color, focused: f, size }: { color: ColorValue; focused: boolean; size: number }) {
    return <Ionicons name={f ? focused : name} size={size} color={color as string} />;
  };

/** Four tabs: Home, Panchanga, Library, My practice. Everything else opens on top of them. */
export default function TabLayout() {
  const { theme } = useSettings();
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.accent,
        headerTitleStyle: { color: theme.text },
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: theme.bg },
        tabBarStyle: { backgroundColor: theme.card, borderTopColor: theme.cardBorder },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, tabBarIcon: icon('home-outline', 'home') }} />
      <Tabs.Screen name="panchanga" options={{ title: 'Panchanga', headerShown: false, tabBarIcon: icon('sunny-outline', 'sunny') }} />
      <Tabs.Screen name="library" options={{ title: 'Library', tabBarIcon: icon('library-outline', 'library') }} />
      <Tabs.Screen name="practice" options={{ title: 'My practice', tabBarIcon: icon('flower-outline', 'flower') }} />
    </Tabs>
  );
}
