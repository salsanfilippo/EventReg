'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, $location, eventData) {
        //$scope.dateRegex = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
        $scope.dateRegex = /^\d\d[- /.]\d\d[- /.]\d\d\d\d$/;

        $scope.disableSubmit = false;
        $scope.editingEvent = false;
        $scope.nextEventId = null;

        $scope.showDate = function () {
            alert($scope.event.date);
        };

        $scope.displayNextEventId = function () {
            var events = eventData.getAllEvents();
            console.log(events);
            events.$promise
                  .then(function() {
                console.log(events);
                var max = 0;
                for (var index = 0; index < events.length; index++) {
                    if (events[index].id > max) {
                        max = events[index].id;
                    }
                }

                $scope.nextEventId = max +1;
                console.log('Next Event Id: '+$scope.nextEventId);
            })
        };

        $scope.saveEvent = function(event, newEventForm) {
            debugger
            if (newEventForm.$valid) {
                var response = eventData.saveEvent(event, function(p1, p2, p3) {
                    debugger
                    // Access to new ID
                    console.log(event.id);

                    // Redirect to Events page
                    $location.url("/events");
                });
            }
        };

        $scope.cancelEvent = function() {
            $location.url('/events');
        }

        /* Date Picker Helper Methods */

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        /* Date Picker Instance Helper Methods */

        $scope.toggleMin = function(minDate) {
            return minDate ? null : new Date();
        };

        $scope.toggleMax = function(maxDate) {
            if (maxDate) {
                return null;
            } else {
                var newMax = new Date();
                newMax.setFullYear(newMax.getFullYear()+1);
                return newMax;
            }
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.timeChanged = function () {
            console.log('Time changed to: ' + $scope.event.date);
        };

        $scope.toggleMeridian = function(isMeridian) {
            return !isMeridian;
        };

        /* Date Setup for first instance */
        $scope.format = 'MM/dd/yyyy';

        $scope.dateOptions = {
            formatYear: 'yyyy',
            showWeeks: false,
            startingDay: 0
        };

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.isMeridian = true;

        /* Scope initialization */
        $scope.event = {};

        $scope.minDate = "2014/01/01";
        $scope.maxDate = "2014/12/31";
        $scope.event.date = new Date();
    }
)