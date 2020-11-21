<?php

namespace Kouloughli\Http\Controllers\Api\Authorization;

use Kouloughli\Events\Role\PermissionsUpdated;
use Kouloughli\Http\Controllers\Api\ApiController;
use Kouloughli\Http\Requests\Role\UpdateRolePermissionsRequest;
use Kouloughli\Http\Resources\PermissionResource;
use Kouloughli\Repositories\Role\RoleRepository;
use Kouloughli\Role;

/**
 * @package Kouloughli\Http\Controllers\Api
 */
class RolePermissionsController extends ApiController
{
    /**
     * @var RoleRepository
     */
    private $roles;

    public function __construct(RoleRepository $roles)
    {
        $this->roles = $roles;
        $this->middleware('permission:permissions.manage');
    }

    public function show(Role $role)
    {
        return PermissionResource::collection($role->cachedPermissions());
    }

    /**
     * Update specified role.
     * @param Role $role
     * @param UpdateRolePermissionsRequest $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function update(Role $role, UpdateRolePermissionsRequest $request)
    {
        $this->roles->updatePermissions(
            $role->id,
            $request->permissions
        );

        event(new PermissionsUpdated);

        return PermissionResource::collection($role->cachedPermissions());
    }
}
