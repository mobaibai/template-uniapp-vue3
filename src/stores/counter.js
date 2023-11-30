import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  // 持久化配置：兼容多端
  persist: {
    storage: {
      setItem(key, value) {
        uni.setStorageSync(key, value)
      },
      getItem(key) {
        return uni.getStorageSync(key)
      }
    }
  },
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
