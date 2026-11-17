// Config plugin: two small changes to the Android widget that expo-widgets generates for "TodayWidget".
//
// 1. expo-widgets has no "tap opens the app" action. The widget is one big Button, and a tap on
//    it reaches the widget's provider as the library's interaction broadcast; the provider class
//    written here opens mantrasangraha://panchanga (the Panchanga tab, on today) before the
//    library handles the broadcast as usual.
// 2. The widget's update period is an hour (Android's minimum is 30 minutes) instead of never,
//    so the widget re-renders and moves to the new day after midnight without the app running.
//
// List this plugin AFTER "expo-widgets" in app.json: it rewrites files that plugin writes.
const { withDangerousMod, AndroidConfig } = require('expo/config-plugins');
const fs = require('fs');
const path = require('path');

const WIDGET = 'TodayWidget';
const PERIOD_MS = 3600000;

const providerSource = (pkg, scheme) => `package ${pkg}

import android.content.Context
import android.content.Intent
import android.net.Uri
import expo.modules.widgets.ExpoWidgetsAppWidgetProvider

class ${WIDGET}Provider : ExpoWidgetsAppWidgetProvider(${JSON.stringify(WIDGET)}) {
  override fun onReceive(context: Context, intent: Intent) {
    // expo-widgets' interaction broadcast: sent when the widget's button (the whole widget) is tapped.
    if (intent.action == "expo.modules.widgets.ACTION_WIDGET_INTERACTION") {
      try {
        val open = Intent(Intent.ACTION_VIEW, Uri.parse("${scheme}://panchanga?at=" + System.currentTimeMillis()))
          .setPackage(context.packageName)
          .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
        context.startActivity(open)
      } catch (_: Exception) {
        // the app could not be opened: the widget still handles the tap as usual
      }
    }
    super.onReceive(context, intent)
  }
}
`;

module.exports = function withWidgetOpensApp(config) {
  return withDangerousMod(config, [
    'android',
    async (cfg) => {
      const pkg = AndroidConfig.Package.getPackage(cfg);
      if (!pkg) throw new Error('withWidgetOpensApp: android.package is required');
      const scheme = [].concat(cfg.scheme ?? [])[0];
      if (!scheme) throw new Error('withWidgetOpensApp: "scheme" is required in app.json');
      const root = cfg.modRequest.platformProjectRoot;
      const provider = path.join(root, 'app/src/main/java', ...pkg.split('.'), `${WIDGET}Provider.kt`);
      fs.mkdirSync(path.dirname(provider), { recursive: true });
      fs.writeFileSync(provider, providerSource(pkg, scheme));
      const info = path.join(root, 'app/src/main/res/xml/today_widget_info.xml');
      if (!fs.existsSync(info)) throw new Error('withWidgetOpensApp: today_widget_info.xml not found; list this plugin before "expo-widgets"');
      const xml = fs.readFileSync(info, 'utf8').replace(/android:updatePeriodMillis="\d+"/, `android:updatePeriodMillis="${PERIOD_MS}"`);
      fs.writeFileSync(info, xml);
      return cfg;
    },
  ]);
};
