<?php

namespace Kouloughli\Http\Controllers\Api\Profile;

use Authy;
use Kouloughli\Events\User\TwoFactorDisabled;
use Kouloughli\Events\User\TwoFactorEnabled;
use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\TwoFactor\EnableTwoFactorRequest;
use Kouloughli\Http\Requests\TwoFactor\VerifyTwoFactorTokenRequest;
use Kouloughli\Http\Resources\UserResource;

/**
 * @package Kouloughli\Http\Controllers\Api\Profile
 */
class TwoFactorController extends ApiController
{
    /**
     * Enable 2FA for specified user.
     * @param EnableTwoFactorRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(EnableTwoFactorRequest $request)
    {
        $user = auth()->user();

        if (Authy::isEnabled($user)) {
            return $this->setStatusCode(422)
                ->respondWithError("2FA is already enabled for this user.");
        }

        $user->setAuthPhoneInformation(
            $request->country_code,
            $request->phone_number
        );

        Authy::register($user);

        $user->save();

        Authy::sendTwoFactorVerificationToken($user);

        return $this->respondWithArray([
            'message' => 'Verification token sent.'
        ]);
    }

    /**
     * Verify provided 2FA token.
     *
     * @param VerifyTwoFactorTokenRequest $request
     * @return \Illuminate\Http\JsonResponse|UserResource
     */
    public function verify(VerifyTwoFactorTokenRequest $request)
    {
        $user = auth()->user();

        if (! Authy::tokenIsValid($user, $request->token)) {
            return $this->setStatusCode(422)
                ->respondWithError("Invalid 2FA token.");
        }

        $user->setTwoFactorAuthProviderOptions(array_merge(
            $user->getTwoFactorAuthProviderOptions(),
            ['enabled' => true]
        ));

        $user->save();

        event(new TwoFactorEnabled);

        return new UserResource($user);
    }

    /**
     * Disable 2FA for currently authenticated user.
     * @return \Illuminate\Http\JsonResponse|UserResource
     */
    public function destroy()
    {
        $user = auth()->user();

        if (! Authy::isEnabled($user)) {
            return $this->setStatusCode(422)
                ->respondWithError("2FA is not enabled for this user.");
        }

        Authy::delete($user);

        $user->save();

        event(new TwoFactorDisabled);

        return new UserResource($user);
    }
}
