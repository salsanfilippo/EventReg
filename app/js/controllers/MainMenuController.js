'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, authService) {
        $scope.user = {};
        $scope.$watch(authService.getCurrentUserName, function () {
            $scope.user = authService.getCurrentUser();
        });

        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        $scope.logout = function () {
            authService.setCurrentUser({});
        };

        $scope.createEvent = function() {
            console.log('Navigating to new event...');
            $location.url('/newEvent', true);
        };
    });
