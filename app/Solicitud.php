<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    //
    protected $fillable = [
        'fecha', 'descripcion', 'status', 'ciudadano_id', 'tramite_id', 'user_id'
    ];

    public function usuario()
    {
    	return $this->belongsTo(User::class);
    }

    public function ciudadano()
    {
    	return $this->belongsTo(Ciudadano::class);
    }

    public function tramite()
    {
    	return $this->belongsTo(Tramite::class);
    }
/*
    public function datosCiudadano(){

        return $this->hasOneThrough('App\Dato', 'App\Ciudadano'); 
    }*/
}
