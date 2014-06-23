'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();

        console.log($scope.events);
        var promise = $scope.events.$promise
            .then(function (response) {
                var max = 0;
                for (var index = 0; index < $scope.events.length; index++) {
                    if ($scope.events[index].id > max) {
                        max = $scope.events[index].id;
                    }
                }
                max = max+1;
                console.log("Next Id: "+max);
        });
    });
