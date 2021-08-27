<template>
  <view class="page_index" id="scrollDemo">
    <nut-infiniteloading
        pull-icon="loading"
        load-txt="loading"
        load-more-txt="没有啦～"
        :is-open-refresh="true"
        container-id="scrollDemo"
        @refresh="refresh"
    >
      <!-- 轮播图-->
      <swiper
          class="page_index_banner"
          indicator-color="#999"
          indicator-active-color="#333"
          :circular="true"
          :indicator-dots="true"
          :autoplay="true"
      >
        <swiper-item v-for="(item, index) in bannerList" :key="index">
          <img class="page_index_banner_imgs" :src="item"/>
        </swiper-item>
      </swiper>

      <!--  分类-->
      <nut-row class="page_index_service_class">
        <nut-col :span="6" v-for="(item,index) in serviceClassInfoList" key="index" style="text-align: center"
                 @tap="toPageByClassImg(index,$event)">
          <img class="page_index_service_class_item_img" v-bind:src="item.img"/>
        </nut-col>
        <br>
        <br>
        <nut-col :span="6" v-for="(item,index) in serviceClassInfoList" key="index" style="text-align: center"
                 @tap="toPageByClass(index,$event)">
          <text class="page_index_service_class_item_text">{{ item.name }}</text>
        </nut-col>
      </nut-row>


      <!--    联系我们-->
      <img class="consult_img" v-bind:src="callUs_img" @tap="callUs()"/>

      <!-- 整装产品 -->
      <view class="page_index_zz">
        <text class="page_index_zz_text">整装产品 |</text>
        <nut-cell
            @tap="toZZ"
            title="精包整装"
            sub-title=",从毛坯到入住"
            icon="http://www.hncfzs.com/public/upload/image/20190515/1557887838961125.jpg"
            desc="查看详情"/>
      </view>
      <!-- 套餐产品 -->
      <view class="page_index_tc">
        <text class="page_index_tc_text">套餐产品 |</text>
        <nut-cell
            @tap="toQs"
            title="轻奢装"
            sub-title=",品质家装热卖产品"
            v-bind:icon="bannerList[0]"
            desc="查看详情"/>
        <nut-cell
            @tap="toHha"
            style="margin-top:-10px"
            title="豪华装"
            sub-title=",诠释城市精英生活"
            v-bind:icon="bannerList[1]"
            desc="查看详情"/>
        <nut-cell
            @tap="toBs"
            style="margin-top:-10px"
            title="别墅洋房"
            sub-title=",品质生活的定制选择"
            v-bind:icon="bannerList[2]"
            desc="查看详情"/>
      </view>

      <!--      精选案例-->
<!--      <view class="page_index_tc">-->
<!--        <text class="page_index_tc_text">精选案例 |</text>-->
<!--        <nut-cell-->
<!--              @tap="toAnli"-->
<!--              title="图文案例"-->
<!--              icon="http://www.hncfzs.com/m/xbieshu/bsx_banner.jpg"-->
<!--              desc="查看详情"/>-->
<!--        <nut-cell-->
<!--            style="margin-top: 10px"-->
<!--            @tap="toVR"-->
<!--            title="vr案例"-->
<!--            icon="http://www.hncfzs.com/m/cpjzj/o3.jpg"-->
<!--            desc="查看详情"/>-->
<!--      </view>-->

      <!--     装修流程 -->
      <view class="page_index_steps">
        <text>装修流程 |</text>
        <nut-steps class="page_index_steps_des" direction="vertical" current="1" progress-dot="true">
          <nut-step title="方案沟通">1</nut-step>
          <nut-step title="签订合同">2</nut-step>
          <nut-step title="装修施工">3</nut-step>
          <nut-step title="验收竣工">4</nut-step>
          <nut-step title="售后保障">5</nut-step>
        </nut-steps>
      </view>


    </nut-infiniteloading>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'

import callUs_img from '../../assets/img/contact_us.png'

export default {
  data() {
    return {
      callUs_img: callUs_img,
      //轮播图数据
      bannerList: [
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00326-2506.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00705-482.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00792-1860.jpg",
      ],
      //分类
      serviceClassInfoList: [{
        img: "http://www.hncfzs.com/public/upload/image/20190515/1557887838961125.jpg",
        name: "轻奢装"
      },
        {
          img: "http://www.hncfzs.com/public/upload/image/20190606/1559789782573436.jpg",
          name: "豪华装"
        },
        {
          img: "http://www.hncfzs.com/public/upload/image/20190621/1561083274847172.jpg",
          name: "别墅"
        },
        {
          img: "http://www.hncfzs.com/uploads/allimg/171124/7-1G124112641D1.jpg",
          name: "洋房"
        },
      ],

    }
  },
  onShow() {
    Taro.showShareMenu({
      withShareTicket: true,
    })
  },
  onLoad() {
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        console.log('刷新成功');
        done();
      }, 1000);
    },
    callUs() {
      Taro.makePhoneCall({
        phoneNumber: "19913832126", //仅为示例，并非真实的电话号码
      });
    },
    toPageByClassImg(index, event) {
      console.log(index)
      console.log(event)
      if (0 === index) {
        Taro.navigateTo({
          url: "/pages/qs/qs"
        })
      } else if (1 === index) {
        Taro.navigateTo({
          url: "/pages/hh/hh"
        })
      } else {
        Taro.navigateTo({
          url: "/pages/bs/bs"
        })
      }
    },
    toPageByClass(index, event) {
      console.log(index)
      console.log(event)
      if (0 === index) {
        this.toQs()
      } else if (1 === index) {
        this.toHh()
      } else {
        this.toBs()
      }
    },
    toZZ() {
      Taro.navigateTo({
        url: "/pages/zz/zz"
      })
    },
    toQs() {
      Taro.navigateTo({
        url: "/pages/qs/qs"
      })
    },
    toHh() {
      Taro.navigateTo({
        url: "/pages/hh/hh"
      })
    },
    toBs() {
      Taro.navigateTo({
        url: "/pages/bs/bs"
      })
    },
    toAnli(){
      Taro.navigateTo({
        url: "/pages/anli/anli"
      })
    },
    toVR(){
      Taro.navigateTo({
        url: "/pages/vr/vr"
      })
    }
  },

}
</script>

<style>
.page_index {
  padding: 20px;
}

.page_index_banner {
  overflow: hidden;
  border-radius: 5px;
  text-align: center;
  width: 100%;
}

.page_index_banner_imgs {
  width: 100%;
  height: 100%;
}

.page_index_service_class {
  width: 100%;
  margin-top: 20px;
  /*text-align: center;*/
  /*display: flex;*/
  /*justify-content: space-around;*/
}

.page_index_service_class_item_img {
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
}

.page_index_service_class_item_text {
}

.consult_img {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
}

.page_index_zz {
  margin-top: 20px;
}

.page_index_zz_text {

}

.page_index_tc {
  margin-top: 20px;
}

.page_index_tc_text {

}

.page_index_steps {
  margin-top: 20px;
}

.page_index_steps_des {
  margin-top: 10px;
  margin-left: 50px;
}

</style>
