package expo.modules.volumekeys

import android.app.Activity
import android.view.KeyEvent
import android.view.Window
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

/**
 * While a text is open and the reader has chosen it, the volume buttons turn the page instead of
 * changing the volume. The activity's window callback is wrapped so the key is seen first; when
 * switched off, the keys pass through untouched.
 */
class VolumeKeysModule : Module() {
  @Volatile private var enabled = false

  override fun definition() = ModuleDefinition {
    Name("VolumeKeys")

    Events("onKey")

    Function("setEnabled") { on: Boolean ->
      enabled = on
      if (on) {
        appContext.currentActivity?.let { activity -> activity.runOnUiThread { wrap(activity) } }
      }
    }

    OnActivityEntersForeground {
      if (enabled) appContext.currentActivity?.let { wrap(it) }
    }
  }

  private fun wrap(activity: Activity) {
    val window = activity.window ?: return
    val original = window.callback ?: return
    if (original is VolumeCallback) return
    window.callback = VolumeCallback(original)
  }

  private inner class VolumeCallback(private val inner: Window.Callback) : Window.Callback by inner {
    override fun dispatchKeyEvent(event: KeyEvent): Boolean {
      val code = event.keyCode
      if (enabled && (code == KeyEvent.KEYCODE_VOLUME_DOWN || code == KeyEvent.KEYCODE_VOLUME_UP)) {
        if (event.action == KeyEvent.ACTION_DOWN) {
          this@VolumeKeysModule.sendEvent("onKey", mapOf("dir" to if (code == KeyEvent.KEYCODE_VOLUME_DOWN) 1 else -1))
        }
        return true
      }
      return inner.dispatchKeyEvent(event)
    }
  }
}
