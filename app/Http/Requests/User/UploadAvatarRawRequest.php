<?php

namespace Kouloughli\Http\Requests\User;

use Kouloughli\Http\Requests\Request;

class UploadAvatarRawRequest extends Request
{
    public function rules()
    {
        return [
            'file' => 'required|image'
        ];
    }
}
