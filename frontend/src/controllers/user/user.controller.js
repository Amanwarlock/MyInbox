(function () {
    "use strict"
    angular.module('userModule')
        .controller('userController', ['$scope', '$q', 'User', 'Avatar', function ($scope, $q, User, Avatar) {
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

            }

        }]);
})();