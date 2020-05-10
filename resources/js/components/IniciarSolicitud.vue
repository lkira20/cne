<template>
	<div>
			<form >
				<div class="card mb-2">
					<div class="card-body">		
								
						<div class="form-row ">
			  				<div class="form-group col-12">
			  					<div>
			   						<h2 class="text-center mt-4">Iniciar Solicitud de documento</h2>
			  					</div>  
			  					<h5>Datos del ciudadano</h5>
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="cedula">cedula</label>
			  					<input type="text" class="form-control" id="cedula" placeholder="cedula" name="cedula" v-model.number="cedula">

			  				</div>
			  				<div class="form-group col-md-6 text-center">
			  					<label>comprobar si el usuario ya esta registrado</label>
			  					<button class="form-control btn btn-primary d-block">Comprobar</button>

			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="nombre">nombre</label>
			  					<input type="text" class="form-control" id="nombre" placeholder="nombre" name="nombre" v-model="name">
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="apellido">apellido</label>
			  					<input type="text" class="form-control" id="apellido" placeholder="apellido" name="apellido" v-model="apellido">
			  				</div>
			  				<div class="form-group col-md-6">
			  					<label for="email">email</label>
			  					<input type="email" class="form-control" id="email" placeholder="email" name="email" v-model="email">

			  				</div>
			  			</div>

			  			<hr>

				  		<div class="form-group col-12">
				  			<h5>Datos para la solicitud </h5>
				  		</div>

			  			<div class="form-group">
			  				<label for="inputAddress">tramite</label>
							 <select  id="tramite" v-model="tramite" name="tramite" class="form-control">
							 	<option value=0>seleccion algun tramite</option>						 	
	                         </select>
			  			</div>
			 
			  			<div class="form-group">
			  				<label for="inputAddress">estatus</label>
			  				<select class="form-control" placeholder="estutus" v-model="status">
			  					<option value=true> atendido </option>
			  					<option value=false> pendiente </option>
			  				</select>

			  			</div>

			  			<div class="form-group">
			  				<label for="descripcion">Descripcion de solicitud.</label>
			  				<textarea class="form-control" id="descripcion" rows="3" name="descripcion" v-model="descripcion"></textarea>
			  			</div>
			  			<div class="text-center mb-3">
			  				<button type="submit" class="btn btn-primary btn-lg btn-block" name="registrar-solicitud">Registrar</button>
			  			</div>
		  			</div>
		  		</div>
		  	</form>
	</div>
		
</template>

<script type="text/javascript">
	export default{
		data(){
			return{//datos del ciudadano
				cedula: null,
				name: '',
				apellido: '',
				email: '',
				//datos de la solicutud
				tramite: 0,
				status: false,
				descripcion: ''

			}
		}
	}

</script>

<style type="text/css" scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
</style>