<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
import { useLoading, useToast, useDialog } from '@/utils/uniapp'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

onMounted(() => {

})

/**
 * @description: 登录点击
 * @return {type}
 */
const onClickLogin = async () => {
  useLoading('登录中...')

  setTimeout(() => {
    useLoading(false)
    useToast('登录成功!', { icon: 'success', duration: 1000 })
    user.setUserInfo({ isLogin: true, nickname: '访客', avatar: '/static/logo.png' })
  }, 800)
}

/**
 * @description: 退出登录点击
 * @return {type}
 */
const onClickLogout = async () => {
  const res = await useDialog('是否退出登录?')
  if (res.confirm) {
    useLoading('退出中...')

    setTimeout(() => {
      useLoading(false)
      useToast('已退出!', { duration: 1000 })
      user.setUserInfo({ isLogin: false, nickname: '', avatar: '' })
    }, 800)
  }
}
</script>

<template>
  <view class='my-container flex flex-col items-center'>
    <view class="userinfo mt-50rpx flex flex-col items-center" v-if="user.userInfo.isLogin">
      <view class="avatar">
        <image :src="user.userInfo.avatar" class="w-100rpx h-100rpx rounded-full" />
      </view>
      <view class="nickname mt-20rpx text-gray-500">昵称：{{ user.userInfo.nickname }}</view>
      <view class="button mt-300rpx w-160rpx">
        <uv-button @click="onClickLogout">退出</uv-button>
      </view>
    </view>
    <view class="button mt-300rpx w-160rpx" v-else>
      <uv-button type="primary" @click="onClickLogin">登录</uv-button>
    </view>
  </view>
</template>

<style scoped>
.my-container {}
</style>