<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	//ROLES

    	Role::create([
    		'name' => 'administrador',
    		'slug' => 'administrador',
    		'special' => 'all-access'
    	]);

    	Role::create([
    		'name' => 'supervisor',
    		'slug' => 'supervisor',
  
    	]);

    	Role::create([
    		'name' => 'normal',
    		'slug' => 'normal',
    	
    	]);

    	Role::create([
    		'name' => 'suspendido',
    		'slug' => 'suspendido',
    	
    	]);


        //usuario
        $usuario = new App\User();
        $usuario->name = 'jose';
        $usuario->email = 'jose@gmail.com';
        $usuario->password = bcrypt(12345678);
        $usuario->save();
        $usuario->assignRoles('normal', 'normal');
        $usuario->save();
        


    }
}
