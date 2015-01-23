'use strict';

/**
 * @ngdoc overview
 * @name getStartApp
 * @description
 * # getStartApp
 *
 * Main module of the application.
 */
angular
  .module('getStartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular',
    'angular-data.DS'
  ])
  .config(function ($routeProvider, DSProvider) {

    DSProvider.defaults.baseUrl = 'http://localhost:1337/';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
