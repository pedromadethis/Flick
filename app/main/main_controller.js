(function(){
  'use strict';

  angular.module('flick.main', [
    'ngRoute',
    'flick.image',
    'flick.video'
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

    function (

      $scope,
      imageService,
      videoService

    ) {

      $scope.images = imageService.images();

      $scope.videos = videoService.videos();

      this.clickPlay = function() {
        $scope.videoPlaying = 1;
      }

      $scope.clickPlay = this.clickPlay;

    }
  ]);

})();