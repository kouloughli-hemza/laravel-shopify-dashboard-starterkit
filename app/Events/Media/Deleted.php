<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : Deleted.php
 *  *  * Date :  11/15/20, 2:04 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */


namespace Kouloughli\Events\Media;

class Deleted extends MediaEvent
{

    private $deletedMedia;


    /**
     * Deleted constructor.
     * @param $deletedMedia
     */
    public function __construct($deletedMedia)
    {
        $this->deletedMedia = $deletedMedia;
    }


    /**
     * @return mixed
     */
    public function getDeletedMedia()
    {
        return $this->deletedMedia;
    }
}
