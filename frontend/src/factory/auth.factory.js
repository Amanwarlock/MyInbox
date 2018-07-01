(function () {
    "use strict"
    angular.module('authFactory', [])
        .factory('AuthToken', function ($window, $localStorage) {
            var authTokenFactory = {};

            authTokenFactory.setToken = function (token) {
                if (token)
                    $localStorage.token = token;
                //$window.localStorage.setItem('token', token);
                else
                    delete $localStorage.token;
                //$window.localStorage.removeItem('token');
            };

            authTokenFactory.getToken = function () {
                return $localStorage.token//$window.localStorage.getItem('token');
            };

            return authTokenFactory;
        })
        .factory('Auth', function ($http, $q, AuthToken, apis) {
            var authFactory = {};

            authFactory.isLoggedIn = function () {
                var token = AuthToken.getToken();
                return token ? true : false;
            };

            authFactory.isAuthenticated = function () {
                var defer = $q.defer();
                var token = AuthToken.getToken();

                if (token)
                    defer.resolve(true);
                else
                    defer.reject(false);

                return defer.promise;
            };

            authFactory.login = function (username, password) {
                let url = `${apis.end_point}/${apis.login}`;
                let defer = $q.defer();
                let data = { "username": username, "password": password };
                $http.post(url, data)
                    .then(result => {
                        AuthToken.setToken(result.data.token);
                        defer.resolve(result.data)
                    })
                    .catch(e => defer.reject(e));

                return defer.promise;
            };

            authFactory.logout = function () {
                AuthToken.setToken();
            };

            return authFactory;
        });
})();