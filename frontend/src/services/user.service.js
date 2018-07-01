(function () {
    "use strict"
    angular.module('userService', [])
        .service('User', function ($q, $http, apis) {

            this.create = function (user) {
                let url = `${apis.end_point}/${apis.signup}`;
                var defer = $q.defer();
                $http.post(url, user).then(result => {
                    defer.resolve(result.data);
                }).catch(e => defer.reject(e));
                return defer.promise;
            }

            this.getCurrentUser = function () {
                let url = `${apis.end_point}/${apis.user}`;
                url += `/v1`;
                var defer = $q.defer();
                $http.get(url).then(result => {
                    defer.resolve(result.data);
                }).catch(e => defer.reject(e))
                return defer.promise;
            };

            this.getUserById = function () {

            };
        });
})();