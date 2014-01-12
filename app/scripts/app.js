'use strict';

angular.module('oApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'partials/admin',
        controller: 'AdminCtrl'
      })
      .otherwise({
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      });
    $locationProvider.html5Mode(true);
  });