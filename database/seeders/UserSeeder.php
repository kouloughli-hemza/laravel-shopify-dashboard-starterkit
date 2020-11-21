<?php

namespace Database\Seeders;

use Kouloughli\Role;
use Kouloughli\Support\Enum\UserStatus;
use Kouloughli\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::where('name', 'Admin')->first();

        User::create([
            'first_name' => 'Kouloughli',
            'email' => 'admin@example.com',
            'username' => 'admin',
            'password' => 'admin123',
            'avatar' => null,
            'country_id' => null,
            'role_id' => $admin->id,
            'status' => UserStatus::ACTIVE,
            'email_verified_at' => now(),
        ]);
    }
}
