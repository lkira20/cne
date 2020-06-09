<template>
	<div>
		<h1 class="text-center">Ciudadanos</h1>
		<transition name="slide-fade" mode="out-in">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script type="text/javascript">

	import ListCiudadanos from '../components/ListCiudadanos'

	export default{
		components:{
			ListCiudadanos
		}
	}

</script>

<style type="text/css">
	.slide-fade-enter-active, .component-fade-leave-active {
  		transition: opacity .3s ease;
	}
	.slide-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>