(function () {
    "use strict;"
    angular.module("myIboxApp", [
        'ngMaterial',
        'ngMessages',
        'ngAnimate',
        'toastr',
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
        .config(function (toastrConfig) {

            angular.extend(toastrConfig, {
                autoDismiss: true,//false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-top-right',
                preventDuplicates: false,
                preventOpenDuplicates: false,
                target: 'body'
            });

            /*-----------Custom toast templates------*/;

            /*  angular.extend(toastrConfig, {
                 allowHtml: false,
                 closeButton: false,
                 closeHtml: '<button>&times;</button>',
                 extendedTimeOut: 1000,
                 iconClasses: {
                     error: 'toast-error',
                     info: 'toast-info',
                     success: 'toast-success',
                     warning: 'toast-warning'
                 },
                 messageClass: 'toast-message',
                 onHidden: null,
                 onShown: null,
                 onTap: null,
                 progressBar: false,
                 tapToDismiss: true,
                 templates: {
                     toast: 'directives/toast/toast.html',
                     progressbar: 'directives/progressbar/progressbar.html'
                 },
                 timeOut: 5000,
                 titleClass: 'toast-title',
                 toastClass: 'toast'
             }); */
        })
        .run(['$rootScope', '$state', '$location', 'Auth', 'toastr', function ($rootScope, $state, $location, Auth, toastr) {

            /*  window.onload = function () {
                 console.log("------Loaded - 2");
                 $rootScope.isLoading = true;
             }; */

            /* 
            - '$stateChangeStart'
            - '$routeChangeStart'
            - '$routeChangeError'
            - '$stateChangeError'
         */

            $rootScope.$watch(Auth.isLoggedIn, function (oldValue, newValue) {
                if (newValue) {
                    toastr.info("Watching user is logged in");
                } else {
                    toastr.warning("watching user is not logged in");
                }
            });

            $rootScope.$on("$routeChangeStart", function () {
                $rootScope.isLoggedIn = Auth.isLoggedIn();
                if ($rootScope.isLoggedIn) {
                    //get user;
                    toastr.success("user is logged in");
                } else {
                    // navigate to login page;
                    console.log("User is not logged in and the path accessed is : ", $location.path());
                    toastr.error("User is not logged in");
                    //$location.path('/login');
                }
            });

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                if (error) {
                    toastr.error("State Change Error : ", error);
                } else {
                    toastr.success("State change success : ");
                }
            })


            $state.defaultErrorHandler(function (err) {
                console.log("state error handler---", err);
                toastr.error("state error handler says isLoggedin is ", err.detail);
                $state.go('login');
            });


        }])

})();