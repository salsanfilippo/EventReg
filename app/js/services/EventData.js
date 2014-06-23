'use strict';

eventsApp.factory('eventData', function ($resource, authService) {
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
                resource.save(event, function() { if (callback) callback(); });
            } else {

                resource.query({}, (function(events) {
                    console.log("Events:");
                    console.log(events);
                    event.creator = authService.getCurrentUserName();
                    event.id = getNextEventId(events);
                    event.sessions = [];
                    resource.save(event);
                    if (callback)
                        callback();
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