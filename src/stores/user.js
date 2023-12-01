import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ userInfo: {} }),
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
    setUserInfo(userInfo) {
      this.userInfo = { ...userInfo }
    }
  }
})
