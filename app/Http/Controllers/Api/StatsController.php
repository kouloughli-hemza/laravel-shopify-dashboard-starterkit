<?php

namespace Kouloughli\Http\Controllers\Api;

use Carbon\Carbon;
use Kouloughli\Http\Resources\UserResource;
use Kouloughli\Repositories\User\UserRepository;
use Kouloughli\Support\Enum\UserStatus;

/**
 * @package Kouloughli\Http\Controllers\Api
 */
class StatsController extends ApiController
{
    /**
     * @var UserRepository
     */
    private $users;

    public function __construct(UserRepository $users)
    {
        $this->middleware('role:Admin');

        $this->users = $users;
    }

    /**
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index()
    {
        $usersPerMonth = $this->users->countOfNewUsersPerMonth(
            Carbon::now()->subYear()->startOfMonth(),
            Carbon::now()->endOfMonth()
        );

        $usersPerStatus = [
            'total' => $this->users->count(),
            'new' => $this->users->newUsersCount(),
            'banned' => $this->users->countByStatus(UserStatus::BANNED),
            'unconfirmed' => $this->users->countByStatus(UserStatus::UNCONFIRMED)
        ];

        $users = UserResource::collection($this->users->latest(7));

        return $this->respondWithArray([
            'users_per_month' => $usersPerMonth,
            'users_per_status' => $usersPerStatus,
            'latest_registrations' => $users->resolve()
        ]);
    }
}
