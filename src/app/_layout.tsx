import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FestivalReminderSync } from '../components/FestivalReminderSync';
import { FONT_ASSETS } from '../lib/fonts';
import { SettingsProvider, useSettings } from '../lib/settings';

SplashScreen.preventAutoHideAsync().catch(() => {});

function AppStack() {
  const { theme } = useSettings();
  return (
    <>
      <StatusBar style={theme.statusBar} />
      <FestivalReminderSync />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.accent,
          headerTitleStyle: { color: theme.text },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.bg },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="welcome" options={{ headerShown: false, title: 'Welcome', gestureEnabled: false }} />
        <Stack.Screen name="search" options={{ title: 'Search' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="parayana" options={{ title: 'Parayana' }} />
        <Stack.Screen name="calendar" options={{ title: 'Calendar' }} />
        <Stack.Screen name="festivals" options={{ title: 'Festivals' }} />
        <Stack.Screen name="japa" options={{ title: 'Japa' }} />
        <Stack.Screen name="bookmarks" options={{ title: 'Bookmarks' }} />
        <Stack.Screen name="collection/[id]" options={{ title: 'Collection' }} />
        <Stack.Screen name="routine" options={{ title: 'Daily routine' }} />
        <Stack.Screen name="festival-search" options={{ title: 'Find a festival date' }} />
        <Stack.Screen name="parayana-new" options={{ title: 'New parayana' }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  // Book fonts are bundled; keep the splash screen up until they are ready.
  const [fontsLoaded, fontError] = useFonts(FONT_ASSETS);
  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync().catch(() => {});
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) return null;
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <AppStack />
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
