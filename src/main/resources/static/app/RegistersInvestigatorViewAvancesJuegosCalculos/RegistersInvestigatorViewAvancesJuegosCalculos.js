'use strict';

angular.module('myApp.RegistersInvestigatorViewAvancesJuegosCalculos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewAvancesJuegosCalculos', {
    templateUrl: 'RegistersInvestigatorViewAvancesJuegosCalculos/RegistersInvestigatorViewAvancesJuegosCalculos.html',
    controller: 'RegistersInvestigatorViewAvancesJuegosCalculosCtrl'
  });
}])

.controller('RegistersInvestigatorViewAvancesJuegosCalculosCtrl', ['persona', 'personas', '$rootScope', '$scope', function (persona, personas, $rootScope, $scope) {
     personas.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.personasList=value;
$scope.tiempoSegundos=[];
//1
$scope.numeroPreguntasIntentos=[];
//2
$scope.numeroPreguntasAciertos=[];
//3
$scope.porcentajeSumasResueltas=[];
//4
$scope.porcentajeRestasResueltas=[];
//5
$scope.porcentajeMultiplicacionesResueltas=[];
//6
$scope.porcentajeDivisionesResueltas=[];
//7
$scope.nivelMaximoAlcanzado=[];
//8
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio AvancesJuegosCalculos'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.personasList.length; i++) {
                        if($scope.personasList[i].avancesJuegosCalculos.length >= 1){
                            $scope.personaAct=$scope.personasList[i];
                            $scope.labels.push($scope.personaAct.id);
var tiempoSegundosInitial=0;
var numeroPreguntasIntentosInitial=0;
var numeroPreguntasAciertosInitial=0;
var porcentajeSumasResueltasInitial=0;
var porcentajeRestasResueltasInitial=0;
var porcentajeMultiplicacionesResueltasInitial=0;
var porcentajeDivisionesResueltasInitial=0;
var nivelMaximoAlcanzadoInitial=0;
                            for(var n=0; n<$scope.personaAct.avancesJuegosCalculos.length; n++){
                                var dd=$scope.personaAct.avancesJuegosCalculos[n];
tiempoSegundosInitial=tiempoSegundosInitial+dd.tiempoSegundos;
numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+dd.numeroPreguntasIntentos;
numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+dd.numeroPreguntasAciertos;
porcentajeSumasResueltasInitial=porcentajeSumasResueltasInitial+dd.porcentajeSumasResueltas;
porcentajeRestasResueltasInitial=porcentajeRestasResueltasInitial+dd.porcentajeRestasResueltas;
porcentajeMultiplicacionesResueltasInitial=porcentajeMultiplicacionesResueltasInitial+dd.porcentajeMultiplicacionesResueltas;
porcentajeDivisionesResueltasInitial=porcentajeDivisionesResueltasInitial+dd.porcentajeDivisionesResueltas;
nivelMaximoAlcanzadoInitial=nivelMaximoAlcanzadoInitial+dd.nivelMaximoAlcanzado;
$scope.principalAndDiagnostic.push([$scope.personaAct.id, $scope.personaAct.name
, dd.tiempoSegundos
, dd.numeroPreguntasIntentos
, dd.numeroPreguntasAciertos
, dd.porcentajeSumasResueltas
, dd.porcentajeRestasResueltas
, dd.porcentajeMultiplicacionesResueltas
, dd.porcentajeDivisionesResueltas
, dd.nivelMaximoAlcanzado
, dd.date
]);
                            }
$scope.tiempoSegundos.push(tiempoSegundosInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.numeroPreguntasIntentos.push(numeroPreguntasIntentosInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.numeroPreguntasAciertos.push(numeroPreguntasAciertosInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.porcentajeSumasResueltas.push(porcentajeSumasResueltasInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.porcentajeRestasResueltas.push(porcentajeRestasResueltasInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.porcentajeMultiplicacionesResueltas.push(porcentajeMultiplicacionesResueltasInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.porcentajeDivisionesResueltas.push(porcentajeDivisionesResueltasInitial/$scope.personaAct.avancesJuegosCalculos.length);
$scope.nivelMaximoAlcanzado.push(nivelMaximoAlcanzadoInitial/$scope.personaAct.avancesJuegosCalculos.length);
                            
                            $scope.diagnostics.push($scope.personasList[i].avancesJuegosCalculos[0]);
                        }
                    }
tiempoSegundos
tiempoSegundosInitial=0;
numeroPreguntasIntentos
numeroPreguntasIntentosInitial=0;
numeroPreguntasAciertos
numeroPreguntasAciertosInitial=0;
porcentajeSumasResueltas
porcentajeSumasResueltasInitial=0;
porcentajeRestasResueltas
porcentajeRestasResueltasInitial=0;
porcentajeMultiplicacionesResueltas
porcentajeMultiplicacionesResueltasInitial=0;
porcentajeDivisionesResueltas
porcentajeDivisionesResueltasInitial=0;
nivelMaximoAlcanzado
nivelMaximoAlcanzadoInitial=0;
                    for(var j = 0; j < $scope.nivelMaximoAlcanzado.length; j++) {
tiempoSegundosInitial=tiempoSegundosInitial+$scope.tiempoSegundos[j];
numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+$scope.numeroPreguntasIntentos[j];
numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+$scope.numeroPreguntasAciertos[j];
porcentajeSumasResueltasInitial=porcentajeSumasResueltasInitial+$scope.porcentajeSumasResueltas[j];
porcentajeRestasResueltasInitial=porcentajeRestasResueltasInitial+$scope.porcentajeRestasResueltas[j];
porcentajeMultiplicacionesResueltasInitial=porcentajeMultiplicacionesResueltasInitial+$scope.porcentajeMultiplicacionesResueltas[j];
porcentajeDivisionesResueltasInitial=porcentajeDivisionesResueltasInitial+$scope.porcentajeDivisionesResueltas[j];
nivelMaximoAlcanzadoInitial=nivelMaximoAlcanzadoInitial+$scope.nivelMaximoAlcanzado[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(tiempoSegundosInitial/$scope.tiempoSegundos.length);
$scope.todoData.push(numeroPreguntasIntentosInitial/$scope.numeroPreguntasIntentos.length);
$scope.todoData.push(numeroPreguntasAciertosInitial/$scope.numeroPreguntasAciertos.length);
$scope.todoData.push(porcentajeSumasResueltasInitial/$scope.porcentajeSumasResueltas.length);
$scope.todoData.push(porcentajeRestasResueltasInitial/$scope.porcentajeRestasResueltas.length);
$scope.todoData.push(porcentajeMultiplicacionesResueltasInitial/$scope.porcentajeMultiplicacionesResueltas.length);
$scope.todoData.push(porcentajeDivisionesResueltasInitial/$scope.porcentajeDivisionesResueltas.length);
$scope.todoData.push(nivelMaximoAlcanzadoInitial/$scope.nivelMaximoAlcanzado.length);
					$scope.todoLabels=[
'TiempoSegundos'
,
//7
'NumeroPreguntasIntentos'
,
//6
'NumeroPreguntasAciertos'
,
//5
'PorcentajeSumasResueltas'
,
//4
'PorcentajeRestasResueltas'
,
//3
'PorcentajeMultiplicacionesResueltas'
,
//2
'PorcentajeDivisionesResueltas'
,
//1
'NivelMaximoAlcanzado'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
