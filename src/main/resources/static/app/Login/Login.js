'use strict';

angular.module('myApp.Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Login', {
    templateUrl: 'Login/Login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$rootScope', '$scope', 'persona','personas','$http','$resource', '$location', function ($rootScope, $scope, persona, personas, $http, $resource, $location) {
        $scope.continueRegister=function(){
                $location.path("Register");
        }
        $rootScope.logout = function () {
          $http.post('/logout', {}).success(function () {
              $rootScope.authenticated = false;
              $location.path("/");
          }).error(function (data) {
              $rootScope.authenticated = false;
          });
        };
		var authenticate = function (credentials, callback) {
	        if(credentials){
	            $rootScope.idPersona=credentials.username;
	            $rootScope.pasPersona=credentials.password;
	        }
	         var headers = credentials ? {authorization: "Basic "
	                     + btoa("12dea96fec20593566ab75692c9949596833adc9" + ":" + "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8")
	         } : {};
	         $http.get('user', {headers: headers}).then(function (data) {
	             if (data.data.name) {
	                 $rootScope.authenticated = true;
	             } else {
	                 $rootScope.authenticated = false;
	             }
	             callback && callback();
	         }, function () {
	             $rootScope.authenticated = false;
	             callback && callback();
	         });
	
	     };
	     
	     authenticate();
	              $scope.credentials = {};
	              $scope.login = function () {
	                  authenticate($scope.credentials, function () {
	                      if ($rootScope.authenticated) {
	                         $scope.error = false;
	                         persona.get({personaId:""+$rootScope.idPersona})
	                         .$promise.then(
	                                 //success
	                                 function( value ){
	                                     $scope.personaH=value;
	                                     if(($scope.personaH.password==$rootScope.pasPersona)){
	                                         if($scope.personaH.role=="Paciente"){
	                                             $location.path("HomePatient");
	                                         }
	                                         if($scope.personaH.role=="Doctor"){
	                                             $location.path("HomeDoctor");
	                                         }
	                                         if($scope.personaH.role=="Investigador"){
	                                             $location.path("HomeInvestigator");
	                                         }
	                                     }else{
	                                         $rootScope.authenticated=false;
	                                         alert("El Identificador no se encuentra registrado");
	                                         $scope.error = true;
	                                         $rootScope.logout();
	                                     }
	                                 },
	                                 //error
	                                 function( error ){
	                                     $rootScope.authenticated=false;
	                                     alert("Autenticacion Fallida");
	                                     $scope.error = true;
	                                     $rootScope.logout();
	                                 }
	                         );
	                      } else {
	                          $scope.error = true;
	                          alert("Autenticaci�n Fallida");
	                          $rootScope.logout();
	                      }
	                  });
	         };
        
}]);
