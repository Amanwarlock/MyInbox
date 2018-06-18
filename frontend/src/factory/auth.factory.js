(function () {
    "use strict"
    angular.module('authFactory', [])
        .factory('AuthToken', function ($window) {
            var authTokenFactory = {};

            authTokenFactory.setToken = function (token) {
                if (token)
                    $window.localStorage.setItem('token', token);
                else
                    $window.localStorage.removeItem('token');
            };

            authTokenFactory.getToken = function () {
                return $window.localStorage.getItem('token');
            };

            return authTokenFactory;
        })
        .factory('Auth', function ($http, $q, AuthToken, apis) {
            var authFactory = {};

            authFactory.isLoggedIn = function () {
                var token = AuthToken.getToken();
                return token ? true : false;
            };

            authFactory.login = function (username, password) {
                // let url = `${apis.end_point}/${apis.login}`;
                let url = `/${apis.login}`;
                let defer = $q.defer();
                let data = { "username": username, "password": password };
                $http.post(url, data)
                    .then(result => defer.resolve(result))
                    .catch(e => defer, reject(e));

                return defer.promise;
            };

            authFactory.logout = function () {
                AuthToken.setToken();
            };

            return authFactory;
        });
})();