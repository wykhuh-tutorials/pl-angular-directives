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
    }
  }
})


angular.module('app').directive('userInfoCard', function(){
  return {
    template: 'Name: {{user.name}}<br>Address:<br>{{user.address.street}}<br>{{user.address.city}}<br>{{user.address.planet}}',
    restrict: 'E'
  }
})
