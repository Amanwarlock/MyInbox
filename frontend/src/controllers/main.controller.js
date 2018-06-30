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
        .controller("mainController", function ($scope, $rootScope, $q, $http, $state, Auth, toastr) {

            let vm = this;

            $scope.isLoggedIn = Auth.isLoggedIn();
            /* 
                - '$stateChangeStart'
                - '$routeChangeStart'
                - '$routeChangeError'
                - '$stateChangeError'
             */
        });
})();