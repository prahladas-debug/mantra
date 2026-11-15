/**
 * Festival / ekādaśī reminders: one-off local notifications (date trigger) on the evening
 * before each ekādaśī (with its pāraṇa) and each major festival, for the next ~60 days.
 * What gets scheduled is decided in festivalReminderPlan.ts.
 *
 * The identifiers of what was scheduled are kept in AsyncStorage under STORE_KEY so a
 * new call (or cancelFestivalReminders) can remove them first; identifiers also carry
 * REMINDER_ID_PREFIX, so stale ones are found even if that storage is lost. Call
 * scheduleFestivalReminders again when the app opens or a setting changes, so the
 * 60-day window moves along. No-op on web; never throws.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { getMantraInfo } from '../data';
import { planFestivalReminders, REMINDER_ID_PREFIX, type FestivalReminderOptions } from './festivalReminderPlan';
import { CHANNEL, ensurePermission } from './reminders';

export { MAJOR_FESTIVAL_KEYS, REMINDER_DAYS, planFestivalReminders, type FestivalReminderOptions, type PlannedReminder } from './festivalReminderPlan';

const STORE_KEY = 'mantra.festivalReminders.v1';

// Calls run one after another, so a quick change of settings cannot interleave a cancel
// with another call's scheduling.
let queue: Promise<unknown> = Promise.resolve();
function serial<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => undefined);
  return run;
}

async function cancelScheduled(): Promise<void> {
  const ids = new Set<string>();
  try {
    const raw = await AsyncStorage.getItem(STORE_KEY);
    const stored: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(stored)) for (const id of stored) if (typeof id === 'string') ids.add(id);
  } catch {
    // unreadable: fall back to the prefix scan below
  }
  try {
    for (const r of await Notifications.getAllScheduledNotificationsAsync()) {
      if (r.identifier.startsWith(REMINDER_ID_PREFIX)) ids.add(r.identifier);
    }
  } catch {
    // ignore
  }
  for (const id of ids) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      // already gone
    }
  }
  try {
    await AsyncStorage.removeItem(STORE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Replace the festival / ekādaśī reminders: cancels those scheduled earlier, then
 * schedules the new set. Asks for notification permission if needed, unless `ask` is false
 * (the routine re-scheduling when the app opens must not put up a prompt). Resolves to the
 * number scheduled (0 on web, without permission, with both kinds off, or on failure).
 */
export function scheduleFestivalReminders(opts: FestivalReminderOptions, ask = true): Promise<number> {
  if (Platform.OS === 'web') return Promise.resolve(0);
  return serial(async () => {
    try {
      await cancelScheduled();
      const plan = planFestivalReminders(opts, new Date(), (id) => getMantraInfo(id)?.titleEn);
      if (!plan.length || !(await ensurePermission(ask))) return 0;
      const ids: string[] = [];
      for (const r of plan) {
        try {
          ids.push(
            await Notifications.scheduleNotificationAsync({
              identifier: r.id,
              content: { title: r.title, body: r.body, data: r.data },
              trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: r.at, channelId: CHANNEL },
            }),
          );
        } catch {
          // skip this one
        }
      }
      try {
        await AsyncStorage.setItem(STORE_KEY, JSON.stringify(ids));
      } catch {
        // the prefix scan still finds them
      }
      return ids.length;
    } catch {
      return 0;
    }
  });
}

/** Cancel every festival / ekādaśī reminder scheduled by scheduleFestivalReminders. */
export function cancelFestivalReminders(): Promise<void> {
  if (Platform.OS === 'web') return Promise.resolve();
  return serial(async () => {
    try {
      await cancelScheduled();
    } catch {
      // never throw
    }
  });
}
