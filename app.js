(function() {
  'use strict'
  angular
  .module('tripods', ['ui.router'])
  .config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider'];

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'kennel/kennel.html',
        controller: 'KennelController',
        controllerAs: 'KennelCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
    }
})();
