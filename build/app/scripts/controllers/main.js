'use strict';

/**
 * @ngdoc function
 * @name buildApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buildApp
 */
angular.module('buildApp')
  .controller('MainCtrl', function ($scope, GithubService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.loadCommits = function() {
		GithubService.getCommits('joyent', 'node', 25)
		.then(function(commits) {
			setTimeout(function() {
				$scope.$apply(function() {
					console.dir(commits);
					$scope.commits = commits;
				})
			}, 10);
		});
	}
	$scope.loadCommits();
	
	$scope.isLastCharacterNumeric = function(sha) {
		console.log("here");
		var last_character = sha.substring(sha.length-1, sha.length);
		if (parseInt(last_character)) {
			return true;
		}
		return false;
	}
	
  });
