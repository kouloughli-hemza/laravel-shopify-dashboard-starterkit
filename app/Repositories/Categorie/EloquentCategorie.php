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

namespace Kouloughli\Repositories\Categorie;

use Kouloughli\Http\Filters\MediaKeywordSearch;
use Kouloughli\Http\Resources\CategorieResource;
use Kouloughli\Categorie;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

/**
 * Class EloquentMedia
 * @package App\Repositories\Media
 */
class EloquentCategorie implements CategorieRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return Categorie::all();
    }



    /**
     * {@inheritdoc}
     */
    public function paginate($perPage, $search = null)
    {

        $media = QueryBuilder::for(Categorie::class)
            ->allowedIncludes(CategorieResource::allowedIncludes())
            ->allowedFilters([
                AllowedFilter::custom('search', new MediaKeywordSearch()),
            ])
            ->allowedSorts(['id', 'name'])
            ->defaultSort('id')
            ->paginate($perPage ?: 20);

        return CategorieResource::collection($media);

    }



    /**
     * {@inheritdoc}
     */
    public function find($id)
    {
        return Categorie::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        $categorie = Categorie::create($data);

        //event(new Created($supplier));

        return $categorie;
    }


    /**
     * {@inheritdoc}
     */
    public function delete($id)
    {
        $categorie = $this->find($id);

        //event(new Deleted($categorie));

        return $categorie->delete();
    }


    /**
     * {@inheritdoc}
     */
    public function lists($column = 'name', $key = 'id')
    {
        return Categorie::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return Categorie::where('name', $name)->first();
    }

    /**
     * {@inheritdoc}
     */
    public function count()
    {
        return Categorie::count();
    }




}
