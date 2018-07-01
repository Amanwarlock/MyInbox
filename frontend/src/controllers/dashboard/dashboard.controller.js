(function () {
    "use strict"
    angular.module('dashboardModule')
        .controller('dashboardController', ['$rootScope', '$scope', '$q', '$http', '$state', '$stateParams', 'toastr', 'Auth', 'User', function ($rootScope, $scope, $q, $http, $state, $stateParams, toastr, Auth, User) {

            let vm = this;

            $rootScope.isLoggedIn = Auth.isLoggedIn();

            vm.isFabOpen = false;

            $scope.demo = {
                isOpen: false,
                count: 0,
                selectedDirection: 'right'
            };

            $scope.doLogout = function () {
                Auth.logout();
                $rootScope.isLoggedIn = false;
                $state.go("login");
            };

            $scope.changeAvatar = function () {
                alert("change avatar");
            }

            function init() {
                /*
                    - Get user
                    - Get user Emails 
                 */
                var userPromise = User.getCurrentUser();

                $q.all([userPromise]).then(result => {
                    $scope.user = result[0].user;
                    console.log("--user---", $scope.user);
                }).catch(e => toastr.error(e.message));
            }


            init();

            $scope.todos = [
                {
                    "avatar": "assets/avatars/boy-x.svg",
                    "isOpen": false,
                    "who": "aman",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/man-x.svg",
                    "isOpen": false,
                    "who": "batman",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/clown.svg",
                    "isOpen": false,
                    "who": "joker",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/pirate.svg",
                    "isOpen": false,
                    "who": "pirate",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/devil.svg",
                    "isOpen": false,
                    "who": "devil",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/arab-man.svg",
                    "isOpen": false,
                    "who": "sheikh",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/knight.svg",
                    "isOpen": false,
                    "who": "knight",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "avatar": "assets/avatars/man-x-1.svg",
                    "isOpen": false,
                    "who": "dude",
                    "what": "Hello",
                    "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]

            /* 
                - '$stateChangeStart'
                - '$routeChangeStart'
                - '$routeChangeError'
                - '$stateChangeError'
             */

        }]);
})();