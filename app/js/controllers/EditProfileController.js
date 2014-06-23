'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, $location, gravatarUrlBuilder, userData, authService) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

        $scope.$watch(function () {
            return authService.getCurrentUserName();
        }, function () {
            $scope.user = authService.getCurrentUser();
        });

        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        $scope.registerUser = function (user, form) {
            if (!form.$valid) {
                return;
            }
            userData.save(user);
            authService.setCurrentUser(user);
            $location.url('/viewProfile/' + user.userName);
        };

        $scope.updateProfile = function (user, form) {
            if (!form.$valid) {
                return;
            }
            userData.save(user);
            authService.setCurrentUser(user);
            $location.url('/viewProfile/' + user.userName);
        };

        $scope.cancelProfile = function() {
            $location.url('/events');
        }
    }
);