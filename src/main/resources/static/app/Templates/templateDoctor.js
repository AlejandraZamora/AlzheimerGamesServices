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
      $scope.continueRegistersPAvancesJuegosImagenes=function(){
      		$location.path("RegisterDoctorViewAvancesJuegosImagenes");
      };
      $scope.continueRegistersPAvancesJuegosCalculos=function(){
      		$location.path("RegisterDoctorViewAvancesJuegosCalculos");
      };
$scope.continueCommentRegisterDiagnosticos=function(){
        $location.path("CommentRegisterDiagnosticos");
  };
  $scope.continueCommentViewDiagnosticos=function(){
        $location.path("CommentsDoctorViewDiagnosticos");
  };
}]);
