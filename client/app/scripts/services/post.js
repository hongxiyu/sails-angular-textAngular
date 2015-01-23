'use strict';

/**
 * @ngdoc service
 * @name getStartApp.post
 * @description
 * # post
 * Service in the getStartApp.
 */
angular.module('getStartApp')
  .service('Post', function (DS) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return DS.defineResource({
      name: 'post'
    });

  });
