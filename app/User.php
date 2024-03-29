<?php

namespace App;

use Laravel\Passport\HasApiTokens;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Caffeinated\Shinobi\Concerns\HasRolesAndPermissions;
use Caffeinated\Shinobi\Models\Permission;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRolesAndPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function datos()
    {
        return $this->morphOne(Dato::class, 'datoable');
    }

    public function solicitudes()
    {
        return $this->hasMany(Solicitud::class);
    }

    public function getAllPermissionsAttribute() {
      $permissions = [];
        foreach (Auth::user()->roles as $role) {
            foreach ($role->permissions as $permiso) {
                $permissions[] = $permiso->slug;
            }
        }
        return $permissions;
    }
}
