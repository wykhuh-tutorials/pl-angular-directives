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
    template: 'Name: {{user.name}}<br><div ng-show="!!user.address">Address:<br>{{user.address.street}}<br>{{user.address.city}}<br>{{user.address.planet}}</div> <div>Friends: <div ng-repeat="friend in user.friends">{{friend}}</div></div>',
    restrict: 'E'
  }
})
