<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'

const userInfo = ref({ status: false, avatar: '', nickname: '' })

onMounted(() => {
  console.log('首次加载')
})

const onClickLogin = () => {
  uni.showLoading({
    title: '登录中...',
    mask: true
  })

  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({
      title: '登录成功!',
      icon: 'success'
    })
  }, 1000);
}
</script>

<template>
  <view class='my-container flex flex-col items-center p-50rpx'>
    <view class="userinfo">
      <view class="avatar">头像</view>
      <view class="nickname mt-20rpx">昵称</view>
    </view>
    <view class="button">
      <u-button type="primary" :color="$u.color.primary" @click="onClickLogin">登录</u-button>
    </view>
  </view>
</template>

<style scoped>
.my-container {}
</style>