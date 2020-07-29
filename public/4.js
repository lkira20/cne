(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TablaAnual.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TablaAnual.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      espera: {},
      atendidos: {},
      globales: {},
      totales: {},
      año: {},
      busqueda: null,
      loader: null,
      error: false
    };
  },
  methods: {
    filtrar: function filtrar() {
      var _this = this;

      if (this.busqueda == null || this.busqueda == '') {
        this.loader = null;
      } else {
        this.loader = false;
        axios.get('/api/estadisticas/' + this.busqueda, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          _this.espera = response.data.espera;
          _this.atendidos = response.data.atendidas;
          _this.globales = response.data.globales;
          _this.totales = response.data.totales;
          _this.año = response.data.año;
          _this.loader = true;
          console.log(response.data);
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card mt-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex mt-3" }, [
        _c(
          "form",
          {
            staticClass: "form-inline ml-auto",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.filtrar($event)
              }
            }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.busqueda,
                  expression: "busqueda"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "search",
                placeholder: "Año",
                "aria-label": "Search"
              },
              domProps: { value: _vm.busqueda },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.busqueda = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-primary",
                attrs: { type: "submit" }
              },
              [_vm._v("buscar")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.error
        ? _c("div", { staticClass: "alert alert-danger" }, [
            _vm._v("\n    \t\tNo se han encontrado datos con este año\n    \t")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.loader == false
          ? _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("b-spinner", {
                  attrs: { label: "Loading...", variant: "danger" }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.loader == true
          ? _c("table", { staticClass: "table table-striped" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Enero")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.enero))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.enero))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.enero))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Febrero")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.febrero))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.febrero))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.febrero))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Marzo")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.marzo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.marzo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.marzo))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Abril")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.abril))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.abril))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.abril))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Mayo")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.mayo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.mayo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.mayo))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Junio")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.junio))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.junio))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.junio))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Julio")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.julio))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.julio))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.julio))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Agosto")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.agosto))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.agosto))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.agosto))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Septiembre")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.septiembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.septiembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.septiembre))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Octubre")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.octubre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.octubre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.octubre))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Noviembre")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.noviembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.noviembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.noviembre))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Diciembre")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.atendidos.diciembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.espera.diciembre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.globales.diciembre))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Total")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.totales.totalAtendidas))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.totales.totalEspera))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.totales.totalGlobal))])
                ])
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-title" }, [
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("Cantidades de solicitudes por meses")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Mes")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Atendidos")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Pendientes")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TablaAnual.vue":
/*!************************************************!*\
  !*** ./resources/js/components/TablaAnual.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaAnual.vue?vue&type=template&id=91dcc2d8& */ "./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8&");
/* harmony import */ var _TablaAnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaAnual.vue?vue&type=script&lang=js& */ "./resources/js/components/TablaAnual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaAnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TablaAnual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TablaAnual.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/TablaAnual.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaAnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TablaAnual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TablaAnual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaAnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TablaAnual.vue?vue&type=template&id=91dcc2d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TablaAnual.vue?vue&type=template&id=91dcc2d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaAnual_vue_vue_type_template_id_91dcc2d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);