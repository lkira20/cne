<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!--<title>{{ config('app.name', 'Laravel') }}</title>-->
    <title>CNE</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

   <!--<script src="{{ secure_asset('js/app.js') }}" defer></script>PARA PRODUCCION-->
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
   <!-- <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">PARA PRODUCCION-->

    <style type="text/css">
        html, body{
          height:100%;
          margin:0;
          display: flex;
          flex-direction: column;
        }
    </style>

    <link rel="icon" type="image/svg+xml" href="{{asset('img/CNE_logo.svg')}}" sizes="any">
    <!--<link rel="icon" type="image/svg+xml" href="{{secure_asset('img/CNE_logo.svg')}}" sizes="any">-->
</head>
<body>
    <div id="app" style="height:100%;">

        @yield('content')
    </div>

    @stack('scripts')
</body>
</html>
