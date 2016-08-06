(function() {
  'use strict'
  angular
  .module('tripods', [])

  .controller('MainController', ["$scope", function ($scope) {
    $scope.dogs = ['alphie', 'bowser', 'gerta', 'maxwell'];
  }]);
  
})();
