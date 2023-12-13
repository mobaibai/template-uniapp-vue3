import { createSSRApp } from 'vue'
import uvUI from '@climblee/uv-ui'
import App from './App.vue'
import 'uno.css'
import store from './stores'

export function createApp() {
  const app = createSSRApp(App)

  app.use(uvUI)
  app.use(store)

  return {
    app,
    pinia: store.Pinia
  }
}
