'use strict';

angular.module('myApp.ControlRegisterAvancesJuegosImagenes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterAvancesJuegosImagenes', {
    templateUrl: 'ControlRegisterAvancesJuegosImagenes/ControlRegisterAvancesJuegosImagenes.html',
    controller: 'ControlRegisterAvancesJuegosImagenesCtrl'
  });
}])

.controller('ControlRegisterAvancesJuegosImagenesCtrl', ['$rootScope', '$scope', 'personas','persona','$http','$resource', '$location', function ($rootScope, $scope, personas,persona, $http, $resource, $location) {
		$scope.date=null;
		$scope.tiempoSegundos=null;
		$scope.numeroPreguntasIntentos=null;
		$scope.numeroPreguntasAciertos=null;

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "tiempoSegundos":$scope.tiempoSegundos
, "numeroPreguntasIntentos":$scope.numeroPreguntasIntentos
, "numeroPreguntasAciertos":$scope.numeroPreguntasAciertos
            };
            persona.get({personaId:""+$rootScope.idPersona})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personaT=value;
                        $scope.personaT.avancesJuegosImagenes.push($scope.diagnostic);
                        personas.update($scope.personaT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.personaT.avancesJuegosImagenes);
                                $location.path("HomePatient");
                            },
                            //error
                            function( error ){
                                console.log("El persona no se pudo actualizar");
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
