'use strict';

eventsApp.controller('EventController',
                     function EventController($scope, eventData, $routeParams, $route) {
                         $scope.sortOrder = 'name';
                         $scope.reload = function () {
                            $route.reload();
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
                             session.upVoteCount++;
                         }

                         $scope.downVoteSession = function(session) {
                             if (session.upVoteCount>0)
                                 session.upVoteCount--;
                         }

                         $scope.scrollToSession = function() {
                             $anchorScroll();
                         }
                     }
);
