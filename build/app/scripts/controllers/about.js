'use strict';

/**
 * @ngdoc function
 * @name buildApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the buildApp
 */
angular.module('buildApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
