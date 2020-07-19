<?php

namespace App\Http\Controllers\Api;

use App\Cryptocurrency;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\CryptocurrencyRequest;
use Illuminate\Support\Facades\Log;

class CryptocurrencyController extends Controller
{
    /**
     * Get all currencies
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $cryptocurrencies = Cryptocurrency::get();
        return $cryptocurrencies;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Сохраняем новый созданный объект в БД
     *
     * @param CryptocurrencyRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CryptocurrencyRequest $request)
    {
        Log::info($request);
        $cryptocurrency = new Cryptocurrency($request->validated());

        if ($request['image']) {
            $fileName = "fileName" . time() . '.' . $request['image']->getClientOriginalExtension();
            $request['image']->move(public_path('/images/cryptocurrency_images'), $fileName);
            $cryptocurrency['image'] = $fileName;
        }

        $cryptocurrency->save();


        return response()->json($cryptocurrency, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        return Cryptocurrency::findOrFail($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param CryptocurrencyRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(CryptocurrencyRequest $request, $id)
    {
        Log::info($request);
        $cryptocurrency = Cryptocurrency::findOrFail($id);

        $data = $request->validated();

        if ($request['image']){
            $fileName = "fileName" . time() . '.' . $request['image']->getClientOriginalExtension();
            unlink(public_path('/images/article_images/' . $cryptocurrency->image));
            $request['image']->move(public_path('/images/article_images'), $fileName);
            $data['image'] = $fileName;
        }

        $cryptocurrency->update($data);

        return response()->json($cryptocurrency, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $cryptocurrency = Cryptocurrency::findOrFail($id);

        $cryptocurrency->delete();

        return response([], 200);
    }
}
