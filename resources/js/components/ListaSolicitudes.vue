<template>
		<div class="container card shadow" id="carta">
		 	<div class="card-header">
		    	<h2 class="text-center card-title">Lista de mis solicitudes <b-button :to="{name: 'IniciarSolicitud'}" variant="primary" v-if="$can('solicitud.create')">nuevo</b-button></h2>
			</div>
			<div class="card-body">
				<div class="d-flex" v-if="$can('solicitud.index')">
					<form @submit.prevent="buscar2" class="form-inline ml-auto mb-3">
						<b-form-select v-model="estado" :options="estados"></b-form-select>
						<b-form-select v-model="selected" :options="options"></b-form-select>
						<b-form-datepicker id="fechai" v-model="fechai" :max="max" class="" reset-button></b-form-datepicker>
						<b-form-datepicker id="fechaf" :max="max" v-model="fechaf" class=""></b-form-datepicker>
						<button class="btn btn-outline-danger " type="submit"> buscar</button>
				
					</form>
				</div>
				<div class="d-flex" v-if="$can('solicitud.index')">
					<form @submit.prevent="buscar" class="form-inline ml-auto mb-3">
		     			<input @change="cambioListaBusqueda" class="form-control" placeholder="cedula" aria-label="Search" v-model="search">
		     			<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">buscar</button>
		    		</form>

	    		</div>
	    		<div class="text-center" v-if="loader == false">
			    	<b-spinner label="Loading..." variant="danger"></b-spinner>
			    </div>
				<table class="table table-sm table-hover" v-if="loader">
					<thead>
						<tr>
							<th scope="col">cedula</th>
							<th scope="col">nombre</th>
							<th scope="col" class="d-none d-md-block">usuario</th>
							<th scope="col">tramite</th>
							<th scope="col">fecha</th>
							<th>Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="solicitudes == null || solicitudes.length == 0" colspan="6">
							<td>No se ha encontrado ninguna solicitud</td>
						</tr>
					    <tr v-if="listaBusqueda == false" :class="{'bg-warning': !solicitud.status}" v-for="(solicitud,index) in solicitudes" :key="solicitud.id">
					    	<td>{{solicitud.ciudadano.datos.ci}}</td>
					  		<td>{{solicitud.ciudadano.datos.name}}</td>
					    	<td class="d-none d-md-block">{{solicitud.usuario? solicitud.usuario.name: 'indefinido'}}</td>
					    	<td>{{solicitud.tramite?  solicitud.tramite.name: 'indefinido'}}</td>
					    	<td>{{solicitud.fecha}}</td>
					    	<td>
					      		<b-button v-if="$can('solicitud.edit')" block v-b-modal="`my-modal${index}`" @click="buscarTramites" variant="link">Editar</b-button>
					      		<!--MODAL DE EDITAR-->
					      		<b-modal v-if="$can('solicitud.edit')" :id="`my-modal${index}`" hide-footer title="Datos para la solicitud">
					      		<!--<SolicitudesEdit :solicitud="solicitud" :modal="`my-modal${index}`"/>-->
								<form @submit.prevent="editarSolicitud(solicitud.ciudadano.datos.email,solicitud.tramite.id, solicitud.status, solicitud.descripcion, solicitud.id, index)">
									<div class="mb-2">
										<div class="">	
								  			<div class="form-group">
								  				<label for="inputAddress">tramite</label>
												 <select v-if="solicitud.tramite"  id="tramite" v-model="solicitud.tramite.id" name="tramite" class="form-control">
												 	<option v-for="tramit in tramites" :key="tramit.id" :value="tramit.id">{{tramit.name}}</option>						 	
						                         </select>
								  			</div>
								 
								  			<div class="form-group">
								  				<label for="inputAddress">estatus</label>
								  				<select class="form-control" placeholder="estutus" v-model="solicitud.status">
								  					<option value="1"> atendido </option>
								  					<option value="0"> pendiente </option>
								  				</select>

								  			</div>

								  			<div class="form-group">
								  				<label for="descripcion">Descripcion de solicitud.</label>
								  				<textarea class="form-control" id="descripcion" rows="3" name="descripcion" v-model="solicitud.descripcion"></textarea>
								  			</div>
								  			<small class="text-muted">Nota: Al cambiar el estado a atendido le enviara automaticamente un correo al ciudadano informandole sobre la culminacion de su solicitud</small>
								  			<div class="text-center mb-3">
								  				<button type="submit" class="btn btn-outline-danger btn-lg btn-block" name="registrar-solicitud">Editar</button>
								  			</div>
							  			</div>
							  		</div>
							  	</form>
							
					      		</b-modal>
					      		<!------------------>
					      		<!--boton ELIMINAR-->
					      		<b-button v-if="$can('solicitud.delete')" block size="sm" @click="showMsgBoxTwo(solicitud.id, index)" variant="danger">Borrar</b-button>

     							<!--BOTON DE VER detalles-->

     							<b-button v-if="$can('solicitud.show')" block size="sm" @click="$bvModal.show(`bv-modal-example${index}`)" variant="primary">Detalles</b-button>

     							<b-modal scrollable :id="`bv-modal-example${index}`" hide-footer>
									<template v-slot:modal-title>
								      Detalles de la solicitud
								    </template>
								    <SolicitudesShow :solicitud="solicitud"/>
								    <b-button class="mt-3" block @click="$bvModal.hide(`bv-modal-example${index}`)" variant="primary">Cerrar</b-button>
								</b-modal>
					    	</td>
					    </tr>
					    <!--ELEMENTO QUE SE MOSTRARA CUANDO SE HAGA EL FILTRO Y SE OCULTARA EL DE ARRIBA, SE HACE ASI POR EL FORMATO DE DATOS QUE LO DEVUELVE DISTINTO-->
						<tr v-if="listaBusqueda == true" :class="{'bg-warning': !soli.status}" v-for="(soli,index) in busqueda" :key="soli.id">
							<td>{{solicitudes.ci}}</td>
							<td>{{solicitudes.name}}</td>
							<td class="d-none d-md-block">{{soli.usuario? soli.usuario.name: 'indefinido'}}</td>
							<td>{{soli.tramite.name}}</td>
							<td>{{soli.fecha}}</td>
					    	<td>
					      		<b-button v-if="$can('solicitud.edit')" block v-b-modal="`my-modal${index}`" @click="buscarTramites" variant="link">Editar</b-button>
					      		<!--MODAL DE EDITAR-->
					      		<b-modal v-if="$can('solicitud.edit')" :id="`my-modal${index}`" hide-footer title="Datos para la solicitud">
					      		<!--<SolicitudesEdit :solicitud="solicitud" :modal="`my-modal${index}`"/>-->
								<form @submit.prevent="editarSolicitud(soli.tramite.id, soli.status, soli.descripcion, soli.id, index)">
									<div class="mb-2">
										<div class="">	
								  			<div class="form-group">
								  				<label for="inputAddress">tramite</label>
												 <select v-if="soli.tramite"  id="tramite" v-model="soli.tramite.id" name="tramite" class="form-control">
												 	<option v-for="tramit in tramites" :key="tramit.id" :value="tramit.id">{{tramit.name}}</option>						 	
						                         </select>
								  			</div>
								 
								  			<div class="form-group">
								  				<label for="inputAddress">estatus</label>
								  				<select class="form-control" placeholder="estutus" v-model="soli.status">
								  					<option value="1"> atendido </option>
								  					<option value="0"> pendiente </option>
								  				</select>

								  			</div>

								  			<div class="form-group">
								  				<label for="descripcion">Descripcion de solicitud.</label>
								  				<textarea class="form-control" id="descripcion" rows="3" name="descripcion" v-model="soli.descripcion"></textarea>
								  			</div>
								  			<div class="text-center mb-3">
								  				<button type="submit" class="btn btn-outline-danger btn-lg btn-block" name="registrar-solicitud">Editar</button>
								  			</div>
							  			</div>
							  		</div>
							  	</form>
							
					      		</b-modal>
					      		<!------------------>
					      		<!--boton ELIMINAR-->
					      		<b-button v-if="$can('solicitud.delete')" block @click="showMsgBoxTwo(soli.id, index)" variant="danger">Borrar</b-button>

     							<!--BOTON DE VER detalles-->

     							<b-button v-if="$can('solicitud.show')" block size="sm" @click="$bvModal.show(`bv-modal-example${index}`)" variant="primary">Detalles</b-button>

     							<b-modal v-if="$can('solicitud.show')" scrollable :id="`bv-modal-example${index}`" hide-footer>
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
						<tr>
							<td colspan="6" class="overflow-auto">
								<b-pagination-nav @change="cambiar($event)" :link-gen="linkGen" :number-of-pages="totalPaginas" use-router></b-pagination-nav>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<!--GRAFICAS-->
		</div>
