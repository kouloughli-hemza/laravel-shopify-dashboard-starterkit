<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : MediaController.php
 *  *  * Date :  11/8/20 2:23 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Http\Controllers\Api\Media;

use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Resources\MediaResource;
use Kouloughli\Media;
use Kouloughli\Repositories\Media\MediaRepository;
use Kouloughli\Traits\ManageFilesTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends ApiController
{
    use ManageFilesTrait;

    private $media;

    /**
     * MediaController constructor.
     * @param MediaRepository $media
     */
    public function __construct(MediaRepository $media)
    {
        $this->media = $media;

    }

    /**
     * List all available Media (Files)
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return $this->media->paginate($request->per_page,$request->search);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function store(Request $request)
    {
        $storeFolderPath = auth()->user()->name;

        $media = [];

        foreach($request->file('image') as $key => $file){
            $fileName = $this->uploadImage($file,$storeFolderPath,'podify');
            $path = Storage::disk('podify')->path('/' .$storeFolderPath. '/' .$fileName);
            $fileData = [
                'size' => $file->getSize(),
                'mime' => $file->getClientMimeType(),
                'path' => $path,
                'name' => $fileName,
                'user_id' => auth()->user()->id,
            ];

            array_push($media,$this->media->create($fileData));
        }
        return MediaResource::collection($media);

    }



    public function destroy(Request $request)
    {
        $filesIds = explode(',',$request->ids);

        $this->media->delete($filesIds);

        return $this->respondWithSuccess();
    }
}
