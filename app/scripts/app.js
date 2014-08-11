'use strict';

/**
 * @ngdoc overview
 * @name timetrackerApp
 * @description
 * # timetrackerApp
 *
 * Main module of the application.
 */
angular
  .module('timetrackerApp', [
    'firebase',
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/date/:dateID', {
        templateUrl: 'views/date.html',
        controller: 'DateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
