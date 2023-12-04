<script setup>
import { defineAsyncComponent, onMounted, ref, reactive, watch } from 'vue'
//必须导入需要用到的页面生命周期（即使在当前页面上没有直接使用到）
import { onPageScroll, onReachBottom } from '@dcloudio/uni-app'
import ZPInterceptor from 'z-paging/components/z-paging/js/z-paging-interceptor'
import { useLoading } from '@/utils/uniapp'

onMounted(() => {
  console.log('首次加载')
  useLoading('加载中...')
})

const paging = ref(null)
const dataList = ref([])

/**
 * @description: 下拉与上拉处理
 * @return {type}
 */
ZPInterceptor.handleQuery((pageNo, pageSize, from) => {
  //这里可以对pageNo, pageSize, from进行一些处理后return，请注意需要return一个数组，数组中0、1、2的元素就代表@query中绑定方法获取到的参数，数组长度不一定为3，数组长度为多少，@query中的参数就有多少个
  console.log("page", pageNo)
  console.log("size", pageSize)
  console.log("from", from)

  return [pageNo, pageSize, from]
})

/**
 * @description: 加载列表
 * @return {type}
 */
const queryList = (pageNo, pageSize) => {
  // 这里使用自己封装的网络请求加载列表
  const newArr = []
  for (let i = 0; i < 100; i++) {
    newArr.push({ title: `列表${i + 1}` })
  }
  setTimeout(() => {
    useLoading()
    // 接口分页
    // paging.value.complete(newArr)
    // 本地分页
    paging.value.setLocalPaging(newArr)

  }, 400)
}
</script>

<template>
  <view class='list-container'>
    <view class="content-list">
      <z-paging ref="paging" v-model="dataList" @query="queryList" default-page-size="20">
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