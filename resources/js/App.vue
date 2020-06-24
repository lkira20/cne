<template id="tem">
	<div style="height:100%;" id="caja">
		<header class="">
			<nav v-if="$store.state.token !== null" class="navbar navbar-expand-lg navbar-dark bg-danger shadow">
				
			  <router-link class="navbar-brand" :to="{name: 'inicio'}"><img src="../../public/img/CNE_logo.svg" alt="CNE" width="60px"></router-link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav ml-auto">
			      <li class="nav-item">
			      	<router-link class="nav-link" :to="{name: 'inicio'}" exact><font-awesome-icon icon="home"/> Inicio</router-link>
			      </li>
			      <li class="nav-item">
			      	<!--<router-link class="nav-link" :to="{name: 'ListCiudadanos'}">Ciudadanos</router-link>-->

			      	<b-nav-item-dropdown text="Ciudadanos">
					    <b-dropdown-item :to="{name: 'ListCiudadanos'}">Lista</b-dropdown-item>
					    <b-dropdown-item :to="{name: 'ciudadanosCreate'}">Nuevo</b-dropdown-item>
					</b-nav-item-dropdown>
			      </li>
			      <li class="nav-item">
			      	<!--<router-link class="nav-link" :to="{name: 'ListaSolicitudes'}">Solicitudes</router-link>-->
			      	<b-nav-item-dropdown text="Solicitudes">
					    <b-dropdown-item :to="{name: 'ListaSolicitudes'}">Lista</b-dropdown-item>
					    <b-dropdown-item :to="{name: 'IniciarSolicitud'}">Nuevo</b-dropdown-item>
					    <b-dropdown-item :to="{name: 'TablaAnual'}">Estadisticas</b-dropdown-item>
					</b-nav-item-dropdown>
			      </li>
			      <li class="nav-item">
			      	<router-link class="nav-link" :to="{name: 'tramites'}">Documentos</router-link>
			      </li>
			      <li class="nav-item">
			      	<router-link class="nav-link" :to="{name: 'ListUsuarios'}">Usuarios</router-link>
			      </li>
			      <li class="nav-item">
			      	<router-link class="nav-link" :to="{name: 'notificaciones'}">Notas</router-link>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          <span v-if="carga == true">{{usuario.name}}</span>
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
			       		<!--<router-link class="dropdown-item text-light" :to="{name: 'authperfil'}">Perfil</router-link>-->
			        	<router-link class="dropdown-item" :to="{name: 'logout'}">Cerrar sesion</router-link>
	 	   
			        </div>
			      </li>
			    </ul>
			  </div>
			</nav>
		</header>

		<main class="" id="caja2" style="height:100%;">
			<transition name="slide-fade" mode="out-in">
	            <router-view class="niidea"></router-view>
	        </transition>
        </main>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				usuario: null,
				carga: false
			}
		},
		computed:{
			
		},
		methods:{
			/*logout(){

				this.$store.dispatch("destroyToken").then(response => {
		          this.$router.push({ name: "login" });
		        })
		        .catch(error => {
		          this.error = error.response.data;
		        });;
					}
					*/
		auth(){
			this.carga = false;
			axios.get('/api/nombreauth', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
				console.log(response.data);
				this.usuario = response.data;
				this.carga = true;
			}).catch(e => {
				console.log(e.response);
			});
		}
		},
		created(){
			this.auth();
		}
	}
</script>

<style type="text/css">
/*
	#caja{
		height:100%;
         margin:0;
        display: flex;
        flex-direction: column;
        background-image: url('../../public/img/cnelo.jpg');
       	background-attachment: fixed;
       	background-size: 100%;	    
	}

	.niidea{
		background-image: url('../../public/img/cnelo.jpg');
       	background-attachment: fixed;
       	background-size: 100%;
       	

	}

	#drop{
		background-color: transparent !important;
	}
	*/
	.slide-fade-enter-active, .component-fade-leave-active {
  		transition: opacity .3s ease;
	}
	.slide-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}

</style>