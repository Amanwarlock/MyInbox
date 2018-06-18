(function () {
    "use strict"
    angular.module('userService', [])
        .service('User', function ($q, $http, apis) {

            this.create = function (user) {
                let url = apis.end_point + apis.user;
                url += "/create";
                var defer = $q.defer();
                $http.post(url, user).then(result => defer.resolve(result)).catch(e => defer.reject(e));
                return defer.promise;
            }

            this.getUser = function () {

            };

            this.getUserById = function () {

            };
        });
})();