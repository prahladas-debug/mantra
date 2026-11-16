import { useEffect, useRef } from 'react';
import { router, type Href } from 'expo-router';
import { Alert, Linking, Pressable, Text, View } from 'react-native';
import { getMantraInfo } from '../data';
import { useI18n } from '../lib/i18n';
import { planStatus, type Plan } from '../lib/plans';
import { cancelReminder, remindersSupported, scheduleDailyReminder } from '../lib/reminders';
import { useSettings } from '../lib/settings';
import { translitTitle } from '../lib/transliterate';
import { Chip, SectionHeading } from './ui';

const REMINDER_TIMES = ['05:30', '06:30', '07:30', '12:00', '18:00', '19:30'];

/** One pārāyaṇa plan: progress, today's reading or recitation count, reminder. */
export function PlanCard({ plan, compact }: { plan: Plan; compact?: boolean }) {
  const { theme, settings, updatePlan, removePlan, addRecitation } = useSettings();
  const { tr } = useI18n();
  const st = planStatus(plan);
  const pct = Math.round(st.progress * 100);

  // One reminder change at a time: a second quick tap would cancel a stale id and
  // leave the first new reminder scheduled for ever.
  const busy = useRef(false);
  const setReminder = async (time: string | undefined) => {
    if (busy.current) return;
    busy.current = true;
    try {
      await cancelReminder(plan.notificationId);
      let notificationId: string | undefined;
      if (time) {
        notificationId =
          (await scheduleDailyReminder(tr('Parayana'), tr('Today: {title}', { title: plan.title }), time)) ?? undefined;
        // Not scheduled (notifications not allowed): do not show a reminder time that will never ring.
        if (!notificationId) {
          updatePlan(plan.id, { reminder: undefined, notificationId: undefined });
          Alert.alert(tr('Reminder not set'), tr('Notifications are turned off for this app. Allow them in the phone’s settings, then choose the time again.'), [
            { text: tr('Not now'), style: 'cancel' },
            { text: tr('Open settings'), onPress: () => Linking.openSettings().catch(() => {}) },
          ]);
          return;
        }
      }
      updatePlan(plan.id, { reminder: time, notificationId });
    } finally {
      busy.current = false;
    }
  };

  // A finished plan needs no daily reminder.
  useEffect(() => {
    if (st.finished && plan.notificationId) {
      cancelReminder(plan.notificationId);
      updatePlan(plan.id, { reminder: undefined, notificationId: undefined });
    }
  }, [st.finished, plan.notificationId, plan.id, updatePlan]);

  return (
    <View style={{ marginHorizontal: 16, marginBottom: 12, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.text, fontSize: 17, fontWeight: '700' }}>{plan.title}</Text>
      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 2 }}>
        {st.finished ? tr('Completed 🙏') : tr('Day {day} of {days} · {pct}%', { day: st.day + 1, days: plan.days, pct })}
        {plan.kind === 'vow' && plan.perDay > 1 ? ` · ${tr('{n}× a day', { n: plan.perDay })}` : ''}
      </Text>
      <View style={{ height: 6, borderRadius: 3, backgroundColor: theme.accentSoft, marginTop: 8, overflow: 'hidden' }}>
        <View style={{ width: `${pct}%`, height: 6, backgroundColor: theme.accent }} />
      </View>

      {!st.finished && plan.kind === 'readthrough' && (
        <>
          <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 10, fontWeight: '600' }}>
            {st.todayItems.length ? tr('Today') : tr('Today’s reading done ✓')}
            {st.behind ? ` · ${tr('{n} pending from earlier days', { n: st.behind })}` : ''}
          </Text>
          {st.todayItems.map((id) => {
            const m = getMantraInfo(id);
            if (!m) return null;
            return (
              <Pressable key={id} onPress={() => router.push(`/mantra/${id}` as Href)} style={{ paddingVertical: 6 }}>
                <Text style={{ color: theme.accent, fontSize: 16 }}>
                  {translitTitle(m.title, settings.script)} <Text style={{ color: theme.textMuted, fontSize: 13 }}>· {m.titleEn}</Text>
                </Text>
              </Pressable>
            );
          })}
        </>
      )}

      {!st.finished && plan.kind === 'vow' && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <Pressable onPress={() => router.push(`/mantra/${plan.items[0]}` as Href)}>
            <Text style={{ color: theme.accent, fontSize: 16 }}>{tr('Open text →')}</Text>
          </Pressable>
          <View style={{ flex: 1 }} />
          <Text style={{ color: theme.text }}>
            {tr('Today {done}/{total}', { done: plan.perDay - st.todayRemaining, total: plan.perDay })}
          </Text>
          <Chip label="−" onPress={() => addRecitation(plan.id, -1)} />
          <Chip label="+1" active onPress={() => addRecitation(plan.id, 1)} />
        </View>
      )}

      {!compact && (
        <>
          {remindersSupported && (
            <>
              <SectionHeading>{tr('Daily reminder')}</SectionHeading>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: -4 }}>
                <Chip label={tr('Off')} active={!plan.reminder} onPress={() => setReminder(undefined)} />
                {REMINDER_TIMES.map((t) => (
                  <Chip key={t} label={t} active={plan.reminder === t} onPress={() => setReminder(t)} />
                ))}
              </View>
            </>
          )}
          <Pressable
            onPress={async () => {
              await cancelReminder(plan.notificationId);
              removePlan(plan.id);
            }}
            style={{ marginTop: 14, alignSelf: 'flex-start' }}
          >
            <Text style={{ color: theme.textMuted, fontSize: 13 }}>{tr('Remove plan')}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
