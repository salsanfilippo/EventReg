var DatePickerController = function ($scope) {
    $scope.setDateAsLocal = function(date) {
        $scope.event.date = new Date(date + ' 00:00:00.000');
    };

    $scope.today = function() {
        var date = new Date();
        $scope.event.date = new Date(date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            0,
            0,
            0);
    };

    $scope.now = function() {
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
            $scope.maxDate.setFullYear($scope.maxDate.getFullYear()+5);
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

    $scope.isWeekEndDay = function (date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 ||
            date.getDay() === 6 ));
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        console.log('disabled: ' + date + ", " + mode);
        return false; //  );
    };

    $scope.toggleMeridian = function() {
        $scope.isMeridian = !$scope.isMeridian;
    };

    $scope.event = { };

    $scope.today();
    $scope.toggleMin();

    $scope.dateOptions = {
        formatYear: 'yyyy',
        showWeeks: false,
        startingDay: 0
    };

    $scope.formats = ['MM/dd/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.hstep = 1;
    $scope.mstep = 1;

    $scope.isMeridian = true;
};