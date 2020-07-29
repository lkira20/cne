(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolicitudesEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitudesEdit */ "./resources/js/components/SolicitudesEdit.vue");
/* harmony import */ var _SolicitudesShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitudesShow */ "./resources/js/components/SolicitudesShow.vue");
/* harmony import */ var _Graficos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graficos */ "./resources/js/components/Graficos.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SolicitudesEdit: _SolicitudesEdit__WEBPACK_IMPORTED_MODULE_0__["default"],
    SolicitudesShow: _SolicitudesShow__WEBPACK_IMPORTED_MODULE_1__["default"],
    Graficos: _Graficos__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
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
      loader: false,
      solicitudes: [],
      totalPaginas: null,
      search: "",
      //filtro
      fechai: null,
      fechaf: today,
      selected: null,
      listaBusqueda: false,
      //ESTABLECER QUE IF SE MUESTRA
      busqueda: [],
      //DATOS DEL ELEMENTO DE RENDER DEL FILTRO
      tramites: [],
      envio: {
        //OBJETO DE ENVIO PARA EDITAR
        descripcion: '',
        status: 0,
        tramite_id: 0,
        correo: ''
      },
      boxTwo: '',
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
      url: '/api/solicitud',
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
      errors: []
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
        axios.get(this.url, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          _this.solicitudes = response.data.data;
          _this.totalPaginas = response.data.last_page; //console.log(response.data);

          console.log(_this.$route);
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    },
    listarSolicitudes: function listarSolicitudes() {
      var _this2 = this;

      //CONSULTA PARA LLENAR LA LISTA
      axios.get(this.url, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this2.solicitudes = response.data.data;
        _this2.totalPaginas = response.data.last_page;
        _this2.loader = true;
        console.log(_this2.solicitudes); //console.log(this.$route);
      })["catch"](function (e) {
        console.log(e.response);
      });
    },
    buscar2: function buscar2() {
      var _this3 = this;

      this.listaBusqueda == false;

      if ((this.fechai == null || this.fechai == '') && this.estado == null && this.selected == null) {
        this.listarSolicitudes();
      } else {
        axios.get("/api/datatablesolicitud", {
          params: {
            fechaf: this.fechaf,
            fechai: this.fechai,
            estado: this.estado,
            selected: this.selected
          }
        }).then(function (response) {
          console.log(response.data.solicitudes.data);
          _this3.solicitudes = response.data.solicitudes.data;
          _this3.totalPaginas = response.data.last_page;
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    },
    buscar: function buscar() {
      var _this4 = this;

      //FILTRA LOS DATOS POR CEDULA
      if (this.search != "") {
        axios.get('/api/solicitud/filtrar/' + this.search, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          console.log(response.data);
          _this4.solicitudes = response.data.data[0];
          _this4.totalPaginas = response.data.last_page;
          _this4.busqueda = response.data.data[0].ciudadano.solicitudes;
          _this4.listaBusqueda = true;
        })["catch"](function (e) {
          console.log(e.response);
        });
      }
    },
    cambioListaBusqueda: function cambioListaBusqueda() {
      var _this5 = this;

      //FUNCION QUE CAMBIA SI SE MUESTRA EL ELMENTO DEL FILTRO O EL PREDETERMINADO
      if (this.search == '' && this.selected == null) {
        axios.get(this.url, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          }
        }).then(function (response) {
          _this5.solicitudes = response.data.data;
          _this5.totalPaginas = response.data.last_page;
          _this5.listaBusqueda = false; //console.log(response.data.data);
          //console.log(this.$route);
        })["catch"](function (e) {
          console.log(e.response);
        });
        /*TAMBIEN SE PUEDE HACER ASI PERO DA UNA ADVERTENCIA
        					this.listarSolicitudes();
        					this.listaBusqueda = false;*/
      }
    },
    buscarTramites: function buscarTramites() {
      var _this6 = this;

      //PARA EL MODAL EDIT
      axios.get('/api/tramite', {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this6.tramites = response.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    editarSolicitud: function editarSolicitud(correo, tramite, status, descripcion, id, index) {
      var _this7 = this;

      //MODAL EDIT
      //CONFIGURAR EL OBJETO DE ENVIO
      this.envio.tramite_id = tramite;
      this.envio.status = status;
      this.envio.descripcion = descripcion;
      this.envio.correo = correo;
      axios.put('/api/solicitud/' + id, this.envio, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        _this7.$bvModal.hide("my-modal".concat(index));

        if (_this7.envio.status == 1) {
          axios.get('/api/enviarcorreo', {
            params: _this7.envio,
            headers: {
              Authorization: "Bearer " + _this7.$store.state.token
            }
          }).then(function (response) {
            console.log(response.data);
          })["catch"](function (e) {
            console.log(e.response);
          });
        }

        if (_this7.listaBusqueda === false) {
          axios.get('/api/solicitud', {
            headers: {
              Authorization: "Bearer " + _this7.$store.state.token
            }
          }).then(function (response) {
            _this7.solicitudes = response.data.data;
            _this7.totalPaginas = response.data.last_page;
          })["catch"](function (e) {
            console.log(e.response);
          });
        } else {
          _this7.buscar();
        }
      })["catch"](function (e) {
        //console.log(e.response);
        //console.log(e.response.data.errors.descripcion);
        _this7.errors = e.response.data.errors.descripcion;
      });
    },
    showMsgBoxTwo: function showMsgBoxTwo(solicitud, index) {
      var _this8 = this;

      //MODAL DE ELIMINAR
      this.boxTwo = '';
      this.$bvModal.msgBoxConfirm('¿Esta seguro que quiere eliminar esta solicitud?', {
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
        _this8.boxTwo = value;

        if (_this8.boxTwo == true) {
          axios["delete"]('/api/solicitud/' + solicitud, {
            headers: {
              Authorization: "Bearer " + _this8.$store.state.token
            }
          }).then(function (response) {
            if (_this8.listaBusqueda === false) {
              _this8.solicitudes.splice(index, 1);
            } else {
              _this8.buscar();
            }
          })["catch"](function (e) {
            console.log(e.response);
          });
        }
      })["catch"](function (err) {// An error occurred
      });
    }
  },
  created: function created() {
    this.listarSolicitudes();
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this9 = this;

    //console.log(to);
    //CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION
    axios.get(this.url + '?page=' + to.query.page, {
      headers: {
        Authorization: "Bearer " + this.$store.state.token
      }
    }).then(function (response) {
      _this9.solicitudes = response.data.data;
      _this9.totalPaginas = response.data.last_page; //console.log(response.data);
    })["catch"](function (e) {
      console.log(e.response);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    solicitud: Object,
    modal: String
  },
  data: function data() {
    return {
      tramites: [],
      //lista de tramites
      envio: {
        //OBJETO DE ENVIO PARA EDITAR
        descripcion: '',
        status: 0,
        tramite_id: 0,
        errors: []
      }
    };
  },
  methods: {
    editarSolicitud: function editarSolicitud() {
      var _this = this;

      //CONFIGURAR EL OBJETO DE ENVIO
      this.envio.descripcion = this.solicitud.descripcion;
      this.envio.status = this.solicitud.status;
      this.envio.tramite_id = this.solicitud.tramite.id;
      axios.put('/api/solicitud/' + this.solicitud.id, this.envio, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(function (response) {
        //console.log(response.data);
        _this.$bvModal.hide(_this.modal);
      })["catch"](function (e) {
        //console.log(e.response);
        //console.log(e.response.data.errors);
        _this.errors = e.response.data.errors;
      });
    }
  },
  created: function created() {
    var _this2 = this;

    //CONSULTA DE LOS TRAMITES PARA COLOCARLOS EN EL SELECT
    axios.get('/api/tramite').then(function (response) {
      _this2.tramites = response.data;
    })["catch"](function (e) {
      console.log(e);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    solicitud: Object,
    busqueda: Boolean,
    ciudadano: Object
  },
  computed: {
    nacion: function nacion() {
      if (this.solicitud.ciudadano.datos.nacionalidad == 0) {
        return "Venezolano";
      } else {
        return "Extranjero";
      }
    }
  },
  created: function created() {
    console.log(this.solicitud);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#carta{\n\tbackground-color: rgba(256,256,256,0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaSolicitudes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba& ***!
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
    { staticClass: "container card shadow", attrs: { id: "carta" } },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "h2",
          { staticClass: "text-center card-title" },
          [
            _vm._v("Lista de mis solicitudes "),
            _vm.$can("solicitud.create")
              ? _c(
                  "b-button",
                  {
                    attrs: {
                      to: { name: "IniciarSolicitud" },
                      variant: "primary"
                    }
                  },
                  [_vm._v("nuevo")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.$can("solicitud.index")
          ? _c("div", { staticClass: "d-flex" }, [
              _c(
                "form",
                {
                  staticClass: "form-inline ml-auto mb-3",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.buscar2($event)
                    }
                  }
                },
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
                  }),
                  _vm._v(" "),
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
                      return _vm.buscar($event)
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
                      change: _vm.cambioListaBusqueda,
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.solicitudes == null || _vm.solicitudes.length == 0
                    ? _c("tr", { attrs: { colspan: "6" } }, [
                        _c("td", [
                          _vm._v("No se ha encontrado ninguna solicitud")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.solicitudes, function(solicitud, index) {
                    return _vm.listaBusqueda == false
                      ? _c(
                          "tr",
                          {
                            key: solicitud.id,
                            class: { "bg-warning": !solicitud.status }
                          },
                          [
                            _c("td", [
                              _vm._v(_vm._s(solicitud.ciudadano.datos.ci))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(solicitud.ciudadano.datos.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "d-none d-md-block" }, [
                              _vm._v(
                                _vm._s(
                                  solicitud.usuario
                                    ? solicitud.usuario.name
                                    : "indefinido"
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
                            _c("td", [_vm._v(_vm._s(solicitud.fecha))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _vm.$can("solicitud.edit")
                                  ? _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "b-modal",
                                            rawName: "v-b-modal",
                                            value: "my-modal" + index,
                                            expression: "`my-modal${index}`"
                                          }
                                        ],
                                        attrs: { block: "", variant: "link" },
                                        on: { click: _vm.buscarTramites }
                                      },
                                      [_vm._v("Editar")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.edit")
                                  ? _c(
                                      "b-modal",
                                      {
                                        attrs: {
                                          id: "my-modal" + index,
                                          "hide-footer": "",
                                          title: "Datos para la solicitud"
                                        }
                                      },
                                      [
                                        _vm.errors.length > 0
                                          ? _c(
                                              "div",
                                              _vm._l(_vm.errors, function(
                                                error,
                                                index
                                              ) {
                                                return _c(
                                                  "div",
                                                  {
                                                    key: index,
                                                    staticClass:
                                                      "alert alert-danger alert-dismissible fade show"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n\t\t\t\t\t\t\t\t\t\t" +
                                                        _vm._s(error) +
                                                        "\n\t\t\t\t\t\t\t\t\t\t"
                                                    ),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass: "close",
                                                        attrs: {
                                                          type: "button",
                                                          "data-dismiss":
                                                            "alert",
                                                          "aria-label": "Close"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            attrs: {
                                                              "aria-hidden":
                                                                "true"
                                                            }
                                                          },
                                                          [_vm._v("×")]
                                                        )
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
                                          "form",
                                          {
                                            on: {
                                              submit: function($event) {
                                                $event.preventDefault()
                                                return _vm.editarSolicitud(
                                                  solicitud.ciudadano.datos
                                                    .email,
                                                  solicitud.tramite.id,
                                                  solicitud.status,
                                                  solicitud.descripcion,
                                                  solicitud.id,
                                                  index
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("div", { staticClass: "mb-2" }, [
                                              _c("div", {}, [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "inputAddress"
                                                        }
                                                      },
                                                      [_vm._v("tramite")]
                                                    ),
                                                    _vm._v(" "),
                                                    solicitud.tramite
                                                      ? _c(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  solicitud
                                                                    .tramite.id,
                                                                expression:
                                                                  "solicitud.tramite.id"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "tramite",
                                                              name: "tramite"
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$selectedVal = Array.prototype.filter
                                                                  .call(
                                                                    $event
                                                                      .target
                                                                      .options,
                                                                    function(
                                                                      o
                                                                    ) {
                                                                      return o.selected
                                                                    }
                                                                  )
                                                                  .map(function(
                                                                    o
                                                                  ) {
                                                                    var val =
                                                                      "_value" in
                                                                      o
                                                                        ? o._value
                                                                        : o.value
                                                                    return val
                                                                  })
                                                                _vm.$set(
                                                                  solicitud.tramite,
                                                                  "id",
                                                                  $event.target
                                                                    .multiple
                                                                    ? $$selectedVal
                                                                    : $$selectedVal[0]
                                                                )
                                                              }
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.tramites,
                                                            function(tramit) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  key:
                                                                    tramit.id,
                                                                  domProps: {
                                                                    value:
                                                                      tramit.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      tramit.name
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      : _vm._e()
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "inputAddress"
                                                        }
                                                      },
                                                      [_vm._v("estatus")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "select",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              solicitud.status,
                                                            expression:
                                                              "solicitud.status"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          placeholder: "estutus"
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
                                                                function(o) {
                                                                  return o.selected
                                                                }
                                                              )
                                                              .map(function(o) {
                                                                var val =
                                                                  "_value" in o
                                                                    ? o._value
                                                                    : o.value
                                                                return val
                                                              })
                                                            _vm.$set(
                                                              solicitud,
                                                              "status",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "option",
                                                          {
                                                            attrs: {
                                                              value: "1"
                                                            }
                                                          },
                                                          [_vm._v(" atendido ")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "option",
                                                          {
                                                            attrs: {
                                                              value: "0"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              " pendiente "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "descripcion"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Descripcion de solicitud."
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            solicitud.descripcion,
                                                          expression:
                                                            "solicitud.descripcion"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        id: "descripcion",
                                                        rows: "3",
                                                        name: "descripcion"
                                                      },
                                                      domProps: {
                                                        value:
                                                          solicitud.descripcion
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            solicitud,
                                                            "descripcion",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "small",
                                                  { staticClass: "text-muted" },
                                                  [
                                                    _vm._v(
                                                      "Nota: Al cambiar el estado a atendido le enviara automaticamente un correo al ciudadano informandole sobre la culminacion de su solicitud"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-center mb-3"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline-danger btn-lg btn-block",
                                                        attrs: {
                                                          type: "submit",
                                                          name:
                                                            "registrar-solicitud"
                                                        }
                                                      },
                                                      [_vm._v("Editar")]
                                                    )
                                                  ]
                                                )
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.delete")
                                  ? _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          block: "",
                                          size: "sm",
                                          variant: "danger"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.showMsgBoxTwo(
                                              solicitud.id,
                                              index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Borrar")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.show")
                                  ? _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          block: "",
                                          size: "sm",
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.$bvModal.show(
                                              "bv-modal-example" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Detalles")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "b-modal",
                                  {
                                    attrs: {
                                      scrollable: "",
                                      id: "bv-modal-example" + index,
                                      "hide-footer": ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "modal-title",
                                          fn: function() {
                                            return [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t      Detalles de la solicitud\n\t\t\t\t\t\t\t\t    "
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("SolicitudesShow", {
                                      attrs: { solicitud: solicitud }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          block: "",
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.$bvModal.hide(
                                              "bv-modal-example" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Cerrar")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.busqueda, function(soli, index) {
                    return _vm.listaBusqueda == true
                      ? _c(
                          "tr",
                          {
                            key: soli.id,
                            class: { "bg-warning": !soli.status }
                          },
                          [
                            _c("td", [_vm._v(_vm._s(_vm.solicitudes.ci))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.solicitudes.name))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "d-none d-md-block" }, [
                              _vm._v(
                                _vm._s(
                                  soli.usuario
                                    ? soli.usuario.name
                                    : "indefinido"
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(soli.tramite.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(soli.fecha))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _vm.$can("solicitud.edit")
                                  ? _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "b-modal",
                                            rawName: "v-b-modal",
                                            value: "my-modal" + index,
                                            expression: "`my-modal${index}`"
                                          }
                                        ],
                                        attrs: { block: "", variant: "link" },
                                        on: { click: _vm.buscarTramites }
                                      },
                                      [_vm._v("Editar")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.edit")
                                  ? _c(
                                      "b-modal",
                                      {
                                        attrs: {
                                          id: "my-modal" + index,
                                          "hide-footer": "",
                                          title: "Datos para la solicitud"
                                        }
                                      },
                                      [
                                        _c(
                                          "form",
                                          {
                                            on: {
                                              submit: function($event) {
                                                $event.preventDefault()
                                                return _vm.editarSolicitud(
                                                  soli.tramite.id,
                                                  soli.status,
                                                  soli.descripcion,
                                                  soli.id,
                                                  index
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("div", { staticClass: "mb-2" }, [
                                              _c("div", {}, [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "inputAddress"
                                                        }
                                                      },
                                                      [_vm._v("tramite")]
                                                    ),
                                                    _vm._v(" "),
                                                    soli.tramite
                                                      ? _c(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  soli.tramite
                                                                    .id,
                                                                expression:
                                                                  "soli.tramite.id"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "tramite",
                                                              name: "tramite"
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$selectedVal = Array.prototype.filter
                                                                  .call(
                                                                    $event
                                                                      .target
                                                                      .options,
                                                                    function(
                                                                      o
                                                                    ) {
                                                                      return o.selected
                                                                    }
                                                                  )
                                                                  .map(function(
                                                                    o
                                                                  ) {
                                                                    var val =
                                                                      "_value" in
                                                                      o
                                                                        ? o._value
                                                                        : o.value
                                                                    return val
                                                                  })
                                                                _vm.$set(
                                                                  soli.tramite,
                                                                  "id",
                                                                  $event.target
                                                                    .multiple
                                                                    ? $$selectedVal
                                                                    : $$selectedVal[0]
                                                                )
                                                              }
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.tramites,
                                                            function(tramit) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  key:
                                                                    tramit.id,
                                                                  domProps: {
                                                                    value:
                                                                      tramit.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      tramit.name
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      : _vm._e()
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "inputAddress"
                                                        }
                                                      },
                                                      [_vm._v("estatus")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "select",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: soli.status,
                                                            expression:
                                                              "soli.status"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          placeholder: "estutus"
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
                                                                function(o) {
                                                                  return o.selected
                                                                }
                                                              )
                                                              .map(function(o) {
                                                                var val =
                                                                  "_value" in o
                                                                    ? o._value
                                                                    : o.value
                                                                return val
                                                              })
                                                            _vm.$set(
                                                              soli,
                                                              "status",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "option",
                                                          {
                                                            attrs: {
                                                              value: "1"
                                                            }
                                                          },
                                                          [_vm._v(" atendido ")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "option",
                                                          {
                                                            attrs: {
                                                              value: "0"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              " pendiente "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "descripcion"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Descripcion de solicitud."
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            soli.descripcion,
                                                          expression:
                                                            "soli.descripcion"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        id: "descripcion",
                                                        rows: "3",
                                                        name: "descripcion"
                                                      },
                                                      domProps: {
                                                        value: soli.descripcion
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            soli,
                                                            "descripcion",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-center mb-3"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline-danger btn-lg btn-block",
                                                        attrs: {
                                                          type: "submit",
                                                          name:
                                                            "registrar-solicitud"
                                                        }
                                                      },
                                                      [_vm._v("Editar")]
                                                    )
                                                  ]
                                                )
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.delete")
                                  ? _c(
                                      "b-button",
                                      {
                                        attrs: { block: "", variant: "danger" },
                                        on: {
                                          click: function($event) {
                                            return _vm.showMsgBoxTwo(
                                              soli.id,
                                              index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Borrar")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.show")
                                  ? _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          block: "",
                                          size: "sm",
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.$bvModal.show(
                                              "bv-modal-example" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Detalles")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$can("solicitud.show")
                                  ? _c(
                                      "b-modal",
                                      {
                                        attrs: {
                                          scrollable: "",
                                          id: "bv-modal-example" + index,
                                          "hide-footer": ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "modal-title",
                                              fn: function() {
                                                return [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t      Detalles de la solicitud\n\t\t\t\t\t\t\t\t    "
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("SolicitudesShow", {
                                          attrs: {
                                            solicitud: soli,
                                            busqueda: _vm.listaBusqueda,
                                            ciudadano: _vm.solicitudes
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "mt-3",
                                            attrs: {
                                              block: "",
                                              variant: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.$bvModal.hide(
                                                  "bv-modal-example" + index
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Cerrar")]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c(
                    "td",
                    { staticClass: "overflow-auto", attrs: { colspan: "6" } },
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
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("cedula")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("nombre")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "d-none d-md-block", attrs: { scope: "col" } },
          [_vm._v("usuario")]
        ),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("tramite")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _vm.errors.length > 0
      ? _c(
          "div",
          _vm._l(_vm.errors, function(index, error) {
            return _c(
              "div",
              { key: index, staticClass: "alert alert-danger" },
              [_vm._v("\n\t\t\t" + _vm._s(error) + "\n\t\t")]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.editarSolicitud($event)
          }
        }
      },
      [
        _c("div", { staticClass: "mb-2" }, [
          _c("div", {}, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "inputAddress" } }, [
                _vm._v("tramite")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitud.tramite.id,
                      expression: "solicitud.tramite.id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "tramite", name: "tramite" },
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
                        _vm.solicitud.tramite,
                        "id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.tramites, function(tramit) {
                  return _c(
                    "option",
                    { key: tramit.id, domProps: { value: tramit.id } },
                    [_vm._v(_vm._s(tramit.name))]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "inputAddress" } }, [
                _vm._v("estatus")
              ]),
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
                  attrs: { placeholder: "estutus" },
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
                    _vm.$set(_vm.solicitud, "descripcion", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-danger btn-lg btn-block",
          attrs: { type: "submit", name: "registrar-solicitud" }
        },
        [_vm._v("Editar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm.busqueda === false
    ? _c("div", { staticClass: "card" }, [
        _c("div", { attrs: { id: "solicitud" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("Solicitud")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("small", { staticClass: "text-muted" }, [
                _c("b", [_vm._v("Fecha: ")]),
                _vm._v(_vm._s(this.solicitud.fecha))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Descripcion: ")]),
              _vm._v(_vm._s(this.solicitud.descripcion))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Estado: ")]),
              _vm._v(
                _vm._s(this.solicitud.status == 1 ? "concluido" : "en espera")
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Usuario: ")]),
              _vm._v(
                _vm._s(
                  this.solicitud.usuario
                    ? this.solicitud.usuario.name
                    : "indefinido"
                )
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { attrs: { id: "ciudadano" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("ciudadano")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Nombre: ")]),
              _vm._v(_vm._s(this.solicitud.ciudadano.datos.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Apellido: ")]),
              _vm._v(_vm._s(this.solicitud.ciudadano.datos.apellido))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Nacionalidad: ")]),
              _vm._v(_vm._s(_vm.nacion))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Cedula: ")]),
              _vm._v(_vm._s(this.solicitud.ciudadano.datos.ci))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Correo: ")]),
              _vm._v(_vm._s(this.solicitud.ciudadano.datos.email))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { attrs: { id: "tramite" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("tramite")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("nombre: ")]),
              _vm._v(_vm._s(this.solicitud.tramite.name) + " ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("descripcion: ")]),
              _vm._v(_vm._s(this.solicitud.tramite.description))
            ])
          ])
        ])
      ])
    : _c("div", { staticClass: "card" }, [
        _c("div", { attrs: { id: "solicitud" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("Solicitud")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("small", { staticClass: "text-muted" }, [
                _c("b", [_vm._v("Fecha: ")]),
                _vm._v(_vm._s(this.solicitud.fecha))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Descripcion: ")]),
              _vm._v(_vm._s(this.solicitud.descripcion))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Estado: ")]),
              _vm._v(
                _vm._s(this.solicitud.status == 1 ? "concluido" : "en espera")
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Usuario: ")]),
              _vm._v(
                _vm._s(
                  this.solicitud.usuario
                    ? this.solicitud.usuario.name
                    : "indefinido"
                )
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { attrs: { id: "ciudadano" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("ciudadano")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Nombre: ")]),
              _vm._v(_vm._s(this.ciudadano.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Apellido: ")]),
              _vm._v(_vm._s(this.ciudadano.apellido))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Cedula: ")]),
              _vm._v(_vm._s(this.ciudadano.ci))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("Correo: ")]),
              _vm._v(_vm._s(this.ciudadano.email))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { attrs: { id: "tramite" } }, [
          _c("h2", { staticClass: "card-title card-header" }, [
            _vm._v("tramite")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("nombre: ")]),
              _vm._v(_vm._s(this.solicitud.tramite.name) + " ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-text" }, [
              _c("b", [_vm._v("descripcion: ")]),
              _vm._v(_vm._s(this.solicitud.tramite.description))
            ])
          ])
        ])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ListaSolicitudes.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ListaSolicitudes.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaSolicitudes.vue?vue&type=template&id=4bb649ba& */ "./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba&");
/* harmony import */ var _ListaSolicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaSolicitudes.vue?vue&type=script&lang=js& */ "./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListaSolicitudes.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListaSolicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListaSolicitudes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaSolicitudes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaSolicitudes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaSolicitudes.vue?vue&type=template&id=4bb649ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaSolicitudes.vue?vue&type=template&id=4bb649ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaSolicitudes_vue_vue_type_template_id_4bb649ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SolicitudesEdit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SolicitudesEdit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitudesEdit.vue?vue&type=template&id=5e8309e1& */ "./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1&");
/* harmony import */ var _SolicitudesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitudesEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SolicitudesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SolicitudesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudesEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudesEdit.vue?vue&type=template&id=5e8309e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesEdit.vue?vue&type=template&id=5e8309e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesEdit_vue_vue_type_template_id_5e8309e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SolicitudesShow.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SolicitudesShow.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitudesShow.vue?vue&type=template&id=2a587558& */ "./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558&");
/* harmony import */ var _SolicitudesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitudesShow.vue?vue&type=script&lang=js& */ "./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SolicitudesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SolicitudesShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudesShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudesShow.vue?vue&type=template&id=2a587558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SolicitudesShow.vue?vue&type=template&id=2a587558&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudesShow_vue_vue_type_template_id_2a587558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);