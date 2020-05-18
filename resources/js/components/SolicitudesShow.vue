<template>
	<div v-if="busqueda === false" class="card">
		<div id="solicitud" class="">
			<h2 class="card-title card-header">Solicitud</h2>
			<div class="card-body">
				<div class="card-text"><small class="text-muted"><b>Fecha: </b>{{this.solicitud.fecha}}</small></div>
				<div class="card-text"><b>Descripcion: </b>{{this.solicitud.descripcion}}</div>
				<div class="card-text"><b>Estado: </b>{{this.solicitud.status == 1? 'concluido': 'en espera'}}</div>
				<div class="card-text"><b>Usuario: </b>{{this.solicitud.usuario? this.solicitud.usuario.name: 'indefinido'}}</div>
			</div>
		</div>
		<hr>
		<div id="ciudadano">
			<h2 class="card-title card-header">ciudadano</h2>
			<div class="card-body">
				<div class="card-text"><b>Nombre: </b>{{this.solicitud.ciudadano.datos.name}}</div>
				<div class="card-text"><b>Apellido: </b>{{this.solicitud.ciudadano.datos.apellido}}</div>
				<div class="card-text"><b>Cedula: </b>{{this.solicitud.ciudadano.datos.ci}}</div>
				<div class="card-text"><b>Correo: </b>{{this.solicitud.ciudadano.datos.email}}</div>
			</div>
		</div>
		<hr>
		<div id="tramite">
			<h2 class="card-title card-header">tramite</h2>
			<div class="card-body">
				<div class="card-text"><b>nombre: </b>{{this.solicitud.tramite.name}} </div>
				<div class="card-text"><b>descripcion: </b>{{this.solicitud.tramite.description}}</div>
			</div>
		</div>	
	</div>
	<!--FORMATO SI SE VISUALIZA DESDE EL FILTRO-->
	<div v-else="busqueda === false" class="card">
		<div id="solicitud" class="">
			<h2 class="card-title card-header">Solicitud</h2>
			<div class="card-body">
				<div class="card-text"><small class="text-muted"><b>Fecha: </b>{{this.solicitud.fecha}}</small></div>
				<div class="card-text"><b>Descripcion: </b>{{this.solicitud.descripcion}}</div>
				<div class="card-text"><b>Estado: </b>{{this.solicitud.status == 1? 'concluido': 'en espera'}}</div>
				<div class="card-text"><b>Usuario: </b>{{this.solicitud.usuario? this.solicitud.usuario.name: 'indefinido'}}</div>
			</div>
		</div>
		<hr>
		<div id="ciudadano">
			<h2 class="card-title card-header">ciudadano</h2>
			<div class="card-body">
				<div class="card-text"><b>Nombre: </b>{{this.ciudadano.name}}</div>
				<div class="card-text"><b>Apellido: </b>{{this.ciudadano.apellido}}</div>
				<div class="card-text"><b>Cedula: </b>{{this.ciudadano.ci}}</div>
				<div class="card-text"><b>Correo: </b>{{this.ciudadano.email}}</div>
			</div>
		</div>
		<hr>
		<div id="tramite">
			<h2 class="card-title card-header">tramite</h2>
			<div class="card-body">
				<div class="card-text"><b>nombre: </b>{{this.solicitud.tramite.name}} </div>
				<div class="card-text"><b>descripcion: </b>{{this.solicitud.tramite.description}}</div>
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
	
	export default {
		props:{
			solicitud: Object,
			busqueda: Boolean,
			ciudadano: Object
		},
		created(){
			console.log(this.solicitud);
		}
	}
</script>