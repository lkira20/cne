<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //PERMISOS DE CIUDADANO
        
        Permission::create([
    		'name' => 'listar ciudadano',
    		'slug' => 'ciudadano index',
    	]);
	
    	Permission::create([
    		'name' => 'ver ciudadano',
    		'slug' => 'ciudadano.show',
    	]);
    	Permission::create([
    		'name' => 'editar ciudadano',
    		'slug' => 'ciudadano.edit',
    	]);
    	Permission::create([
    		'name' => 'eliminar ciudadano',
    		'slug' => 'ciudadano.delete',
    	]);

        Permission::create([
            'name' => 'crear ciudadano',
            'slug' => 'ciudadano.create',
        ]);

    	//PERMISOS DE solicitudes
        Permission::create([
    		'name' => 'listar solicitud',
    		'slug' => 'solicitud.index',
    	]);
    	Permission::create([
    		'name' => 'ver solicitud',
    		'slug' => 'solicitud.show',
    	]);
    	Permission::create([
    		'name' => 'editar solicitud',
    		'slug' => 'solicitud.edit',
    	]);
    	Permission::create([
    		'name' => 'eliminar solicitud',
    		'slug' => 'solicitud.delete',
    	]);

        Permission::create([
            'name' => 'crear solicitud',
            'slug' => 'solicitud.create',
        ]);

    	//PERMISOS DE TRAMITES
        Permission::create([
    		'name' => 'listar tramite',
    		'slug' => 'tramite.index',
    	]);
    	Permission::create([
    		'name' => 'ver tramite',
    		'slug' => 'tramite.show',
    	]);
    	Permission::create([
    		'name' => 'editar tramite',
    		'slug' => 'tramite.edit',
    	]);
    	Permission::create([
    		'name' => 'eliminar tramite',
    		'slug' => 'tramite.delete',
    	]);
        Permission::create([
            'name' => 'crear tramite',
            'slug' => 'tramite.create',
        ]);

    	//PERMISOS DE perfiles
        Permission::create([
    		'name' => 'listar perfiles',
    		'slug' => 'perfiles.index',
    		'description' => ''
    	]);
    	Permission::create([
    		'name' => 'ver perfiles',
    		'slug' => 'perfiles.show',
    	]);
    	Permission::create([
    		'name' => 'editar perfiles',
    		'slug' => 'perfiles.edit',
    	]);
    	Permission::create([
    		'name' => 'eliminar perfiles',
    		'slug' => 'perfiles.delete',
    	]);

        Permission::create([
            'name' => 'crear perfiles',
            'slug' => 'perfiles.create',
        ]);

    	//PERMISOS DE NOTIFICACIONES
        Permission::create([
    		'name' => 'listar notificaciones',
    		'slug' => 'notificaciones.index',
    	]);
    	Permission::create([
    		'name' => 'ver notificaciones',
    		'slug' => 'notificaciones.show',
    	]);
    	Permission::create([
    		'name' => 'editar notificaciones',
    		'slug' => 'notificaciones.edit',
    	]);
    	Permission::create([
    		'name' => 'eliminar notificaciones',
    		'slug' => 'notificaciones.delete',
    	]);
    	Permission::create([
            'name' => 'crear notificaciones',
            'slug' => 'notificaciones.create',
        ]);
    }
}
