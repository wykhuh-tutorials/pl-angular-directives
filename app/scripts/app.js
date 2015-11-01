'use strict';

angular
  .module('app', []);

angular.module('app').controller('mainCtrl', function(){

})


angular.module('app').directive('userInfoCard', function(){
  return {
    template: 'User Info Card',
    restrict: 'E'
  }
})
