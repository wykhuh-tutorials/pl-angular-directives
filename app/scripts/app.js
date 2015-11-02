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
      user: '=', // object
      // in the html, use collapsed
      // in the controller, use initial collapse
      initialCollapsed: '@collapsed' // string value
    },
    controller: function($scope) {
      // collapse card
      $scope.collapsed = ($scope.initialCollapsed === 'true');

      $scope.knightMe = function (user) {
        user.rank = 'knight';
      }

      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };

      // remove friends
      // bug - all the friends share the same removing variable.
      // when you click on remove for one friend, removing is set
      // to true for all friends.
      $scope.removing = false;

      $scope.startRemove = function() {
        $scope.removing = true;
      };

      $scope.cancelRemove = function() {
        $scope.removing = false;
      };

      $scope.removeFriend = function(friend) {
        var idx = $scope.user.friends.indexOf(friend);
        if (idx > -1) {
          $scope.user.friends.splice(idx, 1)
        }
      };

      console.log($scope)
    }
  }
})


// inherited scope.

// Address inherits all the objects on Card $scope.
// Address doesn't have a user object, but it can go up the inheritance chain
// and access user on the Card scope.

// Address and UserInfoCard have different scope
// if both Address and Card have object of same name, Address overwrites Card variable.
// Address collapsed overwrites Card collapsed because of js inheritance.

angular.module('app').directive('plAddress', function(){
  return {
    restrict: 'E',
    templateUrl: 'scripts/user-info-card/address.html',
    scope: true,
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

