(function () {
    var dateTimeController = function ($scope) {
        $scope.vm = {
            dateTime: {}
        };
    };
    var dateTimePicker = function () {

        return {
            require: '?ngModel',
            restrict: 'AE',
            scope: {
                pick12HourFormat: '@',
                language: '@',
                useCurrent: '@',
                location: '@'
            },
            link: function (scope, elem, attrs) {
                elem.datetimepicker({
                    pick12HourFormat: scope.pick12HourFormat,
                    language: scope.language,
                    useCurrent: scope.useCurrent
                });

            }
        };
    };

    angular.module('dateTime', []).run(['$rootScope', function ($rootScope) {
    }]).controller('dateTimeController', ['$scope', '$http', dateTimeController
    ]).directive('dateTimePicker', dateTimePicker);
})();