<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dato extends Model
{
    //
    protected $fillable = [
        'name', 'email', 'ci', 'apellido', 'datoable_type', 'datoable_id'
    ];
  	
  	public function ciudadano(){

  		return $this->morphTo(__FUNCTION__, 'datoable_type', 'datoable_id');
  	}
}
