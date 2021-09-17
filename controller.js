todosApp.controller("angularticsController", [
    "$scope",
    "$http",
    "$analytics",
    "$location",
    ($scope, $http, $analytics, $location) => {
      $analytics.pageTrack($location.absUrl());
    },
    
  ]);
  