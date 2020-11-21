<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : MediaEvent.php
 *  *  * Date :  11/15/20, 2:03 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */



namespace Kouloughli\Events\Media;

use Kouloughli\Media;

abstract class MediaEvent
{
    /**
     * @var Media
     */
    protected $media;

    public function __construct(Media $media)
    {
        $this->media = $media;
    }

    /**
     * @return Media
     */
    public function getMedia()
    {
        return $this->media;
    }
}
