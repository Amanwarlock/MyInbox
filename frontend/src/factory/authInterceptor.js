(function () {
    "use strict"
    angular.module('authInterceptor', [])
        .factory('AuthInterceptor', function ($q, $location, AuthToken) {
            var interceptorFactory = {};

            interceptorFactory.request = function (config) {
                var token = AuthToken.getToken();
                if (token) {
                    config.headers['x-access-token'] = token;
                    config.headers['Authorization'] = token;
                }
                return config;
            };

            interceptorFactory.responseError = function(response){
                if(response.status === 403){
                    $location.path('/login');
                    AuthToken.setToken();
                }

                return $q.reject(response);
            };

            return interceptorFactory;
        });
})()