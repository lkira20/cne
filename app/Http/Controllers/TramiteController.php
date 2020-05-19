<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tramite;

class TramiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $tramites = Tramite::orderBy('id', 'DESC')->get();

        return response()->json($tramites);
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
        $tramite = Tramite::Create($request->all());

        return response()->json($tramite);
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
        $tramite = Tramite::findOrFail($id);

        return response()->json($tramite);
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
        $tramite = Tramite::findOrFail($id);

        $tramite = $tramite->update($request->all());

        return response()->json($tramite);
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
        $tramite = Tramite::findOrFail($id);

        $tramite = $tramite->delete();

        return response()->json($tramite);
    }
}
