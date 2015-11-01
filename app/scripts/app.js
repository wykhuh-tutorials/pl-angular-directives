'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  this.user = {
    name: 'Luke Skywalker',
    address: {
      street: '555 Main',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'C3PO'
    ]
  }
  console.log('parent scope', $scope.$id);
})

angular.module('app').directive('plUserInfoCard', function(){

  return {
    templateUrl: 'scripts/user-info-card/user-info-card.html',
    restrict: 'E',
    scope: true,
    // with inherited scope, directive and parent controller need different
    // controllerAs alias
    controllerAs: 'card',
    controller: function($scope) {
      this.knightMe = function (user) {
        user.rank = 'knight';
      }

      console.log('directive scope', $scope.$id);
    }
  }
})



