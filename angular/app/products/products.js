'use strict';

angular.module('myApp.products', ['ngRoute','myApp.factories'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/list.html',
    controller: 'ProductsCtrl'
  }).when('/products/:id',{
    templateUrl: 'products/view.html',
    controller:'ProductViewCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope', '$http','productsFactory', function($scope,$http, productsFactory) {
  $scope.products = [];
  productsFactory.getProducts().then(
    function(response){
      $scope.products = response.data.products;
    },function(error){
      console.error(err);
    }
  );
}])

.controller('ProductViewCtrl', ['$scope', '$http','$routeParams','productsFactory', function($scope, $http, $routeParams, productsFactory){

  productsFactory.getProduct($routeParams.id).then(function(response){
    $scope.product=response.data.product;
  }, function(error){
      console.error(err);
    }
  );
  
}]);