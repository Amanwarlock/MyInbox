(function () {
    "use strict"
    angular.module('authModule')
        .controller('authController', ['$scope', '$rootScope', '$q', '$http', 'Auth', 'toastr', '$location', function ($scope, $rootScope, $q, $http, Auth, toastr, $location) {
            let vm = this;

            $scope.isLoggedIn = Auth.isLoggedIn();

           /*  $rootScope.$on("$routeChangeStart", function () {
                $scope.isLoggedIn = Auth.isLoggedIn();
                if ($scope.isLoggedIn) {
                    //get user;
                    toastr.success("user is logged in");
                } else {
                    // navigate to login page;
                    console.log("User is not logged in and the path accessed is : ", $location.path());
                    toastr.error("User is not logged in");
                    //$location.path('/login');
                }
            });
 */
            $scope.doLogin = function () {
                Auth.login({ "username": $scope.loginData.username, "password": $scope.loginData.password })
                    .then(data => {
                        if (data.success) {
                            $scope.user = data.user;
                            $location.path("/");
                        } else {
                            toastr.error("Login Error");
                        }
                    }).catch(e => {
                        console.error(e);
                        toastr.error(e.message);
                    });
            };

            $scope.doLogout = function () {
                Auth.logout();
                $location.path("/login");
            };

        }]);
})()
