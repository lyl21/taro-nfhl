(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/anli/anli"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/anli/anli.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/anli/anli.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _anli_vue_vue_type_template_id_ac26dcca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anli.vue?vue&type=template&id=ac26dcca */ "./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca");
/* harmony import */ var _anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anli.vue?vue&type=script&lang=js */ "./src/pages/anli/anli.vue?vue&type=script&lang=js");



_anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _anli_vue_vue_type_template_id_ac26dcca__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/anli/anli.vue"

/* harmony default export */ __webpack_exports__["a"] = (_anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/anli/anli.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/anli/anli.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "index",
  data: function data() {
    return {};
  },
  methods: {
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: 'nfhl',
        //转发页面的标题
        path: '/pages/userCenter/userCenter' //转发页面的路径以及携带的参数

      };
    }
  },
  created: function created() {},
  // 可以使用所有的 Vue 生命周期方法
  mounted: function mounted() {// 获取路由参数
    // console.log(this.$instance.router.params.openId) // 输出 { id: 2, type: 'test' }
    // document.getElementById("page_bs_class_index_1");
    // window.setInterval(this.clock1, 0);
  },
  // onLoad
  onLoad: function onLoad() {},
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

var _hoisted_1 = {
  class: "page_anli"
};

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("video", {
  src: "http://qy92r7yf5.bkt.clouddn.com/video/fc44754b3a6c5deac1162b351e90ea4b.mp4"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "B"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./src/pages/anli/anli.vue":
/*!*********************************!*\
  !*** ./src/pages/anli/anli.vue ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_anli_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./anli.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/anli/anli.vue");


var config = {"navigationBarTitleText":"图文案例"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_anli_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/anli/anli', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/anli/anli.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/pages/anli/anli.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./anli.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/anli/anli.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_anli_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca":
/*!***************************************************************!*\
  !*** ./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca ***!
  \***************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_anli_vue_vue_type_template_id_ac26dcca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./anli.vue?vue&type=template&id=ac26dcca */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/anli/anli.vue?vue&type=template&id=ac26dcca");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_anli_vue_vue_type_template_id_ac26dcca__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/anli/anli.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=anli.js.map