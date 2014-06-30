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
            url: PATH.image + 'placeholder1.jpg'
          },
          {
            url: PATH.image + 'placeholder2.jpg'
          },
          {
            url: PATH.image + 'placeholder3.jpg'
          }
        ];
        return images;
      };

    }
  ]);

})();