<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
import { useLoading, useToast, useDialog } from '../../utils/modals/uniapp';

const userInfo = ref({ isLogin: false, avatar: '', nickname: '访客' })

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
      userInfo.value.isLogin = true
    }, 1000)
  }
}
</script>

<template>
  <view class='my-container flex flex-col items-center'>
    <view class="userinfo mt-50rpx" v-if="userInfo.isLogin">
      <!-- <view class="avatar">头像</view> -->
      <view class="nickname mt-20rpx">昵称：{{ userInfo.nickname }}</view>
    </view>
    <view class="button mt-300rpx w-160rpx" v-else>
      <u-button type="primary" :color="$u.color.primary" @click="onClickLogin">登录</u-button>
    </view>
  </view>
</template>

<style scoped>
.my-container {}
</style>