<?php

namespace Kouloughli\Http\Controllers\Api\Auth\Password;

use Illuminate\Auth\Events\PasswordReset;
use Password;
use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\Auth\PasswordResetRequest;

class ResetController extends ApiController
{
    /**
     * Reset the given user's password.
     *
     * @param PasswordResetRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(PasswordResetRequest $request)
    {
        $response = Password::reset($request->credentials(), function ($user, $password) {
            $this->resetPassword($user, $password);
        });

        switch ($response) {
            case Password::PASSWORD_RESET:
                return $this->respondWithSuccess();

            default:
                return $this->setStatusCode(400)
                    ->respondWithError(trans($response));
        }
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function resetPassword($user, $password)
    {
        $user->password = $password;
        $user->save();

        event(new PasswordReset($user));
    }
}
