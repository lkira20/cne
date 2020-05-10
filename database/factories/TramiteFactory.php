<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tramite;
use Faker\Generator as Faker;

$factory->define(Tramite::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'description' => $faker->paragraph
    ];
});
