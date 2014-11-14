'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [   
    'ngRoute','ngSanitize'
  
  ])

  //routes
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller:  'MainCtrl',
         resolve:{
            messages: function(Repos){
             return Repos.getRepo();
          }
        }
      })      
      .otherwise({
        redirectTo: '/'
      });
  })

  //filter for sanitization

  .filter('to_trusted', ['$sce', function($sce){
           return function(text) {
            return $sce.trustAsHtml(text);
        };
  }]);




