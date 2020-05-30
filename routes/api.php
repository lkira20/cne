<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

Route::middleware('auth:api')->post('/logout', 'AuthController@logout');

Route::middleware('auth:api')->get('/user', 'AuthController@user');

Route::middleware('auth:api')->get('/permisos', 'AuthController@permisosUser');

//RUTAS DE AUTH PERFIL

Route::middleware('auth:api')->get('authperfil', 'AuthPerfilController@index');
Route::middleware('auth:api')->get('authperfil/estadisticas', 'AuthPerfilController@estadisticas');
Route::middleware('auth:api')->put('authperfil', 'AuthPerfilController@update');

//RUTAS DE SOLICITUDES
Route::apiResource('solicitud', 'SolicitudController')->middleware('auth:api');

Route::get('solicitud/filtrar/{busqueda}', 'SolicitudController@filtrar')->middleware('auth:api');
Route::get('estadisticas', 'SolicitudController@estadisticas')->middleware('auth:api');
Route::get('estadisticas/{busqueda}', 'SolicitudController@filtrarestadisticas')->middleware('auth:api');
//RUTAS DE CIUDADANOS
Route::apiResource('ciudadano', 'CiudadanoController')->middleware('auth:api');
Route::get('ciudadano/show/{id}', 'CiudadanoController@show')->middleware('auth:api');
Route::get('ciudadano/comprobar/{cedula}', 'CiudadanoController@comprobarCedula')->middleware('auth:api');
//RUTAS DE TRAMITE
Route::apiResource('tramite', 'TramiteController')->middleware('auth:api');
//RUTAS DE NOTIFICACIONES
Route::apiResource('notificaciones', 'NotificacionesController')->middleware('auth:api');
//RUTAS DE PERFILES
Route::apiResource('perfiles', 'PerfilesController')->middleware('auth:api');
Route::get('perfiles/estadisticas/{id}', 'PerfilesController@estadisticas')->middleware('auth:api');
//RUTAS DE ROLES
Route::get('roles', 'RoleController@index')->middleware('auth:api');