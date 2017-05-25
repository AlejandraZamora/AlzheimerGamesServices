'use strict';

angular.module('myApp.templatePatient', ['ngRoute'])

.controller('templatePatientCtrl', ['$rootScope', '$scope', 'persona', '$location', function ($rootScope, $scope, persona, $location) {

      $scope.continuePerfil=function(){
            $location.path("PatientProfile");
      };
      $scope.continueLogout=function(){
            $rootScope.logout();
      };
      $scope.continueHome=function(){
            $location.path("HomePatient");
      };
      
      $scope.continueCommentsDiagnosticos=function(){
      	$location.path("CommentsViewDiagnosticos");
      };
      $scope.continueCRegisterAvancesJuegosImagenes=function(){
            $location.path("ControlRegisterAvancesJuegosImagenes");
      };
      $scope.continueCViewAvancesJuegosImagenes=function(){
            $location.path("ControlViewAvancesJuegosImagenes");
      };
      $scope.continueCRegisterAvancesJuegosCalculos=function(){
            $location.path("ControlRegisterAvancesJuegosCalculos");
      };
      $scope.continueCViewAvancesJuegosCalculos=function(){
            $location.path("ControlViewAvancesJuegosCalculos");
      };
}]);
