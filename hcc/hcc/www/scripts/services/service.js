'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */

var baseurl ="http://huaweicultureclub.co.za/admin/index.php/hcc_api/";
angular.module('HccApp')

.factory('Authentication',function($http,storageService,$q){

  return{
  	login:function(item){

           storageService.save('loggedIn','user_token_123');

           var Url = baseurl+'login';
           var defer = $q.defer();

           $http.post(Url,item).
              success(function (data, status, headers, config) {
                  defer.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  defer.reject();
              });

            return defer.promise;
  	},

  	logout:function(){
  	   storageService.remove('loggedIn');
  	},

    Register:function(item){
           var Url = baseurl+'register';
           var defer = $q.defer();

           $http.post(Url,item).
              success(function (data, status, headers, config) {
                  defer.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  defer.reject();
              });

            return defer.promise;

    },

    auth_token:function(){
      var user_data =  storageService.get('user_data');
      var data = JSON.parse(user_data);
      return  data[0].auth_token;
    }

  }

})


.factory('storageService', function ($rootScope) {

    return {
        
        get: function (key) {
           return localStorage.getItem(key);
        },

        save: function (key, data) {
           localStorage.setItem(key, JSON.stringify(data));
        },

        remove: function (key) {
            localStorage.removeItem(key);
        },
        
        clearAll : function () {
            localStorage.clear();
        }
    };
})
//events service
.factory('Events', function ($rootScope,$http,$q) {

    return {
        get: function (item) {
           var Url = baseurl+'events';
           var defer = $q.defer();

           $http.post(Url,item).
              success(function (data, status, headers, config) {
                  defer.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  defer.reject();
              });

            return defer.promise;
        },
    };
})

 .factory('instagram', ['$http','$q','$rootScope',
        function($http,$q,$rootScope) {
            return {
                fetchPopular: function(callback) {
                    var access_token = "295178498.76b13ab.e57b1dcc526c4095a7adb641dadf1e58";
                    var user_id = "1269326164";
                    var endPoint = "https://api.instagram.com/v1/users/"+user_id+"/media/recent/?access_token="+access_token+"&callback=JSON_CALLBACK";

                    $http.jsonp(endPoint).success(function(response) {
                        callback(response);
                    });
                },
               fetchMore:function(endPoint){
              
                    var defer = $q.defer();
                    $http.jsonp(endPoint+"&callback=JSON_CALLBACK").
                    success(function (data, status, headers, config) {
                        defer.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                        defer.reject();
                    });
                   return defer.promise;
                
               } 
            }
        }
    ])