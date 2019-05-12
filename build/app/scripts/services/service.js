angular.module('appApp')

//service for getting commits
 .factory('Repos',function($http,$q){

   return {
       getRepo: function () {

           var Url = 'https://api.github.com/repos/joyent/node/commits';

          var defer = $q.defer();

           $http.get(Url).
              success(function (data, status, headers, config) {
                  defer.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  defer.reject();
              });

            return defer.promise;
        }
   
 }

 });