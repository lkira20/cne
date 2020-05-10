import Vue from 'vue'
import Router from 'vue-router'

import inicio from './views/Inicio'
import solicitudes from './views/Solicitudes'
import notificaciones from './views/Notificaciones'
import perfil from './views/Perfil'
import usuarios from './views/Usuarios'
import tramites from './views/Tramites'


Vue.use(Router)

export default new Router({

	routes:[
		{
			path: '/',
			name: 'inicio',
			component: inicio
		},
		{
			path: '/solicitudes',
			name: 'solicitudes',
			component: solicitudes
		},
		{
			path: '/notificaciones',
			name: 'notificaciones',
			component: notificaciones
		},
		{
			path: '/perfil',
			name: 'perfil',
			component: perfil
		},
		{
			path: '/tramites',
			name: 'tramites',
			component: tramites
		},
		{
			path: '/usuarios',
			name: 'usuarios',
			component: usuarios
		}
	],

	mode: 'history' // elimina el hash de las url
})