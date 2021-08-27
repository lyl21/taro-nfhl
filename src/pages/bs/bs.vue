<template>
  <view class="page_bs">
    <img style="width: 100%;height: 160px;" src="http://www.hncfzs.com/m/xbieshu/bsx_banner.jpg"/>
    <!-- 定制·理想新家 -->
    <view class="page_bs_title">
      <text style="font-weight: bold;">-定制·理想新家-</text>
      <br>
      <text style="color: #EEEEEE; font-size: 14px;">————— CUSTOM HOUSE —————</text>
    </view>

    <view style="margin-top: 10px">
      <nut-row>
        <nut-col :span="6" class="page_bs_class_info_grid_sty">
          <view class="page_bs_class_info_grid-text">设计师</view>
          <view class="page_bs_class_info_grid-text-info">
            一对一提供品质服务
          </view>
        </nut-col>
        <nut-col :span="6" class="page_bs_class_info_grid_sty">
          <view class="page_bs_class_info_grid-text">设计方案</view>
          <view class="page_bs_class_info_grid-text-info">
            定制别墅方案设计
          </view>
        </nut-col>
        <nut-col :span="6" class="page_bs_class_info_grid_sty">
          <view class="page_bs_class_info_grid-text">方案拟定</view>
          <view class="page_bs_class_info_grid-text-info">
            让客户透明消费
          </view>
        </nut-col>
        <nut-col :span="6" class="page_bs_class_info_grid_sty">
          <view class="page_bs_class_info_grid-text">软装陈设</view>
          <view class="page_bs_class_info_grid-text-info">
            赋予房屋生命力和整体性
          </view>
        </nut-col>
      </nut-row>
    </view>


    <!-- 标准施工工序 -->
    <view class="page_bs_title">
      <text style="font-weight: bold;">-标准施工工序-</text>
      <br>
      <text style="color: #EEEEEE; font-size: 14px;">————— STANDARD PROCEDURE —————</text>
      <br>
      <text style="color: #bdbdbd; font-size: 14px;">通过标准工序指导工人施工、自检，保障施工按质按量完成</text>
    </view>

    <view style="margin-top: 20px;">
      <nut-row>
        <nut-col :span="6" @tap="chooseClass(0)" class="page_bs_class_index" id="page_bs_class_index_1">
          <view class="page_bs_class_info_grid-text">水电</view>
        </nut-col>
        <nut-col :span="6" @tap="chooseClass(1)" class="page_bs_class_index" id="page_bs_class_index_2">
          <view class="page_bs_class_info_grid-text">水工</view>
        </nut-col>
        <nut-col :span="6" @tap="chooseClass(2)" class="page_bs_class_index" id="page_bs_class_index_3">
          <view class="page_bs_class_info_grid-text">木工</view>
        </nut-col>
        <nut-col :span="6" @tap="chooseClass(3)" class="page_bs_class_index" id="page_bs_class_index_4">
          <view class="page_bs_class_info_grid-text">瓦工</view>
        </nut-col>
      </nut-row>
    </view>
    <view>
      <swiper
          :circular="true"
          :autoplay="true"
          style="width: 100%;height: 200px"
          :current="class_list_index"
      >
        <swiper-item v-for="item in class_list">
          <img style="width: 100%;height: 200px;" v-bind:src="item" id="page_bs_class_img"/>
        </swiper-item>
      </swiper>
    </view>


    <!-- 自有工人 匠心工艺 -->
    <view class="page_bs_class_info_class">
      <text style="font-weight: bold;">-自有工人 匠心工艺-</text>
      <br>
      <text style="color: #EEEEEE; font-size: 14px;">————— OWNED DECORATION WORKERS —————</text>
      <br>
      <text style="color: #bdbdbd; font-size: 14px;">精良工艺体现在您家的每个细微之处</text>
    </view>
    <!--    <img src="http://www.hncfzs.com/m/tc_xgym_img/qs_gy.png" style="margin-top: 20px;"/>-->
    <img src="http://www.hncfzs.com/m/tc_xgym_img/qs_gy.png" alt="xxx"
         style="width:100%;height:160px;margin: 10px auto auto;"/>

    <!-- 在线咨询 -->
    <nut-button class="page_bs_call-us" @tap="callUs()" type="warning">更多装修优惠在线咨询</nut-button>

  </view>
