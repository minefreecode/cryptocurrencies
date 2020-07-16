<?php

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

// default name space for all routes is 'App\Http\Controllers\Api'
$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function() {

    // регистрируем роуты авторизации
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));

    // регистрируем пользовательские роуты
    Route::prefix('users')
        ->group(base_path('routes/api/users.php'));

    // регистрируем роуты артиклей
    Route::prefix('articles')
        ->group(base_path('routes/api/articles.php'));
});
