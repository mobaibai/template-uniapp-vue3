## uniapp-vue3-unocss项目模板


### 问题
```
在使用苹果M1开发时，
如使用 HBuilderX 报错 "@esbuild/darwin-arm64" 编译问题时，
可在node_modules文件夹里找到 "@esbuild"，
将 "darwin-arm64" 文件夹复制一份，
改为 "darwin-x64" 即可解决。
如果使用 pnpm，则需找到 .pnpm 里的registry.npmmirror.com+esbuild里的相应文件再修改
```

### 说明
```
项目不使用ts，为了解决Uniapp对Ts不稳定因素，也为了抹平团队技术差异，提升开发体验
```
```
后续陆续添加各个功能
```

### 功能

#### 组件库
```
组件库使用 [nv-ui](https://www.uvui.cn)，支持 Vue2、Vue3
```

#### 图标
```
项目图标方案采用 unocss 生态，使用了 icones 作为图标源，一次性安装了 @iconify/json 解决各个环境图标对SVG不稳定支持的问题(图标采用css注入的方式)，同时也扩大了图标的选择范围

经测试，H5、微信小程序、Android、Ios能做到图标完美同步
```

#### 存储
```
使用 Pinia 加 pinia-plugin-persistedstate 插件实现持久化存储，对于需要持久化的数据不用做首次渲染的额外处理，可配置是否持久化
```

#### 自动导入
```
使用 unplugin-auto-import 实现自动导入
```

#### 刷新与翻页
```
使用 z-paging 插件，实现下拉刷新、上拉加载更多
```