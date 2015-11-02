'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  this.user1 = {
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

  this.user2 = {
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
    controllerAs: 'vm',
    // if you use constrollerAs with isolated scope, must have bindToController
    bindToController: true,
    controller: function($scope) {
      var vm = this;

      this.collapsed = false;

      this.knightMe = function (user) {
        user.rank = 'knight';
      }

      this.collapse = function() {
        vm.collapsed = !vm.collapsed;
      };
    }
  }
})



