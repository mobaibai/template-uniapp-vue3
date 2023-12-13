<script setup>
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import '@climblee/uv-ui/index.scss';
@import './styles/themes/theme.scss';
@import './styles/global.scss';
</style>
