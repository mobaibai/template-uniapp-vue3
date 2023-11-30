import Config from '@/config'

export default function request(options = {}) {
  if (!options.url)
    return uni.showToast({
      icon: 'none',
      duration: 3000,
      title: `url参数不存在...`
    })

  // console.log('options', options)
  const token = uni.getStorageSync(`${Config.APP_NAME}_token`)
  options.header = {
    // 'content-type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    // 'Authorization': `${Config.APP_NAME}_token_${token || false}`
  }

  return new Promise((resolved, rejected) => {
    options.success = res => {
      if ((res.data.code && res.data.code !== 200) || (res.data.statusCode && res.data.statusCode !== 200)) {
        let msg = '请求失败...'
        const code = res.data.code || res.data.statusCode || 0

        switch (code) {
          case 401:
            msg = '未登录...'
            break
          case 402:
            msg = '参数错误...'
            break
          case 403:
            msg = '无效服务...'
            break
          case 404:
            msg = '无记录...'
            break
          default:
            msg = '请求失败...'
        }

        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: `${res.data.code_msg || (res.data.body && res.data.body.message) || msg}`
        })

        rejected(res)
      } else {
        resolved(res.data.statusCode ? res.data.body : res.data.data)
      }
    }
    options.fail = err => {
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: `${res.data.code_msg || '请求错误,请稍后再试...'}`
      })
      rejected(err)
    }
    uni.request(options)
  })
}
