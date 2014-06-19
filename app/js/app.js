'use strict';

var eventsApp = angular.module('eventsApp', ['ui.bootstrap', 'ngResource']) // 'ngResource', ui.bootstrap'
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    });