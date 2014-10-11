'use strict';

eventsApp.controller('LoginController',
    function LoginController($scope, $location, userData, authService) {
        $scope.user = {userName: "", password: ""};
        resetError();

        $scope.login = function () {
            resetError();

            userData.getUser($scope.user.userName, function (user, success) {
                if (success) {
                    if (!!user && user.password === $scope.user.password) {
                        authService.setCurrentUser(user);
                        $location.url('/events');
                        return;
                    }
                }

                $scope.hasError = true;
                $scope.errorMessage = 'Invalid username/password. (' + $scope.user.userName +')';
            });
        };

        $scope.cancel = function() {
            $location.url("/events");
        }

        function resetError() {
            $scope.hasError = false;
            $scope.errorMessage = '';
        };
    }
);
