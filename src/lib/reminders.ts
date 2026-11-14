import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

const CHANNEL = 'parayana';

if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

/** Ask for permission (Android 13+ needs a channel first). Returns true if allowed. */
async function ensurePermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(CHANNEL, {
      name: 'Parayana reminders',
      // AndroidImportance is re-exported via `export *`; eslint-plugin-import can't follow it.
      // eslint-disable-next-line import/namespace
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  const req = await Notifications.requestPermissionsAsync();
  return req.granted;
}

/**
 * Schedule a daily reminder at HH:MM local time. Returns the notification id,
 * or null if notifications are unavailable (web) or not permitted.
 */
export async function scheduleDailyReminder(title: string, body: string, time: string): Promise<string | null> {
  try {
    if (!(await ensurePermission())) return null;
    const [hour, minute] = time.split(':').map(Number);
    return await Notifications.scheduleNotificationAsync({
      content: { title, body },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour, minute, channelId: CHANNEL },
    });
  } catch {
    return null;
  }
}

export async function cancelReminder(id: string | undefined): Promise<void> {
  if (!id || Platform.OS === 'web') return;
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
  } catch {
    // already gone
  }
}

export const remindersSupported = Platform.OS !== 'web';
