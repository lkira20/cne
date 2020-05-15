<template>
	<div class="card p-3 shadow">
		<div v-if="errors">
			<div class="alert alert-danger alert-dismissible fade show" role="alert" v-for="error in errors">
			  {{error}}
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		</div>
		<form @submit.prevent='registrar' method="post">
			<h2>Registrar Ciudadano</h2>
		  <div class="form-row">
		  	<!--
		    <div class="col-12 col-md-6 form-group">
		    	<label for="inputEmail4">Nombre</label>
		     	<input type="text" class="form-control" placeholder="nombre" name="Nombre" v-model="nombre">
		    </div>
			-->
		    <div class="col-12 col-md-6 form-group" role="group">
			    <label for="input-live">Nombre:</label>
			    <b-form-input
			      id="input-live"
			      v-model="nombre"
			      :state="nameState"
			      aria-describedby="input-live-help input-live-feedback"
			      placeholder="Nombre del ciudadano"
			      trim
			    ></b-form-input>

			    <!-- This will only be shown if the preceding input has an invalid state -->
			    <b-form-invalid-feedback id="input-live-feedback">
			      minimo 3 letras y maximo 15
			    </b-form-invalid-feedback>

			    <!-- This is a form text block (formerly known as help block) -->
			</div>

			<div class="col-12 col-md-6 form-group" role="group">
			    <label for="input-live">Apellido:</label>
			    <b-form-input
			      id="input-live"
			      v-model="apellido"
			      :state="apellidoState"
			      aria-describedby="input-live-help input-live-feedback"
			      placeholder="Apellido del ciudadano"
			      trim
			    ></b-form-input>

			    <!-- This will only be shown if the preceding input has an invalid state -->
			    <b-form-invalid-feedback id="input-live-feedback">
			      minimo 3 letras y maximo 15
			    </b-form-invalid-feedback>

			    <!-- This is a form text block (formerly known as help block) -->
			</div>

			<div class="col-12 col-md-6 form-group" role="group">
			    <label for="input-live">Cedula:</label>
			    <b-form-input
			      id="input-live"
			      v-model="cedula"
			      :state="cedulaState"
			      aria-describedby="input-live-help input-live-feedback"
			      placeholder="Cedula del ciudadano"
			      trim 
			      type="number"
			    ></b-form-input>

			    <!-- This will only be shown if the preceding input has an invalid state -->
			    <b-form-invalid-feedback id="input-live-feedback">
			      cedula no valida
			    </b-form-invalid-feedback>

			    <!-- This is a form text block (formerly known as help block) -->
			</div>

			<div class="col-12 col-md-6 form-group" role="group">
			    <label for="input-live">Email:</label>
			    <b-form-input
			      id="input-live"
			      v-model="email"
			      :state="emailState"
			      aria-describedby="input-live-help input-live-feedback"
			      placeholder="email del ciudadano"
			      trim 
			      type="email"
			    ></b-form-input>

			    <!-- This will only be shown if the preceding input has an invalid state -->
			    <b-form-invalid-feedback id="input-live-feedback">
			      formato no valido
			    </b-form-invalid-feedback>

			    <!-- This is a form text block (formerly known as help block) -->
			</div>

			<div>
				<b-button variant="primary" @click="registrar">Registrar</b-button>
			</div>

		  </div>
		</form>
	</div>
</template>

<script type="text/javascript">

	export default{
		data(){
			return {
				ciudadano: {},
				nombre: '',
				apellido: '',
				cedula: null,
				email: '',
				errors: {}//errores de la validacion
			}
		},
		methods: {
			registrar(){
				//establecer objeto de envio
				this.ciudadano.name = this.nombre;
				this.ciudadano.apellido = this.apellido;
				this.ciudadano.ci = this.cedula;
				this.ciudadano.email = this.email;
				//enviar
				
				axios.post('/api/ciudadano', this.ciudadano).then(response => {
					console.log(response);

					this.$router.push({path: '/ciudadanos/', params: {success: 'usuario creado exitosamente'}});
				}).catch(e => {
					console.log(e.response.data);
					this.errors = e.response.data.errors;
				});
				
			}
		},
		computed:{
			nameState(){
				if (this.nombre.length == 0) {
					return null;
				}
				return this.nombre.length > 2 && this.nombre.length < 16 ? true : false
			},
			apellidoState(){
				if (this.apellido.length == 0) {
					return null;
				}
				return this.apellido.length > 2 && this.apellido.length < 16 ? true : false
			},
			cedulaState(){
				if(this.cedula > 0){
					return this.cedula.length > 8 ? false : null;
				}
				return null;				
			},
			emailState(){
				if (this.email.length == 0) {
					return null;
				}
				let arroba = this.email.indexOf('@');
				return this.email.indexOf('@')  !== -1 && this.email.length > arroba+1   ? true : false;
			}
		}
	}

</script>

<style type="text/css">
	
</style>