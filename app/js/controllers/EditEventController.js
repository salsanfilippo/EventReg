'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {
        $scope.disableSubmit = false;
        $scope.saveEvent = function(event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.saveEvent(event)
                    .$promise
                    .then(
                        function (response) {
                            $scope.disableSubmit = true;
                            alert("Saved Event '" + event.name + "'.");
                            console.log('success', response);
                        },
                        function (response) {
                            console.log('failure', response);
                        }
                    );
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };

        $scope.toggleMax = function() {
            if ($scope.maxDate) {
                $scope.maxDate = null;
            } else {
                $scope.maxDate = new Date();
                $scope.maxDate.setFullYear($scope.maxDate.getFullYear()+1);
            }
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            // Uncomment to disable weekend days
            // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );

            // Use all days
            return false;
        };

        $scope.timeChanged = function () {
            console.log('Time changed to: ' + $scope.event.date);
        };

        $scope.toggleMeridian = function() {
            $scope.isMeridian = !$scope.isMeridian;
        };

        $scope.event = {};
        $scope.event.date = new Date();

        $scope.toggleMin();
        $scope.toggleMax();

        $scope.dateOptions = {
            formatYear: 'yyyy',
            showWeeks: false,
            startingDay: 0
        };

        $scope.format = 'MM/dd/yyyy';

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.isMeridian = true;

    }
)