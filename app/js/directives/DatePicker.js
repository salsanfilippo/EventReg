'use strict';

eventsApp.directive('datePicker', function (calendarHelper) {
    return {
        restrict: "A",
        templateUrl: "/templates/directives/DatePicker.html",
        link: function(scope, element, attributes, controller) {
            element.datepicker();
        }
    }
});