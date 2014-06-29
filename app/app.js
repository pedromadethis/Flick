(function(){
	'use strict';

	angular.module('flick', [
   'flick.main',
   'ngRoute',
   'templates',
   'angular-carousel'
   ])

  .config(function ($routeProvider, $locationProvider, $sceProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // @fixme - remove and use $sce.trustAsResourceUrl();
    $sceProvider.enabled(false);
      
  });
	  
})();