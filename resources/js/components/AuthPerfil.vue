<template>
	<div class="" id="row">
		<b-row v-if="loader" >
			<b-col sm="12" md="2" class="mt-5">
				
					<img src="../../../public/img/usuario.jpg" class="card-img-top ">
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
				
			</b-col>
			<b-col sm="12" md="10">
				<h1 class="text-center display-4">Resumen</h1>
				<b-row>
					<b-col md="3" sm="3" col="6">
						
						<div class="card text-white bg-primary shadow">
							<div class="card-body">
								<h5>Ciudadanos: {{cantidades.ciudadanos}}</h5>
							</div>
						</div>
					
					</b-col>
					<b-col md="3" sm="3" col="6">
					
						<div class="card text-white bg-danger shadow">
							<div class="card-body">
								<h5>Solicitudes: {{cantidades.solicitudes}}</h5>
							</div>
						</div>
						
					</b-col>
					<b-col md="3" sm="3" col="6">
			
						<div class="card text-white bg-success shadow">
							<div class="card-body">
								<h5>Usuarios: {{cantidades.usuarios}}</h5>
							</div>
						</div>
					
					</b-col>
					<b-col md="3" sm="3" col="6">
				
						<div class="card text-white bg-warning shadow">
							<div class="card-body">
								<h5>Notas: {{cantidades.notas}}</h5>
							</div>
						</div>
						
					</b-col>
				</b-row>
				<b-row>
				<!--GRAFICO-->
				<b-col sm="12" md="6">
				<GraficoUsuario :grafico="usuario.id" class="shadow"/>
				</b-col>
				<b-col sm="12" md="6">
				<Grafico class="shadow"/>
				</b-col>
				<b-col sm="12" md="6">
				<!--TABLA-->
				<h3 class="">Lista de solicitudes</h3>
				<table class="table table-sm table-hover shadow" id="perfil">
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
							<td colspan="3" class="overflow-auto">
								<b-pagination-nav @change="cambiar($event)" :link-gen="linkGen" :number-of-pages="totalPaginas" use-router></b-pagination-nav>
								
							</td>
							<td>
								<b-button :to="{name: 'ListaSolicitudes'}" variant="primary">Ver mas</b-button>
							</td>
						</tr>
					</tfoot>
				</table>
				</b-col>
				<b-col sm="12" md="6">
					<h3 class="">Ultimas notas</h3>
						<ul class="list-group shadow" id="notas2">
							<li class="list-group-item" v-for="(nota,index) in notas" :key="index" id="notas3"><b>{{nota.asunto}} - {{nota.description}}</b></li>  	
						</ul>	    
				</b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>

<script type="text/javascript">
	import GraficoUsuario from './GraficoUsuario';
	import Grafico from './Graficos';

	export default{
		components: {
			GraficoUsuario,
			Grafico
		},
		props: ['id'],
		data(){
			return {
				usuario: {},
				loader: false,
				listaBusqueda: false,
				solicitudes: [],
				totalPaginas: null,
				notas: null,
				cantidades: null
			}
		},
		methods:{
			linkGen(pageNum) {//PARAMETRO DE ENVIO EN LA URL PARA LA PAGINACION
		    	return pageNum === 1 ? '?' : `?page=${pageNum}`;
			},
			cambiar(page){//RESUELVE EL BUG QUE DE REGRESO A LA PAGINA 1 NO SE REGRESE
		
				if (page == 1) {
					axios.get('/api/authperfil', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
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

				axios.get('/api/authperfil', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.usuario = response.data.usuario[0];
					this.solicitudes = response.data.solicitudes.data;
					this.totalPaginas = response.data.solicitudes.last_page
					console.log(response.data);
					this.loader = true;
				}).catch(e => {
					console.log(e.response);
				});
			},
			ultimasNotas(){

				axios.get('api/notas', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.notas = response.data.data;
					//console.log(response.data);
				}).catch(e => {
					console.log(e.response);
				})
			},
			cantidad(){
				axios.get('/api/cantidades', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.cantidades = response.data;
					console.log(response.data);
				}).catch(e => {
					console.log(e.response);
				})
			}
		},
		created(){
			this.cantidad();
			this.consultarDetalles();
			this.ultimasNotas();
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

<style type="text/css">
	#perfil{
		background-color: rgba(256,256,256,0.8) !important;
	}
	#carta{
		background-color: rgba(256,256,256,0.8) !important;
		height: 100%;
	}

	#row{
		background-color: rgba(256,256,256,0.8) !important;
		height: 100%;

	}

	#notas{
		background-color: rgba(256,256,256,0.8) !important;
	}

	#notas2{
		background-color: rgba(256,256,256,0.8) !important;
	}

	#notas3{
		background-color: rgba(256,256,256,0.8) !important;
		list-style-type: none !important; 
	}
</style>