'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {
        $scope.saveEvent = function(event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.saveEvent(event)
                    .$promise
                    .then(
                        function (response) { console.log('success', response); },
                        function (response) { console.log('failure', response); }
                    );
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }
    }
)