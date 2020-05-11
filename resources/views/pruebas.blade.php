@extends('layouts.app')

@section('content')
<form action="{{ route('ciudadano.destroy', 4) }}" method="post">
		<input type="hidden" name="_method" value="DELETE">
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
			  		<input type="text" class="form-control" id="cedula" placeholder="cedula" name="cedula">

			  	</div>
			  	<div class="form-group col-md-6">
			  		<label for="nombre">nombre</label>
			  		<input type="text" class="form-control" id="nombre" placeholder="nombre" name="name">
			  	</div>
			  	<div class="form-group col-md-6">
			  		<label for="apellido">apellido</label>
			  		<input type="text" class="form-control" id="apellido" placeholder="apellido" name="apellido">
			  	</div>
			  				<div class="form-group col-md-6">
			  					<label for="email">email</label>
			  					<input type="email" class="form-control" id="email" placeholder="email" name="email">

			  				</div>
			  			</div>
	<button type="submit">crear</button>
	@csrf
</form>

@endsection