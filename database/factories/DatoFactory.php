<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dato;
use Faker\Generator as Faker;

$factory->define(Dato::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->firstName,
        'apellido' => $faker->lastName,
        'ci' => $faker->creditCardNumber,
        'email' => $faker->email
    ];
});
