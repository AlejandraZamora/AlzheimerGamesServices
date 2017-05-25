'use strict';

angular.module('myApp.RegistersInvestigatorViewAvancesJuegosImagenes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewAvancesJuegosImagenes', {
    templateUrl: 'RegistersInvestigatorViewAvancesJuegosImagenes/RegistersInvestigatorViewAvancesJuegosImagenes.html',
    controller: 'RegistersInvestigatorViewAvancesJuegosImagenesCtrl'
  });
}])

.controller('RegistersInvestigatorViewAvancesJuegosImagenesCtrl', ['persona', 'personas', '$rootScope', '$scope', function (persona, personas, $rootScope, $scope) {
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
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio AvancesJuegosImagenes'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.personasList.length; i++) {
                        if($scope.personasList[i].avancesJuegosImagenes.length >= 1){
                            $scope.personaAct=$scope.personasList[i];
                            $scope.labels.push($scope.personaAct.id);
var tiempoSegundosInitial=0;
var numeroPreguntasIntentosInitial=0;
var numeroPreguntasAciertosInitial=0;
                            for(var n=0; n<$scope.personaAct.avancesJuegosImagenes.length; n++){
                                var dd=$scope.personaAct.avancesJuegosImagenes[n];
tiempoSegundosInitial=tiempoSegundosInitial+dd.tiempoSegundos;
numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+dd.numeroPreguntasIntentos;
numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+dd.numeroPreguntasAciertos;
$scope.principalAndDiagnostic.push([$scope.personaAct.id, $scope.personaAct.name
, dd.tiempoSegundos
, dd.numeroPreguntasIntentos
, dd.numeroPreguntasAciertos
, dd.date
]);
                            }
$scope.tiempoSegundos.push(tiempoSegundosInitial/$scope.personaAct.avancesJuegosImagenes.length);
$scope.numeroPreguntasIntentos.push(numeroPreguntasIntentosInitial/$scope.personaAct.avancesJuegosImagenes.length);
$scope.numeroPreguntasAciertos.push(numeroPreguntasAciertosInitial/$scope.personaAct.avancesJuegosImagenes.length);
                            
                            $scope.diagnostics.push($scope.personasList[i].avancesJuegosImagenes[0]);
                        }
                    }
tiempoSegundos
tiempoSegundosInitial=0;
numeroPreguntasIntentos
numeroPreguntasIntentosInitial=0;
numeroPreguntasAciertos
numeroPreguntasAciertosInitial=0;
                    for(var j = 0; j < $scope.numeroPreguntasAciertos.length; j++) {
tiempoSegundosInitial=tiempoSegundosInitial+$scope.tiempoSegundos[j];
numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+$scope.numeroPreguntasIntentos[j];
numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+$scope.numeroPreguntasAciertos[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(tiempoSegundosInitial/$scope.tiempoSegundos.length);
$scope.todoData.push(numeroPreguntasIntentosInitial/$scope.numeroPreguntasIntentos.length);
$scope.todoData.push(numeroPreguntasAciertosInitial/$scope.numeroPreguntasAciertos.length);
					$scope.todoLabels=[
'TiempoSegundos'
,
//2
'NumeroPreguntasIntentos'
,
//1
'NumeroPreguntasAciertos'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
