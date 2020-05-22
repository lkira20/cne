<template>
	<div>
		<b-row v-if="loader">
			<b-col sm="12" md="4">
				<div class="card">
					<img src="../../../public/img/usuario.jpg" class="card-img-top">
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><b>Nombre:</b> {{usuario.datos.name}}</li>
				    	<li class="list-group-item"><b>Apellido:</b> {{usuario.datos.apellido}}</li>
						<li class="list-group-item"><b>Cedula:</b> {{usuario.datos.ci}}</li>
				    	<li class="list-group-item"><b>Email:</b> {{usuario.datos.email}}</li>
				    	<li class="list-group-item"><b>rol:</b>
				    		<ul>
				    			<li v-for="role in usuario.roles" :key="role.id">{{role.name}}</li>
				    		</ul>
				    	</li>    	
					</ul>	    
				</div>
				</div>
			</b-col>
			<b-col sm="12" md="8" >
				<!--GRAFICO-->
				<GraficoUsuario :grafico="usuario.id"/>
				<!--TABLA-->
				<h3>Lista de solicitudes</h3>
				<table class="table table-sm table-hover">
					<thead>
						<tr>
							<th scope="col">cedula</th>
							<th scope="col">nombre</th>
							<th scope="col">tramite</th>
							<th scope="col">fecha</th>
						</tr>
					</thead>
					<tbody>
					    <tr v-if="listaBusqueda == false" v-for="(solicitud,index) in solicitudes" :key="solicitud.id">
					    	<td>{{solicitud.ciudadano.datos.ci}}</td>
					  		<td>{{solicitud.ciudadano.datos.name}}</td>
					    	<td>{{solicitud.tramite?  solicitud.tramite.name: 'indefinido'}}</td>
					    	<td>{{solicitud.fecha}}</td>
					    </tr>
					    <!--ELEMENTO QUE SE MOSTRARA CUANDO SE HAGA EL FILTRO Y SE OCULTARA EL DE ARRIBA, SE HACE ASI POR EL FORMATO DE DATOS QUE LO DEVUELVE DISTINTO-->
						<tr v-if="listaBusqueda == true" >
							<td>{{solicitudes.ci}}</td>
							<td>{{solicitudes.name}}</td>
							<td>{{soli.tramite.name}}</td>
							<td>{{soli.fecha}}</td>
					    </tr>		   
					</tbody>
					<tfoot>
						<tr>
							<td colspan="6" class="overflow-auto">
								<b-pagination-nav @change="cambiar($event)" :link-gen="linkGen" :number-of-pages="totalPaginas" use-router></b-pagination-nav>
							</td>
						</tr>
					</tfoot>
				</table>
			</b-col>
		</b-row>
	</div>
</template>

<script type="text/javascript">
	import GraficoUsuario from './GraficoUsuario';

	export default{
		components: {
			GraficoUsuario
		},
		props: ['id'],
		data(){
			return {
				usuario: {},
				loader: false,
				listaBusqueda: false,
				solicitudes: [],
				totalPaginas: null,
			}
		},
		methods:{
			linkGen(pageNum) {//PARAMETRO DE ENVIO EN LA URL PARA LA PAGINACION
		    	return pageNum === 1 ? '?' : `?page=${pageNum}`;
			},
			cambiar(page){//RESUELVE EL BUG QUE DE REGRESO A LA PAGINA 1 NO SE REGRESE
		
				if (page == 1) {
					axios.get('/api/authperfil').then(response => {
					this.solicitudes = response.data.solicitudes.data;
					this.totalPaginas = response.data.solicitudes.last_page;
					//console.log(response.data);
					console.log(this.$route);
				}).catch(e => {
					console.log(e.response);
				});
				}
			},
			consultarDetalles(){

				axios.get('/api/authperfil').then(response => {
					this.usuario = response.data.usuario[0];
					this.solicitudes = response.data.solicitudes.data;
					this.totalPaginas = response.data.solicitudes.last_page
					console.log(response.data);
					this.loader = true;
				}).catch(e => {
					console.log(e.response);
				});
			}
		},
		created(){

			this.consultarDetalles();
		},
		beforeRouteUpdate (to, from, next) {
			console.log(to);
			//CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION
			axios.get('/api/authperfil?page='+to.query.page).then(response => {
				this.solicitudes = response.data.solicitudes.data;
				this.totalPaginas = response.data.solicitudes.last_page;
				//console.log(response.data);
				
			}).catch(e => {
				console.log(e.response);
			});
  		}
	}
</script>