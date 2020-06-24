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
        //NORMAL
        $usuario = new App\User();
        $usuario->name = 'luis';
        $usuario->email = 'luis@gmail.com';
        $usuario->password = bcrypt(12345678);
        $usuario->save();
        $usuario->assignRoles('normal', 'normal');

        App\Dato::create([
                            'name' => $usuario->name,
                            'apellido' => 'briceño',
                            'ci' => '26734165',
                            'email' => $usuario->email,
                            'datoable_type' => 'App\User',
                            'datoable_id' => $usuario->id
                            ]);
        $usuario->save();
        //NORMAL
        $usuario = new App\User();
        $usuario->name = 'bruno';
        $usuario->email = 'batman@gmail.com';
        $usuario->password = bcrypt(12345678);
        $usuario->save();
        $usuario->assignRoles('normal', 'normal');

        App\Dato::create([
                            'name' => $usuario->name,
                            'apellido' => 'diaz',
                            'ci' => '25345232',
                            'email' => $usuario->email,
                            'datoable_type' => 'App\User',
                            'datoable_id' => $usuario->id
                            ]);
        $usuario->save();
        //ADMINISTRADOR
        $usuario = new App\User();
        $usuario->name = 'dayana';
        $usuario->email = 'wonder@gmail.com';
        $usuario->password = bcrypt(12345678);
        $usuario->save();
        $usuario->assignRoles('administrador', 'administrador');

        App\Dato::create([
                            'name' => $usuario->name,
                            'apellido' => 'woman',
                            'ci' => '24545622',
                            'email' => $usuario->email,
                            'datoable_type' => 'App\User',
                            'datoable_id' => $usuario->id
                            ]);
        $usuario->save();
        //SUPERVISOR
        $usuario = new App\User();
        $usuario->name = 'juanito';
        $usuario->email = 'juanito@gmail.com';
        $usuario->password = bcrypt(12345678);
        $usuario->save();
        $usuario->assignRoles('supervisor', 'supervisor');
        App\Dato::create([
                            'name' => $usuario->name,
                            'apellido' => 'alimaña',
                            'ci' => '25552622',
                            'email' => $usuario->email,
                            'datoable_type' => 'App\User',
                            'datoable_id' => $usuario->id
                            ]);
        $usuario->save();
    }
}
