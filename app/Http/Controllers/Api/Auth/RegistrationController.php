<?php

namespace Kouloughli\Http\Controllers\Api\Auth;

use Illuminate\Auth\Events\Registered;
use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\Auth\RegisterRequest;
use Kouloughli\Repositories\Role\RoleRepository;
use Kouloughli\Repositories\User\UserRepository;
use Kouloughli\Support\Enum\UserStatus;

class RegistrationController extends ApiController
{
    /**
     * @var UserRepository
     */
    private $users;

    /**
     * @var RoleRepository
     */
    private $roles;

    /**
     * Create a new authentication controller instance.
     * @param UserRepository $users
     * @param RoleRepository $roles
     */
    public function __construct(UserRepository $users, RoleRepository $roles)
    {
        $this->users = $users;
        $this->roles = $roles;
    }

    /**
     * @param RegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(RegisterRequest $request)
    {
        $role = $this->roles->findByName('User');

        $user = $this->users->create(
            array_merge($request->validFormData(), ['role_id' => $role->id])
        );

        event(new Registered($user));

        return $this->setStatusCode(201)
            ->respondWithArray([
                'requires_email_confirmation' => !! setting('reg_email_confirmation')
            ]);
    }

    /**
     * Verify email via email confirmation token.
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyEmail($token)
    {
        if (! setting('reg_email_confirmation')) {
            return $this->errorNotFound();
        }

        if ($user = $this->users->findByConfirmationToken($token)) {
            $this->users->update($user->id, [
                'status' => UserStatus::ACTIVE,
                'confirmation_token' => null
            ]);

            return $this->respondWithSuccess();
        }

        return $this->setStatusCode(400)
            ->respondWithError("Invalid confirmation token.");
    }
}
