import { useIsOrigin } from '../tools'

/**
 * @desc uni 轻提示
 * @param {*} content 内容
 * @param {*} options 扩展参数
 */
export const useToast = (content, { position = 'center', duration = 2000, overlay = true, icon = 'none', ...moreOptions } = {}) => {
  if (!content) {
    uni.hideToast()
    return
  }

  uni.showToast({
    title: content,
    position,
    duration,
    mask: overlay,
    icon,
    ...moreOptions
  })

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(uni)
    }, duration)
  })
}

/**
 * @desc 显示或隐藏loading
 * @param {*} content
 * @param {*} options
 */
export const useLoading = (content, { overlay = true, ...moreOptions } = {}) => {
  if (content && typeof content === 'boolean') {
    content = '努力加载中...'
  }

  if (!content) {
    uni.hideLoading()
    return
  }

  uni.showLoading({
    title: content,
    mask: overlay,
    ...moreOptions
  })
}

/**
 * @desc uni 弹窗
 * @param {*} content
 * @param {*} param1
 */
export const useDialog = (content, { title = '提示', showCancelButton = true, confirmButtonText = '确认', cancelButtonText = '取消', ...moreOptions } = {}) => {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      confirmText: confirmButtonText,
      cancelText: cancelButtonText,
      showCancel: showCancelButton,
      ...moreOptions,
      success(res) {
        resolve(res)
      }
    })
  })
}

/**
 * @description: 页面重定向
 * @param {type} config
 * @return {type}
 */
export const useRediTo = config => {
  if (!config || !config.url) return useToast('参数错误')
  if (config.isLogin) return useToast('请先登录')
  uni.redirectTo(config)
}

/**
 * @description: 页面跳转
 * @param {type} config
 * @return {type}
 */
export const useNavTo = config => {
  if (!config || !config.url) return useToast('参数错误')
  if (config.isLogin) return useToast('请先登录')
  uni.navigateTo(config)
}

/**
 * @description: 页面 Tab 跳转
 * @param {type} config
 * @return {type}
 */
export const useNavTab = config => {
  if (!config || !config.url) return useToast('参数错误')
  if (config.isLogin) return useToast('请先登录')
  uni.switchTab(config)
}

/**
 * @description: 上一页数据
 * @return {type}
 */
export const usePrevPage = () => {
  const pages = getCurrentPages()
  const prevPage = pages[pages.length - 2]
  // #ifdef H5
  return prevPage
  // #endif
  return prevPage.$vm
}

/**
 * @description: 页面返回
 * @param {type} config
 * @return {type}
 */
export const useNavBack = config => {
  if (config.isLogin) return useToast('请先登录')
  const prevPage = usePrevPage()
  if (!prevPage) {
    useNavTab({ url: '/pages/index/index' })
  } else {
    uni.navigateBack(config)
  }
}

/**
 * @description: 图片预览
 * @param {type} config
 * @return {type}
 */
export const usePreviewImage = config => {
  const { index, data, type } = config
  let newImage = []
  if (type === 'list') {
    newImage = data.map(item => {
      return useIsOrigin(item)
    })
  } else {
    newImage = [useIsOrigin(data)]
  }

  return new Promise((resolve, reject) => {
    uni.previewImage({
      urls: newImage,
      current: index || 0,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
