<script setup>
import { ref, onMounted } from 'vue'
import { useNavTo } from '@/utils/uniapp'

const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'size', path: '/pages/size/index' },
  { name: 'shadow', path: '/pages/shadow/index' },
  { name: 'border', path: '/pages/border/index' },
  { name: 'spacing', path: '/pages/spacing/index' },
  { name: 'shortcuts', path: '/pages/shortcuts/index' },
  { name: ':class', path: '/pages/class/index' },
  { name: 'color', path: '/pages/color/index' },
  { name: 'attributify', path: '/pages/attributify-mode/index' },
  { name: 'animation', path: '/pages/animation/index' },
  { name: 'bg', path: '/pages/bg/index' },
  { name: 'first-last', path: '/pages/first-last/index' },
  { name: 'odd-even', path: '/pages/odd-even/index' },
  { name: 'space-x', path: '/pages/space/index' },
  { name: 'divide-x', path: '/pages/divide/index' },
  { name: 'apply', path: '/pages/apply/index' },
  { name: 'icon', path: '/pages/icon/index' },
  { name: 'counter', path: '/pages/counter/index' },
  { name: 'list', path: '/pages/list/index' },
]

const loading = ref(false)

onMounted(() => {
  uni.$emit('onPageShow', { msg: '页面首次加载' })
})

uni.$on('onPageShow', (data) => {
  console.log(data.msg || '页面首次加载')
})

</script>

<template>
  <view class="py-20rpx" style="padding-bottom: calc(20rpx + var(--window-bottom));">
    <view class="grid grid-cols-3 justify-items-center">
      <view v-for="(item, index) in list" :key="index"
        class="w-200 h-200 shadow-md center rounded-md bg-gray-50/80 mb-20rpx" @click="useNavTo({ url: item.path })">
        {{ item.name }}
      </view>
    </view>

    <view>
      <view v-if="loading">
        loading
      </view>
      <slot v-else />
    </view>
  </view>
</template>
