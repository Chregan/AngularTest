'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope,Repos) { 
     //get commits from joyent.node and put in scope
    $scope.loadCommits = function(){
	    Repos.getRepo().then(function(response){  
	     $scope.commits =  response;
	    });
    }

    $scope.loadCommits();


   //check if string contains hash string
    $scope.getClass = function(str){   
       var lastChar = str.substr(str.length - 5);
    	//check if last 5th contain hash
    	if(lastChar[0].indexOf('#') != -1){
         var lastFour  = lastChar.substr(lastChar.length - 4);
         // cehck if last four are number and return class
         if(!isNaN(lastFour)){
    		return 'color';
    	 }
    	  
    	}

    	

    }

  });
