var DatePickerController = function ($scope) {
    $scope.today = function() {
        $scope.event.date = new Date();
    };

    $scope.clearDate = function () {
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

    $scope.now = function() {
        $scope.event.time = new Date();
    };

    $scope.timeChanged = function () {
        console.log('Time changed to: ' + $scope.event.time);
    };

    $scope.clearTime = function() {
        $scope.event.time = null;
    };

    $scope.toggleMeridian = function() {
        $scope.isMeridian = !$scope.isMeridian;
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

    $scope.hstep = 1;
    $scope.mstep = 5;

    $scope.now();
    $scope.isMeridian = true;

    $scope.isCollapsed = false;
};