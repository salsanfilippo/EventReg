'use strict';

var eventsApp = angular.module('eventsApp', ['ui.bootstrap', 'ngRoute', 'ngResource']) // 'ngResource', ui.bootstrap'
    .config(function ($routeProvider, $locationProvider){
        $routeProvider.when('/events',
                            { templateUrl: '/templates/EventList.html', controller: 'EventListController' });
        $routeProvider.when('/events/:eventId/sessions/edit/:sessionId',
                            { templateUrl: '/templates/editSession.html', controller: 'EditSessionController' });
        $routeProvider.when('/events/:eventId/sessions/new',
                            {templateUrl: '/templates/editSession.html', controller: 'EditSessionController' });
        $routeProvider.when('/newEvent', // Temporary, replaced with events/new and events/edit
                            { templateUrl: '/templates/NewEvent.html', controller: 'EditEventController' });
        $routeProvider.when('/event/:eventId',
                            { templateUrl: '/templates/EventDetails.html', controller: 'EventController' });
        $routeProvider.when('/events/new',
                            { templateUrl: '/templates/editEvent.html', controller: 'EditEventController' });
        $routeProvider.when('/events/edit/:eventId',
                            { templateUrl: '/templates/editEvent.html', controller: 'EditEventController'} );
        $routeProvider.when('/register',
                            { templateUrl: '/templates/editProfile.html', controller: 'EditProfileController' });
        $routeProvider.when('/editProfile',
                            { templateUrl: '/templates/editProfile.html', controller: 'EditProfileController' });
        $routeProvider.when('/viewProfile/:userName',
                            { templateUrl: '/templates/viewProfile.html', controller: 'ViewProfileController' });
        $routeProvider.when('/sampleDirective',
                            { templateUrl: '/templates/SampleDirective.html', controller: 'SampleDirectiveController' });
        $routeProvider.when('/login',
                            { templateUrl: '/templates/login.html', controller: 'LoginController' });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });