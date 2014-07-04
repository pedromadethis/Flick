(function(){
  'use strict';

  angular.module('flick.constants', [])

  .constant('PATH', {
    image: 'assets/img/',
    video: '//player.vimeo.com/video/',
    querystring: '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=fff&amp;autoplay=1'
  });

})();