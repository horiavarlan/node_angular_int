'use strict';

angular.module('myApp.factories',[]).factory('productsFactory',['$http', function($http){
    let productsFactory = {};
    let urlBase = 'http://localhost:3000/api/products';

    productsFactory.getProducts = function(){
        return $http.get(urlBase).success(function(response){
            return response.products;
        }).error(function(err){
            console.error(err);
        });
        
    }

    productsFactory.getProduct = function(productId){
        return $http.get(urlBase+"/"+productId).success(function(response){
            return response.product;
        }).error(function(err){
            console.error(err);
        });
    }
    return productsFactory;
}]);