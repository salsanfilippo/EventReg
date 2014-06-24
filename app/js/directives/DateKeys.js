'use strict';

eventsApp.directive('dateKeys', function ($compile) {
    return {
        restrict: "A",
        link: function(scope, element, attrs, controller) {
            element.on('keydown', function(event) {
                if (IsNumericKeyCode(event.keyCode) ||
                    IsForwardSlashKeyCode(event.keyCode) ||
                    IsNavigationKeyCode(event.keyCode)) {
                    return true;
                }
                return false;
            })
        }
    }

    function IsNumericKeyCode(keyCode) {
        return (((keyCode >= 48) && (keyCode <= 57)) ||
                ((keyCode >= 96) && (keyCode <= 105)));
    }

    function IsForwardSlashKeyCode(keyCode) {
        return (keyCode == 191);
    }

    function IsNavigationKeyCode(keyCode) {
        switch (keyCode) {
            case 8:  // Backspace
            case 35: // End
            case 36: // Home
            case 37: // Left
            case 38: // Up
            case 39: // Right
            case 40: // Down
            case 45: // Ins
            case 46: // Del
                return true;
            default:
                return false;
        }
    }
});
