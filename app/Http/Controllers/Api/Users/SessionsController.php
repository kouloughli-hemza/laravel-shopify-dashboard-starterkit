<?php

namespace Kouloughli\Http\Controllers\Api\Users;

use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Resources\SessionResource;
use Kouloughli\Repositories\Session\SessionRepository;
use Kouloughli\User;

/**
 * @package Kouloughli\Http\Controllers\Api\Users
 */
class SessionsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('permission:users.manage');
        $this->middleware('session.database');
    }

    /**
     * Get sessions for specified user.
     * @param User $user
     * @param SessionRepository $sessions
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(User $user, SessionRepository $sessions)
    {
        return SessionResource::collection(
            $sessions->getUserSessions($user->id)
        );
    }
}
