'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.size = 150;
})

angular.module('app').directive('fontScale', function(){
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      // watch runs on page load and when value changes

      // $watch(thing to watch, function to execute when value changes)

      // use attrs['fontScale'] instead of size directly to avoid binding
      // directive to controller
      scope.$watch(attrs['fontScale'], function(newValue, oldValue){
        // el is jquery element so we can use jquery to change css
        el.css('font-size', newValue + '%');
      })
    }
  }
})
