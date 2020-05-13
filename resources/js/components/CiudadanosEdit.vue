<template>
	<div class="card p-3 shadow">
		<form @submit.prevent='editar' method="post">
			<h2>Editar ciudadano </h2>
		  <div class="form-row">
		    <div class="col-12 col-md-6 form-group">
		    	<label for="inputEmail4">Nombre</label>
		     	<input type="text" class="form-control" placeholder="nombre" name="Nombre" v-model="nombre">
		    </div>
		    <div class="col-12 col-md-6 form-group">
		    	<label for="inputEmail4">Apellido</label>
		     	<input type="text" class="form-control" placeholder="apellido" name="apellido" v-model="apellido">
		    </div>
		    <div class="col-12 col-md-6 form-group">
		    	<label for="inputEmail4">Cedula</label>
		    	<input type="number" class="form-control" placeholder="cedula" name="cedula" v-model="cedula">
		    </div>
		    <div class="col-12 col-md-6 form-group">
		    	<label for="inputEmail4">Email</label>
		    	<input type="email" class="form-control" placeholder="email" name="email" v-model="email">
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
				email: ''
			}
		},
		methods:{
			editar(){
				//objeto de envio
				this.ciudadano.name = this.nombre;
				this.ciudadano.apellido = this.apellido;
				this.ciudadano.ci = this.cedula;
				this.ciudadano.email = this.email;

				axios.put('/api/ciudadano/'+this.id, this.ciudadano).then(datos => {
					console.log(datos);
					this.$router.push({path: '/ciudadanos/'});
				});
			}
		},
		created(){
			
			axios.get('/api/ciudadano/show/'+this.id).then(datos => {
				console.log(this.ciudadano);

				this.ciudadano = datos.data;
				console.log(this.ciudadano);
				//le asigno el valor a los campos
				this.nombre = this.ciudadano.name;
				this.apellido = this.ciudadano.apellido;
				this.cedula = this.ciudadano.ci;
				this.email = this.ciudadano.email;
			});

		},
	}

</script>

<style type="text/css">
	
</style>