import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
import App from './App.vue'
import 'uno.css'
import store from './stores'

export function createApp() {
  const app = createSSRApp(App)

  app.use(store)
  app.use(uviewPlus)

  return {
    app,
    pinia: store.Pinia
  }
}
