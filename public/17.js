(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ciudadano: {},
      nombre: '',
      apellido: '',
      cedula: null,
      email: '',
      errors: {},
      //errores de la validacion
      nacionalidad: 0,
      nacionalidades: [{
        value: 0,
        text: 'V'
      }, {
        value: 1,
        text: 'E'
      }]
    };
  },
  methods: {
    registrar: function registrar() {
      var _this = this;

      //establecer objeto de envio
      this.ciudadano.name = this.nombre;
      this.ciudadano.apellido = this.apellido;
      this.ciudadano.ci = this.cedula;
      this.ciudadano.email = this.email;
      this.ciudadano.nacionalidad = this.nacionalidad; //enviar

      axios.post('/api/ciudadano', this.ciudadano, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        console.log(response);

        _this.$router.push({
          path: '/ciudadanos/',
          params: {
            success: 'usuario creado exitosamente'
          }
        });
      })["catch"](function (e) {
        console.log(e.response.data);
        _this.errors = e.response.data.errors;
      });
    }
  },
  computed: {
    nameState: function nameState() {
      if (this.nombre.length == 0) {
        return null;
      }

      return this.nombre.length > 2 && this.nombre.length < 16 ? true : false;
    },
    apellidoState: function apellidoState() {
      if (this.apellido.length == 0) {
        return null;
      }

      return this.apellido.length > 2 && this.apellido.length < 16 ? true : false;
    },
    cedulaState: function cedulaState() {
      if (this.cedula > 0) {
        return this.cedula.length > 8 ? false : null;
      }

      return null;
    },
    emailState: function emailState() {
      if (this.email.length == 0) {
        return null;
      }

      var arroba = this.email.indexOf('@');
      return this.email.indexOf('@') !== -1 && this.email.length > arroba + 1 ? true : false;
    }
  },
  created: function created() {
    if (this.$can('ciudadano.create')) {
      return;
    } else {
      this.$router.replace({
        name: '403'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#ciudadano{\n\tbackground-color: rgba(256,256,256,0.8);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CiudadanosCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card p-3 shadow", attrs: { id: "ciudadano" } },
    [
      _vm.errors
        ? _c(
            "div",
            _vm._l(_vm.errors, function(error) {
              return _c(
                "div",
                {
                  staticClass: "alert alert-danger alert-dismissible fade show",
                  attrs: { role: "alert" }
                },
                [
                  _vm._v("\n\t\t  " + _vm._s(error) + "\n\t\t  "),
                  _vm._m(0, true)
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.registrar($event)
            }
          }
        },
        [
          _c("h2", [_vm._v("Registrar Ciudadano")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c(
              "div",
              {
                staticClass: "col-12 col-md-6 form-group",
                attrs: { role: "group" }
              },
              [
                _c("label", { attrs: { for: "input-live" } }, [
                  _vm._v("Nombre:")
                ]),
                _vm._v(" "),
                _c("b-form-input", {
                  attrs: {
                    id: "input-live",
                    state: _vm.nameState,
                    "aria-describedby": "input-live-help input-live-feedback",
                    placeholder: "Nombre del ciudadano",
                    trim: ""
                  },
                  model: {
                    value: _vm.nombre,
                    callback: function($$v) {
                      _vm.nombre = $$v
                    },
                    expression: "nombre"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-live-feedback" } },
                  [_vm._v("\n\t\t      minimo 3 letras y maximo 15\n\t\t    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 col-md-6 form-group",
                attrs: { role: "group" }
              },
              [
                _c("label", { attrs: { for: "input-live" } }, [
                  _vm._v("Apellido:")
                ]),
                _vm._v(" "),
                _c("b-form-input", {
                  attrs: {
                    id: "input-live",
                    state: _vm.apellidoState,
                    "aria-describedby": "input-live-help input-live-feedback",
                    placeholder: "Apellido del ciudadano",
                    trim: ""
                  },
                  model: {
                    value: _vm.apellido,
                    callback: function($$v) {
                      _vm.apellido = $$v
                    },
                    expression: "apellido"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-live-feedback" } },
                  [_vm._v("\n\t\t      minimo 3 letras y maximo 15\n\t\t    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 col-md-2 form-group align-center",
                attrs: { role: "group" }
              },
              [
                _c("label", { attrs: { for: "nacionalidad" } }, [
                  _vm._v("Nacionalidad:")
                ]),
                _vm._v(" "),
                _c("b-form-select", {
                  attrs: { id: "nacionalidad", options: _vm.nacionalidades },
                  model: {
                    value: _vm.nacionalidad,
                    callback: function($$v) {
                      _vm.nacionalidad = $$v
                    },
                    expression: "nacionalidad"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 col-md-4 form-group",
                attrs: { role: "group" }
              },
              [
                _c("label", { attrs: { for: "input-live" } }, [
                  _vm._v("Cedula:")
                ]),
                _vm._v(" "),
                _c("b-form-input", {
                  attrs: {
                    id: "input-live",
                    "aria-describedby": "input-live-help input-live-feedback",
                    placeholder: "Cedula del ciudadano",
                    trim: "",
                    type: "number"
                  },
                  model: {
                    value: _vm.cedula,
                    callback: function($$v) {
                      _vm.cedula = $$v
                    },
                    expression: "cedula"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-live-feedback" } },
                  [_vm._v("\n\t\t      cedula no valida\n\t\t    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 col-md-6 form-group",
                attrs: { role: "group" }
              },
              [
                _c("label", { attrs: { for: "input-live" } }, [
                  _vm._v("Email:")
                ]),
                _vm._v(" "),
                _c("b-form-input", {
                  attrs: {
                    id: "input-live",
                    state: _vm.emailState,
                    "aria-describedby": "input-live-help input-live-feedback",
                    placeholder: "email del ciudadano",
                    trim: "",
                    type: "email"
                  },
                  model: {
                    value: _vm.email,
                    callback: function($$v) {
                      _vm.email = $$v
                    },
                    expression: "email"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-live-feedback" } },
                  [_vm._v("\n\t\t      formato no valido\n\t\t    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-button",
                  {
                    attrs: { variant: "primary" },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v("Registrar")]
                )
              ],
              1
            )
          ])
        ]
      )
    ]
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

/***/ "./resources/js/components/CiudadanosCreate.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CiudadanosCreate.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CiudadanosCreate.vue?vue&type=template&id=2d160570& */ "./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570&");
/* harmony import */ var _CiudadanosCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CiudadanosCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CiudadanosCreate.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CiudadanosCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CiudadanosCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CiudadanosCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CiudadanosCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CiudadanosCreate.vue?vue&type=template&id=2d160570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CiudadanosCreate.vue?vue&type=template&id=2d160570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CiudadanosCreate_vue_vue_type_template_id_2d160570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);