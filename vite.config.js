import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),

    Unocss(),

    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts'
      // 用到 eslint 的配置
      // eslintrc: {
      //   enabled: true
      // }
    })
  ],
  server: {
    open: true
  }
})
