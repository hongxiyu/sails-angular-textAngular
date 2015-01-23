'use strict';

/**
 * @ngdoc function
 * @name getStartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the getStartApp
 */
angular.module('getStartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
