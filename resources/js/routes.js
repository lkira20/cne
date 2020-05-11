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


Vue.use(Router)

export default new Router({

    routes:[
        {
            path: '/',
            name: 'inicio',
            component: inicio
        },
        {//RUTAS SOLICITUDES
            path: '/solicitudes',
            name: 'solicitudes',
            component: solicitudes
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
            component: usuarios
        },
        {//rutas CIUDADANOS
            path: '/ciudadanos',
            name: 'ciudadanos',
            component: ciudadanos,
            children: [
                {path: '', component: ListCiudadanos, name: 'ListCiudadanos'},
                {path: 'create', component: ciudadanosCreate, name: 'ciudadanosCreate'}
            ]
        }

    ],

    mode: 'history' // elimina el hash de las url
})