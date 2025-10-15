<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

## HOME USUARIO
Route::get('/', ['App\Http\Controllers\HomeUsuarioController', 'index']);
Route::post('/denunciar', ['App\Http\Controllers\HomeUsuarioController', 'denunciar']);