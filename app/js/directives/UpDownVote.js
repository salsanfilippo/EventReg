'use strict';

eventsApp.directive('updownVote', function ($compile) {
    return {
        restrict: "AE",
        templateUrl: "/templates/directives/updownvote.html",
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});
