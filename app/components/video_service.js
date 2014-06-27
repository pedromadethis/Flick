(function(){
  'use strict';

  angular.module('flick.video', [
    'flick.constants'
  ])

  .service('videoService', [

    'PATH',

    function(

      PATH

    ) {

      /**
       * @description returns an array of videos
       */
      this.videos = function() {
        var videos = [
          {
            url: PATH.video + '90388983'
          },
          {
            url: PATH.video + '90388983'
          }
        ];
        return videos;
      }

    }
  ]);

})();