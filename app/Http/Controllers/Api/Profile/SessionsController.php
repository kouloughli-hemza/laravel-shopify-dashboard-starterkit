<?php

namespace Kouloughli\Http\Controllers\Api\Profile;

use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Resources\SessionResource;
use Kouloughli\Repositories\Session\SessionRepository;

/**
 * @package Kouloughli\Http\Controllers\Api\Profile
 */
class SessionsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('session.database');
    }

    /**
     * Handle user details request.
     * @param SessionRepository $sessions
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(SessionRepository $sessions)
    {
        $sessions = $sessions->getUserSessions(auth()->id());

        return SessionResource::collection($sessions);
    }
}
