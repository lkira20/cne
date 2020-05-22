<template>
	<div class="row">
		<div v-for="(usuario,index) in listaUsuarios" :key="usuario.id" class="card col-12 col-sm-12  col-md-6 col-lg-3" style="width: 18rem;">
			<img src="../../../public/img/usuario.jpg" class="card-img-top">
		<div class="card-body">
			
			<h5 class="card-title">{{usuario.name}} {{usuario.datos.apellido}}</h5>
			<ul class="list-group list-group-flush">
		    	<li class="list-group-item">Role:
		    		<ul v-for="role in usuario.roles">
		    			<li>{{role.name}}</li>
		    		</ul>
		    	</li>
		    	<li class="list-group-item">Cedula: {{usuario.datos.ci}}</li>
		    	<li class="list-group-item">Email: {{usuario.email}}</li>
			</ul>	    
		    
		    <b-button :to="{name: 'UsuariosShow', params: {id: usuario.id}}" variant="primary">Detalles</b-button>
		    <b-button v-b-modal="`my-modal-${usuario.id}`"variant="link">Editar</b-button>
		    <!--MODAL DE EDITAR-->
		    <b-modal hide-footer :id="`my-modal-${usuario.id}`" title="Editar usuario" size="lg" @ok="">
		    	<UsuariosEdit :usuario="usuario"/>
		    </b-modal>
		    <!--<b-button variant="danger" @click="eliminarUsuario(usuario.id)">Eliminar</b-button>-->
		    <b-button @click="showMsgBoxTwo(usuario.id, index)" variant="danger">Borrar</b-button>
		</div>
		</div>
	</div>
</template>
	
<script type="text/javascript">
	import {mapState, mapActions, mapMutations} from 'vuex'
	import UsuariosEdit from './UsuariosEdit';

	export default{
		components:{
			UsuariosEdit
		},
		data(){
			return{		
			//listaUsuarios: [],
			boxTwo: ''
			}
		},
		methods:{
			...mapActions('usuarios',['consultarListaUsuarios']),
			...mapMutations('usuarios', ['eliminar', 'llenarEnvio']),
			eliminarUsuario(id){

				axios.delete('/api/perfiles/'+id).then(response => {
					console.log(response);
					//this.consultarListaUsuarios();
				}).catch(e => {
					console.log(e);
				})
			},
			showMsgBoxTwo(solicitud, index) {//MODAL DE ELIMINAR
	        this.boxTwo = ''
	        this.$bvModal.msgBoxConfirm('¿Esta seguro que quiere eliminar este usuario?', {
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
	    			this.eliminarUsuario(solicitud);
	            	this.eliminar(index);
	    		}
	    		
	          }).catch(err => {
	            // An error occurred
	          })
	      },
	      llenar(usuario){
	      	this.llenarEnvio(usuario);
	      }

		},
		computed:{
			...mapState('usuarios',['listaUsuarios'])
		},
		mounted(){
			
			this.consultarListaUsuarios();
		
		}
	}

</script>

<style type="text/css">
	
</style>