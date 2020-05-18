<template>
	<div>
			<form @submit.prevent="editarSolicitud">
				<div class="mb-2">
					<div class="">	
			  			<div class="form-group">
			  				<label for="inputAddress">tramite</label>
							 <select  id="tramite" v-model="solicitud.tramite.id" name="tramite" class="form-control">
							 	<option v-for="tramit in tramites" :key="tramit.id" :value="tramit.id">{{tramit.name}}</option>						 	
	                         </select>
			  			</div>
			 
			  			<div class="form-group">
			  				<label for="inputAddress">estatus</label>
			  				<select class="form-control" placeholder="estutus" v-model="solicitud.status">
			  					<option value="1"> atendido </option>
			  					<option value="0"> pendiente </option>
			  				</select>

			  			</div>

			  			<div class="form-group">
			  				<label for="descripcion">Descripcion de solicitud.</label>
			  				<textarea class="form-control" id="descripcion" rows="3" name="descripcion" v-model="solicitud.descripcion"></textarea>
			  			</div>
			  			<div class="text-center mb-3">
			  				<button type="submit" class="btn btn-outline-danger btn-lg btn-block" name="registrar-solicitud">Editar</button>
			  			</div>
		  			</div>
		  		</div>
		  	</form>
	</div>
		
</template>

<script type="text/javascript">
	
	export default {
		props: {
			solicitud: Object,
			modal: String
		},
		data(){
			return{
				tramites: [], //lista de tramites
				envio: {//OBJETO DE ENVIO PARA EDITAR
					descripcion: '',
					status: 0,
					tramite_id: 0
				}
			}
		},
		methods:{
			editarSolicitud(){
				//CONFIGURAR EL OBJETO DE ENVIO
				this.envio.descripcion = this.solicitud.descripcion;
				this.envio.status = this.solicitud.status;
				this.envio.tramite_id = this.solicitud.tramite.id;

				axios.put('/api/solicitud/'+this.solicitud.id, this.envio).then(response => {
					console.log(response.data);
					this.$bvModal.hide(this.modal);
				}).catch(e => {
					console.log(e.response);
				});
			},
			
		},
		created(){
			//CONSULTA DE LOS TRAMITES PARA COLOCARLOS EN EL SELECT
			axios.get('/api/tramite').then(response => {
				
				this.tramites = response.data;
			}).catch(e => {
				console.log(e);
			});
		}
	}
</script>