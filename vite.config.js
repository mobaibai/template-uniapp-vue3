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
  css: {
    preprocessorOptions: {
      scss: {
        // 取消sass废弃API的报警
        silenceDeprecations: ['legacy-js-api', 'color-functions', 'import'],
      },
    },
  },
  server: {
    open: true
  }
})
