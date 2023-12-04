<script setup>
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
//必须导入需要用到的页面生命周期（即使在当前页面上没有直接使用到）
import { onPageScroll, onReachBottom } from '@dcloudio/uni-app'

onMounted(() => {
  console.log('首次加载')
})

const paging = ref(null)
const dataList = ref([])

/**
 * @description: 加载列表
 * @return {type}
 */
const queryList = (pageNo, pageSize) => {
  // 这里使用自己封装的网络请求加载列表
  const newArr = []
  for (let i = 0; i < 10; i++) {
    newArr.push({ title: `列表${i + 1}` })
  }
  setTimeout(() => {
    paging.value.complete(newArr)
  }, 400)
}
</script>

<template>
  <view class='list-container'>
    <view class="content-list">
      <z-paging ref="paging" v-model="dataList" @query="queryList">
        <view class="item" v-for="(item, index) in dataList" :key="index">
          <view class="item-title my-50rpx p-40rpx">{{ item.title }}</view>
        </view>
      </z-paging>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.list-container {}
</style>