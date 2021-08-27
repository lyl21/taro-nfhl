(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1badc801 */ "./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1badc801_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1badc801&lang=css */ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css");





_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/index/index.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_contact_us_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/contact_us.png */ "./src/assets/img/contact_us.png");
/* harmony import */ var _assets_img_contact_us_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_contact_us_png__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      callUs_img: _assets_img_contact_us_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      //轮播图数据
      bannerList: ["https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00326-2506.jpg", "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00705-482.jpg", "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00792-1860.jpg"],
      //分类
      serviceClassInfoList: [{
        img: "http://www.hncfzs.com/public/upload/image/20190515/1557887838961125.jpg",
        name: "轻奢装"
      }, {
        img: "http://www.hncfzs.com/public/upload/image/20190606/1559789782573436.jpg",
        name: "豪华装"
      }, {
        img: "http://www.hncfzs.com/public/upload/image/20190621/1561083274847172.jpg",
        name: "别墅"
      }, {
        img: "http://www.hncfzs.com/uploads/allimg/171124/7-1G124112641D1.jpg",
        name: "洋房"
      }]
    };
  },
  onShow: function onShow() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showShareMenu({
      withShareTicket: true
    });
  },
  onLoad: function onLoad() {},
  methods: {
    refresh: function refresh(done) {
      setTimeout(function () {
        console.log('刷新成功');
        done();
      }, 1000);
    },
    callUs: function callUs() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.makePhoneCall({
        phoneNumber: "19913832126" //仅为示例，并非真实的电话号码

      });
    },
    toPageByClassImg: function toPageByClassImg(index, event) {
      console.log(index);
      console.log(event);

      if (0 === index) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
          url: "/pages/qs/qs"
        });
      } else if (1 === index) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
          url: "/pages/hh/hh"
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
          url: "/pages/bs/bs"
        });
      }
    },
    toPageByClass: function toPageByClass(index, event) {
      console.log(index);
      console.log(event);

      if (0 === index) {
        this.toQs();
      } else if (1 === index) {
        this.toHh();
      } else {
        this.toBs();
      }
    },
    toZZ: function toZZ() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/zz/zz"
      });
    },
    toQs: function toQs() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/qs/qs"
      });
    },
    toHh: function toHh() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/hh/hh"
      });
    },
    toBs: function toBs() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/bs/bs"
      });
    },
    toAnli: function toAnli() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/anli/anli"
      });
    },
    toVR: function toVR() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
        url: "/pages/vr/vr"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  class: "page_index",
  id: "scrollDemo"
};
var _hoisted_2 = {
  class: "page_index_banner",
  "indicator-color": "#999",
  "indicator-active-color": "#333",
  circular: true,
  "indicator-dots": true,
  autoplay: true
};
var _hoisted_3 = ["src"];
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br", null, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("br", null, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  class: "page_index_service_class_item_text"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  class: "page_index_zz"
};

var _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  class: "page_index_zz_text"
}, "整装产品 |", -1
/* HOISTED */
);

var _hoisted_11 = {
  class: "page_index_tc"
};

var _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", {
  class: "page_index_tc_text"
}, "套餐产品 |", -1
/* HOISTED */
);

var _hoisted_13 = {
  class: "page_index_steps"
};

var _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", null, "装修流程 |", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("1");

var _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("2");

var _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("3");

var _hoisted_18 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("4");

