<template>
	<div>
		<h1 class="text-center">Solicitudes</h1>
		<ListaSolicitudes></ListaSolicitudes>
		<TablaAnual></TablaAnual>
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