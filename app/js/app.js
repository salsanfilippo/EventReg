'use strict';

var eventsApp = angular.module('eventsApp', ['ui.bootstrap', 'ngRoute', 'ngResource']) // 'ngResource', ui.bootstrap'
    .config(function ($routeProvider, $locationProvider){
        $routeProvider.when('/newEvent',
            {
                templateUrl: '/templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: '/templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: '/templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.when('/register',
            {
                templateUrl: '/templates/editProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.when('/editProfile',
            {
                templateUrl: '/templates/editProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.when('/viewProfile/:userName',
            {
                templateUrl: '/templates/viewProfile.html',
                controller: 'ViewProfileController'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: '/templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });