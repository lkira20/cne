import Vue from 'vue';
import Vuex from 'vuex';
import usuarios from './modules/usuarios';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
	//DESHABILITAR EN PRODUCCION
	state:{
		usuario: {},
		permisos: localStorage.getItem('permiss') || null,
		tramiteFormEdit: {
			id: 0,
			name: '',
			description: ''
		},
		token: localStorage.getItem('access_token') || null,
	},
	getters:{
	    loggedIn(state) {
	      return state.token !== null
	    }
  	},
	mutations:{
		retrieveToken(state, token) {
	      state.token = token
	    },
	    destroyToken(state) {
	      state.token = null
	    },
	    establecerUsuario(state, usuario){

	    	state.usuario = usuario;
	    },
	    establecerPermisos(state, permisos){

	    	state.permisos = permisos;
	    },
		insertTramiteFormEdit(state, tramite){
			state.tramiteFormEdit.id = tramite.id;
			state.tramiteFormEdit.name = tramite.name;
			state.tramiteFormEdit.description = tramite.description;
		},
		nameEdit(state, name){
			state.tramiteFormEdit.name = name;
		},
		descriptionEdit(state, description){
			state.tramiteFormEdit.description = description;
		}
	},
	actions:{
		retrieveToken(context, credentials) {

	      return new Promise((resolve, reject) => {
	        axios.post('/api/login', {
	          email: credentials.email,
	          password: credentials.password,
	        }).then(response => {
	            //console.log(response)
	            const token = response.data.access_token
	            localStorage.setItem('access_token', token)
	            context.commit('retrieveToken', token)

	            resolve(response)
	        }).catch(error => {
	            //console.log(error)
	            reject(error)
	        })
	    	})
	    },
	    pedirUsuario(context){

	    		axios.get('/api/user', {headers: {Authorization: "Bearer "+ context.state.token}}).then(response => {
	    			const usuario = response.data;
	    			context.commit('establecerUsuario', usuario);
	    			console.log(this.state.usuario)
	    		}).catch(error => {
	    		
	    		})
	   
	    },
	    destroyToken(context) {
      
		      if (context.getters.loggedIn){
	        
	        return new Promise((resolve, reject) => {
	          axios.post('/api/logout', '', {
	              headers: { Authorization: "Bearer " + context.state.token }
	            })
	            .then(response => {
	              //console.log(response)
	              localStorage.removeItem('access_token')
	              context.commit('destroyToken')
	  
	              resolve(response)
	            })
	            .catch(error => {
	              //console.log(error)
	              localStorage.removeItem('access_token')
	              context.commit('destroyToken')

	              reject(error)
	            })
	        })

	      }
	    },
	    pedirPermisos(context){

	    	axios.get('/api/permisos', {headers: {Authorization: "Bearer "+ context.state.token}}).then(response => {
	    		const permisos = response.data;
	    		localStorage.setItem('permiss', permisos)
	    		context.commit('establecerPermisos', permisos);
	    		console.log(response);
	    	}).catch(e => {
	    		console.log(e.response);
	    	});
	    }
	},
	modules:{
		usuarios
	}
});