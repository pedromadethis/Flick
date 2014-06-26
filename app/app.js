(function(){
	'use strict';

	angular.module('flick', [
   'ngRoute',
   'flick-main',
   'templates'
   ])

  .config(function ($routeProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
      
  });
	  
})();