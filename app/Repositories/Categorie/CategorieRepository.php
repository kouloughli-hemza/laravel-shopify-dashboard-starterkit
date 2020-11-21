<?php
/**
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : SupplierRepository.php
 *  *  * Date :  11/8/20 2:24 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

namespace Kouloughli\Repositories\Categorie;

use Kouloughli\Categorie;

/**
 * Interface SupplierRepository
 * @package App\Repositories\Supplier
 */
interface CategorieRepository
{
    /**
     * Get all system Categorie.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all();

    /**
     * Paginate Categorie
     *
     * @param $perPage
     * @param null $search
     * @return mixed
     */
    public function paginate($perPage, $search = null);


    /**
     * Lists all system Categorie into $key => $column value pairs.
     *
     * @param string $column
     * @param string $key
     * @return mixed
     */
    public function lists($column = 'name', $key = 'id');


    /**
     * Find system Supplier by id.
     *
     * @param $id Categorie Id
     * @return Categorie|null
     */
    public function find($id);

    /**
     * Find Supplier by name:
     *
     * @param $name
     * @return mixed
     */
    public function findByName($name);

    /**
     * Create new system Supplier.
     *
     * @param array $data
     * @return Categorie
     */
    public function create(array $data);


    /**
     * @param $id
     * @return mixed
     */
    public function delete($id);


    /**
     * Get Total Categorie in System
     * @return mixed
     */
    public function count();



}
