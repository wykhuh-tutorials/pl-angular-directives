'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.messages = [];

  $scope.handlePause = function() {
    console.log('video was paused!');
    // push object into array instead of a string.
    // ng-repeat does not support an array whose items are identical using ===.
    // strings with identical text are idenitcal.
    // objects that contain the identical content are not identical.
    $scope.messages.push({text: 'pause!'});
  }

})

angular.module('app').directive('spacebarSupport', function(){
  return {
    attribute: 'A',
    // use link to modify the html on the page.
    link: function(scope, el, attrs) {
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
  }
})

// event-pause="handlePause()"
// when pause event occurs on <video>, execute the eventPause(),
// which will execute handlePause() on the parent
angular.module('app').directive('eventPause', function() {
  return {
    restrict: 'A',
    // when you use an isolated scope on an element, that affects the other
    // directives on the element. Isolated scope might break other directives
    // that rely on data from a parent element.
    // if there are two directors with isolated scope on the same element, the
    // app will break.
    scope: {
      eventPause: '&'
    },
    // use link to add a listener for the pause event
    link: function(scope, el, attrs) {
      el.on('pause', function(event){
        // the pause event occurs outside of Angular's digest cycle.
        // need to start a new digest cycle because an external event happened.
        scope.$apply(function() {
          scope.eventPause();
        })
      })
    }
  }
})
