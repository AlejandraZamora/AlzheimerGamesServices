'use strict';

angular.module('myApp.templateDoctor', ['ngRoute'])

.controller('templateDoctorCtrl', ['$rootScope', '$scope', 'persona', '$location', function ($rootScope, $scope, persona, $location) {
		
		$scope.continuePerfil=function(){
              $location.path("DoctorProfile");
         };
		
      $scope.continueLogoutD=function(){
            $rootScope.logout();
      };
      $scope.continueHomeD=function(){
            $location.path("HomeDoctor");
      };
      $scope.continueRegistersPAvancesJuegos=function(){
      		$location.path("RegisterDoctorViewAvancesJuegos");
      };
}]);
