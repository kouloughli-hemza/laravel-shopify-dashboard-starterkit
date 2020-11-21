<?php

namespace Kouloughli\Http\Controllers\Api;

use Kouloughli\Http\Resources\CountryResource;
use Kouloughli\Repositories\Country\CountryRepository;

/**
 * @package Kouloughli\Http\Controllers\Api
 */
class CountriesController extends ApiController
{
    /**
     * @var CountryRepository
     */
    private $countries;

    public function __construct(CountryRepository $countries)
    {
        $this->countries = $countries;
    }

    /**
     * Get list of all available countries.
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CountryResource::collection($this->countries->all());
    }
}
