(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Solicitudes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Solicitudes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListaSolicitudes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ListaSolicitudes */ "./resources/js/components/ListaSolicitudes.vue");
/* harmony import */ var _components_TablaAnual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TablaAnual */ "./resources/js/components/TablaAnual.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListaSolicitudes: _components_ListaSolicitudes__WEBPACK_IMPORTED_MODULE_0__["default"],
    TablaAnual: _components_TablaAnual__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$route.path == "/solicitudes" || _vm.$route.path == "/solicitudes/"
        ? _c(
            "h1",
            { staticClass: "text-center" },
            [
              _vm._v("Solicitudes "),
              _c(
                "b-button",
                { attrs: { to: { name: "TablaAnual" }, variant: "secondary" } },
                [_vm._v("Estadisticas")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$route.path == "/solicitudes/estadisticas"
        ? _c(
            "h1",
            { staticClass: "text-center" },
            [
              _vm._v("Lista "),
              _c(
                "b-button",
                {
                  attrs: {
                    to: { name: "ListaSolicitudes" },
                    variant: "primary"
                  }
                },
                [_vm._v("Solicitudes")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Solicitudes.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Solicitudes.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Solicitudes.vue?vue&type=template&id=7d555903& */ "./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903&");
/* harmony import */ var _Solicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Solicitudes.vue?vue&type=script&lang=js& */ "./resources/js/views/Solicitudes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Solicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Solicitudes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Solicitudes.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Solicitudes.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Solicitudes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Solicitudes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Solicitudes.vue?vue&type=template&id=7d555903& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Solicitudes.vue?vue&type=template&id=7d555903&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitudes_vue_vue_type_template_id_7d555903___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);