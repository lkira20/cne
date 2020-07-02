<template>
	<div class="" id="pro">
	
		<div class="accordion container" id="accordionExample">
		  <div class="card">
		    <div class="card-header" id="headingOne">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		          Nacimientos
		        </button>
		      </h2>
		    </div>

		    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
		      <div class="card-body">
		    	<img src="../../../public/img/nacimientos.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>
		  <div class="card">
		    <div class="card-header" id="headingTwo">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		       	  Matrimonios
		        </button>
		      </h2>
		    </div>
		    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
		      <div class="card-body">
		        <img src="../../../public/img/matrimonios.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>
		  <div class="card">
		    <div class="card-header" id="headingThree">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		          Union estable de hechos
		        </button>
		      </h2>
		    </div>
		    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		      <div class="card-body">
		        <img src="../../../public/img/hecho.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>

		 	<div class="card">
		    <div class="card-header" id="heading4">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
		          Defunciones
		        </button>
		      </h2>
		    </div>
		    <div id="collapse4" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		      <div class="card-body">
		        <img src="../../../public/img/defunciones.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>

		  <div class="card">
		    <div class="card-header" id="heading5">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
		          Union estable de hechos por manifestacion unilateral
		        </button>
		      </h2>
		    </div>
		    <div id="collapse5" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		      <div class="card-body">
		        <img src="../../../public/img/unilateral.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>

		  <div class="card">
		    <div class="card-header" id="heading6">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
		          Union estable de hechos por manifestacion conjunta
		        </button>
		      </h2>
		    </div>
		    <div id="collapse6" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		      <div class="card-body">
		       <img src="../../../public/img/manifestacion.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>

		  <div class="card">
		    <div class="card-header" id="heading7">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-center collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
		        	Copias certificadas
		        </button>
		      </h2>
		    </div>
		    <div id="collapse7" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		      <div class="card-body">
		        <img src="../../../public/img/copias.jpg" class="img-fluid" alt="">
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

</style>