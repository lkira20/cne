<template>
	<div>
		<h1 class="text-center">Lista <router-link class="btn btn-primary" :to="{name: 'ciudadanosCreate'}">Nuevo</router-link></h1>
		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">Nombre</th>
		      <th scope="col">Apellido</th>
		      <th scope="col">Cedula</th>
		      <th scope="col">Email</th>
		      <th scope="col">Opciones</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="ciudadano of lista" :key="ciudadano.id">
		      <th scope="row">{{ ciudadano.name }}</th>
		      <td>{{ ciudadano.apellido }}</td>
		      <td>{{ ciudadano.ci }}</td>
		      <td>{{ ciudadano.email }}</td>
		      <td>
		      	<button class="btn btn-link">editar</button>
		      	<button class="btn btn-danger">Eliminar</button>
		      </td>
		    </tr>
		  </tbody>
		</table>
	</div>
</template>

<script type="text/javascript">

	export default{
		components:{
		
		},
		data(){
			return{
			lista: []
			}
		},
		method(){

		},
		created(){

			axios.get('/api/ciudadano').then(datos => {
				console.log(datos.data);
				this.lista = datos.data.data;
			});
		}
	}

</script>

<style type="text/css">
	
</style>