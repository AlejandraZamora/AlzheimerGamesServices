'use strict';

angular.module('myApp.UpdatePersona', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdatePersona', {
    templateUrl: 'UpdatePersona/UpdatePersona.html',
    controller: 'UpdatePersonaCtrl'
  });
}])

.controller('UpdatePersonaCtrl', ['$rootScope', '$scope','persona', 'personas','$http','$resource', '$location', function ($rootScope, $scope, persona, personas, $http, $resource, $location) {
		$scope.back=function(){
		    persona.get({personaId:""+$rootScope.idPersona})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personaA=value;
                        if($scope.personaA.role==("Paciente")){
                            $location.path("HomePatient");
                        }else if($scope.personaA.role==("Doctor")){
                            $location.path("HomeDoctor");
                        }else if($scope.personaA.role==("Investigador")){
                            $location.path("HomeInvestigator");
                        }
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
		};
		$scope.name=null;
		$scope.password=null;
		$scope.edad=null;
        $rootScope.nameP=null;

        $scope.update= function(){
            persona.get({personaId:""+$rootScope.idPersona})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.personaT=value;
if($scope.name!=null&&$scope.name!=''){
	$scope.personaT.name=$scope.name;
}
if($scope.password!=null&&$scope.password!=''){
	$scope.personaT.password=$scope.password;
}
if($scope.edad!=null&&$scope.edad!=''){
	$scope.personaT.edad=$scope.edad;
}
                                personas.update($scope.personaT)
                                .$promise.then(
                                    //success
                                    function(value){
                                        console.log("Registro Exitoso");
                                        alert("Registro Exitoso");
            							if($scope.personaT.role==("Paciente")){
                                            $location.path("HomePatient");
                                        }else if($scope.personaT.role==("Doctor")){
                                            $location.path("HomeDoctor");
                                        }else if($scope.personaT.role==("Investigador")){
                                            $location.path("HomeInvestigator");
                                        }
                                    },
                                    //error
                                    function( error ){
                                        console.log("El paciente no se pudo actualizar");
                                        alert("No se puedo registrar");
                                    }

                                );
                            },
                            //error
                            function( error ){
                                alert("El Identificador no se encuentra registrado");
                            }
                    );


        };

}]);
