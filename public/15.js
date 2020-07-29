(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//LAS NOTIFIACIONES Y LAS NOTAS SON LO MISMO, A ULTIMO INSTANTE DECIDI CAMBIARLE EL NOMBRE A NOTAS
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      notificaciones: [],
      envio: {
        asunto: '',
        description: ''
      },
      loader: false,
      errors: []
    };
  },
  methods: {
    listarNotificaciones: function listarNotificaciones() {
      var _this = this;

      axios.get('/api/notificaciones', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this.notificaciones = response.data;
        _this.loader = true;
        console.log(_this.notificaciones);
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    fecha: function fecha(created_at) {
      //formateo de la fecha
      var formateado = created_at.split('T');
      return formateado[0];
    },
    crearNotificacion: function crearNotificacion() {
      var _this2 = this;

      this.errors = [];
      axios.post('/api/notificaciones', this.envio, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this2.notificaciones.splice(0, 0, response.data);

        _this2.envio.asunto = '';
        _this2.envio.description = '';
      })["catch"](function (e) {
        console.log(e.response);
        _this2.errors = e.response.data.errors;
        _this2.envio.asunto = '';
        _this2.envio.description = '';
      });
    },
    eliminarNotificacion: function eliminarNotificacion(id) {
      axios["delete"]('api/notificaciones/' + id, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        console.log(response);
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  },
  computed: {},
  created: function created() {
    this.listarNotificaciones();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notificaciones.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Notificaciones.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListNotificaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ListNotificaciones */ "./resources/js/components/ListNotificaciones.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListNotificaciones: _components_ListNotificaciones__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c(
        "h1",
        { staticClass: "text-center" },
        [
          _vm._v("Notas "),
          _vm.$can("notificaciones.create")
            ? _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.modal-1",
                      modifiers: { "modal-1": true }
                    }
                  ],
                  attrs: { variant: "primary" }
                },
                [_vm._v("Nuevo")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
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
      _vm.errors.length != 0 || _vm.errors.length != null
        ? _c(
            "div",
            _vm._l(_vm.errors, function(error, index) {
              return _c(
                "div",
                { key: index },
                _vm._l(error, function(er, indx) {
                  return _c(
                    "div",
                    {
                      key: indx,
                      staticClass:
                        "alert alert-danger alert-dismissible fade show"
                    },
                    [
                      _vm._v("\n\t\t\t\t\t" + _vm._s(er) + "\n\t\t\t\t\t"),
                      _vm._m(0, true)
                    ]
                  )
                }),
                0
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.notificaciones, function(notificacion, index) {
        return _vm.loader == true
          ? _c(
              "div",
              {
                key: notificacion.id,
                staticClass: "alert alert-warning alert-dismissible fade show",
                attrs: { role: "alert" }
              },
              [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v(_vm._s(notificacion.asunto))
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v(_vm._s(_vm.fecha(notificacion.created_at)))
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n\t      " + _vm._s(notificacion.description) + "\n\t    "
                  )
                ]),
                _vm._v(" "),
                _vm.$can("notificaciones.delete")
                  ? _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "alert",
                          "aria-label": "Close"
                        },
                        on: {
                          click: function($event) {
                            return _vm.eliminarNotificacion(notificacion.id)
                          }
                        }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("×")
                        ])
                      ]
                    )
                  : _vm._e()
              ]
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.$can("notificaciones.create")
        ? _c(
            "b-modal",
            {
              attrs: {
                id: "modal-1",
                title: "Crear nota",
                "ok-title": "crear"
              },
              on: { ok: _vm.crearNotificacion }
            },
            [
              _c("form", [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Asunto de la nota")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.envio.asunto,
                        expression: "envio.asunto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "nombre-tramite",
                      placeholder: "asunto"
                    },
                    domProps: { value: _vm.envio.asunto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.envio, "asunto", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Descripcion de la nota")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.envio.description,
                        expression: "envio.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "descripcion-tramite",
                      placeholder: "Descripcion",
                      rows: "4"
                    },
                    domProps: { value: _vm.envio.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.envio, "description", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("ListNotificaciones")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ListNotificaciones.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ListNotificaciones.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListNotificaciones.vue?vue&type=template&id=c09dcb9a& */ "./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a&");
/* harmony import */ var _ListNotificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListNotificaciones.vue?vue&type=script&lang=js& */ "./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListNotificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListNotificaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListNotificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListNotificaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListNotificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListNotificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListNotificaciones.vue?vue&type=template&id=c09dcb9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListNotificaciones.vue?vue&type=template&id=c09dcb9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListNotificaciones_vue_vue_type_template_id_c09dcb9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Notificaciones.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Notificaciones.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notificaciones.vue?vue&type=template&id=817a1bae& */ "./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae&");
/* harmony import */ var _Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notificaciones.vue?vue&type=script&lang=js& */ "./resources/js/views/Notificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Notificaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Notificaciones.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Notificaciones.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notificaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notificaciones.vue?vue&type=template&id=817a1bae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Notificaciones.vue?vue&type=template&id=817a1bae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_817a1bae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);