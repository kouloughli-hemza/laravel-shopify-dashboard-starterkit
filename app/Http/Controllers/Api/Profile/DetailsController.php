<?php

namespace Kouloughli\Http\Controllers\Api\Profile;

use Kouloughli\Events\User\UpdatedProfileDetails;
use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\User\UpdateProfileDetailsRequest;
use Kouloughli\Http\Resources\UserResource;
use Kouloughli\Repositories\User\UserRepository;

/**
 * @package Kouloughli\Http\Controllers\Api\Profile
 */
class DetailsController extends ApiController
{
    /**
     * Handle user details request.
     * @return UserResource
     */
    public function index()
    {
        return new UserResource(auth()->user());
    }

    /**
     * Updates user profile details.
     * @param UpdateProfileDetailsRequest $request
     * @param UserRepository $users
     * @return UserResource
     */
    public function update(UpdateProfileDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();

        $data = collect($request->all());

        $data = $data->only([
            'first_name', 'last_name', 'birthday',
            'phone', 'address', 'country_id'
        ])->toArray();

        if (! isset($data['country_id'])) {
            $data['country_id'] = $user->country_id;
        }

        $user = $users->update($user->id, $data);

        event(new UpdatedProfileDetails);

        return new UserResource($user);
    }
}
