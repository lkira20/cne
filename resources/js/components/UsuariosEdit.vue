<template>
			<div>
				<b-form @submit.prevent="actualizar()">
					<b-row>
						<b-col sm="12" md="6">
							<b-form-group id="input-group-1" label="Nombre:" label-for="nombre">
					        	<b-form-input id="nombre" type="text" required placeholder="Nombre" v-model="envio.name"></b-form-input>
							</b-form-group>
						</b-col>
						<b-col sm="12" md="6">
							<b-form-group id="input-group-2" label="Apellido:" label-for="apellido">
					        	<b-form-input id="apellido" type="text" required placeholder="Apellido" v-model="envio.apellido"></b-form-input>
							</b-form-group>
						</b-col>
						<b-col sm="12" md="6">
							<b-form-group id="input-group-3" label="Email:" label-for="email">
					        	<b-form-input id="email" type="email" required placeholder="Email" v-model="envio.email"></b-form-input>
							</b-form-group>
						</b-col>
						<b-col sm="12" md="6">
							<b-form-group id="input-group-4" label="Cedula:" label-for="cedula">
					        	<b-form-input id="cedula" type="number" required placeholder="Cedula" v-model="envio.ci"></b-form-input>
							</b-form-group>
						</b-col>
						<!--CHECK DE LOS ROLES-->
						<b-col sm="12" md="12">
						<b-form-group label="Asignar roles:">
							<b-form-checkbox-group
					        id="checkbox-group-1"
					        v-model="envio.roles"
					        :options="options"
					        name="flavour-1"
					      ></b-form-checkbox-group>
					    </b-form-group>
				
						</b-col>
					</b-row>
					<b-row align-h="end">
					<b-button class="mr-3" variant="danger" type="submit">Editar</b-button>
					</b-row>
				</b-form>
			</div>
</template>

<script type="text/javascript">
	import {mapActions, mapMutations, mapState} from 'vuex'

	export default {
		props: {
			usuario: Object
		},
		data(){
			return{
				options: [],
				envio:{
					name: '',
					apellido: '',
					email: '',
					password: null,
					password_confirmation: null,
					ci: null,
					roles: []
					}
			}
		},
		methods:{
			...mapActions('usuarios',['consultarListaUsuarios']),
			listarRoles(){

				axios.get('/api/roles', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

					for(let role of response.data){
						this.options.push(role.name);
					}

				}).catch(e => {
					console.log(e);
				});
			},
			actualizar(){

				axios.put('/api/perfiles/'+this.usuario.id, this.envio, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					//console.log(response);
					this.$bvModal.hide(`my-modal-${this.usuario.id}`);
					this.consultarListaUsuarios();
				}).catch(e => {
					console.log(e.response);
					this.$bvModal.hide(`my-modal-${this.usuario.id}`);
				});

			}
		},
		computed:{
			//...mapState('usuarios', ['envio']),
			//...mapMutations('usuarios', ['llenarEnvio'])
		},
		created(){
			//FORMATEO DE DATOS
			this.listarRoles();
			
			
			this.envio.name = this.usuario.name;
			this.envio.apellido = this.usuario.datos.apellido;
			this.envio.email = this.usuario.email;
			this.envio.ci = this.usuario.datos.ci;

			for(let role of this.usuario.roles){
				this.envio.roles.push(role.name);
			}
		}
	}
</script>