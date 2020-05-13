<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dato;
use App\Ciudadano;

class CiudadanoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $ciudadanos = Dato::orderBy('id', 'DESC')->where('datoable_type', 'App\Ciudadano')->paginate();
        //devulve la lista de ciudadanos 
        return response()->json($ciudadanos);

        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //creo el ciudadano
        $ciudadano = Ciudadano::create();
        // le inserto los datos
        $datos = Dato::create(['name' => $request->name, 'apellido' => $request->apellido, 'ci' => $request->ci, 'email' => $request->email, 'datoable_type' => 'App\Ciudadano', 'datoable_id' => $ciudadano->id]);

        return response()->json($datos);
    }

    public function show($id)
    {
    
        $ciudadano = Ciudadano::findOrFail($id);

        $ciudadano = $ciudadano->datos;

        return response()->json($ciudadano);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $ciudadano = Ciudadano::findOrFail($id);
        $ciudadano = $ciudadano->datos->update($request->all());
        //devulve true si se realizo correctamente
        return response()->json($ciudadano);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $ciudadano = Ciudadano::findOrFail($id);
      
        //borro los datos
        $ciudadano->datos->delete();
        //borro el ciudadano
        $ciudadano->delete();

        return response()->json($ciudadano);
    }
}
