<template>
  <view class="page_personal">
    <!--    头像-->
    <view class="page_personal_avatar">
      <img
          class="page_personal_avatar_info"
          alt="/assets/personal.png"
          v-bind:src="userInfo.avatarUrl"
      />
    </view>


    <nut-cell-group>
      <nut-cell title="昵称" icon="my2" v-bind:desc="userInfo.nickName" is-link="true"/>
      <nut-cell title="性别" icon="eye" v-bind:desc="sex" is-link="true"/>
      <nut-cell title="城市" icon="location2" v-bind:desc="area" @tap="editUserLocation" is-link="true"/>
    </nut-cell-group>


  </view>
</template>

<script>
import Taro from '@tarojs/taro'
//获取位置
let QQMapWX = require('../../../sdk/qqmap-wx-jssdk');
let qqmap;

export default {
  name: "index",
  data() {
    return {
      //gender -0未知-1男,2女
      sex: "",
      area: "",
      userInfo: {},
      //轮播图数据
      bannerList: [
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00326-2506.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00705-482.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00792-1860.jpg",
      ],
    };
  },
  methods: {
    onShareAppMessage() {
      return {
        title: 'nfhl', //转发页面的标题
        path: '/pages/userCenter/userCenter'   //转发页面的路径以及携带的参数
      }
    },
    editUserLocation() {
      let _this = this

      Taro.getStorage({
        key: 'userInfo_area',
        success: function (res) {
          console.log(res.data)
          _this.area = res.data
        }, fail: function (res) {
          // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
          Taro.getSetting({
            success: function (res) {
              if (!res.authSetting['scope.userLocation']) {
                Taro.authorize({
                  scope: 'scope.userLocation',
                  success: function () {
                    Taro.getLocation({
                      type: 'wgs84', //返回可以用于 Taro.openLocation的经纬度
                      success: function (res) {
                        const latitude = res.latitude
                        const longitude = res.longitude
                        //逆地址解析,通过经纬度获取位置等信息
                        qqmap.reverseGeocoder({
                          location: {latitude, longitude},
                          success: function (res) {
                            // 获取当前城市
                            console.log(res.result.address);
                            Taro.setStorage({
                              key: "userInfo_area",
                              data: res.result.address
                            })
                            _this.area = res.result.address
                          }
                        })
                      }
                    })
                  },
                  fail: function () {
                    Taro.showModal({
                      title: '权限',
                      content: '请允许获取您的位置',
                      confirmText: '去授权',
                      success(res) {
                        if (res.confirm) {
                          Taro.openSetting({
                            success(res) {
                              console.log(res.authSetting)
                            }
                          })
                        } else {
                          console.log('请求位置权限失败');
                        }
                      }
                    })
                  }
                })
              } else {
                //用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位
                Taro.showModal({
                  title: '权限',
                  content: '请在系统设置中打开定位服务',
                  confirmText: '确定'
                })
              }
            }
          })
        }
      })


    },
  },
  created() {
    // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
    // 而不是频繁地调用此 API
    this.$instance = Taro.getCurrentInstance()

    qqmap = new QQMapWX({
      key: 'Q4ZBZ-7QTK2-52JUS-CSHSV-4IZDO-IFFY6'
    });
  },
  // 可以使用所有的 Vue 生命周期方法
  mounted() {
    // 获取路由参数
    // console.log(this.$instance.router.params.openId) // 输出 { id: 2, type: 'test' }
  },
  // onLoad
  onLoad() {
    let _this = this
    Taro.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log(res.data)
        _this.userInfo = res.data
        //gender    0-未知-1男,2女
        if (_this.userInfo.gender===1) {
          _this.sex = "男"
        } else if (_this.userInfo.gender===2) {
          _this.sex = "女"
        } else {
          _this.sex = "未知"
        }
        if (_this.userInfo.province + _this.userInfo.city==="") {
          _this.area = "未定位"
        } else {
          _this.area = _this.userInfo.province + _this.userInfo.city
        }
      },
      fail: function (res) {
        //获取用户信息失败
        Taro.showToast({
          title: "获取用户信息失败",
          icon: "none"
        })
        setTimeout({}, 2000)
        //返回上页
        Taro.navigateBack({
          delta: "1"
        })
      }
    })
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
.page_personal {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

.page_personal_avatar {
  position: relative;
  margin-top: 30px;
  text-align: center;
}

.page_personal_avatar_info {
  width: 75px;
  height: 75px;
  border-radius: 50%
}

</style>