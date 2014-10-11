'use strict';

eventsApp.factory('userData', function ($resource) {
    var resource = $resource('/data/user/:userName', {userName:'@userName'}, { });
    return {
        getUser: function(userName, callback) {
            return resource.get({userName:userName},
                function (user) {
                    if (callback)
                        callback(user, true);
                },
                function (user) {
                    if (callback)
                        callback(user, false);
                });
        },
        save: function(user) {
            resource.save(user);
        },
        users: function () {
            return resource.query({}, function(users) {
                return users;
            });
        }
    };
});