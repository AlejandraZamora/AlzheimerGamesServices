'use strict';

angular.module('myApp.RegistersInvestigatorViewAvancesJuegos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewAvancesJuegos', {
    templateUrl: 'RegistersInvestigatorViewAvancesJuegos/RegistersInvestigatorViewAvancesJuegos.html',
    controller: 'RegistersInvestigatorViewAvancesJuegosCtrl'
  });
}])

.controller('RegistersInvestigatorViewAvancesJuegosCtrl', ['persona', 'personas', '$rootScope', '$scope', function (persona, personas, $rootScope, $scope) {
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
                    $scope.nivelMaximoAlcanzado=[];
                    //4
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio AvancesJuegos'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.personasList.length; i++) {
                        if($scope.personasList[i].avancesJuegos.length >= 1){
                            $scope.personaAct=$scope.personasList[i];
                            $scope.labels.push(i);
                            var tiempoSegundosInitial=0;
                            var numeroPreguntasIntentosInitial=0;
                            var numeroPreguntasAciertosInitial=0;
                            var nivelMaximoAlcanzadoInitial=0;
                            for(var n=0; n<$scope.personaAct.avancesJuegos.length; n++){
                                var dd=$scope.personaAct.avancesJuegos[n];
                                tiempoSegundosInitial=tiempoSegundosInitial+dd.tiempoSegundos;
                                numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+dd.numeroPreguntasIntentos;
                                numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+dd.numeroPreguntasAciertos;
                                nivelMaximoAlcanzadoInitial=nivelMaximoAlcanzadoInitial+dd.nivelMaximoAlcanzado;
                                $scope.principalAndDiagnostic.push([dd.nombreJuego
                                , dd.tiempoSegundos
                                , dd.numeroPreguntasIntentos
                                , dd.numeroPreguntasAciertos
                                , dd.nivelMaximoAlcanzado
                                , dd.date
                                ]);
                            }
                            $scope.tiempoSegundos.push(tiempoSegundosInitial/$scope.personaAct.avancesJuegos.length);
                            $scope.numeroPreguntasIntentos.push(numeroPreguntasIntentosInitial/$scope.personaAct.avancesJuegos.length);
                            $scope.numeroPreguntasAciertos.push(numeroPreguntasAciertosInitial/$scope.personaAct.avancesJuegos.length);
                            $scope.nivelMaximoAlcanzado.push(nivelMaximoAlcanzadoInitial/$scope.personaAct.avancesJuegos.length);
                            
                            $scope.diagnostics.push($scope.personasList[i].avancesJuegos[0]);
                        }
                    }
                    tiempoSegundos
                    tiempoSegundosInitial=0;
                    numeroPreguntasIntentos
                    numeroPreguntasIntentosInitial=0;
                    numeroPreguntasAciertos
                    numeroPreguntasAciertosInitial=0;
                    nivelMaximoAlcanzado
                    nivelMaximoAlcanzadoInitial=0;
                    for(var j = 0; j < $scope.nivelMaximoAlcanzado.length; j++) {
                        tiempoSegundosInitial=tiempoSegundosInitial+$scope.tiempoSegundos[j];
                        numeroPreguntasIntentosInitial=numeroPreguntasIntentosInitial+$scope.numeroPreguntasIntentos[j];
                        numeroPreguntasAciertosInitial=numeroPreguntasAciertosInitial+$scope.numeroPreguntasAciertos[j];
                        nivelMaximoAlcanzadoInitial=nivelMaximoAlcanzadoInitial+$scope.nivelMaximoAlcanzado[j];
                    }
                    $scope.todoData=[];
                    $scope.todoData.push(tiempoSegundosInitial/$scope.tiempoSegundos.length);
                    $scope.todoData.push(numeroPreguntasIntentosInitial/$scope.numeroPreguntasIntentos.length);
                    $scope.todoData.push(numeroPreguntasAciertosInitial/$scope.numeroPreguntasAciertos.length);
                    $scope.todoData.push(nivelMaximoAlcanzadoInitial/$scope.nivelMaximoAlcanzado.length);
					$scope.todoLabels=[
                        'TiempoSegundos'
                        ,
                        //3
                        'NumeroPreguntasIntentos'
                        ,
                        //2
                        'NumeroPreguntasAciertos'
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
