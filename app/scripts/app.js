'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){

})

angular.module('app').directive('spacebarSupport', function(){
  // if you return a function from a directive, angular assumes it is a link
  // function with attribute type
  return function(scope, el, attrs) {
    // add keypress event listener on the body
    $('body').on('keypress', function(evt){
      // el is wrapped in jquery wrapper. use el[0] to get to DOM element
      var vidEl = el[0]
      // check if spacebar is pressed
      if (evt.keyCode === 32) {
        // paused and play() are methods on html5 <video>
        if(vidEl.paused) {
          vidEl.play();
        } else {
          vidEl.pause();
        }
      }
    })
  }
})
