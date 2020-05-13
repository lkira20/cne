<template>
	<div>
		<h1 class="text-center">Ciudadanos</h1>

		<router-view></router-view>

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
	
</style>