<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Dato;
use App\Solicitud;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class PerfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $usuarios = User::with('datos', 'roles')->get();

        return response()->json($usuarios);
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
        $solicitudes = Solicitud::with('tramite', 'ciudadano.datos')->where('user_id', $id)->orderBy('fecha', 'DESC')->paginate(5);

        $usuario = User::with('datos', 'roles')->where('id',$id)->get();

        return response()->json([
                            'usuario' => $usuario,
                            'solicitudes' => $solicitudes
                            ]);
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
        $validator = $request->validate([
                'name'     => 'required|string',
                'email'    => 'required|string|email',
                'password' => 'confirmed',
                'apellido' => 'required',
                'ci' => 'required'
            ]);

        $usuario = User::findOrFail($id);

        $actualizado = $usuario->update([
                    'name' => $request->name,
                    'email' => $request->email,
                    ]);

        if ($request->password !== '' && $request->password !== null) {

            $actualizado = $usuario->update([
                    'password' => bcrypt($request->password)
                    ]);
        }

        $actualizado = $usuario->datos->update([
                            'name' => $request->name,
                            'apellido' => $request->apellido,
                            'ci' => $request->ci,
                            'email' => $request->email,
                            'datoable_type' => 'App\User',
                            'datoable_id' => $usuario->id
                            ]);

        $usuario->syncRoles();
        if(isset($request->roles)){
            foreach ($request->roles as $value) {
                $usuario->assignRoles($value, $value);
            }
        }
        return response()->json($actualizado);
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
        $usuario = User::findOrFail($id);

        $borrado = $usuario->datos->delete();
        
        $borrado = $usuario->delete();

        return response()->json($borrado);
    }

    public function solicitudes($id)
    {
        /*$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')where('user_id', $id)->orderBy('id', 'DESC')->paginate(10);

        return response()->json($solicitudes);*/
    }

    public function estadisticas($id)
    {
        $año = Carbon::now()->year;
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

    public function avatar(Request $request)
    {
        
        if ($request->hasFile('avatar')) {

            $file = $request->file('avatar');
            $name = time().$file->getClientOriginalName();

            $file->move(public_path().'/img/', $name);
         

            $usuario = User::findOrFail(Auth::id());

            $usuario->avatar = $name;
            $usuario->save();
        }
        

        return response()->json("avatar guardado");
    }

    public function filtrar(Request $request){
        //fecha final
        $fechaf = new Carbon($request->fechaf);

        $fechaf = $fechaf->format("Y-m-d");
        //fecha inicial
        $fechai = new Carbon($request->fechai);

        $fechai = $fechai->format("Y-m-d");
                
/*F*/               if ($request->estado != "" && $request->selected != null  && $request->fechai != null) {// SI TIENE ESTADO, TIENE DOCUMENTO, TIENE FECHA INICIAL

                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("status", $request->estado)->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->where('user_id', $request->id)->paginate(10);
                }

/*F*/           if ($request->estado != "" && $request->selected != null  && $request->fechai == null) {// SI TIENE ESTADO, TIENE DOCUMENTO, NO FECHA INICIAL

                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("status", $request->estado)->where("tramite_id", $request->selected)->where('user_id', $request->id)->paginate(10);
                }

/*F*/           if ($request->estado != "" && $request->selected == null  && $request->fechai != null) {// SI TIENE ESTADO, NO TIENE DOCUMENTO, TIENE FECHA INICIAL

                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("status", $request->estado)->where('user_id', $request->id)->paginate(10);
                }

/*F*/           if ($request->estado != "" && $request->selected == null  && $request->fechai == null) {// SI TIENE ESTADO, NO DOCUMENTO, NO FECHA INICIAL

                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("status", $request->estado)->where('user_id', $request->id)->paginate(10);
                }


                //DOCUMENTOS
/*F*/           if ($request->selected != null  && $request->estado == "" &&  $request->fechai != null) {//SI TIENE DOCUMENTO, NO TIENE ESTADO, TIENE FECHA INICIAL
                    
                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->where('user_id', $request->id)->paginate(10);
                }

/*F*/           if ($request->selected != null  && $request->estado == "" &&  $request->fechai == null) {//SI TIENE DOCUMENTO, NO TIENE ESTADO, NO TIENE FECHA INICIAL
                    
                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->where('user_id', $request->id)->paginate(10);
                }


                //FECHA INICIAL

/*F*/           if ($request->fechai != null && $request->selected == null  && $request->estado == "") {//SI TIENE FECHA INICIAL, NO TIENE ESTADO, NO TIENE DOCUMENTO
                    
                    $solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where('user_id', $request->id)->paginate(10);
                }



        
        return response()->json($solicitudes);
    }
}
