<template>
	<div class="" id="row">
		<div class="text-center mt-3" v-if="carga == false">
			<b-spinner label="Loading..." variant="danger"></b-spinner>
		</div>
		<b-row v-if="carga == true">
			<b-col lg="2" class="mt-5 d-md-none d-sm-none d-none d-lg-block text-center">
				
					<img src="../../../public/img/usuario.jpg" class="card-img-top ">
					<!--
					<b-img :src="`../../../public/img/${usuario.avatar}`" v-if="usuario.avatar != ''" class="card-img-top " fluid alt="Fluid image"></b-img>
						<b-form-file
						@change="getImage"
					      name = "avatar"
					      placeholder="Elija un archivo..."
					      drop-placeholder="suelte aqui el archivo..." accept="image/*" 
					    ></b-form-file>
						<button type="submit" class="btn btn-sm btn-primary" @click="updateAvatar">Guardar</button>
					-->
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
			<!--RESUMEN-->
			<b-col sm="12" md="12" lg="10">
				
				<h1 class="text-center display-4">Resumen</h1>
				<!--CANTIDADES-->
				<b-row>
					
					<b-col md="6" sm="6" lg="3">
						
						<div class="card text-white bg-primary shadow">
							<div class="card-body">
								<h5>Ciudadanos: {{cantidades.ciudadanos}}</h5>
							</div>
						</div>
					
					</b-col>
					<b-col md="6" sm="6" lg="3">
					
						<div class="card text-white bg-danger shadow">
							<div class="card-body">
								<h5>Solicitudes: {{cantidades.solicitudes}}</h5>
							</div>
						</div>
						
					</b-col>
					<b-col md="6" sm="6" lg="3">
			
						<div class="card text-white bg-success shadow">
							<div class="card-body">
								<h5>Usuarios: {{cantidades.usuarios}}</h5>
							</div>
						</div>
					
					</b-col>
					<b-col md="6" sm="6" lg="3">
				
						<div class="card text-white bg-warning shadow">
							<div class="card-body">
								<h5>Notas: {{cantidades.notas}}</h5>
							</div>
						</div>
						
					</b-col>
				</b-row>
				<!--GRAFICOs-->
				<b-row v-if="$can('solicitud.create')">			
				<b-col sm="12" md="12" lg="12" xl="6" class="text-center">
					
					<GraficoUsuario :grafico="usuario.id" class="shadow"/>
				</b-col>
				<b-col sm="12" md="12" lg="12" xl="6" class="text-center">
					
					<Grafico class="shadow"/>
				</b-col>
				</b-row>
				
				<b-row v-if="!$can('solicitud.create')">
					<b-col sm="12" md="12" lg="12" xl="12" class="text-center">
					
					<Grafico class="shadow"/>
					</b-col>
				</b-row>

				<!--TABLA-->
				<b-row v-if="$can('solicitud.create')">
					
					<b-col md="6" lg="6">
					<h3 class="">Lista de solicitudes</h3>
					<div class="d-flex">
						<form @submit.prevent="filtrar" class="form-inline ml-auto mb-3">
							<div class="form-group">
								<b-form-select v-model="estado" :options="estados"></b-form-select>
								<b-form-select v-model="selected" :options="options"></b-form-select>
							</div>
							<div class="form-group">
								<b-form-datepicker id="fechai" v-model="fechai" :max="max" class="" reset-button></b-form-datepicker>
								<b-form-datepicker id="fechaf" :max="max" v-model="fechaf" class=""></b-form-datepicker>
							</div>
							<button class="btn btn-outline-danger " type="submit"> buscar</button>
					
						</form>
					</div>
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
						    <tr v-if="listaBusqueda == false" :class="{'bg-warning': !solicitud.status}" v-for="(solicitud,index) in solicitudes" :key="solicitud.id">
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
						
					<b-col md="6" lg="6">
						<h3 class="">Ultimas notas</h3>
							<ul class="list-group shadow" id="notas2">
								<li class="list-group-item" v-for="(nota,index) in notas" :key="index" id="notas3"><b>{{nota.asunto}} - {{nota.description}}</b></li>  	
							</ul>
					</b-col>	    
				</b-row>

				<b-row v-if="!$can('solicitud.create')">
					<b-col md="12" lg="12">
						<h3 class="">Ultimas notas</h3>
							<ul class="list-group shadow" id="notas2">
								<li class="list-group-item" v-for="(nota,index) in notas" :key="index" id="notas3"><b>{{nota.asunto}} - {{nota.description}}</b></li>  	
							</ul>
					</b-col>
				</b-row>
			</b-col>
			<!--RESUMEN-->
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
				fechai: "",
				fechaf: today,
				selected: null,
				options:[
					{value: null, text: "todos"},
					{value: 1, text: "nacimientos"},
					{value: 2, text: "matrimonio"},
					{value: 3, text: "union estable de hecho"},
					{value: 4, text: "defunciones"},
					{value: 5, text: "disolucion unilateral"},
					{value: 6, text: "disolucion conjunta"},
					{value: 7, text: "copias certificadas"}
				],
				max: today,
	       		estado: null,
	       		estados: [
	       			{value: null, text: "estado"},
	       			{value: 1, text: "atendido"},
	       			{value: 0, text: "pendiente"},
	       			],
				usuario: {},
				loader: false,
				listaBusqueda: false,
				solicitudes: [],
				totalPaginas: null,
				notas: null,
				cantidades: null,
				imagen : null,
				
				spinner:{
					usuario: true,
					cantidades: true,
					tabla: true,
					notas: true
				}
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
					this.spinner.usuario = false;
					this.spinner.tabla = false;
					this.loader = true
				}).catch(e => {
					console.log(e.response);
				});
			},
			ultimasNotas(){

				axios.get('api/notas', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.notas = response.data.data;
					this.spinner.notas = false;
					//console.log(response.data);
				}).catch(e => {
					console.log(e.response);
				})
			},
			cantidad(){
				axios.get('/api/cantidades', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.cantidades = response.data;
					this.spinner.cantidades = false;
					console.log(response.data);
				}).catch(e => {
					console.log(e.response);
				})
			},
			filtrar(){
				if (this.fechai == "" && this.estado == null && this.selected == null) {
					this.consultarDetalles();
				}else{
					axios.get("/api/buscarDashboard", {params: {fechaf: this.fechaf, fechai: this.fechai, estado: this.estado, selected: this.selected}, headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
						console.log(response.data);
						this.solicitudes = response.data.solicitudes.data;
						this.totalPaginas = response.data.last_page
					}).catch(e => {
						console.log(e.response);
					})
				}
			},
			getImage(event){
                //Asignamos la imagen a  nuestra data
                this.imagen = event.target.files[0];
            },
            updateAvatar(){

            	let formData = new FormData();
            	formData.append("avatar", this.imagen);
                console.log(formData);
            	
                axios.post('/api/avatar',formData, {headers: {"Content-Type": "multipart/form-data", Authorization: "Bearer "+ this.$store.state.token }})
                .then(response => {
                	console.log(response.data);
                }).catch(e => {
                	console.log(e.response);
                })
                
            }
		},
		computed:{
			carga(){
				if (this.spinner.usuario == false && this.spinner.cantidades == false && this.spinner.tabla == false && this.spinner.notas == false) {
					return true;
				}else{
					return false;
				}
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
				console.log(response.data);
				
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