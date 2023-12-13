<script setup>
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()

onMounted(() => {

})
</script>

<template>
  <view class='count-container flex flex-col items-center justify-center h-full'>
    <view class="number-view text-100rpx font-bold text-gray-400">{{ counter.count }}</view>
    <view class="number-button flex items-center space-x-50rpx mt-500rpx">
      <uv-button type="primary" :color="$u.color.primary" :disabled="counter.count <= 0" @click="counter.decrement">减少</uv-button>
      <uv-button type="primary" :color="$u.color.primary" @click="counter.increment">增加</uv-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.count-container {}
</style>