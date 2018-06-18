(function () {
    "use strict"
    angular.module("dashboardModule", [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: '../../pages/dashboard.html',
                    controller: 'dashboardController',
                    title: 'Dashboard'
                })
        });
})()