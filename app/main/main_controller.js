(function(){
  'use strict';

  angular.module('flick.main', [
    'ngRoute',
    'flick.image',
    'flick.video',
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
    'imageService',
    'videoService',
    'PATH',

    function (

      $scope,
      imageService,
      videoService,
      PATH

    ) {

      // @todo - needs to be moved back out into a service
      // preferably, possibly a single service rather than
      // two seperate ones
      $scope.assets = [{
        image: PATH.image + 'placeholder1.jpg',
        video: PATH.video + '98345492' + PATH.querystring
      },
      {
        image: PATH.image + 'placeholder2.jpg',
        video: PATH.video + '98633132' + PATH.querystring
      },
      {
        image: PATH.image + 'placeholder3.jpg',
        video: PATH.video + '76559113' + PATH.querystring
      }];

      this.clickPlay = function(key) {
        $scope.videoIndex = key;
      };

      $scope.clickPlay = this.clickPlay;

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