angular.module('carTrip')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
    'use strict';

    //routing
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'src/app/view/login/login.html',
        controller: 'loginController',
        controllerAs: 'loginControllerVm'
      });

    //default page
    $urlRouterProvider.otherwise('/', {
      templateUrl: '/index.html'
    });

  });