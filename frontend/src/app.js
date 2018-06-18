(function () {
    "use strict;"
    angular.module("myIboxApp", [
        'ngMaterial',
        'ngMessages',
        'ngAvatar',
        'ui.bootstrap',
        'ui.router',
        'myTheme',
        'mainCtrl',
        'mainComponents',
        'factory',
        'services'
    ])
        .constant("apis", {
            "end_point": `http://localhost:9000`,
            "login": ``,
            "signup": ''
        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('AuthInterceptor');
        })
        .run(['$rootScope', function ($rootScope) {

            /*  window.onload = function () {
                 console.log("------Loaded - 2");
                 $rootScope.isLoading = true;
             }; */

        }]);
})();