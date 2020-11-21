<?php

namespace Kouloughli;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug'];

    /**
     * Get All Products For category
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products() {

        return $this->hasMany(Product::class);
    }

}
