'use strict';

angular.module('myApp.others', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'others/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$http',function($scope,$http) {
    $scope.showSubmitMessage = false;

    $scope.submitForm = function(contactForm){
      if (contactForm.$valid === true){
        let contact = {
          first_name: contactForm.first_name.$modelValue,
          last_name: contactForm.last_name.$modelValue,
          message: contactForm.message.$modelValue
        };
        console.log(contact);
        $http.post(
          'http://localhost:3000/api/contact', 
          contact,
        ).success(function(response){
          $scope.submitSuccess = response.success;
          $scope.showSubmitMessage = true;
          $scope.submitMessage = response.message;
        })
        .error(function(err){
          $scope.submitSuccess = false;
          $scope.showSubmitMessage = true;
          $scope.submitMessage = "There has been an error submitting the form. Please try again.";
        });
      } else {
        $scope.showSubmitMessage = true;
        $scope.submitSuccess = false;
        $scope.submitMessage = "Please verify all fields are filled in and try again!";
      }
    }

    $scope.submittedSuccessfully = function(show, success){
      if (show === false){
        return ' hidden ';
      } else {
        if (success === true){
          return 'alert-success';
        }
        return 'alert-danger';
      }
    }
}]);