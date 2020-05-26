<template>
	<div>
		<h2 class="text-center">Notas <b-button v-if="$can('notificaciones.create')" v-b-modal.modal-1 variant="primary">Nuevo</b-button></h2>

		<div class="alert alert-warning alert-dismissible fade show" role="alert" v-for="(notificacion, index) in notificaciones" :key="notificacion.id">
			<h4 class="alert-heading">{{notificacion.asunto}}</h4>
			<small class="text-muted">{{fecha(notificacion.created_at)}}</small>
		    <p>
		      {{notificacion.description}}
		    </p>
			<button v-if="$can('notificaciones.delete')" @click="eliminarNotificacion(notificacion.id)"  type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<!--MODAL DE CREAR-->
		<b-modal v-if="$can('notificaciones.create')" id="modal-1" title="Crear nota" ok-title="crear" @ok="crearNotificacion">
		<form>
			<div class="form-group">
				<label>Asunto de la nota</label>
				<input type="text" name="nombre-tramite" class="form-control" placeholder="asunto" v-model="envio.asunto">
			</div>
			<div class="form-group">
				<label>Descripcion de la nota</label>
				<textarea name="descripcion-tramite" class="form-control" placeholder="Descripcion" rows="4" v-model="envio.description"></textarea>
			</div>
		</form> 
		</b-modal>
	</div>
</template>

<script type="text/javascript">

	//LAS NOTIFIACIONES Y LAS NOTAS SON LO MISMO, A ULTIMO INSTANTE DECIDI CAMBIARLE EL NOMBRE A NOTAS
	export default{
		components:{
		},
		data(){
			return{
				notificaciones: [],
				envio:{
					asunto: '',
					description: ''
				}
			}
		},
		methods:{
			listarNotificaciones(){

				axios.get('/api/notificaciones').then(response => {
					
					this.notificaciones = response.data;
					console.log(this.notificaciones);
				}).catch(e => {
					console.log(e.response);
				});
			},
			fecha(created_at){//formateo de la fecha
				let formateado = created_at.split('T');
				return formateado[0];
			},
			crearNotificacion(){

				axios.post('/api/notificaciones', this.envio).then(response => {

					this.notificaciones.splice(0,0, response.data);
				}).catch(e => {
					console.log(e.response);
				})
			},
			eliminarNotificacion(id){

				axios.delete('api/notificaciones/'+id).then(response => {

					console.log(response);
				}).catch(e=> {
					console.log(e.response);
				})
			}
		},
		computed:{

		},
		created(){

			this.listarNotificaciones();
			
		}
	}

</script>

<style type="text/css">
	
</style>