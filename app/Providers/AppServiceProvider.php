<?php

namespace Kouloughli\Providers;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Kouloughli\Repositories\Categorie\CategorieRepository;
use Kouloughli\Repositories\Categorie\EloquentCategorie;
use Kouloughli\Repositories\Country\CountryRepository;
use Kouloughli\Repositories\Country\EloquentCountry;
use Kouloughli\Repositories\Media\EloquentMedia;
use Kouloughli\Repositories\Media\MediaRepository;
use Kouloughli\Repositories\Permission\EloquentPermission;
use Kouloughli\Repositories\Permission\PermissionRepository;
use Kouloughli\Repositories\Role\EloquentRole;
use Kouloughli\Repositories\Role\RoleRepository;
use Kouloughli\Repositories\Session\DbSession;
use Kouloughli\Repositories\Session\SessionRepository;
use Kouloughli\Repositories\User\EloquentUser;
use Kouloughli\Repositories\User\UserRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //\URL::forceScheme('https');

        Carbon::setLocale(config('app.locale'));
        config(['app.name' => setting('app_name')]);
        \Illuminate\Database\Schema\Builder::defaultStringLength(191);

        Factory::guessFactoryNamesUsing(function (string $modelName) {
            return 'Database\Factories\\'.class_basename($modelName).'Factory';
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(UserRepository::class, EloquentUser::class);
        $this->app->singleton(RoleRepository::class, EloquentRole::class);
        $this->app->singleton(PermissionRepository::class, EloquentPermission::class);
        $this->app->singleton(SessionRepository::class, DbSession::class);
        $this->app->singleton(CountryRepository::class, EloquentCountry::class);
        $this->app->singleton(CategorieRepository::class, EloquentCategorie::class);
        $this->app->singleton(MediaRepository::class, EloquentMedia::class);

        if ($this->app->environment('local')) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
        }
    }
}
