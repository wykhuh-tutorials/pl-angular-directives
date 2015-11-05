'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.data = {message: 'I have not been clicked'};
  $scope.clickHandler = function(p) {
    p.message = 'I have been clicked';
  };
});

angular.module('app').directive('myClick', function($parse){
  return {
    // use link instead of isolate scope for decorator directives
    // because isolate scope can break other directives
    link: function(scope, el, attrs) {
      // my-click="clickHandler(data)"
      // $parse - angular looks for clickHandler function
      var fn = $parse(attrs.myClick);
      el.on('click', function() {
        // use $apply because click occurs outside the digest cycle.
        // $apply starts new digest cycle
        scope.$apply(function() {
          fn(scope);
        });
      });
    },
  };
});
