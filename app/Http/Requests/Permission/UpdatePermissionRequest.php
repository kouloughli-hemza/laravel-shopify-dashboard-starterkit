<?php

namespace Kouloughli\Http\Requests\Permission;

use Illuminate\Validation\Rule;
use Kouloughli\Rules\ValidPermissionName;

class UpdatePermissionRequest extends BasePermissionRequest
{
   /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                new ValidPermissionName,
                Rule::unique('permissions', 'name')->ignore($this->route('permission')->id)
            ]
        ];
    }
}
