(function(){
  'use strict';

  angular.module('flick.main', [
    'ngRoute',
    'flick.assets',
    'flick.constants'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html'
      });
  })

  .controller('MainCtrl', [

    '$scope',
    'assetsService',
    'PATH',

    function (

      $scope,
      assetsService,
      PATH

    ) {

      this.clickPlay = function(key) {
        $scope.videoIndex = key;
      };

      $scope.clickPlay = this.clickPlay;

      $scope.assets = assetsService.assets();

      $scope.$on('indexChange', function(event, message){
        $scope.switchedViews = message;

        if(typeof $scope.videoIndex !== "undefined") {
          $scope.videoIndex = null;
        }

      });

    }
  ])

  .directive("indexWatcher", [

    '$rootScope',

    function (

      $rootScope

    ) {

    return {
      link: function(scope) {
        scope.$watch('indicatorIndex', function(val) {
          $rootScope.$broadcast('indexChange', val);
        });
      }
    };

  }]);

})();
