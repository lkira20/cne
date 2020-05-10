<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ciudadano extends Model
{
    //
    public function datos()
    {
    	return $this->morphOne(Dato::class, 'datoable');
    }

    public function solicitudes()
    {
    	return $this->hasMany(Solicitud::class);
    }
}
