<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
import { useLoading, useToast, useDialog } from '@/utils/uniapp'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

onMounted(() => {
  console.log('首次加载')
})

const onClickLogin = async () => {
  const res = await useDialog('是否登录?')
  if (res.confirm) {
    useLoading('登录中...')

    setTimeout(() => {
      useLoading(false)
      useToast('登录成功!', { icon: 'success', duration: 1000 })
      user.setUserInfo({ isLogin: true, nickname: '访客', avatar: '/static/logo.png' })
    }, 1000)
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
    </view>
    <view class="button mt-300rpx w-160rpx" v-else>
      <u-button type="primary" :color="$u.color.primary" @click="onClickLogin">登录</u-button>
    </view>
  </view>
</template>

<style scoped>
.my-container {}
</style>