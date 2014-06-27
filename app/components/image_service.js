(function(){
  'use strict';

  angular.module('flick.image', [
    'flick.constants'
  ])

  .service('imageService', [

    'PATH',

    function(

      PATH

    ) {

      /**
       * @description returns an array of images
       */
      this.images = function() {
        var images = [
          {
            url: PATH.image + '400'
          },
          {
            url: PATH.image + '400'
          }
        ];
        return images;
      };

    }
  ]);

})();