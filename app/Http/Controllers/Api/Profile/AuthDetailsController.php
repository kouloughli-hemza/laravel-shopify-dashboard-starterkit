<?php

namespace Kouloughli\Http\Controllers\Api\Profile;

use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\User\UpdateProfileLoginDetailsRequest;
use Kouloughli\Http\Resources\UserResource;
use Kouloughli\Repositories\User\UserRepository;

/**
 * @package Kouloughli\Http\Controllers\Api\Profile
 */
class AuthDetailsController extends ApiController
{
    /**
     * Updates user profile details.
     *
     * @param UpdateProfileLoginDetailsRequest $request
     * @param UserRepository $users
     * @return UserResource
     */
    public function update(UpdateProfileLoginDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();

        $data = $request->only(['email', 'username', 'password']);

        $user = $users->update($user->id, $data);

        return new UserResource($user);
    }
}
