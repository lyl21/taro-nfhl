<template>
  <view class="page_userCenter">
    <view class="page_userCenter_userInfo">
      <nut-avatar
          v-if="!hasUserInfo"
          @tap="wxLogin"
          size="large"
          class="page_userCenter_avatar"
          icon="my2"
      />
      <img
          v-else
          @tap="toPersonal"
          class="page_userCenter_avatar"
          alt="/assets/personal.png"
          v-bind:src="userInfo.avatarUrl"
      />
      <text v-if="!hasUserInfo" @tap="wxLogin" class="page_userCenter_username">
        登录
      </text>
      <text v-else @tap="toPersonal" class="page_userCenter_username">
        {{ userInfo.nickName }}
      </text>
    </view>

    <!-- 轮播图-->
    <view class="page_userCenter_banner">
      <swiper
          indicator-color="#999"
          indicator-active-color="#333"
          :circular="true"
          :indicator-dots="true"
          :autoplay="true"
      >
        <swiper-item v-for="(item, index) in bannerList" :key="index">
          <img class="page_userCenter_banner_imgs" :src="item"/>
        </swiper-item>
      </swiper>
    </view>

    <view class="page_userCenter_tag">
      <view v-if="!hasUserInfo" @tap="wxLogin">
        <nut-icon class="page_userCenter_tag_img" name="my2" size="24"></nut-icon>
        <br/>
        <text>个人资料</text>
      </view>
      <view v-else @tap="toPersonal">
        <nut-icon class="page_userCenter_tag_img" name="my2" size="24"></nut-icon>
        <br/>
        <text>个人资料</text>
      </view>
      <view @tap="toLocation" >
        <nut-icon class="page_userCenter_tag_img" name="location2" size="24"></nut-icon>
        <br/>
        <text>导航到店</text>
      </view>
      <view  @tap="toFeedback" >
        <nut-icon class="page_userCenter_tag_img" name="edit" size="24"></nut-icon>
        <br/>
        <button class="page_userCenter_tag_img_btn"  openType="feedback"   >意见反馈</button>
      </view>
      <view @tap="toCallUs">
        <nut-icon class="page_userCenter_tag_img" name="service" size="24"></nut-icon>
        <br/>
        <text>联系我们</text>
      </view>
    </view>
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
      userInfo: {},
      hasUserInfo: false,
      showFeedBack:false,
      //轮播图数据
      bannerList: [
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00326-2506.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00705-482.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00792-1860.jpg",
      ],
    };
  },
  created() {
    qqmap = new QQMapWX({
      key: 'Q4ZBZ-7QTK2-52JUS-CSHSV-4IZDO-IFFY6'
    });
  },
  onShow(){
    Taro.showShareMenu({
      withShareTicket: true,
    })
  },
  methods: {
    //wx授权登录
    wxLogin() {

      // //检测sessionkey
      // Taro.checkSession({
      //   success: function () {
      //     //session_key 未过期，并且在本生命周期一直有效
      //     console.log("session_key 未过期")
      //   },
      //   fail: function () {
      //     // session_key 已经失效，需要重新执行登录流程
      //     console.log("session_key 已经失效，需要重新执行登录流程")
      //清除缓存
      // Taro.clearStorageSync()
      Taro.showLoading({
        title: "加载中..."
      })
      // 登录
      Taro.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (getUserProfile_res) => {
          Taro.hideLoading()
          //获取用户信息并保存
          Taro.setStorage({
            key  :"userInfo",
            data :getUserProfile_res.userInfo
          })
          this.userInfo=getUserProfile_res.userInfo
          //使用用户信息进行登录操作
          Taro.showLoading({
            title: "登录中..."
          })
          Taro.login({
            success: (login_res) => {
              if (login_res.code) {
                //发起网络请求获取用户openId
              Taro.hideLoading()
                this.hasUserInfo=true
              } else {
                console.log('登录失败！' + login_res.errMsg)
              }
            },
            fail(login_res) {
              Taro.showToast({
                title: '服务器错误,登陆失败',
                icon: 'none'
              })
            }
          })
        },
        fail() {
          Taro.hideLoading()
          Taro.showToast({
            title: '获取用户授权失败',
            icon: 'none'
          })
        }
      })
      // }
      // })

    },
    //跳个人资料
    toPersonal() {
      Taro.navigateTo({
        url: "/pages/personal/personal",
      });
    },
    //导航到店
    toLocation() {
      // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
      Taro.getSetting({
        success: function (res) {
          if (!res.authSetting['scope.userLocation']) {
            Taro.authorize({
              scope: 'scope.userLocation',
              success: function () {
                // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
                Taro.requirePlugin('routePlan');
                let referer = 'nfhl'; //调用插件的小程序的名称
                let endPoint = JSON.stringify({ //终点
                  'name': '安心地板',
                  'lat': 34.405575, //目的地的定位
                  'lng': 113.725405 //目的地的定位
                });
                Taro.navigateTo({
                  //跳转实时地图
                  url: 'plugin://routePlan/route-plan?key=' + qqmap.key + '&referer=' + referer + '&endPoint=' +
                      endPoint
                })
              },
              fail: function() {
                Taro.openSetting({
                  success(res) {
                    console.log(res.authSetting)
                  }
                })
              }
            })
          }
        }
      })

    },
    //意见反馈
    toFeedback() {
    //todo  js调用按钮点击事件
      // 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。
      // 在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持.

    },

    //联系我们
    toCallUs() {
      Taro.makePhoneCall({
        phoneNumber: "19913832126", //仅为示例，并非真实的电话号码
      });
    },
  },

};
</script>

<style>
.page_userCenter {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

.page_userCenter_userInfo {
  position: relative;
  margin-top: 30px;
}

.page_userCenter_avatar {
  margin: auto;
  width: 45px;
  height: 45px;
  border-radius: 50%
}

.page_userCenter_username {
  /*font-size: 16px;*/
  float: left;
  position: absolute;
  margin-left: 20px;
  margin-top: 15px;
  font-weight: bold;
}

.page_userCenter_banner {
  margin-top: 20px;
  overflow: hidden;
  border-radius: 5px;
  text-align: center;
  width: 100%;
}

.page_userCenter_banner_imgs {
  width: 100%;
  height: 100%;
}

.page_userCenter_tag {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
}

.page_userCenter_tag_img {
  margin-left: 20px;
}

.page_userCenter_tag_img_btn{
  margin:0;
  padding: 0;
  outline: none;
  border: none;
  border-radius:0;
  background-color: transparent;
  line-height: inherit;
  width: max-content;
  height: max-content;
}
.page_userCenter_tag_img_btn:after{
  border: none;
}
</style>