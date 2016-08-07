(function() {
  'use strict'

  angular
    .module('tripods')
    .controller('KennelController', KennelController);

    // KennelController.$inject = [];

    function KennelController() {
      var vm = this;
      vm.kennel = [];
    }
})
