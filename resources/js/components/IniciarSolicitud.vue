<template>
	<div class="container">
			<form @submit.prevent="registrarSolicitud">
				<div class="card mb-2 shadow" id="carta">
					<div class="card-body">		
								
						<div class="form-row ">
			  				<div class="form-group col-12">
			  					<div>
			   						<h2 class="text-center mt-4">Iniciar Solicitud de documento</h2>
			  					</div>  
			  					<h5>Datos del ciudadano</h5>
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="cedula">cedula</label>
			  					<input type="number" class="form-control" id="cedula" placeholder="cedula" name="ci" v-model.number="solicitud.ci" required>

			  				</div>
			  				<div class="form-group col-md-6 text-center">
			  					<label :class="{'text-success': colorComprobante}">{{comprobante}}</label>
			  					<button class="form-control btn btn-primary d-block" @click.prevent="comprobarCedula">Comprobar</button>
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="nombre">nombre</label>
			  					<input type="text" class="form-control" id="nombre" required placeholder="nombre" name="name" v-model="solicitud.name" :disabled="desactivar">
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="apellido">apellido</label>
			  					<input type="text" class="form-control" required id="apellido" placeholder="apellido" name="apellido" v-model="solicitud.apellido" :disabled="desactivar">
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="email">email</label>
			  					<input type="email" class="form-control" id="email" placeholder="email" name="email" v-model="solicitud.email" :disabled="desactivar">
			  				</div>
			  				<div class="form-group col-md-6">
			  					<input type="number" class="form-control" id="ciudadano_id" name="ciudadano_id" v-model="solicitud.id" hidden>
			  				</div>
			  			</div>

			  			<hr>

				  		<div class="form-group col-12">
				  			<h5>Datos para la solicitud </h5>
				  		</div>

			  			<div class="form-group">
			  				<label for="tramite">tramite</label>
							 <select  id="tramite" v-model="solicitud.tramite" name="tramite" class="form-control" required>
							 	<option value="">seleccione algun tramite</option>
							 	<option v-for="tramit in tramites" :key="tramit.id" :value="tramit.id">{{tramit.name}}</option>						 	
	                         </select>
			  			</div>
			 
			  			<div class="form-group">
			  				<label for="status">estatus</label>
			  				<select id="status" class="form-control" placeholder="estatus" v-model="solicitud.status" required>
			  					<option value="1"> atendido </option>
			  					<option value="0"> pendiente </option>
			  				</select>

			  			</div>

			  			<div class="form-group">
			  				<label for="descripcion">Descripcion de solicitud.</label>
			  				<textarea class="form-control" id="descripcion" rows="3" name="descripcion" v-model="solicitud.descripcion" required></textarea>
			  			</div>
			  			<div class="text-center mb-3">
			  				<button type="submit" class="btn btn-primary btn-lg btn-block" name="registrar-solicitud">Registrar</button>
			  			</div>
		  			</div>
		  		</div>
		  	</form>
	</div>
		
</template>

<script type="text/javascript">
	export default{
		data(){
			return{//datos del ciudadano
				solicitud: {
					ci: null,
					name: '',
					apellido: '',
					email: '',
					id: null,
					tramite: null,//datos de la solicitud
					descripcion: '',
					status: false},
				desactivar: false,//desactivar campos de la consulta del ciudadano
				comprobante: 'comprobar si el usuario ya esta registrado.', //mensaje de comprobacion 
				colorComprobante: false,// cambia el color del texto del mensaje de comprobacion
				tramites: [] //lista de tramites
			}
		},
		methods:{
			comprobarCedula(){
				axios.get('/api/ciudadano/comprobar/'+this.solicitud.ci, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.colorComprobante = false;
					if (response.data == 'el ciudadano no esta registrado') {
						this.comprobante = response.data;
						this.desactivar = false;
					}else{

						this.solicitud.ci = response.data[0].ci;
						this.solicitud.name = response.data[0].name;
						this.solicitud.apellido = response.data[0].apellido;
						this.solicitud.email = response.data[0].email;
						this.solicitud.id = response.data[0].datoable_id;

						this.desactivar = true;
						this.comprobante = 'ciudadano encontrado';
						this.colorComprobante = true;
					}
				}).catch(e => {
					console.log(e.response);
				});
			},
			registrarSolicitud(){

				axios.post('/api/solicitud', this.solicitud, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

					this.$router.push('/solicitudes');
				}).catch(e => {
					console.log(e.response);
				});
			}
		},
		created(){
			//CONSULTA DE LOS TRAMITES PARA COLOCARLOS EN EL SELECT
			if (this.$can('solicitud.create')) {

				axios.get('/api/tramite', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					
					this.tramites = response.data;
				}).catch(e => {
					console.log(e);
				});
			}else{
				this.$router.replace({name: '403'})
			}
			
		}
	}

</script>

<style type="text/css" scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}

#carta{
	background-color: rgba(256,256,256,0.9);
}
</style>