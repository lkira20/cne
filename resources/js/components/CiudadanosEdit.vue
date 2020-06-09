<template>
	<div class="card p-3 shadow" id="ciudadano">
		<div v-if="errors">
			<div class="alert alert-danger alert-dismissible fade show" role="alert" v-for="error in errors">
			  {{error}}
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		</div>
		<form @submit.prevent='editar' method="post">
			<h2>Editar Ciudadano</h2>
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
		    	<button type="submit" class="btn btn-primary">editar</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script type="text/javascript">

	export default{
		props: ['id'],
		data(){
			return {
				ciudadano: {},
				nombre: '',
				apellido: '',
				cedula: null,
				email: '',
				errors: {}//errores
			}
		},
		methods:{
			editar(){
				//objeto de envio
				this.ciudadano.name = this.nombre;
				this.ciudadano.apellido = this.apellido;
				this.ciudadano.ci = this.cedula;
				this.ciudadano.email = this.email;

				axios.put('/api/ciudadano/'+this.id, this.ciudadano, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
					console.log(datos);
					this.$router.push({path: '/ciudadanos/'});
				});
			}
		},
		created(){
			if (this.$can('ciudadano.edit')) {

				axios.get('/api/ciudadano/show/'+this.id, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
					console.log(this.ciudadano);

					this.ciudadano = datos.data;
					console.log(this.ciudadano);
					//le asigno el valor a los campos
					this.nombre = this.ciudadano.name;
					this.apellido = this.ciudadano.apellido;
					this.cedula = this.ciudadano.ci;
					this.email = this.ciudadano.email;
				});
			}else{
				this.$router.replace({name: '403'})
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
				return this.email.indexOf('@')  !== -1  ? true : false;
			}
		}
	}

</script>

<style type="text/css">
	#ciudadano{
		background-color: rgba(256,256,256,0.8);
	}
</style>