'use strict';
(function(angular) {
    angular.module('ng-kit.date-range-form.example', [
        'ng-kit.date-range-form',
    ])
    .controller('IndexController', function($scope) {
        var currentDate = new Date();
        $scope.dateRange = {
            begin: currentDate,
            end: new Date().setMonth(currentDate.getMonth() + 2),
        };
        $scope.onSubmit = function() {
            console.log("Date range has changed");
        };
    });
})(angular);