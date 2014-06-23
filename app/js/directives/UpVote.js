'use strict';

eventsApp.directive('upVote', function ($compile) {
    return {
        restrict: "AE",
        templateUrl: "/templates/directives/upvote.html",
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});
