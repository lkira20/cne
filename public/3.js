(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraficoUsuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraficoUsuario */ "./resources/js/components/GraficoUsuario.vue");
/* harmony import */ var _Graficos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graficos */ "./resources/js/components/Graficos.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    GraficoUsuario: _GraficoUsuario__WEBPACK_IMPORTED_MODULE_0__["default"],
    Grafico: _Graficos__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['id'],
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
      fechai: "",
      fechaf: today,
      selected: null,
      options: [{
        value: null,
        text: "todos"
      }, {
        value: 1,
        text: "nacimientos"
      }, {
        value: 2,
        text: "matrimonio"
      }, {
        value: 3,
        text: "union estable de hecho"
      }, {
        value: 4,
        text: "defunciones"
      }, {
        value: 5,
        text: "disolucion unilateral"
      }, {
        value: 6,
        text: "disolucion conjunta"
      }, {
        value: 7,
        text: "copias certificadas"
      }],
      max: today,
      estado: null,
      estados: [{
        value: null,
        text: "estado"
      }, {
        value: 1,
        text: "atendido"
      }, {
        value: 0,
        text: "pendiente"
      }],
      usuario: {},
      loader: false,
      listaBusqueda: false,
      solicitudes: [],
      totalPaginas: null,
      notas: null,
      cantidades: null,
      imagen: null,
      spinner: {
        usuario: true,
        cantidades: true,
        tabla: true,
        notas: true
      }
    };
  },
  methods: {
    linkGen: function linkGen(pageNum) {
      //PARAMETRO DE ENVIO EN LA URL PARA LA PAGINACION
      return pageNum === 1 ? '?' : "?page=".concat(pageNum);
    },
    cambiar: function cambiar(page) {
      var _this = this;

      //RESUELVE EL BUG QUE DE REGRESO A LA PAGINA 1 NO SE REGRESE
      if (page == 1) {
        axios.get('/api/authperfil', {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          _this.solicitudes = response.data.solicitudes.data;
          _this.totalPaginas = response.data.solicitudes.last_page; //console.log(response.data);

          console.log(_this.$route);
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    },
    consultarDetalles: function consultarDetalles() {
      var _this2 = this;

      axios.get('/api/authperfil', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this2.usuario = response.data.usuario[0];
        _this2.solicitudes = response.data.solicitudes.data;
        _this2.totalPaginas = response.data.solicitudes.last_page;
        _this2.spinner.usuario = false;
        _this2.spinner.tabla = false;
        _this2.loader = true;
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    ultimasNotas: function ultimasNotas() {
      var _this3 = this;

      axios.get('api/notas', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this3.notas = response.data.data;
        _this3.spinner.notas = false; //console.log(response.data);
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    cantidad: function cantidad() {
      var _this4 = this;

      axios.get('/api/cantidades', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this4.cantidades = response.data;
        _this4.spinner.cantidades = false;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    filtrar: function filtrar() {
      var _this5 = this;

      if (this.fechai == "" && this.estado == null && this.selected == null) {
        this.consultarDetalles();
      } else {
        axios.get("/api/buscarDashboard", {
          params: {
            fechaf: this.fechaf,
            fechai: this.fechai,
            estado: this.estado,
            selected: this.selected
          },
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          console.log(response.data);
          _this5.solicitudes = response.data.solicitudes.data;
          _this5.totalPaginas = response.data.last_page;
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    },
    getImage: function getImage(event) {
      //Asignamos la imagen a  nuestra data
      this.imagen = event.target.files[0];
    },
    updateAvatar: function updateAvatar() {
      var formData = new FormData();
      formData.append("avatar", this.imagen);
      console.log(formData);
      axios.post('/api/avatar', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  },
  computed: {
    carga: function carga() {
      if (this.spinner.usuario == false && this.spinner.cantidades == false && this.spinner.tabla == false && this.spinner.notas == false) {
        return true;
      } else {
        return false;
      }
    }
  },
  created: function created() {
    this.cantidad();
    this.consultarDetalles();
    this.ultimasNotas();
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this6 = this;

    console.log(to); //CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION

    axios.get('/api/authperfil?page=' + to.query.page, {
      headers: {
        Authorization: "Bearer " + this.$store.state.token
      }
    }).then(function (response) {
      _this6.solicitudes = response.data.solicitudes.data;
      _this6.totalPaginas = response.data.solicitudes.last_page;
      console.log(response.data);
    })["catch"](function (e) {
      console.log(e.response);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.js */ "./resources/js/components/LineChart.js");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _LineChart_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['grafico'],
  data: function data() {
    return {
      datacollection: {},
      listaEspera: [],
      listaAtendidos: [],
      listaGlobales: []
    };
  },
  mounted: function mounted() {
    this.cantidadSolicitudes();
  },
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
    cantidadSolicitudes: function cantidadSolicitudes() {
      var _this = this;

      axios.get('/api/perfiles/estadisticas/' + this.grafico, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this.listaEspera = response.data.espera;
        _this.listaAtendidos = response.data.atendidas;
        _this.listaGlobales = response.data.globales;

        _this.fillData();
      })["catch"](function (e) {
        console.log(e.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#perfil{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n}\n#carta{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n\theight: 100%;\n}\n#row{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n\theight: 100%;\n}\n#notas{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n}\n#notas2{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n}\n#notas3{\n\tbackground-color: rgba(256,256,256,0.8) !important;\n\tlist-style-type: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.small {\n  max-width: 800px;\n  /* max-height: 500px; */\n  margin:  50px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPerfil.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GraficoUsuario.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f& ***!
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
  return _c(
    "div",
    { attrs: { id: "row" } },
    [
      _vm.carga == false
        ? _c(
            "div",
            { staticClass: "text-center mt-3" },
            [
              _c("b-spinner", {
                attrs: { label: "Loading...", variant: "danger" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.carga == true
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "mt-5 d-md-none d-sm-none d-none d-lg-block text-center",
                  attrs: { lg: "2" }
                },
                [
                  _c("img", {
                    staticClass: "card-img-top ",
                    attrs: { src: __webpack_require__(/*! ../../../public/img/usuario.jpg */ "./public/img/usuario.jpg") }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("ul", { staticClass: "list-group list-group-flush" }, [
                      _c("li", { staticClass: "list-group-item" }, [
                        _c("b", [_vm._v("Nombre:")]),
                        _vm._v(" " + _vm._s(_vm.usuario.datos.name))
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-group-item" }, [
                        _c("b", [_vm._v("Apellido:")]),
                        _vm._v(" " + _vm._s(_vm.usuario.datos.apellido))
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-group-item" }, [
                        _c("b", [_vm._v("Cedula:")]),
                        _vm._v(" " + _vm._s(_vm.usuario.datos.ci))
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-group-item" }, [
                        _c("b", [_vm._v("Email:")]),
                        _vm._v(" " + _vm._s(_vm.usuario.datos.email))
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-group-item" }, [
                        _c("b", [_vm._v("rol:")]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.usuario.roles, function(role) {
                            return _c("li", { key: role.id }, [
                              _vm._v(_vm._s(role.name))
                            ])
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "12", md: "12", lg: "10" } },
                [
                  _c("h1", { staticClass: "text-center display-4" }, [
                    _vm._v("Resumen")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { md: "6", sm: "6", lg: "3" } }, [
                        _c(
                          "div",
                          { staticClass: "card text-white bg-primary shadow" },
                          [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", [
                                _vm._v(
                                  "Ciudadanos: " +
                                    _vm._s(_vm.cantidades.ciudadanos)
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "6", sm: "6", lg: "3" } }, [
                        _c(
                          "div",
                          { staticClass: "card text-white bg-danger shadow" },
                          [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", [
                                _vm._v(
                                  "Solicitudes: " +
                                    _vm._s(_vm.cantidades.solicitudes)
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "6", sm: "6", lg: "3" } }, [
                        _c(
                          "div",
                          { staticClass: "card text-white bg-success shadow" },
                          [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", [
                                _vm._v(
                                  "Usuarios: " + _vm._s(_vm.cantidades.usuarios)
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "6", sm: "6", lg: "3" } }, [
                        _c(
                          "div",
                          { staticClass: "card text-white bg-warning shadow" },
                          [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", [
                                _vm._v("Notas: " + _vm._s(_vm.cantidades.notas))
                              ])
                            ])
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$can("solicitud.create")
                    ? _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center",
                              attrs: { sm: "12", md: "12", lg: "12", xl: "6" }
                            },
                            [
                              _c("GraficoUsuario", {
                                staticClass: "shadow",
                                attrs: { grafico: _vm.usuario.id }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center",
                              attrs: { sm: "12", md: "12", lg: "12", xl: "6" }
                            },
                            [_c("Grafico", { staticClass: "shadow" })],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$can("solicitud.create")
                    ? _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center",
                              attrs: { sm: "12", md: "12", lg: "12", xl: "12" }
                            },
                            [_c("Grafico", { staticClass: "shadow" })],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$can("solicitud.create")
                    ? _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "6", lg: "6" } }, [
                            _c("h3", {}, [_vm._v("Lista de solicitudes")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "d-flex" }, [
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
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.estados },
                                        model: {
                                          value: _vm.estado,
                                          callback: function($$v) {
                                            _vm.estado = $$v
                                          },
                                          expression: "estado"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-select", {
                                        attrs: { options: _vm.options },
                                        model: {
                                          value: _vm.selected,
                                          callback: function($$v) {
                                            _vm.selected = $$v
                                          },
                                          expression: "selected"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("b-form-datepicker", {
                                        attrs: {
                                          id: "fechai",
                                          max: _vm.max,
                                          "reset-button": ""
                                        },
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
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-outline-danger ",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v(" buscar")]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-sm table-hover shadow",
                                attrs: { id: "perfil" }
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("cedula")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("nombre")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("tramite")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("fecha")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.solicitudes, function(
                                      solicitud,
                                      index
                                    ) {
                                      return _vm.listaBusqueda == false
                                        ? _c(
                                            "tr",
                                            {
                                              key: solicitud.id,
                                              class: {
                                                "bg-warning": !solicitud.status
                                              }
                                            },
                                            [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    solicitud.ciudadano.datos.ci
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    solicitud.ciudadano.datos
                                                      .name
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    solicitud.tramite
                                                      ? solicitud.tramite.name
                                                      : "indefinido"
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(solicitud.fecha))
                                              ])
                                            ]
                                          )
                                        : _vm._e()
                                    }),
                                    _vm._v(" "),
                                    _vm.listaBusqueda == true
                                      ? _c("tr", [
                                          _c("td", [
                                            _vm._v(_vm._s(_vm.solicitudes.ci))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(_vm.solicitudes.name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(_vm.soli.tramite.name)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(_vm.soli.fecha))
                                          ])
                                        ])
                                      : _vm._e()
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "overflow-auto",
                                        attrs: { colspan: "3" }
                                      },
                                      [
                                        _c("b-pagination-nav", {
                                          attrs: {
                                            "link-gen": _vm.linkGen,
                                            "number-of-pages": _vm.totalPaginas,
                                            "use-router": ""
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.cambiar($event)
                                            }
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            attrs: {
                                              to: { name: "ListaSolicitudes" },
                                              variant: "primary"
                                            }
                                          },
                                          [_vm._v("Ver mas")]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "6", lg: "6" } }, [
                            _c("h3", {}, [_vm._v("Ultimas notas")]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass: "list-group shadow",
                                attrs: { id: "notas2" }
                              },
                              _vm._l(_vm.notas, function(nota, index) {
                                return _c(
                                  "li",
                                  {
                                    key: index,
                                    staticClass: "list-group-item",
                                    attrs: { id: "notas3" }
                                  },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        _vm._s(nota.asunto) +
                                          " - " +
                                          _vm._s(nota.description)
                                      )
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$can("solicitud.create")
                    ? _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "12", lg: "12" } }, [
                            _c("h3", {}, [_vm._v("Ultimas notas")]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass: "list-group shadow",
                                attrs: { id: "notas2" }
                              },
                              _vm._l(_vm.notas, function(nota, index) {
                                return _c(
                                  "li",
                                  {
                                    key: index,
                                    staticClass: "list-group-item",
                                    attrs: { id: "notas3" }
                                  },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        _vm._s(nota.asunto) +
                                          " - " +
                                          _vm._s(nota.description)
                                      )
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4& ***!
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
    { staticClass: "small" },
    [
      _c("h4", [_vm._v("Desempeño en el año del usuario")]),
      _vm._v(" "),
      _c("line-chart", {
        attrs: { chartData: _vm.datacollection, height: 100 }
      })
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

/***/ "./resources/js/components/AuthPerfil.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AuthPerfil.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthPerfil.vue?vue&type=template&id=0130183f& */ "./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f&");
/* harmony import */ var _AuthPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPerfil.vue?vue&type=script&lang=js& */ "./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthPerfil.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AuthPerfil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPerfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPerfil.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPerfil.vue?vue&type=template&id=0130183f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuthPerfil.vue?vue&type=template&id=0130183f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPerfil_vue_vue_type_template_id_0130183f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GraficoUsuario.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/GraficoUsuario.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraficoUsuario.vue?vue&type=template&id=39cfe7d4& */ "./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4&");
/* harmony import */ var _GraficoUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraficoUsuario.vue?vue&type=script&lang=js& */ "./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraficoUsuario.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GraficoUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GraficoUsuario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GraficoUsuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GraficoUsuario.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GraficoUsuario.vue?vue&type=template&id=39cfe7d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GraficoUsuario.vue?vue&type=template&id=39cfe7d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraficoUsuario_vue_vue_type_template_id_39cfe7d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);