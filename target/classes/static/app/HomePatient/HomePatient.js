'use strict';

angular.module('myApp.HomePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomePatient', {
    templateUrl: 'HomePatient/HomePatient.html',
    controller: 'HomePatientCtrl'
  });
}])

.controller('HomePatientCtrl', ['$rootScope', '$scope', 'persona', '$location', function ($rootScope, $scope, persona,$location) {

      persona.get({personaId:""+$rootScope.idPersona})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personaH=value;

						$scope.diagnosticsHAvancesJuegos=$scope.personaH.avancesJuegos;
                            $scope.tiempoSegundosAvancesJuegos=[];
                            $scope.numeroPreguntasIntentosAvancesJuegos=[];
                            $scope.numeroPreguntasAciertosAvancesJuegos=[];
                            $scope.nivelMaximoAlcanzadoAvancesJuegos=[];
						$scope.labelsAvancesJuegos=[];
						$scope.seriesAvancesJuegos = ['Datos de Control AvancesJuegos'];
						for(var n=0; n<$scope.diagnosticsHAvancesJuegos.length; n++){
							var dd=$scope.diagnosticsHAvancesJuegos[n];
	                            $scope.tiempoSegundosAvancesJuegos.push(dd.tiempoSegundos);
	                            $scope.numeroPreguntasIntentosAvancesJuegos.push(dd.numeroPreguntasIntentos);
	                            $scope.numeroPreguntasAciertosAvancesJuegos.push(dd.numeroPreguntasAciertos);
	                            $scope.nivelMaximoAlcanzadoAvancesJuegos.push(dd.nivelMaximoAlcanzado);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsAvancesJuegos.push(dated);
						}
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
}]);
