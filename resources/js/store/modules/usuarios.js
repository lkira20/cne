export default {
	namespaced: true,
	state: {
		listaUsuarios: [],
		envio:{
			name: '',
			apellido: '',
			email: '',
			password: null,
			password_confirmation: null,
			ci: null,
			roles: []
			}
	},
	mutations:{
		listarUsuarios(state, lista){
			state.listaUsuarios = lista;
		},
		limpiarCampos(state){
			state.listaUsuarios = [];
		},
		eliminar(state, usuario){
			state.listaUsuarios.splice(usuario,1);
		},
		llenarEnvio(state, usuario){

			state.envio.name = this.usuario.name;
			state.envio.apellido = this.usuario.datos.apellido;
			state.envio.email = this.usuario.email;
			state.envio.ci = this.usuario.datos.ci;
			state.envio.role = []

			//this.commit('vaciarRole');
			console.log(state.envio.role);
			for(let role of this.usuario.roles){
			state.envio.roles.push(role.name);
			}
		},
		vaciarRole(state){
			state.envio.role = [];
		}
	},
	actions:{
		consultarListaUsuarios(context){

			axios.get('/api/perfiles', {headers: {Authorization: "Bearer "+ this.state.token}}).then(response => {

				context.commit('listarUsuarios', response.data);
			}).catch(e => {
				console.log(e);
			});
		}
	}
}