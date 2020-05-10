<template>
	<div>
		<div class="card">
		 	<div class="card-header">
		    	<h2 class="text-center card-title">Lista de mis solicitudes</h2>
			</div>
			<div class="card-body">
		
			<div class="d-flex">
				<form class="form-inline ml-auto mb-3">
	     			<input class="form-control" type="search" placeholder="buscar" aria-label="Search">
	     			<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">buscar</button>
	    		</form>
    		</div>
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Ciudadano</th>
						<th scope="col">tramite</th>
						<th scope="col">fecha</th>
						<th>Opciones</th>
					</tr>
				</thead>
				<tbody>

				    <tr class="">
				    	<th scope="row">1</th>
				    	<td>Mark</td>
				    	<td>Otto</td>
				    	<td>@mdo</td>
				    	<td>
				      		<a href="" class="btn btn-link">detalles</a>
				      		<a href="" class="btn btn-danger">eliminar</a>
				    	</td>
				    </tr>
				    <tr>
				    <th scope="row">2</th>
				    	<td>Jacob</td>
				    	<td>Thornton</td>
				    	<td>@fat</td>
				    	<td>
				      		<a href="" class="btn btn-link">detalles</a>
				     		<a href="" class="btn btn-danger">eliminar</a>
				    	</td>
				    </tr>
				    <tr>
				    	<th scope="row">3</th>
				    	<td>Larry the Bird</td>
				      	<td>Larry the Bird</td>
				      	<td>@twitter</td>
				      	<td>
				      		<a href="" class="btn btn-link">detalles</a>
				      		<a href="" class="btn btn-danger">eliminar</a>
				    	</td>
				    </tr>
				</tbody>
			</table>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	export default{
		
	}

</script>

<style type="text/css">
	
</style>