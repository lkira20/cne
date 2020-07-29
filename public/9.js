(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListTramites.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TramitesEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TramitesEdit */ "./resources/js/components/TramitesEdit.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TramitesEdit: _TramitesEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      tramites: [],
      envio: {
        //OBJETO DE ENVIO AXIOS
        name: '',
        description: ''
      },
      boxTwo: '',
      loader: false,
      errors: []
    };
  },
  methods: {
    listaTramites: function listaTramites() {
      var _this = this;

      //LISTA DE LOS TRAMITES
      axios.get('/api/tramite', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this.tramites = response.data;
        _this.loader = true;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    crearTramite: function crearTramite() {
      var _this2 = this;

      this.errors = [];
      axios.post('api/tramite', this.envio, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        console.log(response.data);

        _this2.tramites.splice(0, 0, response.data);
      })["catch"](function (e) {
        console.log(e.response);
        _this2.errors = e.response.data.errors;
      });
    },
    editarTramite: function editarTramite() {
      var _this3 = this;

      this.errors = [];
      axios.put('/api/tramite/' + this.tramiteFormEdit.id, this.tramiteFormEdit, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this3.listaTramites();
      })["catch"](function (e) {
        console.log(e.response);
        _this3.errors = e.response.data.errors;
      });
    },
    eliminarTramite: function eliminarTramite() {},
    showMsgBoxTwo: function showMsgBoxTwo(tramite, index) {
      var _this4 = this;

      //MODAL DE ELIMINAR
      this.boxTwo = '';
      this.$bvModal.msgBoxConfirm('¿Esta seguro que desea eliminar este tramite?', {
        title: 'Confirmacion',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'SI',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this4.boxTwo = value;

        if (_this4.boxTwo == true) {
          axios["delete"]('/api/tramite/' + tramite, {
            headers: {
              Authorization: "Bearer " + _this4.$store.state.token
            }
          }).then(function (response) {
            _this4.tramites.splice(index, 1);
          })["catch"](function (e) {
            console.log(e.response);
          });
        }
      })["catch"](function (err) {
        // An error occurred
        console.log(err.response);
      });
    }
  },
  created: function created() {
    this.listaTramites();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['tramiteFormEdit']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['tramiteFormEdit'])),
  methods: {
    nameForm: function nameForm(e) {
      this.$store.commit('nameEdit', e.target.value);
    },
    descriptionForm: function descriptionForm(e) {
      this.$store.commit('descriptionEdit', e.target.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tramites.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tramites.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListTramites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ListTramites */ "./resources/js/components/ListTramites.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListTramites: _components_ListTramites__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#carta{\n\tbackground-color: rgba(256,256,256,0.9);\n}\n#g {\n\tbackground-color: rgba(256,256,256,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListTramites.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928& ***!
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
  return _c("div", { staticClass: "container", attrs: { id: "carta" } }, [
    _c(
      "h1",
      { staticClass: "text-center" },
      [
        _vm._v("Lista de documentos "),
        _vm.$can("tramite.create")
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
    _vm.loader == true
      ? _c(
          "div",
          { staticClass: "list-group mb-5" },
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
                          [
                            _vm._v(
                              "\n\t\t\t\t\t" + _vm._s(er) + "\n\t\t\t\t\t"
                            ),
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
            _vm._l(_vm.tramites, function(tramite, index) {
              return _c(
                "div",
                {
                  key: tramite.id,
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c("div", { attrs: { id: "lista" } }, [
                    _c(
                      "div",
                      { staticClass: "d-flex w-100 justify-content-between" },
                      [
                        _c("h5", { staticClass: "mb-1" }, [
                          _vm._v(_vm._s(tramite.name))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-1" }, [
                      _vm._v(_vm._s(tramite.description))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.$can("tramite.edit")
                        ? _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal",
                                  value: "modal" + tramite.id,
                                  expression: "`modal${tramite.id}`"
                                }
                              ],
                              attrs: { variant: "link" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "insertTramiteFormEdit",
                                    tramite
                                  )
                                }
                              }
                            },
                            [_vm._v("Editar")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.$can("tramite.edit")
                        ? _c(
                            "b-modal",
                            {
                              attrs: {
                                id: "modal" + tramite.id,
                                title: "Editar tramite",
                                "ok-title": "editar",
                                "ok-variant": "danger"
                              },
                              on: { ok: _vm.editarTramite }
                            },
                            [_c("TramitesEdit")],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.$can("tramite.delete")
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "danger" },
                              on: {
                                click: function($event) {
                                  return _vm.showMsgBoxTwo(tramite.id, index)
                                }
                              }
                            },
                            [_vm._v("Eliminar")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              )
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.$can("tramite.create")
          ? _c(
              "b-modal",
              {
                attrs: {
                  id: "modal-1",
                  title: "Crear tramite",
                  "ok-title": "crear"
                },
                on: { ok: _vm.crearTramite }
              },
              [
                _c("form", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Nombre del tramite")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.envio.name,
                          expression: "envio.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nombre-tramite",
                        placeholder: "Nombre",
                        required: ""
                      },
                      domProps: { value: _vm.envio.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.envio, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Descripcion del tramite")]),
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
                        rows: "4",
                        required: ""
                      },
                      domProps: { value: _vm.envio.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.envio,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]
            )
          : _vm._e()
      ],
      1
    )
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150& ***!
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
  return _c("div", [
    _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "name" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.tramiteFormEdit.name,
              expression: "tramiteFormEdit.name"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", name: "name", required: "" },
          domProps: { value: _vm.tramiteFormEdit.name },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.tramiteFormEdit, "name", $event.target.value)
              },
              _vm.nameForm
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c("label", { attrs: { for: "description" } }, [_vm._v("Descripcion")]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.tramiteFormEdit.description,
              expression: "tramiteFormEdit.description"
            }
          ],
          staticClass: "form-control",
          attrs: { rows: "4", name: "description", required: "" },
          domProps: { value: _vm.tramiteFormEdit.description },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.tramiteFormEdit,
                  "description",
                  $event.target.value
                )
              },
              _vm.descriptionForm
            ]
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("ListTramites", { staticClass: "shadow mt-2" })], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ListTramites.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ListTramites.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListTramites.vue?vue&type=template&id=761d2928& */ "./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928&");
/* harmony import */ var _ListTramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListTramites.vue?vue&type=script&lang=js& */ "./resources/js/components/ListTramites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListTramites.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListTramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListTramites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListTramites.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ListTramites.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListTramites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListTramites.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListTramites.vue?vue&type=template&id=761d2928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListTramites.vue?vue&type=template&id=761d2928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTramites_vue_vue_type_template_id_761d2928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TramitesEdit.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TramitesEdit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TramitesEdit.vue?vue&type=template&id=740cf150& */ "./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150&");
/* harmony import */ var _TramitesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TramitesEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TramitesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TramitesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TramitesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TramitesEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TramitesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TramitesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TramitesEdit.vue?vue&type=template&id=740cf150& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TramitesEdit.vue?vue&type=template&id=740cf150&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TramitesEdit_vue_vue_type_template_id_740cf150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tramites.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Tramites.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tramites.vue?vue&type=template&id=0ce9f3e2& */ "./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2&");
/* harmony import */ var _Tramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tramites.vue?vue&type=script&lang=js& */ "./resources/js/views/Tramites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tramites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tramites.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Tramites.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tramites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tramites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tramites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tramites.vue?vue&type=template&id=0ce9f3e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tramites.vue?vue&type=template&id=0ce9f3e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tramites_vue_vue_type_template_id_0ce9f3e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);