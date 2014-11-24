'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('HccApp')
.controller('DashController',function($scope,$rootScope,Authentication,Events){
  $rootScope.user_valid_icon =  false;
})

.controller('InstaController',function($scope,$rootScope,instagram){
      
      $rootScope.user_valid_icon =  true; 
      $scope.pics = [];
      $scope.have = [];
       
       $rootScope.loading = true;
      //get first data
      $scope.getMore = function() {
        instagram.fetchPopular(function(response) {       
          $scope.next_url = response.pagination.next_url
          $scope.process(response.data);
          $rootScope.loading = false;
        });
      };
      
      $scope.getMore();
      //load more
      $scope.loadmore = function(){

        instagram.fetchMore($scope.next_url).then(function(response){          
              $scope.next_url = response.pagination.next_url
              $scope.process(response.data);
           
        });
    
      }
     //lesser code
      $scope.process = function(data){
            for(var i=0; i<data.length; i++) {
              if (typeof $scope.have[data[i].id]==="undefined") {
                $scope.pics.push(data[i]) ;
                $scope.have[data[i].id] = "1";
              }
            }
      }



})

.controller('EventController',function($scope,$rootScope,Events,Authentication){

  $rootScope.user_valid_icon =  true; 
   //user token
  var token = Authentication.auth_token();
  //get events
  $scope.events = function(){
   var item = 'auth_token='+token;  
   Events.get(item).then(function(response){
      console.log(response);
      $scope.eventsall = response.data;
   });
  }

   $scope.events();

})