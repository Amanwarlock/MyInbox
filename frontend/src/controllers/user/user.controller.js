(function () {
    "use strict"
    angular.module('userModule')
        .controller('userController', ['$scope', '$q', 'User', 'Avatar', 'AuthToken', '$location', '$state', 'toastr', function ($scope, $q, User, Avatar, AuthToken, $location, $state, toastr) {
            let vm = this;

            $scope.signUp = {
                header: 'SIGN UP',
                showFields: true,
                showAvatarGrid: false,
                avatar: null,
                avatarIndex: null
            }

            $scope.onNext = function () {
                $scope.avatars = Avatar.avatars;
                $scope.signUp.showFields = !$scope.signUp.showFields;
                $scope.signUp.showAvatarGrid = !$scope.signUp.showAvatarGrid;

                $scope.signUp.header = $scope.signUp.showFields ? 'SIGN UP' : 'CHOOSE YOUR AVATAR'
            };

            $scope.onAvatarSelect = function (avatar, index) {
                avatar.selected = !avatar.selected;
                avatar.class = avatar.selected ? 'selected-avatar' : '';
                if ($scope.signUp.avatarIndex !== null) {
                    var _previous = $scope.avatars[$scope.signUp.avatarIndex];
                    _previous.selected = $scope.signUp.avatarIndex === index ? avatar.selected : false;
                    _previous.class = _previous.selected ? 'selected-avatar' : '';
                }
                $scope.signUp.avatarIndex = index;
                $scope.signUp.avatar = avatar;
            };

            $scope.onBack = function () {
                $scope.signUp.header = 'SIGN UP';
                $scope.signUp.showFields = true;
                $scope.signUp.showAvatarGrid = false;
            };

            /* Submit */
            $scope.onDone = function () {
                signUpNewUser();//sign-up
            }

            function signUpNewUser() {
                if ($scope.signUp.userData.password !== $scope.signUp.userData.confirmPassword) {
                    toastr.error("Password did not match");
                    return
                }

                $scope.signUp.userData.avatar = $scope.signUp.avatar;

                if (!$scope.signUp.userData.avatar || _.isEmpty($scope.signUp.userData.avatar)) {
                    toastr.error("Avatar is not selected");
                    return;
                }

                User.create($scope.signUp.userData).then(data => {
                    if (data.success) {
                        AuthToken.setToken(data.token);
                        $location.path("/");
                        //$state.go();
                    } else {
                        toastr.error(data.error);
                    }
                }).catch(e => toastr.error(e.message));
            }

        }]);
})();