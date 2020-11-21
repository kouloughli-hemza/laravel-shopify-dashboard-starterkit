<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : SupplierKeywordSearch.php
 *  *  * Date :  11/8/20 3:52 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\Filters\Filter;

class MediaKeywordSearch implements Filter
{
    public function __invoke(Builder $query, $search, string $property = '')
    {
        $query->where(function ($q) use ($search) {
            $q->where('name', "like", "%{$search}%");
            $q->where('user_id',Auth::user()->id);
        });
    }
}
