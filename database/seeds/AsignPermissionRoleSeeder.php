<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Permission;
use Caffeinated\Shinobi\Models\Role;

class AsignPermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //ROL NORMAL
        $role = Role::findOrFail(3);

        $role->syncPermissions('ciudadano index', 'ciudadano.show', 'ciudadano.edit', 'ciudadano.delete', 'ciudadano.create', 'solicitud.index', 'solicitud.show', 'solicitud.edit', 'solicitud.delete', 'solicitud.create', 'tramite.index', 'tramite.show', 'perfiles.index', 'notificaciones.index');

        //ROL Administrador
        $role = Role::findOrFail(1);

        $role->syncPermissions('ciudadano index', 'ciudadano.show', 'ciudadano.edit', 'ciudadano.delete', 'ciudadano.create', 'solicitud.index', 'solicitud.show', 'solicitud.edit', 'solicitud.delete', 'solicitud.create' ,'tramite.index', 'tramite.show', 'tramite.edit', 'tramite.delete', 'tramite.create','perfiles.index', 'perfiles.show', 'perfiles.edit', 'perfiles.delete', 'perfiles.create','notificaciones.index', 'notificaciones.show', 'notificaciones.edit', 'notificaciones.delete', 'notificaciones.create');

        //ROL Supervisor
        $role = Role::findOrFail(2);

        $role->syncPermissions('ciudadano index', 'ciudadano.show', 'solicitud.index', 'solicitud.show', 'tramite.index', 'tramite.show', 'perfiles.index', 'perfiles.show',  'notificaciones.index', 'notificaciones.show');
    }
}
