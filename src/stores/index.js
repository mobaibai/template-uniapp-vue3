import * as Pinia from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useUserStore } from './user'
import { useCounterStore } from './counter'

export default {
  install(app) {
    const pinia = Pinia.createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
    // $store 可直接在 html 标签中使用
    app.config.globalProperties.$store = {
      userInfo: useUserStore(),
      counter: useCounterStore()
    }
  },
  useUserStore,
  useCounterStore,
  Pinia
}
