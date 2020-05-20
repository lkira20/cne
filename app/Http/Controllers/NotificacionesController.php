<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notificacion;

class NotificacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $notificaciones = Notificacion::orderBy('id', 'DESC')->get();

        return response()->json($notificaciones);
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
        $notificacion = Notificacion::create($request->all());

        return response()->json($notificacion);
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
        $notificacion = Notificacion::findOrFail($id);

        $notificacion = $notificacion->update($request->all());

        return response()->json($notificacion);
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
        $notificacion = Notificacion::findOrFail($id);

        $notificacion = $notificacion->delete();

        return response()->json($notificacion);
    }
}
