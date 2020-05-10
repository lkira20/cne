<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Solicitud;
use Faker\Generator as Faker;

$factory->define(Solicitud::class, function (Faker $faker) {
	//para buscar el user_id de los usuario que tengan el rol normal
	$usuarios = App\User::all();
	$arrayuserComprobado = [];

	foreach($usuarios as $user){

		if($user->hasRole('normal')){

			array_push($arrayuserComprobado, $user);
		}
	}
	$longitud = count($arrayuserComprobado);
	$random = rand(0, $longitud-1);

	$idUser = $arrayuserComprobado[$random]->id;
/*
	if(count($arrayuserComprobado) < 2){
		$idUser = $arrayuserComprobado[0]->id;
	}else{

	$userComprobado = Arr::random($arrayuserComprobado);
	$idUser = $userComprobado->id;
	}
*/
    return [
        //
        'fecha' => $faker->date,
        'descripcion' => $faker->paragraph,
        'status' => $faker->randomElement([true, false]),
        'ciudadano_id' => App\Ciudadano::all()->random()->id,
        'user_id' => $idUser,
        'tramite_id' => App\Tramite::all()->random()->id,
    ];
});
