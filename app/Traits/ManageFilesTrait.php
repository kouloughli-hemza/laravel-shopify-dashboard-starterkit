<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : ManageFilesTrait.php
 *  *  * Date :  11/13/20, 4:15 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Traits;

use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/**
 * Use this trait to deal with File Upload
 * Trait ManageImagesTrait
 * @package App\Traits
 */
trait ManageFilesTrait
{

    /**
     * @param UploadedFile $uploadedFile
     * @param null $folder
     * @param string $disk
     * @return string
     */
    public function uploadImage(UploadedFile $uploadedFile, $folder = null, $disk = 'public')
    {
        $filename =  Carbon::today()->format('m_Y') . '_' . time() . '.' .$uploadedFile->clientExtension();

        Storage::disk($disk)->putFileAs('/' . $folder,$uploadedFile,$filename);

        return $filename;
    }


    /**
     * @param $oldPath
     * @param $fileName
     * @param null $folder
     * @param string $disk
     * @return mixed
     */
    public function moveImage($oldPath,$fileName,$folder = null, $disk = 'public')
    {
        Storage::disk($disk)->move($oldPath, '/' . $folder.'/'.$fileName );
        return $fileName;
    }


    /**
     * @param UploadedFile $uploadedFile
     * @param null $folder
     * @param string $disk
     * @return string
     */
    public function uploadImageTmp(UploadedFile $uploadedFile, $folder = null, $disk = 'public')
    {
        $filename =  Carbon::today()->format('m_Y') . '_' . time() . '.' .$uploadedFile->clientExtension();

        Storage::disk($disk)->putFileAs('/' . $folder,$uploadedFile,$filename);

        return $filename;
    }



}
