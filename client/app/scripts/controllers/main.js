'use strict';

/**
 * @ngdoc function
 * @name getStartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the getStartApp
 */
angular.module('getStartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
