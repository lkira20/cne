<template>
	<div>
		<dashboard></dashboard>

	</div>
</template>

<script type="text/javascript">

	import iniciarSolicitud from '../components/IniciarSolicitud'
	import dashboard from '../components/AuthPerfil'

	export default{
		components:{
			dashboard
		},
		created(){

			 //console.log(this.$store.state.usuario);

		}
	}

</script>

<style type="text/css">
	
</style>