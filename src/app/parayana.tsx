import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';
import { PlanCard } from '../components/PlanCard';
import { useSettings } from '../lib/settings';

export default function ParayanaScreen() {
  const { theme, plans } = useSettings();
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: 'Pārāyaṇa · ಪಾರಾಯಣ' }} />
      <Pressable
        onPress={() => router.push('/parayana-new')}
        style={({ pressed }) => ({
          margin: 16, padding: 14, borderRadius: 14, backgroundColor: theme.accent, opacity: pressed ? 0.8 : 1,
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
        })}
      >
        <Ionicons name="add" size={20} color={theme.onAccent} />
        <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '700' }}>New pārāyaṇa · ಹೊಸ ಪಾರಾಯಣ</Text>
      </Pressable>
      {plans.length === 0 && (
        <Text style={{ color: theme.textMuted, marginHorizontal: 16, lineHeight: 22 }}>
          Plan a pārāyaṇa, for example the Sundarakāṇḍa in 7 days, the Gītā in 18 days, or Lalitā Sahasranāma
          every day for 40 days. The app shows what to read each day, keeps count, and can remind you.
        </Text>
      )}
      {plans.map((p) => (
        <PlanCard key={p.id} plan={p} />
      ))}
    </ScrollView>
  );
}
