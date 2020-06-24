<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Estado de la solicitud</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!--<title>{{ config('app.name', 'Laravel') }}</title>-->

    <!-- Scripts -->
    <!--<script src="{{ asset('js/app.js') }}" defer></script>PARA PRODUCCION-->

   <script src="{{ secure_asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <!--<link href="{{ asset('css/app.css') }}" rel="stylesheet">PARA PRODUCCION-->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

    <style type="text/css">
        html, body{
          height:100%;
          margin:0;
          display: flex;
          flex-direction: column;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header bg-danger text-white">
            <h4 class="card-title">Buenas tardes</h4>
        </div>
        <div class="card-body">
            <p class="card-text">Hola! de parte de la oficina de registro civil del CNE le notificacion que su solicitud de {{$datos->name}} ya se pudo realizar con exito, pase en lo que pueda por la oficina del registro civil de San Juan de los morros para recibir su documento.</p>
        </div>
    </div>
</body>
</html>