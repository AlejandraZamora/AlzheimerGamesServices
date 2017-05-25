'use strict';

angular.module('myApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Register', {
    templateUrl: 'Register/Register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['persona', 'newPersona', '$rootScope', '$scope', 'personas','$http','$resource', '$location', function (persona, newPersona, $rootScope, $scope, personas, $http, $resource, $location) {
        $scope.id=null;
        $scope.name=null;
$scope.password=null;
$scope.role=null;
$scope.edad=null;
        $rootScope.nameP=null;
        $scope.save= function(){
            $rootScope.idPersona=$scope.id;
            $rootScope.persona={"id":$scope.id,"name":$scope.name
			, "password":$scope.password
			, "role":$scope.role
			, "edad":$scope.edad
			, "avancesJuegosImagenes":[]
			, "avancesJuegosCalculos":[]
			, "diagnosticos":[]
			};
			
			if($rootScope.persona.role=="Paciente"){
                $location.path("PatientAutorization");
            }else if($rootScope.persona.role=="Doctor"||$rootScope.persona.role=="Investigador"){
            newPersona.save($rootScope.persona,function(){
                console.info("Persona saved   "+ $rootScope.persona.name);
                $rootScope.idPersona=$rootScope.persona.id;
                $rootScope.authenticated = true;
                persona.get({personaId:""+$rootScope.idPersona})
                .$promise.then(
                        //success
                        function( value ){
                        	alert("Registro Completado de "+ $rootScope.persona.name);
                            $location.path("Login");
                        },
                        //error
                        function( error ){
                            alert("El Identificador no se encuentra registrado");
                        }
                );
            });
            };

        };
		$scope.selectmenu=document.getElementById("roleS");
        $scope.selectmenu.onchange=function(){
            $scope.role = this.options[this.selectedIndex].text;
        }
}]);
