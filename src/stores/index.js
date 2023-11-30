import * as Pinia from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useCounterStore } from './counter'

export default {
  install(app) {
    const pinia = Pinia.createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
    app.config.globalProperties.$store = {
      counter: useCounterStore()
    }
  },
  useCounterStore,
  Pinia
}
