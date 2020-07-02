<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dato;
use App\Ciudadano;
use App\Http\Requests\CiudadanoRequest;
use Carbon\Carbon;

class CiudadanoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //devulve la lista de ciudadanos 
        
        $ciudadanos = Dato::orderBy('id', 'DESC')->where('datoable_type', 'App\Ciudadano')->paginate();
        
        return response()->json(['pagination' => [
                                    'total' => $ciudadanos->total(),
                                    'current_page' => $ciudadanos->currentPage(),
                                    'per_page' => $ciudadanos->perPage(),
                                    'last_page' => $ciudadanos->lastPage(),
                                    'from' => $ciudadanos->firstItem(),
                                    'to' => $ciudadanos->lastItem()
                                ],
                                'ciudadanos' => $ciudadanos
                            ]);
        /*
        $ciudadanos = Dato::orderBy('id', 'DESC')->where('datoable_type', 'App\Ciudadano')->get();

        return response()->json($ciudadanos);
        */
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CiudadanoRequest $request)
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
    public function update(CiudadanoRequest $request, $id)
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

    public function comprobarCedula($cedula)
    {
        $ciudadano = Dato::where('ci', $cedula)->where('datoable_type', 'App\Ciudadano')->get();

        if (empty($ciudadano[0]->id)) {

            return response()->json('el ciudadano no esta registrado');
        }    
        return response()->json($ciudadano);
    }

    public function filtrarfecha(Request $request)
    {
         //fecha final
            $fechaf = new Carbon($request->fechaf);

            //$fechaf = $fechaf->format("Y-m-d");
            $fechaf = $fechaf->toDateTimeString();
       
            $fechai = null;

        if ($request->fechai == null) {
            $ciudadano = Dato::orderBy('id', 'DESC')->where('datoable_type', 'App\Ciudadano')->where('created_at', '<=', $fechaf)->paginate();
        }

        if ($request->fechai != null) {
            //fecha inicial
            $fechai = new Carbon($request->fechai);

            $fechai = $fechai->toDateTimeString();
            //$fechai = $fechai->format("Y-m-d");

            $ciudadano = Dato::orderBy('id', 'DESC')->where('datoable_type', 'App\Ciudadano')->where('created_at', '>=', $fechai)->where('created_at', '<=', $fechaf)->paginate();
        }
    
        return response()->json($ciudadano);
    }
}
