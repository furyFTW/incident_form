(function () {
    'use strict';

    angular
        .module('form')
        .service('dataService', dataService);

    dataService.$inject = ['localDataStorage'];

    function dataService() {
        this.companies = [
            {id: 1, name: 'CompanyA'},
            {id: 2, name: 'CompanyB'},
            {id: 3, name: 'CompanyC'}
        ];

    }


})();