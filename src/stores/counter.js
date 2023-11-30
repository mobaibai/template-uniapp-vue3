import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0}),
  actions: {
    /**
     * @description: 增加Count
     * @return {type}
     */
    increment() {
      this.count++
    },
  }
})
