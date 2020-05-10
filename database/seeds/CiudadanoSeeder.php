<?php

use Illuminate\Database\Seeder;

class CiudadanoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Ciudadano::class, 10)->create()->each(function ($ciudadano) {

        	$persona = $ciudadano->datos()->save(factory(App\Dato::class)->make());
        });
    }
}
