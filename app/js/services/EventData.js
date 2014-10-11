'use strict';

eventsApp.factory('eventData', function ($http, $resource, authService) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function(eventId, callback) {
            return resource.get({id:eventId}, function(event) {
                if (callback)
                    callback(event);
            });
        },

        getAllEvents: function(callback) {
            return resource.query({}, callback);
        },

        getNextSessionId:function (event) {
            var max = 0;
            for (var idx = 0; idx < event.sessions.length; idx++) {
                if (event.sessions[idx].id > max) {
                    max = event.sessions[idx].id;
                }
            }
            return max+1;
        },

        saveEvent: function(event, callback) {
            if (event.id) {
                resource.save(event, function(p1, p2, p3) { if (callback) callback(p1, p2, p3); });
            } else {

                resource.query({}, (function(events) {
                    console.log("Events:");
                    console.log(events);
                    event.creator = authService.getCurrentUserName();
                    event.id = getNextEventId(events);
                    event.sessions = [];
                    debugger
                    //resource.save(event, function(p1, p2, p3) { if (callback) callback(p1, p2, p3); });
                    $http({
                        url: '/data/event/',
                        method: 'POST',
                        data: JSON.stringify(event),
                        headers: {'Content-type': 'application/json'}
                    })
                        .success(function(data, status, headers, config) {
                            console.log('Success: ', data, status, headers, config)
                            if (callback)
                                callback(data, status, headers);
                        })
                        .error(function(data, status, headers, config) {
                            console.log('Error: ', data, status, headers, config)

                        })

                    //resource.save(event);
                    //if (callback)
                    //    callback();
                }));
            }
        }
    };

    function getNextEventId(events) {
        var max = 0;
        for (var index = 0; index < events.length; index++) {
            if (events[index].id > max) {
                max = events[index].id;
            }
        }
        return max+1;
    }
});