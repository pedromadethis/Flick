(function(){
	'use strict';

	angular.module('flick', [
   'flick.main',
   'ngRoute',
   'templates',
   'angular-carousel'
   ])

  .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://player.vimeo.com/video/**'
    ]);
      
  });
	  
})();