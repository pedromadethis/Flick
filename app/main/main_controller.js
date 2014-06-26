(function(){
  'use strict';

  angular.module('flick-main',[
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      });
  })

  .controller('MainCtrl', [

    '$scope',

    function (

      $scope

    ) {
      
      

    }
  ]);

})();