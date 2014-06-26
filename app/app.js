(function(){
	'use strict';

	angular.module('flick', [
   'flick.main',
   'ngRoute',
   'templates'
   ])

  .config(function ($routeProvider, $sceProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    // @fixme - remove and use $sce.trustAsResourceUrl();
    $sceProvider.enabled(false);
      
  });
	  
})();