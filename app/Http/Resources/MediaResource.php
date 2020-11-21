<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : MediaResource.php
 *  *  * Date :  11/8/20 3:41 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    /**
     *
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'size' => $this->size,
            'mime' => $this->mime,
            'path' => $this->path,
            'user' => new UserResource($this->whenLoaded('user')),

        ];
    }



    public static function allowedIncludes()
    {
        return ['user'];
    }
}
