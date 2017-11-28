/**
 * Defines <ng-kit-date-range-form> directive
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.date-range-form').directive('ngKitDateRangeForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'date-range-form.directive.html',
            scope: {
                dateBegin: '=dateBegin',
                dateEnd: '=dateEnd',
                onSubmit: '&onSubmit',
            },
            controller: function($scope) {
                $scope.openDatePicker = {
                    dateBegin: false,
                    dateEnd: false,
                };
            }
        };
    });
})(angular);
