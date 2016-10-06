angular.module('app6', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'home/home.html'
      })
      .state('signup', {
        url: '/signup',
        controller: 'signupCtrl',
        templateUrl: 'signup/signup.html'
      })
      .state('details', {
        url: '/details/:id',
        controller: 'detailsCtrl',
        templateUrl: 'details/details.html'
  })
})
