import * as Notifications from 'expo-notifications';
import { router, type Href } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { cancelFestivalReminders, scheduleFestivalReminders } from '../lib/festivalReminders';
import { cityById } from '../lib/panchanga';
import { planStatus } from '../lib/plans';
import { cancelReminder } from '../lib/reminders';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { useCalcMethod, useCalendarMode, useEkadashiRule, useSauraStart } from './PanchangaCard';

// The tap already acted on. The response that started the app can arrive twice (as the
// "last response" and through the listener), and the last response stays set after that:
// without this the text opened twice, and again each time the app was reopened.
let handled: string | null = null;

/** Open the text a tapped reminder points to (data.url, e.g. /mantra/vishnu-sahasranama). */
function openFrom(response: Notifications.NotificationResponse | null) {
  if (!response) return;
  const id = `${response.notification.request.identifier}@${response.notification.date}`;
  if (id === handled) return;
  handled = id;
  try {
    Notifications.clearLastNotificationResponse();
  } catch {
    // not available: `handled` still stops a repeat while the app is running
  }
  const url = response.notification.request.content.data?.url;
  if (typeof url === 'string' && url.startsWith('/')) router.push(url as Href);
}

/**
 * Keeps the Ekadashi / festival reminders scheduled for the next 60 days. Runs when the app
 * opens (so the window moves along) and whenever a setting that changes the dates does.
 */
export function FestivalReminderSync() {
  const { ready, settings, plans, updatePlan } = useSettings();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  const { ekadashi, festivals, time } = settings.festivalReminders;
  const cityId = settings.city;
  const { lang } = useI18n();
  const script = settings.script;

  // Ask for notification permission only when a reminder has just been switched on, not
  // every time the app opens (or the place changes) while permission is refused.
  const before = useRef<{ ekadashi: boolean; festivals: boolean } | null>(null);
  useEffect(() => {
    if (!ready || Platform.OS === 'web') return;
    const was = before.current;
    before.current = { ekadashi, festivals };
    if (!ekadashi && !festivals) {
      cancelFestivalReminders();
      return;
    }
    const switchedOn = !!was && ((ekadashi && !was.ekadashi) || (festivals && !was.festivals));
    scheduleFestivalReminders({ city: cityById(cityId), rule, mode, start, method, time, kinds: { ekadashi, festivals }, lang, script }, switchedOn);
  }, [ready, ekadashi, festivals, time, cityId, rule, mode, start, method, lang, script]);

  // A finished parayana needs no daily reminder. Its card does this too, but the card is only
  // on the Parayana screen, which may not be opened again once the plan is done.
  useEffect(() => {
    if (!ready) return;
    for (const p of plans) {
      if (p.notificationId && planStatus(p).finished) {
        cancelReminder(p.notificationId);
        updatePlan(p.id, { reminder: undefined, notificationId: undefined });
      }
    }
  }, [ready, plans, updatePlan]);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    openFrom(Notifications.getLastNotificationResponse());
    const sub = Notifications.addNotificationResponseReceivedListener(openFrom);
    return () => sub.remove();
  }, []);

  return null;
}
