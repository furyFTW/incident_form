(function () {
    'use strict';

    angular
        .module('form')
        .service('localDataStorage', localDataStorage);

    localDataStorage.$inject = [];

    function localDataStorage() {

        this.storeData = function (key, value) {
            window.localStorage.setItem(key, JSON.stringify(value));
        };

        this.restoreData = function (key) {
            return JSON.parse(window.localStorage.getItem(key));
        };
    }

})();