<template>
  <div>
    <ul class="container log-list">
      hello world
    </ul>
  </div>
</template>

<script lang="ts">
// import { formatTime } from '@/utils/index'
// import card from '@/components/card'

// export default {
//   components: {
//     card
//   },

//   data () {
//     return {
//       logs: []
//     }
//   },

//   created () {
//     const logs = (wx.getStorageSync('logs') || [])
//     this.logs = logs.map(log => formatTime(new Date(log)))
//   }
// }
</script>

<style scoped>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
