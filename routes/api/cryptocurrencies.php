<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'ArticleController@store')->name('articles.store');
    Route::get('/', 'ArticleController@index')->name('articles.index');
    Route::get('/{id}', 'ArticleController@show')->name('articles.show');
    Route::match(['put', 'patch'], '/{id}', 'ArticleController@update')->name('articles.update');
    Route::delete('/{id}', 'ArticleController@delete')->name('articles.delete');
});