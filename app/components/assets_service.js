(function(){
  'use strict';

  angular.module('flick.assets', [
    'flick.constants'
  ])

  .service('assetsService', [

    'PATH',

    function(

      PATH

    ) {

      /**
       * @description returns an array of assets
       */
      this.assets = function() {
        var assets = [
          {
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
          }
        ];
        return assets;
      };

    }
  ]);

})();
