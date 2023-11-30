import * as Pinia from 'pinia'
import { useCounterStore } from './counter'

export default {
  install(app) {
    app.use(Pinia.createPinia())
    app.config.globalProperties.$store = {
      counter: useCounterStore()
    }
  },
  useCounterStore,
  Pinia,
}
