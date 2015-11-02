'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.user1 = {
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

  $scope.user2 = {
    name: 'Han Solo',
    address: {
      street: '555 Main',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Luke',
      'Leia',
      'C3PO'
    ]
  }
})

angular.module('app').directive('plUserInfoCard', function(){

  return {
    templateUrl: 'scripts/user-info-card/user-info-card.html',
    restrict: 'E',
    scope: {
      user: '='
    },
    controller: function($scope) {

      $scope.collapsed = false;

      $scope.knightMe = function (user) {
        user.rank = 'knight';
      }

      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };

      console.log($scope)
    }
  }
})

// when Address share same scope as UserInfoCard,
// collapsing address collapses the whole card.
// card collapse is same variable as address collapse.
angular.module('app').directive('plAddress', function(){
  return {
    restrict: 'E',
    templateUrl: 'scripts/user-info-card/address.html',
    controller: function($scope) {
      $scope.collapsed = false;

      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      }

      $scope.expandAddress = function() {
        $scope.collapsed = false;
      }

      console.log($scope)
    }
  }
})

