import Vue from 'vue';
import Vuex from 'vuex';
import usuarios from './modules/usuarios';
Vue.use(Vuex);

export default new Vuex.Store({
	//DESHABILITAR EN PRODUCCION
	state:{
		tramiteFormEdit: {
			id: 0,
			name: '',
			description: ''
		}
	},
	mutations:{
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

	},
	modules:{
		usuarios
	}
});