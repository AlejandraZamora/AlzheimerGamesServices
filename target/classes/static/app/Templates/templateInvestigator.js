'use strict';

angular.module('myApp.templateInvestigator', ['ngRoute'])


.controller('templateInvestigatorCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
	
	  $scope.continuePerfil=function(){
            $location.path("InvestigatorProfile");
      };
      $scope.continueLogoutI=function(){
            $rootScope.logout();
      };
      $scope.continueHomeI=function(){
            $location.path("HomeInvestigator");
      };
	$scope.continueRegistersIAvancesJuegosImagenes=function(){
	        $location.path("RegistersInvestigatorViewAvancesJuegosImagenes");
	  };
	$scope.continueRegistersIAvancesJuegosCalculos=function(){
	        $location.path("RegistersInvestigatorViewAvancesJuegosCalculos");
	  };
}]);
