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
import ListUsuarios from './components/ListUsuarios';
import UsuariosShow from './components/UsuariosShow';
import AuthPerfil from './components/AuthPerfil';
Vue.use(Router)

export default new Router({

    routes:[
        {
            path: '/home',
            name: 'inicio',
            component: inicio
        },
        {
            path: '/',
            name: 'inicio',
            component: inicio
        },
        {//RUTAS SOLICITUDES
            path: '/solicitudes',
            name: 'solicitudes',
            component: solicitudes,
            children: [
                {path: '/', component: ListaSolicitudes, name: 'ListaSolicitudes'},
                {path: 'estadisticas', component: Graficos, name: 'TablaAnual'}
            ]
        },
        {//RUTAS NOTIFICACIONES
            path: '/notificaciones',
            name: 'notificaciones',
            component: notificaciones
        },
        {//RUTAS PERFIL
            path: '/perfil',
            name: 'perfil',
            component: perfil
        },
        {//RUTAS TRAMITES
            path: '/tramites',
            name: 'tramites',
            component: tramites
        },
        {//RUTAS USUARIOS
            path: '/usuarios',
            name: 'usuarios',
            component: usuarios,
            children: [
                {path: '/', component: ListUsuarios, name: 'ListUsuarios'},
                {path: ':id', component: UsuariosShow, name: 'UsuariosShow', props: true}
                ]
        },
        {//rutas CIUDADANOS
            path: '/ciudadanos',
            name: 'ciudadanos',
            component: ciudadanos,
            children: [
                {path: '/', component: ListCiudadanos, name: 'ListCiudadanos'},
                {path: 'create', component: ciudadanosCreate, name: 'ciudadanosCreate'},
                {path: 'edit/:id', component: ciudadanosEdit, name: 'ciudadanosEdit', props: true},
            ]
        },
        {//RUTAS authperfil
            path: '/authperfil',
            name: 'authperfil',
            component: AuthPerfil,
           
        }

    ],

    mode: 'history' // elimina el hash de las url
})