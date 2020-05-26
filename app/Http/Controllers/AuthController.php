<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        try {
            $request->validate([
                'email'       => 'required|string|email',
                'password'    => 'required|string',
               	'remember_me' => 'boolean',
            ]);
            $credentials = request(['email', 'password']);
            if (!Auth::attempt($credentials)) {
                return response()->json('Unauthorized');
            }

            $user = Auth::user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            if ($request->remember_me) {
                $token->expires_at = Carbon::now()->addWeeks(1);
            }
            $token->save();

            return response()->json([
            	'access_token' => $tokenResult->accessToken,
                'token_type'   => 'Bearer',
                'expires_at'   => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()]);

        } catch (QueryException $ex) {
            if (!config('app.debug')) {
                return response()->json('Ocurrió un problema inesperado, intente nuevamente más tarde.');
            }

            return response()->json($ex->getMessage());
        }

    }

   public function register(Request $request)
   {

   		$validator = $request->validate([
                'name'     => 'required|string',
                'email'    => 'required|string|email|unique:users',
                'password' => 'required|string|confirmed',
            ]);

   		if ($validator->fails()) {
   			
   			return response()->json(['error' => $validator->errors()], 401);
   		}

   		$user = new User([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => bcrypt($request->password),
            ]);
    	$user->save();

    	return response()->json('usuario registrado exitosamente');
   }

   public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        
        return response()->json('Logged out successfully', 200);
    }

    public function user(Request $request)
    {
        try {
            return response()->json($request->user());
        } catch (QueryException $ex) {
            if (!config('app.debug')) {
                return response()->json('Ocurrió un problema inesperado, intente nuevamente más tarde.', 500);
            }

            return response()->json($ex->getMessage(), 500);
        }
    }

    public function permisosUser(Request $request)
    {
        try {
            return response()->json($request->user()->getAllPermissionsAttribute());
        } catch (QueryException $ex) {
            if (!config('app.debug')) {
                return response()->json('Ocurrió un problema inesperado, intente nuevamente más tarde.', 500);
            }

            return response()->json($ex->getMessage(), 500);
        }
    }

}
