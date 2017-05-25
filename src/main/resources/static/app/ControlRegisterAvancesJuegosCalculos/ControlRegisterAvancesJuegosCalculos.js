'use strict';

angular.module('myApp.ControlRegisterAvancesJuegosCalculos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterAvancesJuegosCalculos', {
    templateUrl: 'ControlRegisterAvancesJuegosCalculos/ControlRegisterAvancesJuegosCalculos.html',
    controller: 'ControlRegisterAvancesJuegosCalculosCtrl'
  });
}])

.controller('ControlRegisterAvancesJuegosCalculosCtrl', ['$rootScope', '$scope', 'personas','persona','$http','$resource', '$location', function ($rootScope, $scope, personas,persona, $http, $resource, $location) {
		$scope.date=null;
		$scope.tiempoSegundos=null;
		$scope.numeroPreguntasIntentos=null;
		$scope.numeroPreguntasAciertos=null;
		$scope.porcentajeSumasResueltas=null;
		$scope.porcentajeRestasResueltas=null;
		$scope.porcentajeMultiplicacionesResueltas=null;
		$scope.porcentajeDivisionesResueltas=null;
		$scope.nivelMaximoAlcanzado=null;

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "tiempoSegundos":$scope.tiempoSegundos
, "numeroPreguntasIntentos":$scope.numeroPreguntasIntentos
, "numeroPreguntasAciertos":$scope.numeroPreguntasAciertos
, "porcentajeSumasResueltas":$scope.porcentajeSumasResueltas
, "porcentajeRestasResueltas":$scope.porcentajeRestasResueltas
, "porcentajeMultiplicacionesResueltas":$scope.porcentajeMultiplicacionesResueltas
, "porcentajeDivisionesResueltas":$scope.porcentajeDivisionesResueltas
, "nivelMaximoAlcanzado":$scope.nivelMaximoAlcanzado
            };
            persona.get({personaId:""+$rootScope.idPersona})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personaT=value;
                        $scope.personaT.avancesJuegosCalculos.push($scope.diagnostic);
                        personas.update($scope.personaT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.personaT.avancesJuegosCalculos);
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
