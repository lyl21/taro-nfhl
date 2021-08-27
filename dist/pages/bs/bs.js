(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/bs/bs"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/bs/bs.vue":
/*!***************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/bs/bs.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bs_vue_vue_type_template_id_5661690a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs.vue?vue&type=template&id=5661690a */ "./src/pages/bs/bs.vue?vue&type=template&id=5661690a");
/* harmony import */ var _bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs.vue?vue&type=script&lang=js */ "./src/pages/bs/bs.vue?vue&type=script&lang=js");
/* harmony import */ var _bs_vue_vue_type_style_index_0_id_5661690a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs.vue?vue&type=style&index=0&id=5661690a&lang=css */ "./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css");





_bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _bs_vue_vue_type_template_id_5661690a__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/bs/bs.vue"

/* harmony default export */ __webpack_exports__["a"] = (_bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/bs/bs.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "index",
  data: function data() {
    return {
      class_list: ['http://www.hncfzs.com/m/taocan/dgt03.jpg', 'http://www.hncfzs.com/m/taocan/sgxt03.jpg', 'http://www.hncfzs.com/m/taocan/mgt04.jpg', 'http://www.hncfzs.com/m/taocan/wgt02.jpg'],
      class_list_index: 0,
      //分类数据
      servicClassInfoList: [{
        name: "厨卫墙地砖不限"
      }, {
        name: "厨卫吊顶不限"
      }, {
        name: "地漏数量不限"
      }, {
        name: "地板面积不限"
      }, {
        name: "木门不限樘数"
      }, {
        name: "过门石不限"
      }, {
        name: "踢脚线不限数量"
      }, {
        name: "卧室窗板面积不限"
      }, {
        name: "涂料面积不限"
      }, {
        name: "地板找平面积不限"
      }, {
        name: "厨房包立管不限"
      }, {
        name: "阴阳角免费矫正"
      }]
    };
  },
  methods: {
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: 'nfhl',
        //转发页面的标题
        path: '/pages/userCenter/userCenter' //转发页面的路径以及携带的参数

      };
    },
    chooseClass: function chooseClass(index) {
      console.log(this.class_list_index);
      this.class_list_index = index;
      document.getElementById("page_bs_class_img").src = this.class_list[index];

      if (index === 0) {
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#eeeeee";
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      } else if (index === 1) {
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#eeeeee";
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      } else if (index === 2) {
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#eeeeee";
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      } else if (index === 3) {
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#eeeeee";
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      } else if (index === 4) {
        document.getElementById("page_bs_class_index_5").style.backgroundColor = "#eeeeee";
        document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
        document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
      }
    },
    callUs: function callUs() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.makePhoneCall({
        phoneNumber: "19913832126" //仅为示例，并非真实的电话号码

      });
    },
    clock1: function clock1() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_1").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#eeeeee";
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      setTimeout(this.clock2, 5000);
    },
    clock2: function clock2() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_2").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#eeeeee";
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      setTimeout(this.clock3, 5000);
    },
    clock3: function clock3() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_3").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#eeeeee";
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      setTimeout(this.clock4, 5000);
    },
    clock4: function clock4() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_4").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#eeeeee";
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_6").style.backgroundColor = "#ffffff";
      setTimeout(this.clock5, 5000);
    },
    clock5: function clock5() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("page_bs_class_index_5").value = t;
      document.getElementById("page_bs_class_index_1").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_2").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_3").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_4").style.backgroundColor = "#ffffff";
      document.getElementById("page_bs_class_index_5").style.backgroundColor = "#eeeeee";
      setTimeout(this.clock1, 5000);
    }
  },
  created: function created() {
    setTimeout(this.clock2, 5000); // let c1=setInterval(this.clock2, 5000);
    // let c2=setInterval(this.clock3, 10000);
    // let c3=setInterval(this.clock4, 15000);
    // let c4=setInterval(this.clock5, 20000);
    // let c5=setInterval(this.clock6, 25000);
    // let c6=setInterval(this.clock1, 30000);
  },
  // 可以使用所有的 Vue 生命周期方法
  mounted: function mounted() {// 获取路由参数
    // console.log(this.$instance.router.params.openId) // 输出 { id: 2, type: 'test' }
    // document.getElementById("page_bs_class_index_1");
    // window.setInterval(this.clock1, 0);
  },
  // onLoad
  onLoad: function onLoad() {
    var _this = this;
  },
  // onReady
  onReady: function onReady() {},
  // 对应 onShow
  onShow: function onShow() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showShareMenu({
      withShareTicket: true
    });
  },
  // 对应 onHide
  onHide: function onHide() {},
  // 对应 onPullDownRefresh
  onPullDownRefresh: function onPullDownRefresh() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=template&id=5661690a":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/bs/bs.vue?vue&type=template&id=5661690a ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

var _hoisted_1 = {
  class: "page_bs"
};

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
  style: {
    "width": "100%",
    "height": "160px"
  },
  src: "http://www.hncfzs.com/m/xbieshu/bsx_banner.jpg"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_title"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "font-weight": "bold"
  }
}, "-定制·理想新家-"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "color": "#EEEEEE",
    "font-size": "14px"
  }
}, "————— CUSTOM HOUSE —————")], -1
/* HOISTED */
);

