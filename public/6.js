(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _UsuariosEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsuariosEdit */ "./resources/js/components/UsuariosEdit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    UsuariosEdit: _UsuariosEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      //listaUsuarios: [],
      boxTwo: '',
      loader: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('usuarios', ['consultarListaUsuarios'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('usuarios', ['eliminar', 'llenarEnvio'])), {}, {
    eliminarUsuario: function eliminarUsuario(id) {
      axios["delete"]('/api/perfiles/' + id, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        console.log(response); //this.consultarListaUsuarios();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    showMsgBoxTwo: function showMsgBoxTwo(solicitud, index) {
      var _this = this;

      //MODAL DE ELIMINAR
      this.boxTwo = '';
      this.$bvModal.msgBoxConfirm('¿Esta seguro que quiere eliminar este usuario?', {
        title: 'Borrar',
        size: 'md',
        buttonSize: 'md',
        okVariant: 'danger',
        okTitle: 'SI',
        cancelTitle: 'NO',
        cancelVariant: 'primary',
        footerClass: 'p-2',
        hideHeaderClose: true,
        centered: true
      }).then(function (value) {
        _this.boxTwo = value;

        if (_this.boxTwo == true) {
          _this.eliminarUsuario(solicitud);

          _this.eliminar(index);
        }
      })["catch"](function (err) {// An error occurred
      });
    },
    llenar: function llenar(usuario) {
      this.llenarEnvio(usuario);
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usuarios', ['listaUsuarios'])),
  mounted: function mounted() {
    this.consultarListaUsuarios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    usuario: Object
  },
  data: function data() {
    return {
      options: [],
      envio: {
        name: '',
        apellido: '',
        email: '',
        password: '',
        password_confirmation: '',
        ci: null,
        roles: '',
        nacionalidad: 0
      },
      errors: [],
      errores: null,
      nacionalidades: [{
        value: 0,
        text: 'V'
      }, {
        value: 1,
        text: 'E'
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('usuarios', ['consultarListaUsuarios'])), {}, {
    listarRoles: function listarRoles() {
      var _this = this;

      axios.get('/api/roles', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        var _iterator = _createForOfIteratorHelper(response.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var role = _step.value;

            _this.options.push(role.name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      })["catch"](function (e) {
        console.log(e);
      });
    },
    actualizar: function actualizar() {
      var _this2 = this;

      axios.put('/api/perfiles/' + this.usuario.id, this.envio, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        //console.log(response);
        _this2.$bvModal.hide("my-modal-".concat(_this2.usuario.id));

        _this2.consultarListaUsuarios();
      })["catch"](function (e) {
        console.log(e.response);
        _this2.errores = e.response.data;
        _this2.errors = e.response.data.errors; //this.$bvModal.hide(`my-modal-${this.usuario.id}`);
      });
    }
  }),
  computed: {//...mapState('usuarios', ['envio']),
    //...mapMutations('usuarios', ['llenarEnvio'])
  },
  created: function created() {
    //FORMATEO DE DATOS
    this.listarRoles();
    this.envio.name = this.usuario.name;
    this.envio.apellido = this.usuario.datos.apellido;
    this.envio.email = this.usuario.email;
    this.envio.ci = this.usuario.datos.ci;
    this.envio.roles = this.usuario.roles[0].slug;
    this.envio.nacionalidad = this.usuario.datos.nacionalidad;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#carta{\n\tbackground-color: rgba(256,256,256,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsuarios.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container row m-auto" },
    _vm._l(_vm.listaUsuarios, function(usuario, index) {
      return _c(
        "div",
        {
          key: usuario.id,
          staticClass: "card col-12 col-sm-12  col-md-6 col-lg-3 shadow",
          staticStyle: { width: "18rem" },
          attrs: { id: "carta" }
        },
        [
          _c("img", {
            staticClass: "card-img-top",
            attrs: { src: __webpack_require__(/*! ../../../public/img/usuario.jpg */ "./public/img/usuario.jpg") }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v(
                  _vm._s(usuario.name) + " " + _vm._s(usuario.datos.apellido)
                )
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-group list-group-flush" }, [
                _c(
                  "li",
                  { staticClass: "list-group-item" },
                  [
                    _vm._v("Role:\n\t\t    \t\t"),
                    _vm._l(usuario.roles, function(role) {
                      return _c("ul", [_c("li", [_vm._v(_vm._s(role.name))])])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _vm._v("Cedula: " + _vm._s(usuario.datos.ci))
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _vm._v("Email: " + _vm._s(usuario.email))
                ])
              ]),
              _vm._v(" "),
              _vm.$can("perfiles.show")
                ? _c(
                    "b-button",
                    {
                      attrs: {
                        to: {
                          name: "UsuariosShow",
                          params: { id: usuario.id }
                        },
                        variant: "primary"
                      }
                    },
                    [_vm._v("Detalles")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("perfiles.edit")
                ? _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal",
                          value: "my-modal-" + usuario.id,
                          expression: "`my-modal-${usuario.id}`"
                        }
                      ],
                      attrs: { variant: "link" }
                    },
                    [_vm._v("Editar")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("perfiles.edit")
                ? _c(
                    "b-modal",
                    {
                      attrs: {
                        "hide-footer": "",
                        id: "my-modal-" + usuario.id,
                        title: "Editar usuario",
                        size: "lg"
                      },
                      on: { ok: function($event) {} }
                    },
                    [_c("UsuariosEdit", { attrs: { usuario: usuario } })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("perfiles.delete")
                ? _c(
                    "b-button",
                    {
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.showMsgBoxTwo(usuario.id, index)
                        }
                      }
                    },
                    [_vm._v("Borrar")]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("\n\t\t\t\t" + _vm._s(er) + "\n\t\t\t")]
                  )
                }),
                0
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.actualizar()
            }
          }
        },
        [
          _vm.errores
            ? _c(
                "div",
                _vm._l(_vm.errores, function(error) {
                  return _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-danger alert-dismissible fade show"
                    },
                    [
                      _vm._v("\n\t\t\t\t" + _vm._s(error) + "\n\t\t\t\t"),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "alert",
                            "aria-label": "Close"
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-1",
                        label: "Nombre:",
                        "label-for": "nombre"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "nombre",
                          type: "text",
                          required: "",
                          placeholder: "Nombre"
                        },
                        model: {
                          value: _vm.envio.name,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "name", $$v)
                          },
                          expression: "envio.name"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-2",
                        label: "Apellido:",
                        "label-for": "apellido"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "apellido",
                          type: "text",
                          required: "",
                          placeholder: "Apellido"
                        },
                        model: {
                          value: _vm.envio.apellido,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "apellido", $$v)
                          },
                          expression: "envio.apellido"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-3",
                        label: "Email:",
                        "label-for": "email"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "email",
                          type: "email",
                          required: "",
                          placeholder: "Email"
                        },
                        model: {
                          value: _vm.envio.email,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "email", $$v)
                          },
                          expression: "envio.email"
                        }
                      })
                    ],
                    1
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
                      value: _vm.envio.nacionalidad,
                      callback: function($$v) {
                        _vm.$set(_vm.envio, "nacionalidad", $$v)
                      },
                      expression: "envio.nacionalidad"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "4" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-4",
                        label: "Cedula:",
                        "label-for": "cedula"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "cedula",
                          type: "number",
                          required: "",
                          placeholder: "Cedula"
                        },
                        model: {
                          value: _vm.envio.ci,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "ci", $$v)
                          },
                          expression: "envio.ci"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-5",
                        label: "Contraseña:",
                        "label-for": "contraseña"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "contraseña",
                          type: "password",
                          placeholder: "Nueva contraseña (Opcional)"
                        },
                        model: {
                          value: _vm.envio.password,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "password", $$v)
                          },
                          expression: "envio.password"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-6",
                        label: "Confirme la contraseña:",
                        "label-for": "password_confirmation"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "password_confirmation",
                          type: "password",
                          placeholder: "Confirme la contraseña"
                        },
                        model: {
                          value: _vm.envio.password_confirmation,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "password_confirmation", $$v)
                          },
                          expression: "envio.password_confirmation"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Asignar roles:" } },
                    [
                      _c("b-form-radio-group", {
                        attrs: {
                          id: "checkbox-group-1",
                          options: _vm.options,
                          name: "flavour-1"
                        },
                        model: {
                          value: _vm.envio.roles,
                          callback: function($$v) {
                            _vm.$set(_vm.envio, "roles", $$v)
                          },
                          expression: "envio.roles"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { attrs: { "align-h": "end" } },
            [
              _c(
                "b-button",
                {
                  staticClass: "mr-3",
                  attrs: { variant: "danger", type: "submit" }
                },
                [_vm._v("Editar")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./public/img/usuario.jpg":
/*!********************************!*\
  !*** ./public/img/usuario.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/usuario.jpg?31fdc9f2d44128773e94a1887f0ea75a";

/***/ }),

/***/ "./resources/js/components/ListUsuarios.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ListUsuarios.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListUsuarios.vue?vue&type=template&id=13b437a4& */ "./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4&");
/* harmony import */ var _ListUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUsuarios.vue?vue&type=script&lang=js& */ "./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListUsuarios.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListUsuarios.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsuarios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsuarios.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsuarios.vue?vue&type=template&id=13b437a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListUsuarios.vue?vue&type=template&id=13b437a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsuarios_vue_vue_type_template_id_13b437a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UsuariosEdit.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/UsuariosEdit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsuariosEdit.vue?vue&type=template&id=3a4061cc& */ "./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc&");
/* harmony import */ var _UsuariosEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsuariosEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsuariosEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UsuariosEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsuariosEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsuariosEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsuariosEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsuariosEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UsuariosEdit.vue?vue&type=template&id=3a4061cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsuariosEdit.vue?vue&type=template&id=3a4061cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsuariosEdit_vue_vue_type_template_id_3a4061cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);