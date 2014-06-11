'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '2013-01-01',
            time: '2013-01-01T10:30:00',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions:
                [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bob Smith',
                        duration: '1 hr',
                        level: 'Advanced',
                        abstract: 'In this session you will learn the ins and outs of directives.',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scopes for Fun and Profit',
                        creatorName: 'John Doe',
                        duration: '30 mins',
                        level: 'Introductory',
                        abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well Behaved Controllers',
                        creatorName: 'Jane Doe',
                        duration: '2 hours',
                        level: 'Intermediate',
                        abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of colleagues.',
                        upVoteCount: 0
                    }
                ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            if (session.upVoteCount>0)
                session.upVoteCount--;
        }
    }
);
