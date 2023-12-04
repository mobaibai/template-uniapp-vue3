import Config from '@/config'

/**
 * @description: 资源前缀检查
 * @param {type} path
 * @return {type}
 */
export const useIsOrigin = path => {
  if (!path.includes('https://') || !path.includes('http://')) {
    return `${Config.API_BASE_URL}/${path}`
  } else {
    return path
  }
}

/**
 * @description: 正则电话号码
 * @param {type} phone
 * @return {type}
 */
export const usePhoneReg = phone => {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)
}

/**
 * @description: 正则身份证号码
 * @param {type} idCard
 * @return {type}
 */
export const useIdCardReg = idCard => {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(idCard)
}

/**
 * @description: 正则邮箱
 * @param {type} email
 * @return {type}
 */
export const useEmailReg = email => {
  return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)
}