(function () {
    "use strict"
    angular.module("dashboardModule", [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('Dashboard', {
                    url: '/',
                    templateUrl: 'controllers/dashboard/dashboard.html',//'../../pages/dashboard.html',
                    controller: 'dashboardController',
                    title: 'Dashboard',
                    resolve: {
                        isAuthenticated: ['Auth', function (Auth) {
                            return Auth.isAuthenticated();
                        }]
                    }
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'controllers/dashboard/dashboard.html',//'../../pages/dashboard.html',
                    controller: 'dashboardController',
                    title: 'Dashboard',
                    resolve: {
                        isAuthenticated: ['Auth', function (Auth) {
                            return Auth.isAuthenticated();
                        }]
                    }
                })
        });
})()