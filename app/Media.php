<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : Media.php
 *  *  * Date :  11/8/20 2:24 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class Media extends Model
{
    use HasFactory;


    protected $fillable = ['name', 'size', 'mime','path', 'user_id' ];


    public function getPathAttribute()
    {
        $path = URL::asset('storage/podify/' . $this->user->name . '/' . $this->name);
        return $path;
    }


    public function getSizeAttribute($value)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

        for ($i = 0; $value > 1024; $i++) {
            $value /= 1024;
        }

        return round($value, 2) . ' ' . $units[$i];
    }


    public function user(){

        return $this->belongsTo(User::class);
    }
}
