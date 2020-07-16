<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CryptocurrencyRequest extends FormRequest
{
    /**
     * Этот запрос делаем когда пользователь автогризован
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3',
            'description' => 'required|min:10',
            'symbol' => 'required',
            'image' => 'nullable|file',
        ];
    }
}
