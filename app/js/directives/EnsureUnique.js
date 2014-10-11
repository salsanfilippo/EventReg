eventsApp.directive('ensureUnique', ['userData', function (userData) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, controller) {
            element.on('blur', function (event) {
                scope.$apply(function () {
                    var value = element.val();
                    var lookupType = (attrs.ensureUnique || '').toLowerCase();

                    if (lookupType == 'username') {
                        userData.getUser(value, function (user, success) {
                            controller.$setValidity('unique', !success);
                        });
                    }
                });
            });
        }
    }
}]);