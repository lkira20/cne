<template>
	<div>
		<div class="card mt-3">
			<div class="card-header card-title">
				<h2 class="text-center">Cantidades de solicitudes por meses</h2>
			</div>
			<div class="d-flex mt-3">
					<form class="form-inline ml-auto" @submit.prevent="filtrar">
		     			<input class="form-control" type="search" placeholder="Año" aria-label="Search" v-model="busqueda">
		     			<button class="btn btn-outline-primary" type="submit">buscar</button>
		    		</form>
	    	</div>
	    	<div class="alert alert-danger" v-if="error">
	    		No se han encontrado datos con este año
	    	</div>
			<div class="card-body">
				<div class="text-center" v-if="loader == false">
			    	<b-spinner label="Loading..." variant="danger"></b-spinner>
			    </div>
				<table class="table table-striped" v-if="loader == true">
				  <thead>
				    <tr>
				      <th scope="col">Mes</th>
				      <th scope="col">Atendidos</th>
				      <th scope="col">Pendientes</th>
				      <th scope="col">Total</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">Enero</th>
				      <td>{{atendidos.enero}}</td>
				      <td>{{espera.enero}}</td>
				      <td>{{globales.enero}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Febrero</th>
				      <td>{{atendidos.febrero}}</td>
				      <td>{{espera.febrero}}</td>
				      <td>{{globales.febrero}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Marzo</th>
				      <td>{{atendidos.marzo}}</td>
				      <td>{{espera.marzo}}</td>
				      <td>{{globales.marzo}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Abril</th>
				      <td>{{atendidos.abril}}</td>
				      <td>{{espera.abril}}</td>
				      <td>{{globales.abril}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Mayo</th>
				      <td>{{atendidos.mayo}}</td>
				      <td>{{espera.mayo}}</td>
				      <td>{{globales.mayo}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Junio</th>
				      <td>{{atendidos.junio}}</td>
				      <td>{{espera.junio}}</td>
				      <td>{{globales.junio}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Julio</th>
				      <td>{{atendidos.julio}}</td>
				      <td>{{espera.julio}}</td>
				      <td>{{globales.julio}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Agosto</th>
				      <td>{{atendidos.agosto}}</td>
				      <td>{{espera.agosto}}</td>
				      <td>{{globales.agosto}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Septiembre</th>
				      <td>{{atendidos.septiembre}}</td>
				      <td>{{espera.septiembre}}</td>
				      <td>{{globales.septiembre}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Octubre</th>
				      <td>{{atendidos.octubre}}</td>
				      <td>{{espera.octubre}}</td>
				      <td>{{globales.octubre}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Noviembre</th>
				      <td>{{atendidos.noviembre}}</td>
				      <td>{{espera.noviembre}}</td>
				      <td>{{globales.noviembre}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Diciembre</th>
				      <td>{{atendidos.diciembre}}</td>
				      <td>{{espera.diciembre}}</td>
				      <td>{{globales.diciembre}}</td>
				    </tr>
				    <tr>
				      <th scope="row">Total</th>
				      <td>{{totales.totalAtendidas}}</td>
				      <td>{{totales.totalEspera}}</td>
				      <td>{{totales.totalGlobal}}</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	export default{
		data(){
			return{
				espera: {},
				atendidos: {},
				globales: {},
				totales: {},
				año: {},
				busqueda: null,
				loader: null,
				error: false
			}
		},
		methods:{
			filtrar(){
			if (this.busqueda == null || this.busqueda == '') {
				this.loader = null;
			}else{


				this.loader = false;
			   	axios.get('/api/estadisticas/'+this.busqueda, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				 
				    this.espera = response.data.espera;
				    this.atendidos = response.data.atendidas;
				    this.globales = response.data.globales;
				    this.totales = response.data.totales;
				    this.año = response.data.año;
				   
				    	this.loader = true;	
				  
				    
				    console.log(response.data);
				    }).catch(e => {
				        console.log(e.response);
				    });
				}
			}
		}
	}

</script>

<style type="text/css">
	
</style>