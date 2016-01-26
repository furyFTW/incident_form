(function () {
    'use strict';
    angular
        .module('form', ['ngRoute'])
        .config(config);

    function config($routeProvider) {

        $routeProvider
            .when('/general', {
                templateUrl: 'general/general.info.html',
                controller: 'GeneralController',
                controllerAs: 'vm'
            })
            .when('/corrective', {
                templateUrl: 'corrective/corrective.html',
                controller: 'CorrectiveController',
                controllerAs: 'vm'
            })
            .when('/review-submit', {
                templateUrl: 'review-submit/review.submit.html',
                controller: 'ReviewSubmitlController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/general'
            });
    }

})();