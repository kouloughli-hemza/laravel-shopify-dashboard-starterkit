<?php

namespace Kouloughli\Http\Controllers\Api;

use Setting;

/**
 * @package Kouloughli\Http\Controllers\Api\Settings
 */
class SettingsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('permission:settings.general');
    }
    /**
     * System settings.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Setting::all());
    }
}
