<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Solicitud;
use App\Ciudadano;
use App\Dato;
use Carbon\Carbon;

class SolicitudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->orderBy('id', 'DESC')->paginate(10);

        return response()->json($solicitudes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        //formateando fecha
        $date = Carbon::now();
        $date = $date->toDateString();
        //
        $ciudadano = Dato::where('ci', $request->ci)->get();
        //SI ENCUENTRA EL CIUDADANO
        if(!empty($ciudadano[0]->id)){
            $solicitud = Solicitud::create([
                                    'fecha' => $date,
                                    'descripcion' => $request->descripcion,
                                    'status' => $request->status,
                                    'ciudadano_id' => $request->id,
                                    //'user_id' => Auth::user()->id, //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
                                    'tramite_id' => $request->tramite
                                    ]);
        }else{//SI NO ENCUENTRA EL CIUDADANO CREA UNO NUEVO
            $ciudadano = new Ciudadano;
            $ciudadano->save();

            $datos = Dato::create(['name' => $request->name, 'apellido' => $request->apellido, 'ci' => $request->ci, 'email' => $request->email, 'datoable_type' => 'App\Ciudadano', 'datoable_id' => $ciudadano->id]);

            $solicitud = Solicitud::create([
                                    'fecha' => $date,
                                    'descripcion' => $request->descripcion,
                                    'status' => $request->status,
                                    'ciudadano_id' => $ciudadano->id,
                                    //'user_id' => Auth::user()->id, //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
                                    'tramite_id' => $request->tramite
                                    ]);
        }

        return response()->json($solicitud);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $solicitud = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->findOrFail($id);

        return response()->json($solicitud);
    }

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
        //BUSCA DE LA SOLICITUD A ACTUALIZAR
        $solicitud = Solicitud::findOrFail($id);
        //SI ENCUENTRA EL CIUDADANO
   
            $solicitud = $solicitud->update([
                                    'descripcion' => $request->descripcion,
                                    'status' => $request->status,
                                    //'user_id' => Auth::user()->id, //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
                                    'tramite_id' => $request->tramite_id
                                    ]);


        return response()->json($solicitud);
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
        $solicitud = Solicitud::findOrFail($id);
        $solicitud->delete();

        return response()->json($solicitud);
    }

    public function filtrar($search){
/*
        /$solicitudes = Solicitud::with('tramite','ciudadano.datos', 'usuario')->whereDate('fecha', $search)->orWhereYear('fecha', $search)->orWhereMonth('fecha', $search)->orWhereDay('fecha', $search)->paginate(10);
*/
        $datos = Dato::with('ciudadano.solicitudes', 'ciudadano.solicitudes.tramite', 'ciudadano.solicitudes.usuario')->where('ci', $search)->paginate(10);

        return response()->json($datos);
    }
}
