<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	$this->call(UserSeeder::class);
    	$this->call(CiudadanoSeeder::class);
    	$this->call(NotificacionSeeder::class);
    	$this->call(TramiteSeeder::class);
    	$this->call(SolicitudSeeder::class);
    	$this->call(PermissionSeeder::class);
        $this->call(AsignPermissionRoleSeeder::class);
    }
}
