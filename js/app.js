var app = angular.module('bookStore', [
  'ngRoute',
  'appControllers'
]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl:'partials/blank.html'
      })*/
      .when('/home', {
        controller:'aboutCtrl',
        templateUrl:'partials/home.html'
      })
      .when('/about', {
        controller:'listCtrl',
        templateUrl:'partials/about.html'
      })

      
      .otherwise({
        redirectTo: 'home'
      });

      $locationProvider.html5Mode(false);

  }]);
