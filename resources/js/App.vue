<template>
	<div style="height:100%;" id="caja">
		<nav v-if="$store.state.token !== null" class="navbar navbar-expand-lg navbar-light shadow">
		  <a class="navbar-brand" href="#">CNE</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'inicio'}" exact>Inicio</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'ListCiudadanos'}">Ciudadanos</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'ListaSolicitudes'}">Solicitudes</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'tramites'}">Tramites</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'ListUsuarios'}">Usuarios</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'notificaciones'}">notificaciones</router-link>
		      </li>
		      <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Usuario
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		       		<router-link class="dropdown-item" :to="{name: 'authperfil'}">Perfil</router-link>
		        	<router-link class="dropdown-item" :to="{name: 'logout'}">logout</router-link>
 	   
		        </div>
		      </li>
		    </ul>
		  </div>
		</nav>

		<div class="" id="caja2" style="height:100%;">
			<transition name="slide-fade" mode="out-in">
	            <router-view ></router-view>
	        </transition>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
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
		}
	}
</script>

<style type="text/css">
	#caja{
		height:100%;
         margin:0;
        display: flex;
        flex-direction: column;	
	}
</style>