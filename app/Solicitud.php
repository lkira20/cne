<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    //
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
}
