<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : EloquentSupplier.php
 *  *  * Date :  11/8/20 2:24 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Repositories\Media;

use Kouloughli\Events\Media\Deleted;
use Kouloughli\Http\Filters\MediaKeywordSearch;
use Kouloughli\Http\Resources\MediaResource;
use Kouloughli\Media;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

/**
 * Class EloquentMedia
 * @package App\Repositories\Media
 */
class EloquentMedia implements MediaRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return Media::all();
    }



    /**
     * {@inheritdoc}
     */
    public function paginate($perPage, $search = null)
    {

        $media = QueryBuilder::for(Media::class)
            ->allowedIncludes(MediaResource::allowedIncludes())
            ->where('user_id',Auth::user()->id)
            ->allowedFilters([
                AllowedFilter::custom('search', new MediaKeywordSearch()),
            ])
            ->allowedSorts(['id', 'name'])
            ->defaultSort('id')
            ->paginate($perPage ?: 20);

        return MediaResource::collection($media);

    }



    /**
     * {@inheritdoc}
     */
    public function find($id)
    {
        return Media::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        $media = Media::create($data);

        //event(new Created($supplier));

        return $media;
    }


    /**
     * {@inheritdoc}
     */
    public function delete($ids)
    {
        $user =Auth::user();

        $files = $user->files()->whereIn('id', $ids);

        event(new Deleted($files->get()));

        return $files->delete();
    }


    /**
     * {@inheritdoc}
     */
    public function lists($column = 'name', $key = 'id')
    {
        return Media::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return Media::where('name', $name)->first();
    }

    /**
     * {@inheritdoc}
     */
    public function count()
    {
        return Media::count();
    }




}
