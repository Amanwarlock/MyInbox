(function () {
    "use strict"
    angular.module('userModule', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('signup', {
                    url: '/signup',
                    templateUrl: '../../pages/signup.html',
                    controller: 'userController',
                    title: 'Signup'
                });
        })
})()