import { Button, Column, Spacer, Text } from '@expo/ui/jetpack-compose';
import { background, cornerRadius, fillMaxSize, fillMaxWidth, height, paddingAll } from '@expo/ui/jetpack-compose/modifiers';
import { createWidget, type WidgetEnvironment } from 'expo-widgets';

/** One day of the widget, with every name already in the reader's language and script. */
export type TodayWidgetDay = {
  /** When this day starts (ms since 1970, midnight at the chosen city); the widget shows the last day that has started. */
  from: number;
  /** "Tuesday · Bengaluru" */
  heading: string;
  /** "Shukla Ekadashi" */
  tithi: string;
  /** "Nakshatra: Revati" */
  nakshatra: string;
  /** "Rahu kala 15:12 – 16:42" */
  rahu: string;
  /** Today's festivals, joined with " · " (empty when none). */
  festival: string;
};

export type TodayWidgetProps = {
  days: TodayWidgetDay[];
};

/**
 * Home-screen "Today" widget (Android): weekday, tithi, nakshatra, Rahu kala and today's festival
 * for the reader's city. The app sends the next days (see src/lib/widgetSync.ts); the widget picks
 * the one that has started, so it stays right after midnight without the app running.
 *
 * The body runs in the widget's own isolated runtime: no hooks, and nothing from outside the
 * function except imports, so the colours are declared here.
 */
const TodayWidget = (props: TodayWidgetProps, environment: WidgetEnvironment) => {
  'widget';
  const dark = environment.colorScheme === 'dark';
  // The app's two themes: parchment and terracotta; a lamp-lit page with ivory text and lamp-gold.
  const c = dark
    ? { bg: '#12100D', title: '#CFA65C', text: '#EFE6D6', muted: '#A99B88', festival: '#CFA65C' }
    : { bg: '#FAF7F0', title: '#A94730', text: '#332B25', muted: '#756A60', festival: '#A94730' };

  const days = props.days ?? [];
  const now = Date.now();
  let day = days[0];
  for (const d of days) {
    if (d.from <= now) day = d;
  }

  // The whole widget is one button; the app's provider turns any tap on it into
  // "open the Panchanga tab" (see plugins/withWidgetOpensApp.js).
  return (
    <Button modifiers={[fillMaxSize(), background(c.bg), cornerRadius(20)]}>
      <Column modifiers={[fillMaxSize(), paddingAll(14)]} horizontalAlignment="start">
        {day ? (
          <>
            <Text color={c.muted} style={{ fontSize: 12, fontWeight: '600', letterSpacing: 0.6 }} maxLines={1}>
              {day.heading}
            </Text>
            <Spacer modifiers={[height(2)]} />
            <Text color={c.title} style={{ fontSize: 19, fontWeight: 'bold' }} maxLines={1}>
              {day.tithi}
            </Text>
            <Spacer modifiers={[height(3)]} />
            <Text color={c.text} style={{ fontSize: 14 }} maxLines={1}>
              {day.nakshatra}
            </Text>
            <Text color={c.text} style={{ fontSize: 14 }} maxLines={1}>
              {day.rahu}
            </Text>
            {day.festival ? (
              <>
                <Spacer modifiers={[height(4)]} />
                <Text color={c.festival} style={{ fontSize: 14, fontWeight: '600' }} maxLines={2} modifiers={[fillMaxWidth()]}>
                  {day.festival}
                </Text>
              </>
            ) : null}
          </>
        ) : (
          <Text color={c.title} style={{ fontSize: 16, fontWeight: 'bold' }}>
            Nandadeepa
          </Text>
        )}
      </Column>
    </Button>
  );
};

export default createWidget<TodayWidgetProps>('TodayWidget', TodayWidget, { days: [] });
