<template>
	<div id="cajaA">
		<div style="height: 50px">
		  <b-navbar toggleable="lg" type="light" variant="light" class="shadow" id="nav">
			    <b-navbar-brand href="#"><img src="../../../public/img/CNE_logo.svg" alt="CNE" width="60px"></b-navbar-brand>

			    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			    <b-collapse id="nav-collapse" is-nav>
			      <b-navbar-nav class="ml-auto">
			        <b-nav-item :to="{name: 'Procedimiento'}">Procedimiento</b-nav-item>
			        <b-nav-item :to="{name: 'Requisitos'}">Requisitos</b-nav-item>
			        <b-nav-item :to="{name: 'MiSolicitud'}">Mi solicitud</b-nav-item>
			      </b-navbar-nav>
			    </b-collapse>
		  </b-navbar>
		</div>
			<transition name="slide-fade" mode="out-in" class="" id="caja2">
		        <router-view class="niideaA mt-5"></router-view>
		    </transition>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	#cajaA{
		display: flex;
        flex-direction: column;
        background-image: url('../../../public/img/cnelo.jpg');
     
       	background-size: 100%;
       	height: 100%;
       	background-repeat: repeat-y;
	    position: relative;
	    background-size: 100%;	    
	}

	.niideaA{
		background-image: url('../../../public/img/cnelo.jpg');
       	background-attachment: fixed;
       	background-size: 100%;
	}

	#nav{
		background-color: rgba(256,256,256,0.5) !important;
	}
	.slide-fade-enter-active, .component-fade-leave-active {
  		transition: opacity .3s ease;
	}
	.slide-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>