'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event) {
            window.alert('Event "' + event.name + '" saved.');
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }
    }
)