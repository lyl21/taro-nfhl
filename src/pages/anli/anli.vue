<template>
  <view class="page_anli">
    <video
        src="http://qy92r7yf5.bkt.clouddn.com/video/fc44754b3a6c5deac1162b351e90ea4b.mp4"
    />
  </view>
</template>

<script>
import Taro from '@tarojs/taro'

export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    onShareAppMessage() {
      return {
        title: 'nfhl', //转发页面的标题
        path: '/pages/userCenter/userCenter'   //转发页面的路径以及携带的参数
      }
    },
  },
  created() {
  },
  // 可以使用所有的 Vue 生命周期方法
  mounted() {
    // 获取路由参数
    // console.log(this.$instance.router.params.openId) // 输出 { id: 2, type: 'test' }
    // document.getElementById("page_bs_class_index_1");
    // window.setInterval(this.clock1, 0);
  },
  // onLoad
  onLoad() {

  },

  // onReady
  onReady() {
  },

  // 对应 onShow
  onShow() {
    Taro.showShareMenu({
      withShareTicket: true,
    })
  },

  // 对应 onHide
  onHide() {
  },

  // 对应 onPullDownRefresh
  onPullDownRefresh() {
  },

};
</script>

<style>


</style>