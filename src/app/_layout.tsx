import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider, useSettings } from '../lib/settings';

function AppStack() {
  const { theme } = useSettings();
  return (
    <>
      <StatusBar style={theme.statusBar} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.accent,
          headerTitleStyle: { color: theme.text },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.bg },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="search" options={{ title: 'Search' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <AppStack />
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
