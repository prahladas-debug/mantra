import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';
import { PlanCard } from '../components/PlanCard';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';

export default function ParayanaScreen() {
  const { theme, plans } = useSettings();
  const { tr } = useI18n();
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: tr('Parayana') }} />
      <Pressable
        onPress={() => router.push('/parayana-new')}
        style={({ pressed }) => ({
          margin: 16, padding: 14, borderRadius: 14, backgroundColor: theme.accent, opacity: pressed ? 0.8 : 1,
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
        })}
      >
        <MaterialCommunityIcons name="plus" size={22} color={theme.onAccent} />
        <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '700' }}>{tr('New parayana')}</Text>
      </Pressable>
      {plans.length === 0 && (
        <Text style={{ color: theme.textMuted, marginHorizontal: 16, lineHeight: 22 }}>
          {tr('Plan a parayana, for example the Sundarakanda in 7 days, the Gita in 18 days, or Lalita Sahasranama every day for 40 days. The app shows what to read each day, keeps count, and can remind you.')}
        </Text>
      )}
      {plans.map((p) => (
        <PlanCard key={p.id} plan={p} />
      ))}
    </ScrollView>
  );
}
