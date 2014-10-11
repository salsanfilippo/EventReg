'use strict';

eventsApp.controller('EventController',
                     function EventController($scope, eventData, $location, $routeParams, $route, authService) {
                         $scope.event = eventData.getEvent($routeParams.eventId);
                         $scope.sortorder = 'name';

                         $scope.editEvent = function (event) {
                             $location.url('/events/edit/' + event.id);
                         };

                         $scope.editSession = function (session) {
                             $location.url('/events/' + $scope.event.id + '/sessions/edit/' + session.id);
                         };

                         $scope.createNewSession = function (eventId) {
                             $location.url("/events/" + eventId + "/sessions/new");
                         };

                         $scope.allowUserToEditEvent = function () {
                             return authService.getCurrentUserName() === $scope.event.creator;
                         };

                         $scope.allowUserToEditSession = function (session) {
                             return authService.getCurrentUserName() === session.creator;
                         };

                         $scope.getSessionCreatorName = function (userName) {
                             if (!userName) {
                                 return "";
                             }
                             return _.findWhere(userData.users, {userName:userName}).name;
                         };

                         eventData.getEvent($routeParams.eventId)
                             .$promise.then(
                                 function(event) {
                                     $scope.event = event;
                                     console.log(event);
                                 },
                                 function(response) {
                                     console.log(response);
                                 }
                             );

                         $scope.upVoteSession = function(session) {
                             if (!authService.isAuthenticated()) {
                                 $location.url('/login');
                             }
                             session.upVoteCount++;
                         }

                         $scope.downVoteSession = function(session) {
                             if (!authService.isAuthenticated()) {
                                 $location.url('/login');
                             }
                             if (session.upVoteCount>0)
                                 session.upVoteCount--;
                         }
                     }
);
