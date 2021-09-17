require("angulartics"); 

const angularticsApp = angular.module("angularticsApp", [
  "ngRoute",
  "ngResource",
  "angulartics",
  require("angulartics-google-analytics"),
]);