</template>

<script type="text/javascript">
	import SolicitudesEdit from './SolicitudesEdit';
	import SolicitudesShow from './SolicitudesShow';
	import Graficos from './Graficos'
	export default{
		components:{
			SolicitudesEdit,
			SolicitudesShow,
			Graficos
		},
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

			return{
			loader: false,
			solicitudes: [],
			totalPaginas: null,
			search: "",//filtro
			fechai: null,
			fechaf: today,
			selected: null,
			listaBusqueda: false,//ESTABLECER QUE IF SE MUESTRA
			busqueda: [], //DATOS DEL ELEMENTO DE RENDER DEL FILTRO
			tramites: [],
			envio: {//OBJETO DE ENVIO PARA EDITAR
					descripcion: '',
					status: 0,
					tramite_id: 0,
					correo: ''
				},
			boxTwo: '',
			
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
			url: '/api/solicitud',
       		max: today,
       		estado: null,
       		estados: [
       			{value: null, text: "estado"},
       			{value: 1, text: "atendido"},
       			{value: 0, text: "pendiente"},
       		]
			}
		},
		methods:{
			linkGen(pageNum) {//PARAMETRO DE ENVIO EN LA URL PARA LA PAGINACION
		    	return pageNum === 1 ? '?' : `?page=${pageNum}`;
			},
			cambiar(page){//RESUELVE EL BUG QUE DE REGRESO A LA PAGINA 1 NO SE REGRESE
		
				if (page == 1) {
					axios.get(this.url, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.solicitudes = response.data.data;
					this.totalPaginas = response.data.last_page;
					//console.log(response.data);
					console.log(this.$route);
				}).catch(e => {
					console.log(e.response);
				});
				}
			},
			listarSolicitudes(){
				//CONSULTA PARA LLENAR LA LISTA
				axios.get(this.url, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					this.solicitudes = response.data.data;
					this.totalPaginas = response.data.last_page;
					this.loader = true;
					console.log(this.solicitudes);
					//console.log(this.$route);
				}).catch(e => {
					console.log(e.response);
				});
			},
			buscar2(){
				this.listaBusqueda == false;
				if ((this.fechai == null || this.fechai == '') && this.estado == null && this.selected == null) {
					this.listarSolicitudes();
				}else{
					axios.get("/api/datatablesolicitud", {params: {fechaf: this.fechaf, fechai: this.fechai, estado: this.estado, selected: this.selected}}).then(response => {
						console.log(response.data.solicitudes.data);
						this.solicitudes = response.data.solicitudes.data;
						this.totalPaginas = response.data.last_page
					}).catch(e => {
						console.log(e.response);
					})
				}
				
			},
			buscar(){//FILTRA LOS DATOS POR CEDULA
				if (this.search != "") {
					
					axios.get('/api/solicitud/filtrar/'+this.search, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
					console.log(response.data);
					this.solicitudes = response.data.data[0];
					this.totalPaginas = response.data.last_page;
					this.busqueda = response.data.data[0].ciudadano.solicitudes;
					this.listaBusqueda = true;
				}).catch(e => {
					console.log(e.response);
				});
				}		
				
			},
			cambioListaBusqueda(){//FUNCION QUE CAMBIA SI SE MUESTRA EL ELMENTO DEL FILTRO O EL PREDETERMINADO
				if (this.search == '' && this.selected == null) {
	
					axios.get(this.url, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
						this.solicitudes = response.data.data;
						this.totalPaginas = response.data.last_page;
						this.listaBusqueda = false;
						//console.log(response.data.data);
						//console.log(this.$route);
					}).catch(e => {
						console.log(e.response);
					});
/*TAMBIEN SE PUEDE HACER ASI PERO DA UNA ADVERTENCIA
					this.listarSolicitudes();
					this.listaBusqueda = false;*/
				}
			},
			buscarTramites(){//PARA EL MODAL EDIT

				axios.get('/api/tramite', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				
					this.tramites = response.data;
				}).catch(e => {
					console.log(e);
				});
			},
			editarSolicitud(correo, tramite, status, descripcion, id, index){ //MODAL EDIT
				//CONFIGURAR EL OBJETO DE ENVIO
				this.envio.tramite_id = tramite;
				this.envio.status = status;
				this.envio.descripcion = descripcion;
				this.envio.correo = correo;

				axios.put('/api/solicitud/'+id, this.envio, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
						this.$bvModal.hide(`my-modal${index}`);	

						if (this.envio.status == 1) {

							axios.get('/api/enviarcorreo', {params: this.envio, headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {

								console.log(response.data);

							}).catch(e => {
								console.log(e.response);
							})
						}
						if (this.listaBusqueda === false) {
							axios.get('/api/solicitud', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
							this.solicitudes = response.data.data;
							this.totalPaginas = response.data.last_page;
						
							}).catch(e => {
								console.log(e.response);
							});
						}else{
							this.buscar();
						}
					
					
				}).catch(e => {
					console.log(e.response);
				});
				
			},
	        showMsgBoxTwo(solicitud, index) {//MODAL DE ELIMINAR
	        this.boxTwo = ''
	        this.$bvModal.msgBoxConfirm('¿Esta seguro que quiere eliminar esta solicitud?', {
	          title: 'Borrar',
	          size: 'md',
	          buttonSize: 'md',
	          okVariant: 'danger',
	          okTitle: 'SI',
	          cancelTitle: 'NO',
	          cancelVariant: 'primary',
	          footerClass: 'p-2',
	          hideHeaderClose: true,
	          centered: true
	        }).then(value => {
	            this.boxTwo = value;

	            if(this.boxTwo == true){
		            axios.delete('/api/solicitud/'+solicitud,{headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
		            	if (this.listaBusqueda === false) {
		            		this.solicitudes.splice(index, 1);
		            	}else{
		            		this.buscar();
		            	}
		            }).catch(e => {
		            	console.log(e.response);
		            });
	            }
	          }).catch(err => {
	            // An error occurred
	          })
	      }
		},
		created(){
			
			this.listarSolicitudes();
		},
		beforeRouteUpdate (to, from, next) {
			//console.log(to);
			//CAMBIO DE QUERY PARA CAMBIAR LA LISTA CON PAGINACION
			axios.get(this.url+'?page='+to.query.page, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				this.solicitudes = response.data.data;
				this.totalPaginas = response.data.last_page;
				//console.log(response.data);
				
			}).catch(e => {
				console.log(e.response);
			});
  		}
	}

</script>

<style type="text/css">
	#carta{
		background-color: rgba(256,256,256,0.9);
	}
</style>