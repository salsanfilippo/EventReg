'use strict';

eventsApp.controller('EventController',
                     function EventController($scope, eventData, $anchorScroll) {
                         $scope.sortOrder = 'name';
                         eventData.getEvent()
                             .$promise.then(
                                 function(event) { $scope.event = event; console.log(event); },
                                 function(response) { console.log(response); }
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