var _hoisted_19 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("5");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-col");

  var _component_nut_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-row");

  var _component_nut_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-cell");

  var _component_nut_step = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-step");

  var _component_nut_steps = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-steps");

  var _component_nut_infiniteloading = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-infiniteloading");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_infiniteloading, {
    "pull-icon": "loading",
    "load-txt": "loading",
    "load-more-txt": "没有啦～",
    "is-open-refresh": true,
    "container-id": "scrollDemo",
    onRefresh: $options.refresh
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 轮播图"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("swiper", _hoisted_2, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "D"])($data.bannerList, function (item, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("swiper-item", {
          key: index
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
          class: "page_index_banner_imgs",
          src: item
        }, null, 8
        /* PROPS */
        , _hoisted_3)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("  分类"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_row, {
        class: "page_index_service_class"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "D"])($data.serviceClassInfoList, function (item, index) {
            return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "f"])(_component_nut_col, {
              span: 6,
              key: "index",
              style: {
                "text-align": "center"
              },
              onTap: function onTap($event) {
                return $options.toPageByClassImg(index, $event);
              }
            }, {
              default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
                return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
                  class: "page_index_service_class_item_img",
                  src: item.img
                }, null, 8
                /* PROPS */
                , _hoisted_4)];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["onTap"]);
          }), 128
          /* KEYED_FRAGMENT */
          )), _hoisted_5, _hoisted_6, (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "D"])($data.serviceClassInfoList, function (item, index) {
            return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "f"])(_component_nut_col, {
              span: 6,
              key: "index",
              style: {
                "text-align": "center"
              },
              onTap: function onTap($event) {
                return $options.toPageByClass(index, $event);
              }
            }, {
              default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
                return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("text", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "K"])(item.name), 1
                /* TEXT */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["onTap"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("    联系我们"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
        class: "consult_img",
        src: $data.callUs_img,
        onTap: _cache[0] || (_cache[0] = function ($event) {
          return $options.callUs();
        })
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_8), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 整装产品 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_9, [_hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        onTap: $options.toZZ,
        title: "精包整装",
        "sub-title": ",从毛坯到入住",
        icon: "http://www.hncfzs.com/public/upload/image/20190515/1557887838961125.jpg",
        desc: "查看详情"
      }, null, 8
      /* PROPS */
      , ["onTap"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])(" 套餐产品 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_11, [_hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        onTap: $options.toQs,
        title: "轻奢装",
        "sub-title": ",品质家装热卖产品",
        icon: $data.bannerList[0],
        desc: "查看详情"
      }, null, 8
      /* PROPS */
      , ["onTap", "icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        onTap: _ctx.toHha,
        style: {
          "margin-top": "-10px"
        },
        title: "豪华装",
        "sub-title": ",诠释城市精英生活",
        icon: $data.bannerList[1],
        desc: "查看详情"
      }, null, 8
      /* PROPS */
      , ["onTap", "icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        onTap: $options.toBs,
        style: {
          "margin-top": "-10px"
        },
        title: "别墅洋房",
        "sub-title": ",品质生活的定制选择",
        icon: $data.bannerList[2],
        desc: "查看详情"
      }, null, 8
      /* PROPS */
      , ["onTap", "icon"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("      精选案例"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("      <view class=\"page_index_tc\">"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("        <text class=\"page_index_tc_text\">精选案例 |</text>"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("        <nut-cell"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("              @tap=\"toAnli\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("              title=\"图文案例\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("              icon=\"http://www.hncfzs.com/m/xbieshu/bsx_banner.jpg\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("              desc=\"查看详情\"/>"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("        <nut-cell"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("            style=\"margin-top: 10px\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("            @tap=\"toVR\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("            title=\"vr案例\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("            icon=\"http://www.hncfzs.com/m/cpjzj/o3.jpg\""), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("            desc=\"查看详情\"/>"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("      </view>"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("     装修流程 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_13, [_hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_steps, {
        class: "page_index_steps_des",
        direction: "vertical",
        current: "1",
        "progress-dot": "true"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_step, {
            title: "方案沟通"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
              return [_hoisted_15];
            }),
            _: 1
            /* STABLE */

          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_step, {
            title: "签订合同"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
              return [_hoisted_16];
            }),
            _: 1
            /* STABLE */

          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_step, {
            title: "装修施工"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
              return [_hoisted_17];
            }),
            _: 1
            /* STABLE */

          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_step, {
            title: "验收竣工"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
              return [_hoisted_18];
            }),
            _: 1
            /* STABLE */

          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_step, {
            title: "售后保障"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
              return [_hoisted_19];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onRefresh"])]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/img/contact_us.png":
/*!***************************************!*\
  !*** ./src/assets/img/contact_us.png ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/contact_us.png";

/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue");


var config = {"navigationBarTitleText":"南方泓乐"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css":
/*!*******************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=1badc801&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!*****************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \*****************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=1badc801 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/index/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map