'use strict';

eventsApp.controller('EventController',
                     function EventController($scope, eventData) {
                         $scope.sortOrder = 'name';
                         eventData.getEvent().then(
                             function(event) { $scope.event = event; },
                             function(statusCode) { console.log(statusCode); }
                         );

                         $scope.upVoteSession = function(session) {
                             session.upVoteCount++;
                         }

                         $scope.downVoteSession = function(session) {
                             if (session.upVoteCount>0)
                                 session.upVoteCount--;
                         }
                     }
);
