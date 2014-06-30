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
       * @todo may be easier to combine this and the image
       * service together to couple videos to images
       */
      this.videos = function() {
        var videos = [
          {
            url: PATH.video + '98345492'
          },
          {
            url: PATH.video + '98633132'
          },
          {
            url: PATH.video + '76559113'
          }
        ];
        return videos;
      };

    }
  ]);

})();