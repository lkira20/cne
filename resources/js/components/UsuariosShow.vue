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
			<b-col sm="12" md="8" v-if="permisorole == -1">
				<!--GRAFICO-->
				<GraficoUsuario :grafico="usuario.id"/>
				<!--TABLA-->
				<h3>Lista de solicitudes</h3>
				<div class="d-flex">
					<form @submit.prevent="buscar2" class="form-inline ml-auto mb-3">
						<b-form-select v-model="estado" :options="estados"></b-form-select>
						<b-form-select v-model="selected" :options="options"></b-form-select>
						<b-form-datepicker id="fechai" v-model="fechai" :max="max" class="" reset-button></b-form-datepicker>
						<b-form-datepicker id="fechaf" :max="max" v-model="fechaf" class=""></b-form-datepicker>
						<button class="btn btn-outline-danger " type="submit"> buscar</button>
				
					</form>
				</div>
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
					    <tr v-if="listaBusqueda == false" :class="{'bg-warning': !solicitud.status}" v-for="(solicitud,index) in solicitudes" :key="solicitud.id">
					    	<td>{{solicitud.ciudadano.datos.ci}}</td>
					  		<td>{{solicitud.ciudadano.datos.name}}</td>
					    	<td>{{solicitud.tramite?  solicitud.tramite.name: 'indefinido'}}</td>
					    	<td>{{solicitud.fecha}}</td>
					    </tr>
					    <!--ELEMENTO QUE SE MOSTRARA CUANDO SE HAGA EL FILTRO Y SE OCULTARA EL DE ARRIBA, SE HACE ASI POR EL FORMATO DE DATOS QUE LO DEVUELVE DISTINTO-->
						<tr v-if="listaBusqueda == true" :class="{'bg-warning': !solicitud.status}">
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
			const now = new Date()
			const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
		    // 15th two months prior
		    const minDate = new Date(today)
		    minDate.setMonth(minDate.getMonth() - 2)
		    minDate.setDate(15)
		    // 15th in two months
		    const maxDate = new Date(today)
		    maxDate.setMonth(maxDate.getMonth() + 2)
		    maxDate.setDate(15)
			return {
				usuario: {},
				loader: false,
				listaBusqueda: false,
				solicitudes: [],
				totalPaginas: null,
				fechai: null,
				fechaf: today,
				selected: null,
				max: today,
	       		estado: null,
	       		estados: [
	       			{value: null, text: "estado"},
	       			{value: 1, text: "atendido"},
	       			{value: 0, text: "pendiente"},
	       		],
	       		options:[
				{value: null, text: "todos"},
				{value: 1, text: "nacimientos"},
				{value: 2, text: "matrimonio"},
				{value: 3, text: "union estable de hecho"},
				{value: 4, text: "defunciones"},
				{value: 5, text: "disolucion unilateral"},
				{value: 6, text: "disolucion conjunta"},
				{value: 7, text: "copias certificadas"}
				]
			}
		},
		methods:{
			linkGen(pageNum) {//PARAMETRO DE ENVIO EN LA URL PARA LA PAGINACION
		    	return pageNum === 1 ? '?' : `?page=${pageNum}`;
			},
			cambiar(page){//RESUELVE EL BUG QUE DE REGRESO A LA PAGINA 1 NO SE REGRESE
		
				if (page == 1) {
					axios.get('/api/perfiles/'+this.id, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
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

				axios.get('/api/perfiles/'+this.id, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.usuario = response.data.usuario[0];
					this.solicitudes = response.data.solicitudes.data;
					this.totalPaginas = response.data.solicitudes.last_page
					//console.log(response.data);
					this.loader = true;
				}).catch(e => {
					console.log(e.response);
				});
			},
			buscar2(){
				this.listaBusqueda == false;
				if ((this.fechai == null || this.fechai == '') && this.estado == null && this.selected == null) {
					this.consultarDetalles();
				}else{
					axios.get("/api/filtradouser", {headers: {Authorization: "Bearer "+ this.$store.state.token}, params: {fechaf: this.fechaf, fechai: this.fechai, estado: this.estado, selected: this.selected, id: this.usuario.id}}).then(response => {		

						this.solicitudes = response.data.data;
						this.totalPaginas = response.data.last_page
					}).catch(e => {
						console.log(e.response);
					})
				}
				
			},
		},
		computed:{
			permisorole(){

				return this.usuario.roles.findIndex(element => element.name == "supervisor");
			}
		},
		created(){
			if (this.$can('perfiles.show')) {
				this.consultarDetalles();
			}else{
				this.$router.replace({name: '403'})
			}
		},
		beforeRouteUpdate (to, from, next) {
			console.log(to);
			//CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION
			axios.get('/api/perfiles/'+this.id+'?page='+to.query.page, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				this.solicitudes = response.data.solicitudes.data;
				this.totalPaginas = response.data.solicitudes.last_page;
				//console.log(response.data);
				
			}).catch(e => {
				console.log(e.response);
			});
  		}
	}
</script>