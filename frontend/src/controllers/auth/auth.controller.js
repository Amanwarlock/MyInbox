(function () {
    "use strict"
    angular.module('authModule')
        .controller('authController', ['$scope', '$rootScope', '$q', '$http', 'Auth', function ($scope, $rootScope, $q, $http, Auth) {
            let vm = this;

            $scope.isLoggedIn = Auth.isLoggedIn();

            $rootScope.$on("$routeChangeStart", function () {
                $scope.isLoggedIn = Auth.isLoggedIn();
            });

            $scope.doLogin = function () {

            };

        }]);
})()