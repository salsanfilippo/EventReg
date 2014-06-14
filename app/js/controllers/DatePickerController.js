var DatePickerController = function ($scope) {
    $scope.today = function() {
        $scope.event.date = new Date();
    };

    $scope.clear = function () {
        $scope.event.date = null;
    };

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
        return false; // ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.event = {};
    $scope.today();

    $scope.toggleMin();
    $scope.toggleMax();

    $scope.dateOptions = {
        formatYear: 'yyyy',
        showWeeks: false,
        startingDay: 0
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.format = 'MM/dd/yyyy';
};