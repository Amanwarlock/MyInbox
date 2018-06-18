(function () {
    "use strict"

    angular.module("authModule", [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: '../../pages/login.html',
                    controller: 'authController',
                    title: 'Login'
                })
        });
})()