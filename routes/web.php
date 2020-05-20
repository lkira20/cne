<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/prueba', function(){
	
	return view('pruebas');
});


//RUTAS API
//RUTAS DE CIUDADANOS
Route::apiResource('api/ciudadano', 'CiudadanoController');
Route::get('api/ciudadano/show/{id}', 'CiudadanoController@show');
Route::get('api/ciudadano/comprobar/{cedula}', 'CiudadanoController@comprobarCedula');
//RUTAS DE SOLICITUD
Route::apiResource('api/solicitud', 'SolicitudController');
Route::get('api/solicitud/filtrar/{busqueda}', 'SolicitudController@filtrar');
//RUTAS DE TRAMITE
Route::apiResource('api/tramite', 'TramiteController');
//RUTAS DE NOTIFICACION
Route::apiResource('api/notificaciones', 'NotificacionesController');
//RUTAS DE VUE
Route::get('/', function () {
    return view('home');
});

Route::get('/{any}', function () {
    return view('home');
})->where('{any}', '.*');

Route::get('ciudadanos/{any}', function () {
    return view('home');
})->where('{any}', '.*');
Route::get('ciudadanos/edit/{any}', function () {
    return view('home');
})->where('{any}', '.*');

//RUTAS DE AUTENTICACION
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
