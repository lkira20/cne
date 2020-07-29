(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.js */ "./resources/js/components/LineChart.js");
/* harmony import */ var _BarChart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChart.js */ "./resources/js/components/BarChart.js");
/* harmony import */ var _Graficospasado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graficospasado */ "./resources/js/components/Graficospasado.vue");
/* harmony import */ var _Graficos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graficos */ "./resources/js/components/Graficos.vue");
/* harmony import */ var _TablaAnual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TablaAnual */ "./resources/js/components/TablaAnual.vue");
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
    LineChart: _LineChart_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _BarChart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Graficospasado: _Graficospasado__WEBPACK_IMPORTED_MODULE_2__["default"],
    Graficos: _Graficos__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablaAnual: _TablaAnual__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      datacollection: {},
      listaEspera: [],
      listaAtendidos: [],
      listaGlobales: [],
      filtro: null,
      datacollection2: {},
      listaEspera2: [],
      listaAtendidos2: [],
      listaGlobales2: [],
      loader: false,
      loader2: false,
      año: 0
    };
  },
  mounted: function mounted() {},
  methods: {
    fillData: function fillData() {
      this.datacollection = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Solicitudes en espera',
          backgroundColor: '#EC250A',
          data: this.listaEspera
        }, {
          label: 'Solicitudes atentidas',
          backgroundColor: '#7934FA',
          data: this.listaAtendidos
        }, {
          label: 'Solicitudes totales',
          backgroundColor: '#173FE7',
          data: this.listaGlobales
        }]
      };
    },
    fillData2: function fillData2() {
      this.datacollection2 = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Solicitudes en espera',
          backgroundColor: '#EC250A',
          data: this.listaEspera2
        }, {
          label: 'Solicitudes atentidas',
          backgroundColor: '#7934FA',
          data: this.listaAtendidos2
        }, {
          label: 'Solicitudes totales',
          backgroundColor: '#173FE7',
          data: this.listaGlobales2
        }]
      };
    },
    cantidadSolicitudes: function cantidadSolicitudes() {
      var _this = this;

      axios.get('/api/estadisticas', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this.loader = false;
        _this.listaEspera = response.data.espera;
        _this.listaAtendidos = response.data.atendidas;
        _this.listaGlobales = response.data.globales;

        _this.fillData();

        _this.loader = true;
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    filtrar: function filtrar() {
      var _this2 = this;

      axios.get('/api/estadisticaspasada', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this2.loader2 = false;
        _this2.listaEspera2 = response.data.espera;
        _this2.listaAtendidos2 = response.data.atendidas;
        _this2.listaGlobales2 = response.data.globales;
        console.log(response);

        _this2.fillData2();

        _this2.año = response.data.año;
        _this2.loader2 = true;
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  },
  watch: {
    chartData: function chartData() {
      this.$data._chart.update();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.small {\n  max-width: 800px;\n  /* max-height: 500px; */\n  margin:  50px auto;\n  background-color: rgba(255,255,255,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaGraficos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "small", attrs: { id: "grafica" } },
    [
      _c("Graficos"),
      _vm._v(" "),
      _c("Graficospasado"),
      _vm._v(" "),
      _c("TablaAnual")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ListaGraficos.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ListaGraficos.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaGraficos.vue?vue&type=template&id=7a5cae96& */ "./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96&");
/* harmony import */ var _ListaGraficos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaGraficos.vue?vue&type=script&lang=js& */ "./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListaGraficos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListaGraficos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListaGraficos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaGraficos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaGraficos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaGraficos.vue?vue&type=template&id=7a5cae96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaGraficos.vue?vue&type=template&id=7a5cae96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaGraficos_vue_vue_type_template_id_7a5cae96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);