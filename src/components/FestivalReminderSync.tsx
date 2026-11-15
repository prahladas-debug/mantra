import * as Notifications from 'expo-notifications';
import { router, type Href } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { cancelFestivalReminders, scheduleFestivalReminders } from '../lib/festivalReminders';
import { cityById } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { useCalendarMode, useEkadashiRule, useSauraStart } from './PanchangaCard';

/** Open the text a tapped reminder points to (data.url, e.g. /mantra/vishnu-sahasranama). */
function openFrom(response: Notifications.NotificationResponse | null) {
  const url = response?.notification.request.content.data?.url;
  if (typeof url === 'string' && url.startsWith('/')) router.push(url as Href);
}

/**
 * Keeps the Ekadashi / festival reminders scheduled for the next 60 days. Runs when the app
 * opens (so the window moves along) and whenever a setting that changes the dates does.
 */
export function FestivalReminderSync() {
  const { ready, settings } = useSettings();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const { ekadashi, festivals, time } = settings.festivalReminders;
  const cityId = settings.city;

  useEffect(() => {
    if (!ready || Platform.OS === 'web') return;
    if (!ekadashi && !festivals) {
      cancelFestivalReminders();
      return;
    }
    scheduleFestivalReminders({ city: cityById(cityId), rule, mode, start, time, kinds: { ekadashi, festivals } });
  }, [ready, ekadashi, festivals, time, cityId, rule, mode, start]);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    openFrom(Notifications.getLastNotificationResponse());
    const sub = Notifications.addNotificationResponseReceivedListener(openFrom);
    return () => sub.remove();
  }, []);

  return null;
}
