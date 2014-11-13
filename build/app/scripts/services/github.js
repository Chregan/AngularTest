angular.module('buildApp')
	.factory("GithubService", function($http, $q) {
		var baseURL = "https://api.github.com/repos/";
		return {
			getCommits: function(owner, repo, count) {
				var url = baseURL + owner + "/" + repo + "/commits";
				var defer = $q.defer();
				$http({
					method: 'GET',
					url: url,
				}).success(function(data, status, header, config) {
					var array = data;
					if (data.length > count) {
						array = array.splice(0, count)
					}
					defer.resolve(array);
            	}).error(function(data, status, header, config) {
                	defer.reject(status);
            	});
            	return defer.promise;
			}
		}
	});
