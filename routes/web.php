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
//RUTAS DE CIUDADANOS

Route::apiResource('api/ciudadano', 'CiudadanoController');

Route::get('/prueba', function(){
	
	return view('pruebas');
});

//RUTAS DE VUE
Route::get('/', function () {
    return view('home');
});

Route::get('/{any}', function () {
    return view('home');
})->where('{any}', '.*');

//RUTAS DE AUTENTICACION
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
