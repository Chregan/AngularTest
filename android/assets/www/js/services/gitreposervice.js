app.factory('gitrepo', ['$http', function($http){

var serviceBase = 'https://api.github.com/';
var gitServiceFactory = {};

var _findcommits  = function(gh){

	return $http.get(serviceBase + 'repos/'+gh.username+'/commits').
	    success(function(data, status, headers, config) {
	      return data;
	    }).
	    error(function(data, status, headers, config) {
	     return data;
	    });

};
	
gitServiceFactory.findcommits = _findcommits;

return gitServiceFactory;
    
}])