<template>
	<div>
		
		<iniciarSolicitud class="mt-3"></iniciarsolicitud>
	</div>
</template>

<script type="text/javascript">

	import iniciarSolicitud from '../components/IniciarSolicitud'

	export default{
		components:{
			iniciarSolicitud
		},
		created(){

			 //console.log(this.$store.state.usuario);

		}
	}

</script>

<style type="text/css">
	
</style>