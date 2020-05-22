<template>
	<div>
		<h1 v-if="$route.path == '/solicitudes' || $route.path == '/solicitudes/'" class="text-center">Solicitudes <b-button :to="{name: 'TablaAnual'}" variant="secondary">Estadisticas</b-button></h1>
		<h1 v-if="$route.path == '/solicitudes/estadisticas'" class="text-center">Lista <b-button :to="{name: 'ListaSolicitudes'}" variant="primary">Solicitudes</b-button></h1>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">

	import ListaSolicitudes from '../components/ListaSolicitudes'
	import TablaAnual from '../components/TablaAnual'

	export default {
		components:{
			ListaSolicitudes,
			TablaAnual
		}
	}
</script>