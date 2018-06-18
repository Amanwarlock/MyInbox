(function () {
    "use strict"
    angular.module("mainCtrl", [
        'authModule',
        'userModule',
        'dashboardModule'
    ])
        .config(function ($urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
        })
        .controller("mainController", function ($scope, $rootScope, $q, $http) {

            let vm = this;

        });
})();