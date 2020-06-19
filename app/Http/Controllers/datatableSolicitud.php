<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Solicitud;

class datatableSolicitud extends Controller
{
    //
    public function index(Request $request){
    	//fecha final
    	$fechaf = new Carbon($request->fechaf);

    	$fechaf = $fechaf->format("Y-m-d");
    	//fecha inicial
    	$fechai = new Carbon($request->fechai);

    	$fechai = $fechai->format("Y-m-d");
    			
/*F*/				if ($request->estado != "" && $request->selected != null  && $request->fechai != null) {// SI TIENE ESTADO, TIENE DOCUMENTO, TIENE FECHA INICIAL

					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("status", $request->estado)->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->paginate(10);
				}

/*F*/			if ($request->estado != "" && $request->selected != null  && $request->fechai == null) {// SI TIENE ESTADO, TIENE DOCUMENTO, NO FECHA INICIAL

					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("status", $request->estado)->where("tramite_id", $request->selected)->paginate(10);
				}

/*F*/			if ($request->estado != "" && $request->selected == null  && $request->fechai != null) {// SI TIENE ESTADO, NO TIENE DOCUMENTO, TIENE FECHA INICIAL

					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("status", $request->estado)->paginate(10);
				}

/*F*/			if ($request->estado != "" && $request->selected == null  && $request->fechai == null) {// SI TIENE ESTADO, NO DOCUMENTO, NO FECHA INICIAL

					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("status", $request->estado)->paginate(10);
				}


				//DOCUMENTOS
/*F*/			if ($request->selected != null  && $request->estado == "" &&  $request->fechai != null) {//SI TIENE DOCUMENTO, NO TIENE ESTADO, TIENE FECHA INICIAL
					
					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->paginate(10);
				}

/*F*/			if ($request->selected != null  && $request->estado == "" &&  $request->fechai == null) {//SI TIENE DOCUMENTO, NO TIENE ESTADO, NO TIENE FECHA INICIAL
					
					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", "<=", $fechaf)->where("tramite_id", $request->selected)->paginate(10);
				}


				//FECHA INICIAL

/*F*/			if ($request->fechai != null && $request->selected == null  && $request->estado == "") {//SI TIENE FECHA INICIAL, NO TIENE ESTADO, NO TIENE DOCUMENTO
					
					$solicitudes = Solicitud::with('tramite', 'ciudadano.datos', 'usuario')->where("fecha", ">=", $fechai)->where("fecha", "<=", $fechaf)->paginate(10);
				}



    	
    	return response()->json(["fechaFinal" => $fechaf, "fechaInicial" => $fechai, "solicitudes" => $solicitudes]);
    }
}
