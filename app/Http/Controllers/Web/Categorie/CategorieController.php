<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : CategorieController.php
 *  *  * Date :  11/19/20, 3:57 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Http\Controllers\Web\Categorie;

use Kouloughli\Http\Resources\CategorieResource;
use Kouloughli\Categorie;
use Kouloughli\Repositories\Categorie\CategorieRepository;
use Illuminate\Http\Request;
use Kouloughli\Http\Controllers\Controller;


class CategorieController extends Controller
{
    private $categorie;
    private $only = ['name','slug'];


    /**
     * CategorieController constructor.
     * @param CategorieRepository $categorie
     */
    public function __construct(CategorieRepository $categorie)
    {
        $this->categorie = $categorie;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return $this->categorie->paginate($request->per_page,$request->search);
    }


    /**
     * @param Categorie $categorie
     * @return CategorieResource
     */
    public function show(Categorie $categorie)
    {
        return new CategorieResource($categorie);
    }


    /**
     * @param Request $request
     * @return CategorieResource
     */
    public function store(Request $request)
    {
        $data = $request->only($this->only);

        $categorie = $this->categorie->create($data);

        return new CategorieResource($categorie);

    }

    /**
     * @param Categorie $categorie
     * @param Request $request
     * @return CategorieResource
     */
    public function update(Categorie $categorie, Request $request)
    {

        $data = $request->only($this->only);

        $categorie = $this->categorie->update($categorie->id, $data);

        return new CategorieResource($categorie);
    }


    /**
     * @param Categorie $categorie
     * @return mixed
     */
    public function destroy(Categorie $categorie)
    {
        $this->categorie->delete($categorie->id);

        return $this->respondWithSuccess();
    }
}
