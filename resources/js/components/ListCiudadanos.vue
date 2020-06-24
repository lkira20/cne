<template>
	<div class="container card shadow" id="carta">
		<h2 class="text-center">Lista <router-link v-if="$can('ciudadano.create')" class="btn btn-primary" :to="{name: 'ciudadanosCreate'}">Nuevo</router-link></h2>
		<div class="d-flex" v-if="$can('solicitud.index')">
					<form @submit.prevent="filtrarfecha" class="form-inline ml-auto mb-3">
						<b-form-datepicker id="fechai" v-model="fechai" :max="max" class="" reset-button></b-form-datepicker>
						<b-form-datepicker id="fechaf" :max="max" v-model="fechaf" class=""></b-form-datepicker>
						<button class="btn btn-outline-danger " type="submit"> buscar</button>
					</form>
		</div>
		<div class="d-flex" v-if="$can('solicitud.index')">
					<form @submit.prevent="filtrar" class="form-inline ml-auto mb-3">
		     			<input class="form-control" placeholder="cedula" aria-label="Search" v-model="search">
		     			<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">buscar</button>
		    		</form>

	    </div> 
	    <div class="text-center" v-if="loader == false">
	    	<b-spinner label="Loading..." variant="danger"></b-spinner>
	    </div>
		<table class="table table-sm table-hover" v-if="loader">
			<thead>
		    	<tr>
		      		<th scope="col">Nombre</th>
		      		<th scope="col" class="d-none d-md-block">Apellido</th>
		     		<th scope="col" >Cedula</th>    
		      		<th scope="col">Email</th>
		      		<th scope="col">Opciones</th>
		    	</tr>
		  	</thead>
		  	<tbody >
		  		<tr v-for="(keep,index) in keeps">
		  			<td >{{ keep.name }}</td>
				    <td class="d-none d-md-block">{{ keep.apellido }}</td>
				    <td>{{ keep.ci }}</td>
				    <td>{{ keep.email }}</td>
				    <td>
				    <router-link v-if="$can('ciudadano.edit')" class="btn btn-link btn-block" :to="{name: 'ciudadanosEdit', params: {id: keep.datoable_id}}">editar</router-link>
				    <button v-if="$can('ciudadano.delete')" class="btn btn-danger btn-block" @click='eliminar(keep.datoable_id, index)'>Eliminar</button>
				    </td>
		  		</tr>
		  	</tbody>
		  	<tfoot>
		  		<tr>
		  			<td colspan="5">
				  		<nav>
				  			<ul class="pagination">
				  				<li v-if="pagination.current_page > 1" class="page-item">
				  					<a href="#" @click.prevent='changePage(pagination.current_page - 1)' class="page-link">
				  						<span>Anterior</span>
				  					</a>
				  				</li>

				  				<li v-for="page in pagesNumber" :class="[page == isActived ? 'active' : '']" class="page-item">
				  					<a href="#" @click.prevent="changePage(page)" class="page-link">
				  						{{page}}
				  					</a>
				  				</li>

				  				<li v-if="pagination.current_page < pagination.last_page" class="page-item">
				  					<a href="#" class="page-link" @click.prevent='changePage(pagination.current_page + 1)'>
				  						<span>Siguiente</span>
				  					</a>
				  				</li>
				  			</ul>
				  		</nav>
				  	</td>
		  		</tr>
		  	</tfoot>
		</table>
	</div>
</template>

<script type="text/javascript">

	export default{
		components:{
		
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
			lista: [],
			paginate: ['lista'],
			pagination: {//PAGINACION DE RIMORSOFT
				 'total' : 0,
   				'current_page' : 0, 
                'per_page' : 0,
                'last_page' : 0,
                'from' : 0,
                'to' : 0
			},
			keeps: [],
			offset: 4,
			max: today,
			fechai: null,
			fechaf: today,
			search: '',
			loader: false
			}
		},
		computed: {//PAGINACION DE RIMORSOFT
			isActived(){
				return this.pagination.current_page;
			},
			pagesNumber(){
				if(!this.pagination.to){
					return [];
				}

				let from = this.pagination.current_page - this.offset;//TODO Offset

				if(from < 1){
					from = 1;
				}

				let to = from + (this.offset*2);//TODO

				if (to >= this.pagination.last_page) {

					to = this.pagination.last_page;
				}

				let pagesArray = [];
				while(from <= to){
					pagesArray.push(from);
					from++;
				}

				return pagesArray;
			}////////////////////////////////////////////////7
		},
		methods:{
			eliminar(id, index){
	
				axios.delete('/api/ciudadano/'+id, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
				//console.log(datos.data.datos);

					let eliminado = this.keeps.splice(index, 1);
					
					console.log(eliminado);
				
				});
		
			},
			getKeeps(page){
				axios.get('/api/ciudadano?page='+page, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
				/*console.log(datos.data);
				this.lista = datos.data;*/
				//PAGINACION DE RIMORSOFT
				this.pagination = datos.data.pagination;
				this.keeps = datos.data.ciudadanos.data;
				console.log(this.keeps);
				this.loader = true;
			});

			},
			changePage(page){//PAGINACION DE RIMORSOft
				this.pagination.current_page = page;
				this.getKeeps(page);
			},
			filtrar(){
				if (this.search != '') {
					axios.get('/api/ciudadano/comprobar/'+this.search, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
						console.log(datos.data);
						this.keeps = datos.data;
						//this.pagination = {};
					}).catch(e => {
						console.log(e);
					})
				}else{
					this.getKeeps();
				}
			},
			filtrarfecha(){
				axios.get("/api/filtrarfecha", {params: {fechaf: this.fechaf, fechai: this.fechai}, headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(datos => {
						console.log(datos.data);
						this.pagination = datos.data;
						this.keeps = datos.data.data;
					}).catch(e => {
						console.log(e.response);
					})
			}
		},
		created(){

			this.getKeeps();
		}
	}

</script>

<style type="text/css">
	#carta{
		background-color: rgba(256,256,256,0.9);
	}
</style>