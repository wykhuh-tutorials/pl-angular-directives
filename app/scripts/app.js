'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.user = {
    name: 'Jane Doe',
    address: {
      street: '555 Main',
      city: 'Springfield',
      planet: 'Earth'
    },
    friends: [
      'Jenn',
      'Joe',
      'Jeff'
    ]
  }
})

angular.module('app').directive('userInfoCard', function(){
  return {
    templateUrl: 'scripts/user-info-card/index.html',
    restrict: 'E'
  }
})
