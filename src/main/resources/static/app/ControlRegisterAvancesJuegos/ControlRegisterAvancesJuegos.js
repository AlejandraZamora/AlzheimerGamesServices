'use strict';

angular.module('myApp.ControlRegisterAvancesJuegos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterAvancesJuegos', {
    templateUrl: 'ControlRegisterAvancesJuegos/ControlRegisterAvancesJuegos.html',
    controller: 'ControlRegisterAvancesJuegosCtrl'
  });
}])

.controller('ControlRegisterAvancesJuegosCtrl', ['$rootScope', '$scope', 'personas','persona','$http','$resource', '$location', function ($rootScope, $scope, personas,persona, $http, $resource, $location) {
		$scope.date=null;
		$scope.nombreJuego=null;
		$scope.tiempoSegundos=null;
		$scope.numeroPreguntasIntentos=null;
		$scope.numeroPreguntasAciertos=null;
		$scope.nivelMaximoAlcanzado=null;

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "nombreJuego":$scope.nombreJuego
, "tiempoSegundos":$scope.tiempoSegundos
, "numeroPreguntasIntentos":$scope.numeroPreguntasIntentos
, "numeroPreguntasAciertos":$scope.numeroPreguntasAciertos
, "nivelMaximoAlcanzado":$scope.nivelMaximoAlcanzado
            };
            persona.get({personaId:""+$rootScope.idPersona})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personaT=value;
                        $scope.personaT.avancesJuegos.push($scope.diagnostic);
                        personas.update($scope.personaT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.personaT.avancesJuegos);
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
