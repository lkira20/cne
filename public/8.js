(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior

    var minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() - 2);
    minDate.setDate(15); // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);
    return {
      lista: [],
      paginate: ['lista'],
      pagination: {
        //PAGINACION DE RIMORSOFT
        'total': 0,
        'current_page': 0,
        'per_page': 0,
        'last_page': 0,
        'from': 0,
        'to': 0
      },
      keeps: [],
      offset: 4,
      max: today,
      fechai: null,
      fechaf: today,
      search: '',
      loader: false,
      error: false
    };
  },
  computed: {
    //PAGINACION DE RIMORSOFT
    isActived: function isActived() {
      return this.pagination.current_page;
    },
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset; //TODO Offset

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2; //TODO

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];

      while (from <= to) {
        pagesArray.push(from);
        from++;
      }

      return pagesArray;
    } ////////////////////////////////////////////////7

  },
  methods: {
    nacion: function nacion(nacionalidad) {
      if (nacionalidad == 0) {
        return "V";
      } else {
        return "E";
      }
    },
    eliminar: function eliminar(id, index) {
      var _this = this;

      axios["delete"]('/api/ciudadano/' + id, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (datos) {
        //console.log(datos.data.datos);
        var eliminado = _this.keeps.splice(index, 1);

        console.log(eliminado);
      });
    },
    getKeeps: function getKeeps(page) {
      var _this2 = this;

      this.error = false;
      axios.get('/api/ciudadano?page=' + page, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (datos) {
        /*console.log(datos.data);
        this.lista = datos.data;*/
        //PAGINACION DE RIMORSOFT
        _this2.pagination = datos.data.pagination;
        _this2.keeps = datos.data.ciudadanos.data;
        console.log(_this2.keeps);
        _this2.loader = true;
      });
    },
    changePage: function changePage(page) {
      //PAGINACION DE RIMORSOft
      this.pagination.current_page = page;
      this.getKeeps(page);
    },
    filtrar: function filtrar() {
      var _this3 = this;

      this.error = false;

      if (this.search != '') {
        axios.get('/api/ciudadano/comprobarciudadano/' + this.search, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (datos) {
          //console.log(typeof(datos.data));
          if (typeof datos.data == "string") {
            _this3.error = true;
            _this3.keeps = [];
          } else {
            _this3.keeps = datos.data;
          } //this.pagination = {};

        })["catch"](function (e) {
          console.log(e);
        });
      } else {
        this.getKeeps();
      }
    },
    filtrarfecha: function filtrarfecha() {
      var _this4 = this;

      axios.get("/api/filtrarfecha", {
        params: {
          fechaf: this.fechaf,
          fechai: this.fechai
        },
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (datos) {
        console.log(datos.data);
        _this4.pagination = datos.data;
        _this4.keeps = datos.data.data;
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  },
  created: function created() {
    this.getKeeps();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#carta{\n\tbackground-color: rgba(256,256,256,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListCiudadanos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container card shadow", attrs: { id: "carta" } },
    [
      _c(
        "h2",
        { staticClass: "text-center" },
        [
          _vm._v("Lista "),
          _vm.$can("ciudadano.create")
            ? _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "ciudadanosCreate" } }
                },
                [_vm._v("Nuevo")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.$can("solicitud.index")
        ? _c("div", { staticClass: "d-flex" }, [
            _c(
              "form",
              {
                staticClass: "form-inline ml-auto mb-3",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.filtrarfecha($event)
                  }
                }
              },
              [
                _c("b-form-datepicker", {
                  attrs: { id: "fechai", max: _vm.max, "reset-button": "" },
                  model: {
                    value: _vm.fechai,
                    callback: function($$v) {
                      _vm.fechai = $$v
                    },
                    expression: "fechai"
                  }
                }),
                _vm._v(" "),
                _c("b-form-datepicker", {
                  attrs: { id: "fechaf", max: _vm.max },
                  model: {
                    value: _vm.fechaf,
                    callback: function($$v) {
                      _vm.fechaf = $$v
                    },
                    expression: "fechaf"
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-danger ",
                    attrs: { type: "submit" }
                  },
                  [_vm._v(" buscar")]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.$can("solicitud.index")
        ? _c("div", { staticClass: "d-flex" }, [
            _c(
              "form",
              {
                staticClass: "form-inline ml-auto mb-3",
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
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "cedula", "aria-label": "Search" },
                  domProps: { value: _vm.search },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary my-2 my-sm-0",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("buscar")]
                )
              ]
            )
          ])
        : _vm._e(),
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
      _vm.loader
        ? _c("table", { staticClass: "table table-sm table-hover" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "d-none d-md-block", attrs: { scope: "col" } },
                  [_vm._v("Apellido")]
                ),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Pais")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Cedula")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
                _vm._v(" "),
                _vm.$can("ciudadano.edit")
                  ? _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm.error == true || _vm.keeps.length == 0
                  ? _c("tr", [
                      _vm._v(
                        "\n\t  \t\t\tNo se ha encontrado ningun ciudadano\n\t  \t\t"
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.keeps, function(keep, index) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(keep.name))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "d-none d-md-block" }, [
                      _vm._v(_vm._s(keep.apellido))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.nacion(keep.nacionalidad)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(keep.ci))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(keep.email))]),
                    _vm._v(" "),
                    _vm.$can("ciudadano.edit")
                      ? _c(
                          "td",
                          [
                            _vm.$can("ciudadano.edit")
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-link btn-block",
                                    attrs: {
                                      to: {
                                        name: "ciudadanosEdit",
                                        params: { id: keep.datoable_id }
                                      }
                                    }
                                  },
                                  [_vm._v("editar")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$can("ciudadano.delete")
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger btn-block",
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminar(
                                          keep.datoable_id,
                                          index
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Eliminar")]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _c("td", { attrs: { colspan: "5" } }, [
                  _c("nav", [
                    _c(
                      "ul",
                      { staticClass: "pagination" },
                      [
                        _vm.pagination.current_page > 1
                          ? _c("li", { staticClass: "page-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changePage(
                                        _vm.pagination.current_page - 1
                                      )
                                    }
                                  }
                                },
                                [_c("span", [_vm._v("Anterior")])]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.pagesNumber, function(page) {
                          return _c(
                            "li",
                            {
                              staticClass: "page-item",
                              class: [page == _vm.isActived ? "active" : ""]
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changePage(page)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t  \t\t\t\t\t\t" +
                                      _vm._s(page) +
                                      "\n\t\t\t  \t\t\t\t\t"
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _vm.pagination.current_page < _vm.pagination.last_page
                          ? _c("li", { staticClass: "page-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changePage(
                                        _vm.pagination.current_page + 1
                                      )
                                    }
                                  }
                                },
                                [_c("span", [_vm._v("Siguiente")])]
                              )
                            ])
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ListCiudadanos.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ListCiudadanos.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListCiudadanos.vue?vue&type=template&id=29cfb212& */ "./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212&");
/* harmony import */ var _ListCiudadanos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCiudadanos.vue?vue&type=script&lang=js& */ "./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListCiudadanos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListCiudadanos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListCiudadanos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListCiudadanos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListCiudadanos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListCiudadanos.vue?vue&type=template&id=29cfb212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListCiudadanos.vue?vue&type=template&id=29cfb212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCiudadanos_vue_vue_type_template_id_29cfb212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);