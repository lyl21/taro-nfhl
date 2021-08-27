(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/personal"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/personal/personal.vue":
/*!***************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/personal/personal.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _personal_vue_vue_type_template_id_6bdac3db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.vue?vue&type=template&id=6bdac3db */ "./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db");
/* harmony import */ var _personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.vue?vue&type=script&lang=js */ "./src/pages/personal/personal.vue?vue&type=script&lang=js");
/* harmony import */ var _personal_vue_vue_type_style_index_0_id_6bdac3db_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css */ "./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css");





_personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _personal_vue_vue_type_template_id_6bdac3db__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/personal/personal.vue"

/* harmony default export */ __webpack_exports__["a"] = (_personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/personal/personal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
 //获取位置

var QQMapWX = __webpack_require__(/*! ../../../sdk/qqmap-wx-jssdk */ "./sdk/qqmap-wx-jssdk.js");

var qqmap;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "index",
  data: function data() {
    return {
      //gender -0未知-1男,2女
      sex: "",
      area: "",
      userInfo: {},
      //轮播图数据
      bannerList: ["https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00326-2506.jpg", "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00705-482.jpg", "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00792-1860.jpg"]
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
    editUserLocation: function editUserLocation() {
      var _this = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getStorage({
        key: 'userInfo_area',
        success: function success(res) {
          console.log(res.data);
          _this.area = res.data;
        },
        fail: function fail(res) {
          // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getSetting({
            success: function success(res) {
              if (!res.authSetting['scope.userLocation']) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.authorize({
                  scope: 'scope.userLocation',
                  success: function success() {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getLocation({
                      type: 'wgs84',
                      //返回可以用于 Taro.openLocation的经纬度
                      success: function success(res) {
                        var latitude = res.latitude;
                        var longitude = res.longitude; //逆地址解析,通过经纬度获取位置等信息

                        qqmap.reverseGeocoder({
                          location: {
                            latitude: latitude,
                            longitude: longitude
                          },
                          success: function success(res) {
                            // 获取当前城市
                            console.log(res.result.address);
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorage({
                              key: "userInfo_area",
                              data: res.result.address
                            });
                            _this.area = res.result.address;
                          }
                        });
                      }
                    });
                  },
                  fail: function fail() {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showModal({
                      title: '权限',
                      content: '请允许获取您的位置',
                      confirmText: '去授权',
                      success: function success(res) {
                        if (res.confirm) {
                          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.openSetting({
                            success: function success(res) {
                              console.log(res.authSetting);
                            }
                          });
                        } else {
                          console.log('请求位置权限失败');
                        }
                      }
                    });
                  }
                });
              } else {
                //用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showModal({
                  title: '权限',
                  content: '请在系统设置中打开定位服务',
                  confirmText: '确定'
                });
              }
            }
          });
        }
      });
    }
  },
  created: function created() {
    // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
    // 而不是频繁地调用此 API
    this.$instance = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getCurrentInstance();
    qqmap = new QQMapWX({
      key: 'Q4ZBZ-7QTK2-52JUS-CSHSV-4IZDO-IFFY6'
    });
  },
  // 可以使用所有的 Vue 生命周期方法
  mounted: function mounted() {// 获取路由参数
    // console.log(this.$instance.router.params.openId) // 输出 { id: 2, type: 'test' }
  },
  // onLoad
  onLoad: function onLoad() {
    var _this = this;

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getStorage({
      key: 'userInfo',
      success: function success(res) {
        console.log(res.data);
        _this.userInfo = res.data; //gender    0-未知-1男,2女

        if (_this.userInfo.gender === 1) {
          _this.sex = "男";
        } else if (_this.userInfo.gender === 2) {
          _this.sex = "女";
        } else {
          _this.sex = "未知";
        }

        if (_this.userInfo.province + _this.userInfo.city === "") {
          _this.area = "未定位";
        } else {
          _this.area = _this.userInfo.province + _this.userInfo.city;
        }
      },
      fail: function fail(res) {
        //获取用户信息失败
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
          title: "获取用户信息失败",
          icon: "none"
        });
        setTimeout({}, 2000); //返回上页

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateBack({
          delta: "1"
        });
      }
    });
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

var _hoisted_1 = {
  class: "page_personal"
};
var _hoisted_2 = {
  class: "page_personal_avatar"
};
var _hoisted_3 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-cell");

  var _component_nut_cell_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "F"])("nut-cell-group");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "g"])("    头像"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
    class: "page_personal_avatar_info",
    alt: "/assets/personal.png",
    src: $data.userInfo.avatarUrl
  }, null, 8
  /* PROPS */
  , _hoisted_3)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell_group, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "N"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        title: "昵称",
        icon: "my2",
        desc: $data.userInfo.nickName,
        "is-link": "true"
      }, null, 8
      /* PROPS */
      , ["desc"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        title: "性别",
        icon: "eye",
        desc: $data.sex,
        "is-link": "true"
      }, null, 8
      /* PROPS */
      , ["desc"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_cell, {
        title: "城市",
        icon: "location2",
        desc: $data.area,
        onTap: $options.editUserLocation,
        "is-link": "true"
      }, null, 8
      /* PROPS */
      , ["desc", "onTap"])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!./node_modules/vue-loader/dist??ref--10-0!./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/personal/personal.vue":
/*!*****************************************!*\
  !*** ./src/pages/personal/personal.vue ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_personal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./personal.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/personal/personal.vue");


var config = {"navigationBarTitleText":"个人资料"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_personal_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/personal/personal', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/personal/personal.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/pages/personal/personal.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./personal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css":
/*!*************************************************************************************!*\
  !*** ./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_style_index_0_id_6bdac3db_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-1-2!../../../node_modules/vue-loader/dist??ref--10-0!./personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=style&index=0&id=6bdac3db&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_style_index_0_id_6bdac3db_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_style_index_0_id_6bdac3db_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db":
/*!***********************************************************************!*\
  !*** ./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db ***!
  \***********************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_template_id_6bdac3db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./personal.vue?vue&type=template&id=6bdac3db */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/personal/personal.vue?vue&type=template&id=6bdac3db");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_personal_vue_vue_type_template_id_6bdac3db__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/personal/personal.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=personal.js.map