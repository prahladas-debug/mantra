/**
 * Verse of the day notification: one local notification each morning for the next two weeks,
 * with that day's verse and its meaning; tapping it opens the verse. Rescheduled whenever the
 * app opens, so the window moves along. No-op on web; never throws.
 */
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { meaningsToShow, type MeaningPref } from './meaning';
import { CHANNEL, ensurePermission } from './reminders';
import { tr, type UiLang } from './tr';
import { translit, type ScriptId } from './transliterate';
import { verseOfDay } from './verseOfDay';

const PREFIX = 'verse-of-day-';
const DAYS = 14;

async function cancelAll(): Promise<void> {
  try {
    for (const r of await Notifications.getAllScheduledNotificationsAsync()) {
      if (r.identifier.startsWith(PREFIX)) await Notifications.cancelScheduledNotificationAsync(r.identifier);
    }
  } catch {
    // nothing scheduled, or not available
  }
}

export async function cancelVerseReminders(): Promise<void> {
  if (Platform.OS === 'web') return;
  await cancelAll();
}

export async function scheduleVerseReminders(opts: { time: string; lang: UiLang; script: ScriptId; meaningLang: MeaningPref; ask: boolean }): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    if (!(await ensurePermission(opts.ask))) return;
    await cancelAll();
    const [h, m] = opts.time.split(':').map(Number);
    const now = Date.now();
    for (let d = 0; d < DAYS; d++) {
      const at = new Date();
      at.setDate(at.getDate() + d);
      at.setHours(h, m, 0, 0);
      if (at.getTime() <= now) continue;
      const v = verseOfDay(at);
      if (!v) continue;
      const first = translit(v.verse.text, opts.script).split('\n').slice(0, 2).join('\n');
      const meaning = meaningsToShow(v.verse.meaning, opts.meaningLang, opts.script)[0]?.text ?? '';
      const ymd = `${at.getFullYear()}${String(at.getMonth() + 1).padStart(2, '0')}${String(at.getDate()).padStart(2, '0')}`;
      await Notifications.scheduleNotificationAsync({
        identifier: PREFIX + ymd,
        content: {
          title: tr(opts.lang, 'Verse of the day'),
          body: meaning ? `${first}\n${meaning.length > 140 ? meaning.slice(0, 139) + '…' : meaning}` : first,
          data: { url: `/mantra/${v.mantra.id}?si=${v.si}&vi=${v.vi}` },
        },
        trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: at, channelId: CHANNEL },
      });
    }
  } catch {
    // not permitted or not available
  }
}
