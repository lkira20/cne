import Vue from 'vue'
import Router from 'vue-router'

import inicio from './views/Inicio'
import solicitudes from './views/Solicitudes'
import notificaciones from './views/Notificaciones'
import perfil from './views/Perfil'
import usuarios from './views/Usuarios'
import tramites from './views/Tramites'
import ciudadanos from './views/Ciudadanos'
import ciudadanosCreate from './components/CiudadanosCreate'
import ListCiudadanos from './components/ListCiudadanos'
import ciudadanosEdit from './components/CiudadanosEdit'
import ListaSolicitudes from './components/ListaSolicitudes'
import TablaAnual from './components/TablaAnual'
import Graficos from './components/Graficos';
import GraficoFiltro from './components/GraficoFiltro';
import ListUsuarios from './components/ListUsuarios';
import UsuariosShow from './components/UsuariosShow';
import AuthPerfil from './components/AuthPerfil';
import IniciarSolicitud from './components/IniciarSolicitud';
//informativas
import Informacion from './components/Informacion';
import Procedimiento from './components/Procedimiento';
import Requisitos from './components/Requisitos';
import MiSolicitud from './components/MiSolicitud';
// Pages
import NotFound from './views/NotFound'
import Login from './views/Login'
import Logout from './views/Logout'
import sinAutorizacion from './views/403'

import dashboard from './components/AuthPerfil'
Vue.use(Router)

import Permissions from './mixins/Permissions';

import ListaGraficos from './components/ListaGraficos';

export default new Router({

    routes:[
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/home',
            name: 'inicio',
            component: dashboard,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/',
            name: 'publico',
            component: Informacion,
            children: [
                {path: '/', component: Procedimiento, name: 'Procedimiento'},
                {path: '/requisitos', component: Requisitos, name: 'Requisitos'},
                {path: '/mi-solicitud', component: MiSolicitud, name: 'MiSolicitud'}
            ],
        },
        {//RUTAS SOLICITUDES
            path: '/solicitudes',
            name: 'solicitudes',
            component: solicitudes,
            children: [
                {path: '/', component: ListaSolicitudes, name: 'ListaSolicitudes'},
                {path: 'estadisticas', component: ListaGraficos, name: 'TablaAnual'},
                {path: 'filtro/:ano', component: GraficoFiltro, name: 'filtro', props: true},
                {path: 'iniciarSolicitud', component: IniciarSolicitud, name: 'IniciarSolicitud'},
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {//RUTAS NOTIFICACIONES
            path: '/notificaciones',
            name: 'notificaciones',
            component: notificaciones,
            meta: {
                requiresAuth: true,
            }
        },
        {//RUTAS PERFIL
            path: '/perfil',
            name: 'perfil',
            component: perfil,
            meta: {
                requiresAuth: true,
            }
        },
        {//RUTAS TRAMITES
            path: '/tramites',
            name: 'tramites',
            component: tramites,
            meta: {
                requiresAuth: true,
            }
        },
        {//RUTAS USUARIOS
            path: '/usuarios',
            name: 'usuarios',
            component: usuarios,
            children: [
                {path: '/', component: ListUsuarios, name: 'ListUsuarios'},
                {path: ':id', component: UsuariosShow, name: 'UsuariosShow', props: true}
                ],
            meta: {
                requiresAuth: true,
            }
        },
        {//rutas CIUDADANOS
            path: '/ciudadanos',
            name: 'ciudadanos',
            component: ciudadanos,
            children: [
                {path: '/', component: ListCiudadanos, name: 'ListCiudadanos'},
                {path: 'create', component: ciudadanosCreate, name: 'ciudadanosCreate'},
                {path: 'edit/:id', component: ciudadanosEdit, name: 'ciudadanosEdit', props: true},
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {//RUTAS authperfil
            path: '/authperfil',
            name: 'authperfil',
            component: AuthPerfil,
            meta: {
                requiresAuth: true,
            }
           
        },
        { 
            path: '/404', 
            name: '404', 
            component: NotFound,
        },
        ,
        { 
            path: '/403', 
            name: '403', 
            component: sinAutorizacion,
        },
        { 
            path: '*', 
            redirect: '/404', 
        },

    ],

    mode: 'history' // elimina el hash de las url
})