var _hoisted_4 = {
  style: {
    "margin-top": "10px"
  }
};

var _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "设计师", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text-info"
}, " 一对一提供品质服务 ", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "设计方案", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text-info"
}, " 定制别墅方案设计 ", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "方案拟定", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text-info"
}, " 让客户透明消费 ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "软装陈设", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text-info"
}, " 赋予房屋生命力和整体性 ", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_title"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "font-weight": "bold"
  }
}, "-标准施工工序-"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "color": "#EEEEEE",
    "font-size": "14px"
  }
}, "————— STANDARD PROCEDURE —————"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "color": "#bdbdbd",
    "font-size": "14px"
  }
}, "通过标准工序指导工人施工、自检，保障施工按质按量完成")], -1
/* HOISTED */
);

var _hoisted_14 = {
  style: {
    "margin-top": "20px"
  }
};

var _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "水电", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "水工", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "木工", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_grid-text"
}, "瓦工", -1
/* HOISTED */
);

var _hoisted_19 = ["current"];
var _hoisted_20 = ["src"];

var _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "page_bs_class_info_class"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "font-weight": "bold"
  }
}, "-自有工人 匠心工艺-"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "color": "#EEEEEE",
    "font-size": "14px"
  }
}, "————— OWNED DECORATION WORKERS —————"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  style: {
    "color": "#bdbdbd",
    "font-size": "14px"
  }
}, "精良工艺体现在您家的每个细微之处")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
  src: "http://www.hncfzs.com/m/tc_xgym_img/qs_gy.png",
  alt: "xxx",
  style: {
    "width": "100%",
    "height": "160px",
    "margin": "10px auto auto"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("更多装修优惠在线咨询");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-col");

  var _component_nut_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-row");

  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-button");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 定制·理想新家 "), _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_row, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        class: "page_bs_class_info_grid_sty"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_5, _hoisted_6];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        class: "page_bs_class_info_grid_sty"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_7, _hoisted_8];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        class: "page_bs_class_info_grid_sty"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_9, _hoisted_10];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        class: "page_bs_class_info_grid_sty"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_11, _hoisted_12];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 标准施工工序 "), _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_row, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        onTap: _cache[0] || (_cache[0] = function ($event) {
          return $options.chooseClass(0);
        }),
        class: "page_bs_class_index",
        id: "page_bs_class_index_1"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_15];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        onTap: _cache[1] || (_cache[1] = function ($event) {
          return $options.chooseClass(1);
        }),
        class: "page_bs_class_index",
        id: "page_bs_class_index_2"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_16];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        onTap: _cache[2] || (_cache[2] = function ($event) {
          return $options.chooseClass(2);
        }),
        class: "page_bs_class_index",
        id: "page_bs_class_index_3"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_17];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_col, {
        span: 6,
        onTap: _cache[3] || (_cache[3] = function ($event) {
          return $options.chooseClass(3);
        }),
        class: "page_bs_class_index",
        id: "page_bs_class_index_4"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [_hoisted_18];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("swiper", {
    circular: true,
    autoplay: true,
    style: {
      "width": "100%",
      "height": "200px"
    },
    current: $data.class_list_index
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "D"])($data.class_list, function (item) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("swiper-item", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
      style: {
        "width": "100%",
        "height": "200px"
      },
      src: item,
      id: "page_bs_class_img"
    }, null, 8
    /* PROPS */
    , _hoisted_20)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 8
  /* PROPS */
  , _hoisted_19)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 自有工人 匠心工艺 "), _hoisted_21, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("    <img src=\"http://www.hncfzs.com/m/tc_xgym_img/qs_gy.png\" style=\"margin-top: 20px;\"/>"), _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 在线咨询 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_button, {
    class: "page_bs_call-us",
    onTap: _cache[4] || (_cache[4] = function ($event) {
      return $options.callUs();
    }),
    type: "warning"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
      return [_hoisted_23];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!./node_modules/vue-loader/dist??ref--10-0!./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/bs/bs.vue":
/*!*****************************!*\
  !*** ./src/pages/bs/bs.vue ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_bs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./bs.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/bs/bs.vue");


var config = {"navigationBarTitleText":"别墅洋房"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_bs_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/bs/bs', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/bs/bs.vue?vue&type=script&lang=js":
/*!*****************************************************!*\
  !*** ./src/pages/bs/bs.vue?vue&type=script&lang=js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./bs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css":
/*!*************************************************************************!*\
  !*** ./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_style_index_0_id_5661690a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!../../../node_modules/vue-loader/dist??ref--10-0!./bs.vue?vue&type=style&index=0&id=5661690a&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=style&index=0&id=5661690a&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_style_index_0_id_5661690a_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_style_index_0_id_5661690a_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/bs/bs.vue?vue&type=template&id=5661690a":
/*!***********************************************************!*\
  !*** ./src/pages/bs/bs.vue?vue&type=template&id=5661690a ***!
  \***********************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_template_id_5661690a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./bs.vue?vue&type=template&id=5661690a */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/bs/bs.vue?vue&type=template&id=5661690a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_bs_vue_vue_type_template_id_5661690a__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/bs/bs.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=bs.js.map