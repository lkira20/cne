<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-info shadow">
		  <a class="navbar-brand" href="#">CNE</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'inicio'}">Inicio</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'solicitudes'}">Solicitudes</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'tramites'}">Tramites</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'usuarios'}">Usuarios</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" :to="{name: 'notificaciones'}">notificaciones</router-link>
		      </li>
		      <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Usuario
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="#">Perfil</a>
		          <a class="dropdown-item" href="#">logout</a>
		        </div>
		      </li>
		    </ul>
		  </div>
		</nav>

		<div class="container mt-5">
			<transition name="slide-fade" mode="out-in">
	            <router-view :key="$route.fullPath"></router-view>
	        </transition>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>