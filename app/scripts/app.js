'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.user1 = {
    name: 'Jane',
    selected: false
  };
});

angular.module('app').directive('userTile', function(){
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'userTile.html'
  };
});

angular.module('app').directive('userClickSelect', function(){
  return {
    link: function(scope, el, attrs) {
      el.on('click', function(){
        scope.user.selected = !scope.user.selected;
        // call $apply so angular know event occurred
        scope.$apply();
      })
    }
  }
})
