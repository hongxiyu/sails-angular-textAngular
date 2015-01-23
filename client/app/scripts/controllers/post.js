'use strict';

/**
 * @ngdoc function
 * @name getStartApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the getStartApp
 */
angular.module('getStartApp')
  .controller('PostCtrl', function ($scope, $http, Post ,DS) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = "输入标题";
    $scope.content = "输入内容";

    $scope.add = function () {
      var newPost = {
        title: $scope.title,
        content: $scope.content
      };

      DS.create('post', newPost)
        .then(function () {
          $scope.title = "";

          alert('添加成功！');
        }).catch (function (err) {
          alert("创建失败");
        })
    }




  });
