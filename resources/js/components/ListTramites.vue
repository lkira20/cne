<template>
	<div class="container" id="carta">
		<h1 class="text-center">Lista de documentos <b-button v-if="$can('tramite.create')" v-b-modal.modal-1 variant="primary">Nuevo</b-button></h1>

		<div class="text-center" v-if="loader == false">
			<b-spinner label="Loading..." variant="danger"></b-spinner>
		</div>
		<div class="list-group mb-5" v-if="loader == true">
			<div class="list-group-item list-group-item-action flex-column align-items-start"  v-for="(tramite,index) in tramites" :key="tramite.id">
				<div id="lista">
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">{{tramite.name}}</h5>
			    	</div>
			    	<p class="mb-1">{{tramite.description}}</p>
		    	</div>
		    	<div>
		    		<b-button v-if="$can('tramite.edit')" v-b-modal="`modal${tramite.id}`" variant="link" @click="$store.commit('insertTramiteFormEdit', tramite)">Editar</b-button>
		    		<b-modal v-if="$can('tramite.edit')" :id="`modal${tramite.id}`" title="Editar tramite" ok-title="editar" ok-variant="danger" @ok="editarTramite">
		    			<TramitesEdit/>
		    		</b-modal>
		    		<b-button v-if="$can('tramite.delete')" variant="danger" @click="showMsgBoxTwo(tramite.id, index)">Eliminar</b-button>
		    	</div>
			</div>
		</div>
		<div>
		  
		<!--MODAL DE CREAR-->
		<b-modal v-if="$can('tramite.create')" id="modal-1" title="Crear tramite" ok-title="crear" @ok="crearTramite">
		<form>
			<div class="form-group">
				<label>Nombre del tramite</label>
				<input type="text" name="nombre-tramite" class="form-control" placeholder="Nombre" v-model="envio.name" required>
			</div>
			<div class="form-group">
				<label>Descripcion del tramite</label>
				<textarea name="descripcion-tramite" class="form-control" placeholder="Descripcion" rows="4" v-model="envio.description" required></textarea>
			</div>
		</form> 
		</b-modal>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapState, mapMutations} from 'vuex';
	import TramitesEdit from './TramitesEdit'
	export default{
		components:{
			TramitesEdit
		},
		data(){
			return{		
				tramites: [],
				envio:{//OBJETO DE ENVIO AXIOS
					name:'',
					description: '',
					boxTwo: ''
				},
				loader: false
			}
		},
		methods:{
			listaTramites(){//LISTA DE LOS TRAMITES

				axios.get('/api/tramite', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

					this.tramites = response.data;
					this.loader = true;
					console.log(response.data);
				}).catch(e => {
					console.log(e.response);
				});
			},
			crearTramite(){

				axios.post('api/tramite', this.envio, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					console.log(response.data);
					this.tramites.splice(0,0, response.data);
				}).catch(e => {
					console.log(e.response);
				});
			},
			editarTramite(){

				axios.put('/api/tramite/'+this.tramiteFormEdit.id, this.tramiteFormEdit, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

					this.listaTramites();
				}).catch(e => {
					console.log(e.response);
				});
			},
			eliminarTramite(){

			},
			showMsgBoxTwo(tramite, index) {//MODAL DE ELIMINAR
		        this.boxTwo = ''
		        this.$bvModal.msgBoxConfirm('¿Esta seguro que desea eliminar este tramite?', {
		          title: 'Confirmacion',
		          size: 'sm',
		          buttonSize: 'sm',
		          okVariant: 'danger',
		          okTitle: 'SI',
		          cancelTitle: 'NO',
		          footerClass: 'p-2',
		          hideHeaderClose: false,
		          centered: true
		        }).then(value => {
		        	this.boxTwo = value;
		        	if(this.boxTwo == true){
			        	axios.delete('/api/tramite/'+tramite, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

			        		this.tramites.splice(index,1);
			        	}).catch(e => {

			        		console.log(e.response);
			        	});
		        	}
		    	}).catch(err => {
		            // An error occurred
		            console.log(err.response);
		        })
		    }
		},
		created(){

			this.listaTramites();
		},
		computed:{
			...mapState(['tramiteFormEdit']),
	
		}
	}

</script>

<style type="text/css">
	#carta{
		background-color: rgba(256,256,256,0.9);
	}
	#g {
		background-color: rgba(256,256,256,0.9);
	}
</style>