<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SolicitudRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
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
            'ci' => 'required',
            'name' => 'requred',
            'apellido' => 'required',
            'email' => 'email',
            'tramite' => 'required',
            'status' => 'required|boolean',
            'descripcion' => 'required'
        ];
    }
}
