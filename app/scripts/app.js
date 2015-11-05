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
    templateUrl: 'userTile.html',
    controller: function($scope) {
      $scope.select = function() {
         $scope.user.selected = !$scope.user.selected;
      };
    }
  };
});
