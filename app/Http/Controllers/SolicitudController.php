<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Solicitud;
use App\Ciudadano;
use App\Dato;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SolicitudRequest;

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
                                    'user_id' => Auth::id(), //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
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
                                    'user_id' => Auth::id(), //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
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
                                    'user_id' => Auth::id(), //HABILITAR CUANDO ESTABLESCA LA AUTENTICACION
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

    public function estadisticas()
    {   
        $año = Carbon::now()->year;
        //GLOBAL
        $solicitudesglobales = Solicitud::whereYear('fecha', $año )->count();

        $solicitudeGENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->count();
        $solicitudeGFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->count();
        $solicitudeGMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->count();
        $solicitudeGABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->count();
        $solicitudeGMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->count();
        $solicitudeGJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->count();
        $solicitudeGJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->count();
        $solicitudeGAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->count();
        $solicitudeGSEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->count();
        $solicitudeGOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->count();
        $solicitudeGNOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->count();
        $solicitudeGDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->count();

        //ATENDIDAS
        $solicitudesatendidas = Solicitud::whereYear('fecha', $año )->where('status', 1)->count();

        $solicitudeAENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 1)->count();
        $solicitudeAFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 1)->count();
        $solicitudeAMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 1)->count();
        $solicitudeAABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 1)->count();
        $solicitudeAMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 1)->count();
        $solicitudeAJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 1)->count();
        $solicitudeAJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 1)->count();
        $solicitudeAAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 1)->count();
        $solicitudeASEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 1)->count();
        $solicitudeAOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 1)->count();
        $solicitudeANOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 1)->count();
        $solicitudeADICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 1)->count();
        //ESPERA
        $solicitudesespera = Solicitud::whereYear('fecha', $año )->where('status', 0)->count();

        $solicitudeEENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 0)->count();
        $solicitudeEFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 0)->count();
        $solicitudeEMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 0)->count();
        $solicitudeEABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 0)->count();
        $solicitudeEMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 0)->count();
        $solicitudeEJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 0)->count();
        $solicitudeEJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 0)->count();
        $solicitudeEAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 0)->count();
        $solicitudeESEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 0)->count();
        $solicitudeEOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 0)->count();
        $solicitudeENOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 0)->count();
        $solicitudeEDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 0)->count();

        return response()->json(['totales' => [
                                    'totalGlobal' => $solicitudesglobales,
                                    'totalAtendidas' => $solicitudesatendidas,
                                    'totalEspera' => $solicitudesespera
                                ],
                                'globales' => [
                                    $solicitudeGENERO,
                                    $solicitudeGFEBRERO,
                                    $solicitudeGMARZO,
                                    $solicitudeGABRIL,
                                    $solicitudeGMAYO,
                                    $solicitudeGJUNIO,
                                    $solicitudeGJULO,
                                    $solicitudeGAGOSTO,
                                    $solicitudeGSEPTIEMBRE,
                                    $solicitudeGOCTUBRE,
                                    $solicitudeGNOVIEMBRE,
                                    $solicitudeGDICIEMBRE
                                    ],
                                'atendidas' => [
                                    $solicitudeAENERO,
                                    $solicitudeAFEBRERO,
                                    $solicitudeAMARZO,
                                    $solicitudeAABRIL,
                                    $solicitudeAMAYO,
                                    $solicitudeAJUNIO,
                                    $solicitudeAJULO,
                                    $solicitudeAAGOSTO,
                                    $solicitudeASEPTIEMBRE,
                                    $solicitudeAOCTUBRE,
                                    $solicitudeANOVIEMBRE,
                                    $solicitudeADICIEMBRE
                                    ],
                                'espera' => [
                                    $solicitudeEENERO,
                                    $solicitudeEFEBRERO,
                                    $solicitudeEMARZO,
                                    $solicitudeEABRIL,
                                    $solicitudeEMAYO,
                                    $solicitudeEJUNIO,
                                    $solicitudeEJULO,
                                    $solicitudeEAGOSTO,
                                    $solicitudeESEPTIEMBRE,
                                    $solicitudeEOCTUBRE,
                                    $solicitudeENOVIEMBRE,
                                    $solicitudeEDICIEMBRE
                                    ]
                                ]);
    }

    public function filtrarestadisticas($año)
    {
         //GLOBAL
        $solicitudesglobales = Solicitud::whereYear('fecha', $año )->count();

        $solicitudeGENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->count();
        $solicitudeGFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->count();
        $solicitudeGMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->count();
        $solicitudeGABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->count();
        $solicitudeGMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->count();
        $solicitudeGJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->count();
        $solicitudeGJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->count();
        $solicitudeGAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->count();
        $solicitudeGSEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->count();
        $solicitudeGOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->count();
        $solicitudeGNOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->count();
        $solicitudeGDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->count();

        //ATENDIDAS
        $solicitudesatendidas = Solicitud::whereYear('fecha', $año )->where('status', 1)->count();

        $solicitudeAENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 1)->count();
        $solicitudeAFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 1)->count();
        $solicitudeAMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 1)->count();
        $solicitudeAABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 1)->count();
        $solicitudeAMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 1)->count();
        $solicitudeAJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 1)->count();
        $solicitudeAJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 1)->count();
        $solicitudeAAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 1)->count();
        $solicitudeASEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 1)->count();
        $solicitudeAOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 1)->count();
        $solicitudeANOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 1)->count();
        $solicitudeADICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 1)->count();
        //ESPERA
        $solicitudesespera = Solicitud::whereYear('fecha', $año )->where('status', 0)->count();

        $solicitudeEENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 0)->count();
        $solicitudeEFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 0)->count();
        $solicitudeEMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 0)->count();
        $solicitudeEABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 0)->count();
        $solicitudeEMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 0)->count();
        $solicitudeEJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 0)->count();
        $solicitudeEJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 0)->count();
        $solicitudeEAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 0)->count();
        $solicitudeESEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 0)->count();
        $solicitudeEOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 0)->count();
        $solicitudeENOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 0)->count();
        $solicitudeEDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 0)->count();

        return response()->json(['totales' => [
                                    'totalGlobal' => $solicitudesglobales,
                                    'totalAtendidas' => $solicitudesatendidas,
                                    'totalEspera' => $solicitudesespera
                                ],
                                'globales' => [
                                    'enero' => $solicitudeGENERO,
                                    'febrero' => $solicitudeGFEBRERO,
                                    'marzo' => $solicitudeGMARZO,
                                    'abril' => $solicitudeGABRIL,
                                    'mayo' => $solicitudeGMAYO,
                                    'junio' => $solicitudeGJUNIO,
                                    'julio' => $solicitudeGJULO,
                                    'agosto' => $solicitudeGAGOSTO,
                                    'septiembre' => $solicitudeGSEPTIEMBRE,
                                    'octubre' => $solicitudeGOCTUBRE,
                                    'noviembre' => $solicitudeGNOVIEMBRE,
                                    'diciembre' => $solicitudeGDICIEMBRE
                                    ],
                                'atendidas' => [
                                    'enero' => $solicitudeAENERO,
                                    'febrero' => $solicitudeAFEBRERO,
                                    'marzo' => $solicitudeAMARZO,
                                    'abril' => $solicitudeAABRIL,
                                    'mayo' => $solicitudeAMAYO,
                                    'junio' => $solicitudeAJUNIO,
                                    'julio' => $solicitudeAJULO,
                                    'agosto' => $solicitudeAAGOSTO,
                                    'septiembre' => $solicitudeASEPTIEMBRE,
                                    'octubre' => $solicitudeAOCTUBRE,
                                    'noviembre' => $solicitudeANOVIEMBRE,
                                    'diciembre' => $solicitudeADICIEMBRE
                                    ],
                                'espera' => [
                                    'enero' => $solicitudeEENERO,
                                    'febrero' => $solicitudeEFEBRERO,
                                    'marzo' => $solicitudeEMARZO,
                                    'abril' => $solicitudeEABRIL,
                                    'mayo' => $solicitudeEMAYO,
                                    'junio' => $solicitudeEJUNIO,
                                    'julio' => $solicitudeEJULO,
                                    'agosto' => $solicitudeEAGOSTO,
                                    'septiembre' => $solicitudeESEPTIEMBRE,
                                    'octubre' => $solicitudeEOCTUBRE,
                                    'noviembre' => $solicitudeENOVIEMBRE,
                                    'diciembre' => $solicitudeEDICIEMBRE
                                    ]
                                ]);
    }

    public function publico($search)
    {
         $datos = Dato::with('ciudadano.solicitudes', 'ciudadano.solicitudes.tramite', 'ciudadano.solicitudes.usuario')->where('ci', $search)->paginate(10);

        return response()->json($datos);
    }
}
