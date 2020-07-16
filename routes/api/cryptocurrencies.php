<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'CryptocurrencyController@store')->name('cryptocurrencies.store');
    Route::get('/', 'CryptocurrencyController@index')->name('cryptocurrencies.index');
    Route::get('/{id}', 'CryptocurrencyController@show')->name('cryptocurrencies.show');
    Route::match(['put', 'patch'], '/{id}', 'CryptocurrencyController@update')->name('cryptocurrencies.update');
    Route::delete('/{id}', 'CryptocurrencyController@delete')->name('cryptocurrencies.delete');
});