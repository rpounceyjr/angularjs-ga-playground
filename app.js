// require("angulartics");
// require("angulartics-google-analytics") 

const angularticsApp = angular.module("angularticsApp", [
  "ngRoute",
  "ngResource",
  "angulartics",
  'angulartics.google.analytics',
]);
