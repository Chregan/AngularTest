app.controller('GitRepoCtrl', function($scope, $ionicLoading,gitrepo){
	$scope.total = "";
 	$scope.results = [];

	$scope.findcommits = function(gh){
	
		if(gh && gh.username!=""){
	
			gitrepo.findcommits(gh).then(function(response){
	
				$scope.results=response.data;
				$scope.total = $scope.results.length
				console.log(response);
			});
		}
	}

});