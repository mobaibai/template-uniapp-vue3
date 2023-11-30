import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  persist: true,
  actions: {
    /**
     * @description: 增加Count
     * @return {type}
     */
    increment() {
      this.count++
    },

    /**
     * @description: 减少Count
     * @return {type}
     */
    decrement() {
      this.count--
    }
  }
})
