'use strict';

eventsApp.directive('repeatX', function() {
    return {
        compile: function(element, attributes) {
            for (var index=0; index<Number(attributes.repeatX)-1; index++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function (scope, element, attributes, controller) {
                attributes.$observe('text', function(newValue) {
                    if (newValue === 'Hello World') {
                        element.css('color', 'red');
                    } else {
                        element.css('color', 'black');
                    }
                })
            }
        }
    };
});