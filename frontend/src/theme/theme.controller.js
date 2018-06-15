(function () {
    "use strict"
    angular.module("myTheme", [])
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');

            $mdIconProvider
                .defaultIconSet('../assets/icons/mdi.svg');
        })
        .controller("myThemeCtrl", function ($scope, $mdSidenav) {

            let vm = this;

            vm.toggleSideBar = function () {
                $mdSidenav('left').toggle();
            };
        })
})();