<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Solicitud;
use App\User;
use Carbon\Carbon;
use App\Dato;
use Illuminate\Support\Facades\Auth;

class AuthPerfilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $solicitudes = Solicitud::with('tramite', 'ciudadano.datos')->where('user_id', Auth::id())->orderBy('fecha', 'DESC')->paginate(5);

        $usuario = User::with('datos', 'roles')->where('id',Auth::id())->get();

        return response()->json([
                            'usuario' => $usuario,
                            'solicitudes' => $solicitudes
                            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function estadisticas()
    {
        $año = Carbon::now()->year;
        $id = Auth::id();
        //GLOBAL
        $solicitudesglobales = Solicitud::whereYear('fecha', $año )->count();

        $solicitudeGENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('user_id', $id)->count();
        $solicitudeGFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('user_id', $id)->count();
        $solicitudeGMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('user_id', $id)->count();
        $solicitudeGABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('user_id', $id)->count();
        $solicitudeGMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('user_id', $id)->count();
        $solicitudeGJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('user_id', $id)->count();
        $solicitudeGJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('user_id', $id)->count();
        $solicitudeGAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('user_id', $id)->count();
        $solicitudeGSEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('user_id', $id)->count();
        $solicitudeGOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('user_id', $id)->count();
        $solicitudeGNOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('user_id', $id)->count();
        $solicitudeGDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('user_id', $id)->count();

        //ATENDIDAS
        $solicitudesatendidas = Solicitud::whereYear('fecha', $año )->where('status', 1)->where('user_id', $id)->count();

        $solicitudeAENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeASEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeAOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeANOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 1)->where('user_id', $id)->count();
        $solicitudeADICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 1)->where('user_id', $id)->count();
        //ESPERA
        $solicitudesespera = Solicitud::whereYear('fecha', $año )->where('status', 0)->where('user_id', $id)->count();

        $solicitudeEENERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 1)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEFEBRERO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 2)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEMARZO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 3)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEABRIL = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 4)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEMAYO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 5)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEJUNIO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 6)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEJULO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 7)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEAGOSTO = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 8)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeESEPTIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 9)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEOCTUBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 10)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeENOVIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 11)->where('status', 0)->where('user_id', $id)->count();
        $solicitudeEDICIEMBRE = Solicitud::whereYear('fecha', $año )->WhereMonth('fecha', 12)->where('status', 0)->where('user_id', $id)->count();

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
}
