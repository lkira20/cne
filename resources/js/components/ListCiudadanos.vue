<template>
	<div class="container card shadow">
		<h2 class="text-center">Lista <router-link v-if="$can('ciudadano.create')" class="btn btn-primary" :to="{name: 'ciudadanosCreate'}">Nuevo</router-link></h2>
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
		  		<tr v-for="(keep,index) in keeps">
		  			<td>{{ keep.name }}</td>
				    <td>{{ keep.apellido }}</td>
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
			offset: 4
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
	
				axios.delete('/api/ciudadano/'+id).then(datos => {
				//console.log(datos.data.datos);

					let eliminado = this.keeps.splice(index, 1);
					
					console.log(eliminado);
				
				});
		
			},
			getKeeps(page){
				axios.get('/api/ciudadano?page='+page).then(datos => {
				/*console.log(datos.data);
				this.lista = datos.data;*/
				//PAGINACION DE RIMORSOFT
				this.pagination = datos.data.pagination;
				this.keeps = datos.data.ciudadanos.data;
				console.log(this.keeps);
			});

			},
			changePage(page){//PAGINACION DE RIMORSOft
				this.pagination.current_page = page;
				this.getKeeps(page);
			}
		},
		created(){

			this.getKeeps();
		}
	}

</script>

<style type="text/css">
	
</style>