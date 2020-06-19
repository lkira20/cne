<template>
	<div class="container" id="mi">
			<div class="d-flex">
					<form @submit.prevent="buscar" class="form-inline ml-auto mb-3">
		     			<input  class="form-control" type="search" placeholder="cedula" aria-label="Search" v-model="search">
		     			<button class="btn btn-primary my-2 my-sm-0" type="submit">buscar</button>
		    		</form>
	    	</div>
	    	<div class="alert alert-danger" v-if="errors">
	    		no se a encontrado ninguna solicitud con esa cedula
	    	</div>
				<table v-if="listaBusqueda == true" class="table table-sm table-hover shadow" id="perfilpu" style="height: 100%;">
					
					<thead>
						<tr>
							<th scope="col">cedula</th>
							<th scope="col">nombre</th>
							<th scope="col">tramite</th>
							<th scope="col">fecha</th>
							<th>Opcion</th>
						</tr>
					</thead>
					<tbody>
					    <!--ELEMENTO QUE SE MOSTRARA CUANDO SE HAGA EL FILTRO Y SE OCULTARA EL DE ARRIBA, SE HACE ASI POR EL FORMATO DE DATOS QUE LO DEVUELVE DISTINTO-->
						<tr :class="{'bg-warning': !soli.status}" v-for="(soli,index) in busqueda" :key="soli.id">
							<td>{{solicitudes.ci}}</td>
							<td>{{solicitudes.name}}</td>
							<td>{{soli.tramite.name}}</td>
							<td>{{soli.fecha}}</td>
							<td>
								<!--BOTON DE VER detalles-->

     							<b-button block size="sm" @click="$bvModal.show(`bv-modal-example${index}`)" variant="primary">Detalles</b-button>

     							<b-modal scrollable :id="`bv-modal-example${index}`" hide-footer>
									<template v-slot:modal-title>
								      Detalles de la solicitud
								    </template>
								    <SolicitudesShow :solicitud="soli" :busqueda="listaBusqueda" :ciudadano="solicitudes"/>
								    <b-button class="mt-3" block @click="$bvModal.hide(`bv-modal-example${index}`)" variant="primary">Cerrar</b-button>
								</b-modal>
							</td>
					    </tr>		   
					</tbody>
					<tfoot>
						
					</tfoot>
				</table>

	</div>
</template>

<script>
	import SolicitudesShow from './SolicitudesShow';

	export default{
		components:{
			SolicitudesShow
		},
		data(){
			return{
				listaBusqueda: false,
				solicitudes: [],
				search: null,
				totalPaginas: null,
				busqueda: null,
				errors: false
			}
		},
		methods:{
			buscar(){//FILTRA LOS DATOS POR CEDULA
				this.errors = false;
				if (this.search !== '') {

					axios.get('/api/solicitud/publico/'+this.search).then(response => {
					console.log(response.data);
					if (response.data.data.length == 0) {
						this.errors = true
					}
					this.solicitudes = response.data.data[0];
					this.totalPaginas = response.data.last_page;
					this.busqueda = response.data.data[0].ciudadano.solicitudes;
					this.listaBusqueda = true;
				}).catch(e => {
					console.log(e.response);
					
				});

				}

				
			}
		},
		created(){

		},
		beforeRouteUpdate (to, from, next) {
			console.log(to);
			//CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION
			axios.get('/api/authperfil?page='+to.query.page, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				this.solicitudes = response.data.solicitudes.data;
				this.totalPaginas = response.data.solicitudes.last_page;
				//console.log(response.data);
				
			}).catch(e => {
				console.log(e.response);
			});
  		}
	}
</script>

<style>
	#perfilpu{
		background-color: rgba(256,256,256,0.9);
	}
</style>