</template>

<script>
import Taro from '@tarojs/taro'

export default {
  name: "index",
  data() {
    return {
      class_list: [
        'http://www.hncfzs.com/m/taocan/dgt03.jpg',
        'http://www.hncfzs.com/m/taocan/sgxt03.jpg',
        'http://www.hncfzs.com/m/taocan/mgt04.jpg',
        'http://www.hncfzs.com/m/taocan/wgt02.jpg',
      ],
      class_list_index: 0,
      //分类数据
      servicClassInfoList: [
        {
          name: "厨卫墙地砖不限"
        },
        {
          name: "厨卫吊顶不限"
        },
        {
          name: "地漏数量不限"
        },
        {
          name: "地板面积不限"
        },
        {
          name: "木门不限樘数"
        },
        {
          name: "过门石不限"
        },
        {
          name: "踢脚线不限数量"
        },
        {
          name: "卧室窗板面积不限"
        },
        {
          name: "涂料面积不限"
        },
        {
          name: "地板找平面积不限"
        },
        {
          name: "厨房包立管不限"
        },
        {
          name: "阴阳角免费矫正"
        },
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
    chooseClass(index) {
      console.log(this.class_list_index)
      this.class_list_index = index
      document.getElementById("page_bs_class_img").src = this.class_list[index]
      if (index === 0) {
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#eeeeee"
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 1) {
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#eeeeee"
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 2) {
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#eeeeee"
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 3) {
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#eeeeee"
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 4) {
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#eeeeee"
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
      }
    },
    callUs() {
      Taro.makePhoneCall({
        phoneNumber: "19913832126", //仅为示例，并非真实的电话号码
      })
    },
    clock1() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_1").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#eeeeee"
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"

      setTimeout(this.clock2, 5000)

    },
    clock2() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_2").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#eeeeee"
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"

      setTimeout(this.clock3, 5000)
    }
    ,
    clock3() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_3").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#eeeeee"
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"

      setTimeout(this.clock4, 5000)
    }
    ,
    clock4() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_4").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#eeeeee"
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock5, 5000)

    }
    ,
    clock5() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_5").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#eeeeee"

      setTimeout(this.clock1, 5000)
    },
  },
  created() {

    setTimeout(this.clock2, 5000)

    // let c1=setInterval(this.clock2, 5000);
    // let c2=setInterval(this.clock3, 10000);
    // let c3=setInterval(this.clock4, 15000);
    // let c4=setInterval(this.clock5, 20000);
    // let c5=setInterval(this.clock6, 25000);
    // let c6=setInterval(this.clock1, 30000);

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
    let _this = this

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
.page_bs {
  padding-bottom: 20px;
}

.page_bs_title {
  text-align: center;
  margin-top: 10px;
}

.page_bs_class_info {
  margin-top: 10px;
}

.page_bs_class_info_grid_sty {
  border: 0.5px solid #fafafa;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.page_bs_class_info_grid-text {
  font-weight: bolder;
  font-size: 12px;
}

.page_bs_class_info_grid-text-info {
  margin-top: 10px;
  font-size: 8px;
}

.page_bs_class_index {
  text-align: center;
  border: 0.5px solid #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;
}

.page_bs_class_index_1 {
  text-align: center;
  border: 0.5px solid #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eeeeee;
}


.page_bs_class_info_class {
  text-align: center;
  margin-top: 30px;
}

.page_bs_call-us {
  margin: 20px 100px;
  color: #FFFFFF;
  background-color: #aa895c;
  border-radius: 10px;
}

</style>