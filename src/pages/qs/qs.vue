<template>
  <view class="page_qs">
    <img style="width: 100%;height: 160px;" src="http://www.hncfzs.com/m/tc_xgym_img/qs_banner.jpg"/>
    <!-- 我们的优势 -->
    <view class="page_qs_title">
      <text style="font-weight: bold;">-我们的优势-</text>
      <br>
      <text style="color: #EEEEEE; font-size: 14px;">————— CHOOSE OUR STRENGTHS —————</text>
      <br>
      <text style="color: #bdbdbd; font-size: 14px;">优秀的我们，值得为您完成更优质的服务</text>
    </view>

    <view class="page_qs_class_info">
      <nut-row>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">品牌</view>
          <view class="page_qs_class_info_grid-text-info">
            26年品牌力量
            <br>
            施工一级资质
          </view>
        </nut-col>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">价格</view>
          <view class="page_qs_class_info_grid-text-info">
            工厂直接对接消费者
            <br>
            一口价装修，拒绝恶意加价
          </view>
        </nut-col>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">设计</view>
          <view class="page_qs_class_info_grid-text-info">
            专业设计规划
            <br>
            不满意全额退
          </view>
        </nut-col>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">材料</view>
          <view class="page_qs_class_info_grid-text-info">
            一线品牌材料，全球甄选
            <br>
            品质装修，只用好材料
          </view>
        </nut-col>
      </nut-row>
      <nut-row>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">工艺</view>
          <view class="page_qs_class_info_grid-text-info">
            32项精工特色工艺
            <br>
            200+项标准工艺
          </view>
        </nut-col>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">工期</view>
          <view class="page_qs_class_info_grid-text-info">
            专业施工团队
            <br>
            超出合同工期，超额赔付
          </view>
        </nut-col>
        <nut-col :span="6" class="page_qs_class_info_grid_sty">
          <view class="page_qs_class_info_grid-text">售后</view>
          <view class="page_qs_class_info_grid-text-info">
            其他项目2年，水电5年
            <br>
            防渗漏工程终身质保
          </view>
        </nut-col>
      </nut-row>
    </view>
    <!-- 六大空间配置 -->
    <view class="page_qs_class_info_class">
      <text style="font-weight: bold;">-六大空间配置-</text>
      <br>
      <text style="color: #EEEEEE; font-size: 14px;">————— SIX SPACE CONFIGURATIONS —————</text>
      <br>
      <text style="color: #bdbdbd; font-size: 14px;">小预算高配置，功能颜值无“盲点”</text>
    </view>


    <view style="margin-top: 20px;">
      <nut-row>
        <nut-col :span="4" @tap="chooseClass(0)" class="page_qs_class_index" id="page_qs_class_index_1">
          <view class="page_qs_class_info_grid-text">客餐厅</view>
        </nut-col>
        <nut-col :span="4" @tap="chooseClass(1)" class="page_qs_class_index" id="page_qs_class_index_2">
          <view class="page_qs_class_info_grid-text">卧室</view>
        </nut-col>
        <nut-col :span="4" @tap="chooseClass(2)" class="page_qs_class_index" id="page_qs_class_index_3">
          <view class="page_qs_class_info_grid-text">书房</view>
        </nut-col>
        <nut-col :span="4" @tap="chooseClass(3)" class="page_qs_class_index" id="page_qs_class_index_4">
          <view class="page_qs_class_info_grid-text">厨房</view>
        </nut-col>
        <nut-col :span="4" @tap="chooseClass(4)" class="page_qs_class_index" id="page_qs_class_index_5">
          <view class="page_qs_class_info_grid-text">卫生间</view>
        </nut-col>
        <nut-col :span="4" @tap="chooseClass(5)" class="page_qs_class_index" id="page_qs_class_index_6">
          <view class="page_qs_class_info_grid-text">阳台</view>
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
        <swiper-item v-for="item in class_list" >
          <img style="width: 100%;height: 200px;" v-bind:src="item"/>
        </swiper-item>
      </swiper>
      <!--            <img style="width: 100%;height: 200px;" v-bind:src="class_list[class_list_index]"/>-->
    </view>

    <view>
      <text>施工案例</text>
      <video src="http://qy92r7yf5.bkt.clouddn.com/video/fc44754b3a6c5deac1162b351e90ea4b.mp4"></video>
    </view>

    <!-- 自有工人 匠心工艺 -->
    <view class="page_qs_class_info_class">
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
    <nut-button class="page_qs_call-us" @tap="callUs()" type="warning">更多装修优惠在线咨询</nut-button>

  </view>
</template>

<script>
import Taro from '@tarojs/taro'

export default {
  name: "index",
  data() {
    return {
      class_list: [
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg1.jpg',
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg2.jpg',
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg3.jpg',
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg4.jpg',
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg5.jpg',
        'http://www.hncfzs.com/m/tc_xgym_img/qs_pzimg6.jpg',
      ],
      class_list_index: 0,
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
      document.getElementById("page_qs_class_img").src = this.class_list[index]
      if (index === 0) {
        document.getElementById("page_qs_class_index_1").style.backgroundColor = "#eeeeee"
        document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 1) {
        document.getElementById("page_qs_class_index_2").style.backgroundColor = "#eeeeee"
        document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 2) {
        document.getElementById("page_qs_class_index_3").style.backgroundColor = "#eeeeee"
        document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 3) {
        document.getElementById("page_qs_class_index_4").style.backgroundColor = "#eeeeee"
        document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      } else if (index === 4) {
        document.getElementById("page_qs_class_index_5").style.backgroundColor = "#eeeeee"
        document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
        document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
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
      document.getElementById("page_qs_class_index_1").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#eeeeee"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock2,5000)

    },
    clock2() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_qs_class_index_2").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#eeeeee"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock3,5000)
    }
    ,
    clock3() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_qs_class_index_3").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#eeeeee"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock4,5000)
    }
    ,
    clock4() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_qs_class_index_4").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#eeeeee"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock5,5000)

    }
    ,
    clock5() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_qs_class_index_5").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#eeeeee"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#ffffff"

      setTimeout(this.clock6,5000)
    }
    ,
    clock6() {
      let d = new Date();
      let t = d.toLocaleTimeString();
      document.getElementById("page_qs_class_index_6").value = t;
      document.getElementById("page_qs_class_index_1").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_2").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_3").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_4").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_5").style.backgroundColor = "#ffffff"
      document.getElementById("page_qs_class_index_6").style.backgroundColor = "#eeeeee"

      setTimeout(this.clock1,5000)
    }
  },
  created() {

    setTimeout(this.clock2,5000)

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

    // document.getElementById("page_qs_class_index_1");

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
.page_qs {
  padding-bottom: 20px;
}

.page_qs_title {
  text-align: center;
  margin-top: 10px;
}

.page_qs_class_info {
  margin-top: 10px;
}

.page_qs_class_info_grid_sty {
  border: 0.5px solid #fafafa;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.page_qs_class_info_grid-text {
  font-weight: bolder;
  font-size: 12px;
}

.page_qs_class_info_grid-text-info {
  margin-top: 10px;
  font-size: 8px;
}

.page_qs_class_index {
  text-align: center;
  border: 0.5px solid #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;
}

.page_qs_class_index_1 {
  text-align: center;
  border: 0.5px solid #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eeeeee;
}


.page_qs_class_info_class {
  text-align: center;
  margin-top: 30px;
}

.page_qs_call-us {
  margin: 20px 100px;
  color: #FFFFFF;
  background-color: #aa895c;
  border-radius: 10px;
}

</style>