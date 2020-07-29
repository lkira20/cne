(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js& ***!
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
      //datos del ciudadano
      solicitud: {
        ci: null,
        name: '',
        apellido: '',
        email: '',
        id: null,
        tramite: "",
        //datos de la solicitud
        descripcion: '',
        status: '',
        nacionalidad: 0
      },
      desactivar: false,
      //desactivar campos de la consulta del ciudadano
      comprobante: 'comprobar si el usuario ya esta registrado.',
      //mensaje de comprobacion 
      colorComprobante: false,
      // cambia el color del texto del mensaje de comprobacion
      tramites: [],
      //lista de tramites
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
    comprobarCedula: function comprobarCedula() {
      var _this = this;

      axios.get('/api/ciudadano/comprobar/' + this.solicitud.ci + '/' + this.solicitud.nacionalidad, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this.colorComprobante = false;

        if (response.data == 'el ciudadano no esta registrado') {
          _this.comprobante = response.data;
          _this.desactivar = false;
        } else {
          _this.solicitud.ci = response.data[0].ci;
          _this.solicitud.name = response.data[0].name;
          _this.solicitud.apellido = response.data[0].apellido;
          _this.solicitud.email = response.data[0].email;
          _this.solicitud.id = response.data[0].datoable_id;
          _this.solicitud.nacionalidad = response.data[0].nacionalidad;
          _this.desactivar = true;
          _this.comprobante = 'ciudadano encontrado';
          _this.colorComprobante = true;
        }
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    registrarSolicitud: function registrarSolicitud() {
      var _this2 = this;

      axios.post('/api/solicitud', this.solicitud, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this2.$router.push('/solicitudes');
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  },
  computed: {
    nameState: function nameState() {
      if (this.solicitud.name.length == 0) {
        return null;
      }

      return this.solicitud.name.length > 2 && this.solicitud.name.length < 16 ? true : false;
    },
    apellidoState: function apellidoState() {
      if (this.solicitud.apellido.length == 0) {
        return null;
      }

      return this.solicitud.apellido.length > 2 && this.solicitud.apellido.length < 16 ? true : false;
    },
    emailState: function emailState() {
      if (this.solicitud.email.length == 0) {
        return null;
      }

      var arroba = this.solicitud.email.indexOf('@');
      return this.solicitud.email.indexOf('@') !== -1 && this.solicitud.email.length > arroba + 1 ? true : false;
    }
  },
  created: function created() {
    var _this3 = this;

    //CONSULTA DE LOS TRAMITES PARA COLOCARLOS EN EL SELECT
    if (this.$can('solicitud.create')) {
      axios.get('/api/tramite', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this3.tramites = response.data;
      })["catch"](function (e) {
        console.log(e);
      });
    } else {
      this.$router.replace({
        name: '403'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhr[data-v-0501bc58] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n}\n#carta[data-v-0501bc58]{\n\tbackground-color: rgba(256,256,256,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.registrarSolicitud($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "card mb-2 mt-5 shadow", attrs: { id: "carta" } },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-row " }, [
                _vm._m(0),
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
                      attrs: {
                        id: "nacionalidad",
                        options: _vm.nacionalidades
                      },
                      model: {
                        value: _vm.solicitud.nacionalidad,
                        callback: function($$v) {
                          _vm.$set(_vm.solicitud, "nacionalidad", $$v)
                        },
                        expression: "solicitud.nacionalidad"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-4" }, [
                  _c("label", { attrs: { for: "cedula" } }, [_vm._v("cedula")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.solicitud.ci,
                        expression: "solicitud.ci",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "cedula",
                      placeholder: "cedula",
                      name: "ci",
                      required: ""
                    },
                    domProps: { value: _vm.solicitud.ci },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.solicitud,
                          "ci",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6 text-center" }, [
                  _c(
                    "label",
                    { class: { "text-success": _vm.colorComprobante } },
                    [_vm._v(_vm._s(_vm.comprobante))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "form-control btn btn-primary d-block",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.comprobarCedula($event)
                        }
                      }
                    },
                    [_vm._v("Comprobar")]
                  )
                ]),
                _vm._v(" "),
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
                        "aria-describedby":
                          "input-live-help input-live-feedback",
                        placeholder: "Nombre",
                        trim: "",
                        required: "",
                        disabled: _vm.desactivar
                      },
                      model: {
                        value: _vm.solicitud.name,
                        callback: function($$v) {
                          _vm.$set(_vm.solicitud, "name", $$v)
                        },
                        expression: "solicitud.name"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      { attrs: { id: "input-live-feedback" } },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t      minimo 3 letras y maximo 15\n\t\t\t\t\t\t    "
                        )
                      ]
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
                        "aria-describedby":
                          "input-live-help input-live-feedback",
                        placeholder: "Apellido",
                        trim: "",
                        required: "",
                        disabled: _vm.desactivar
                      },
                      model: {
                        value: _vm.solicitud.apellido,
                        callback: function($$v) {
                          _vm.$set(_vm.solicitud, "apellido", $$v)
                        },
                        expression: "solicitud.apellido"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      { attrs: { id: "input-live-feedback" } },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t      minimo 3 letras y maximo 15\n\t\t\t\t\t\t    "
                        )
                      ]
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
                        "aria-describedby":
                          "input-live-help input-live-feedback",
                        placeholder: "email",
                        trim: "",
                        type: "email",
                        required: "",
                        disabled: _vm.desactivar
                      },
                      model: {
                        value: _vm.solicitud.email,
                        callback: function($$v) {
                          _vm.$set(_vm.solicitud, "email", $$v)
                        },
                        expression: "solicitud.email"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      { attrs: { id: "input-live-feedback" } },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t      formato no valido\n\t\t\t\t\t\t    "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitud.id,
                        expression: "solicitud.id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "ciudadano_id",
                      name: "ciudadano_id",
                      hidden: ""
                    },
                    domProps: { value: _vm.solicitud.id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.solicitud, "id", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "tramite" } }, [_vm._v("tramite")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitud.tramite,
                        expression: "solicitud.tramite"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "tramite", name: "tramite", required: "" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.solicitud,
                          "tramite",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("seleccione algun tramite")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.tramites, function(tramit) {
                      return _c(
                        "option",
                        { key: tramit.id, domProps: { value: tramit.id } },
                        [_vm._v(_vm._s(tramit.name))]
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "status" } }, [_vm._v("estatus")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitud.status,
                        expression: "solicitud.status"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "status",
                      placeholder: "estatus",
                      required: ""
                    },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.solicitud,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Seleccione un estado")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v(" atendido ")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v(" pendiente ")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "descripcion" } }, [
                  _vm._v("Descripcion de solicitud.")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitud.descripcion,
                      expression: "solicitud.descripcion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "descripcion",
                    rows: "3",
                    name: "descripcion",
                    required: ""
                  },
                  domProps: { value: _vm.solicitud.descripcion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitud,
                        "descripcion",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-12" }, [
      _c("div", [
        _c("h2", { staticClass: "text-center mt-4" }, [
          _vm._v("Iniciar Solicitud de documento")
        ])
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("Datos del ciudadano")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-12" }, [
      _c("h5", [_vm._v("Datos para la solicitud ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-lg btn-block",
          attrs: { type: "submit", name: "registrar-solicitud" }
        },
        [_vm._v("Registrar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/IniciarSolicitud.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/IniciarSolicitud.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true& */ "./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true&");
/* harmony import */ var _IniciarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IniciarSolicitud.vue?vue&type=script&lang=js& */ "./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& */ "./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IniciarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0501bc58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IniciarSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./IniciarSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=style&index=0&id=0501bc58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_style_index_0_id_0501bc58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IniciarSolicitud.vue?vue&type=template&id=0501bc58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IniciarSolicitud_vue_vue_type_template_id_0501bc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);