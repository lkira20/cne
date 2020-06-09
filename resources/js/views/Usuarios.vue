<template>
	<div class="">
		<h1 class="text-center">Usuarios <b-button v-if="$can('perfiles.create')" v-b-modal.my-modal variant="primary">Nuevo</b-button></h1>
		<router-view></router-view>
		<!--MODAL DE CREAR-->
		<b-modal id="my-modal" title="crear usuario" size="lg" @ok="crearUsuario">
			<div>
				
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
						<b-col sm="12" md="6">
						<b-form-group id="input-group-5" label="Contraseña:" label-for="contraseña">
				        	<b-form-input id="contraseña" type="password" required placeholder="Nueva contraseña" v-model="envio.password"></b-form-input>
						</b-form-group>
						</b-col>
						<b-col sm="12" md="6">
						<b-form-group id="input-group-6" label="Confirme la contraseña:" label-for="password_confirmation">
				        	<b-form-input id="password_confirmation" type="password" required placeholder="Confirme la contraseña" v-model="envio.password_confirmation"></b-form-input>
						</b-form-group>
						</b-col>
						<!--CHECK DE LOS ROLES-->
						<b-col sm="12" md="12">
						<b-form-group label="Asignar roles:">
					      <b-form-checkbox-group id="checkbox-group-2" v-model="envio.roles" name="flavour-2">
					        <b-form-checkbox v-for="option in options" :key="option.id" :value="option.name">{{option.name}}</b-form-checkbox>
					      </b-form-checkbox-group>
					    </b-form-group>
						</b-col>
					</b-row>
				
			</div>
		</b-modal>
	</div>
</template>

<script type="text/javascript">
	import ListUsuarios from '../components/ListUsuarios'
	import {mapActions, mapMutations} from 'vuex'
	export default{
		components:{
			ListUsuarios
		},
		data(){
			return {
				options: [],
				selected: [],
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
			...mapActions('usuarios', ['consultarListaUsuarios']),
			...mapMutations('usuarios', ['limpiarCampos']),
			listarRoles(){

				axios.get('/api/roles', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

					this.options = response.data
				}).catch(e => {
					console.log(e)
				});
			},
			crearUsuario(){

				axios.post('/api/register', this.envio, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					console.log(response);
					this.consultarListaUsuarios();
					
					
					this.envio.name = '';
					this.envio.apellido = '';
					this.envio.email = '';
					this.envio.password = null;
					this.envio.password_confirmation = null;
					this.envio.ci = null;
					this.envio.roles = [];
				}).catch(e => {
					console.log(e.response)
				});
			}
		},
		created(){
			this.listarRoles();
		}
	}

</script>

<style type="text/css">
	
</style>