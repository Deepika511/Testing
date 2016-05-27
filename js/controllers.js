var appControllers = angular.module('appControllers', []);

appControllers.controller("aboutCtrl", ['$scope', '$http',
    function ($scope, $http) {
    $http.get('json/about.json')
       .then(function(res){
          $scope.covers = res.data;
          /*console.log($scope.covers);*/
        });
}]);


/*appControllers.controller('listCtrl', ['$scope', '$http',
    function ($scope, $http) {
    $http.get('json/books.json')
        .then(function(res){
          $scope.products = res.data;
        });
  }]);*/


  