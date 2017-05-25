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
                        $scope.commentsHDiagnosticos=$scope.personaH.diagnosticos;
                        if (typeof $scope.commentsHDiagnosticos == "undefined"){
                            $scope.recomendacionesHDiagnosticos="No tienes ninguna recomendacion sobre Diagnosticos";
                            $scope.cantHDiagnosticos=undefined;
                        }
                        if(typeof $scope.commentsHDiagnosticos != "undefined"){
                            $scope.recomendacionesHDiagnosticos="Comentarios sobre Diagnosticos de tu medico!!";
                            $scope.cantHDiagnosticos=$scope.commentsHDiagnosticos.length;
                        }

						$scope.diagnosticsHAvancesJuegosImagenes=$scope.personaH.avancesJuegosImagenes;
                            $scope.tiempoSegundosAvancesJuegosImagenes=[];
                            $scope.numeroPreguntasIntentosAvancesJuegosImagenes=[];
                            $scope.numeroPreguntasAciertosAvancesJuegosImagenes=[];
						$scope.labelsAvancesJuegosImagenes=[];
						$scope.seriesAvancesJuegosImagenes = ['Datos de Control AvancesJuegosImagenes'];
						for(var n=0; n<$scope.diagnosticsHAvancesJuegosImagenes.length; n++){
							var dd=$scope.diagnosticsHAvancesJuegosImagenes[n];
	                            $scope.tiempoSegundosAvancesJuegosImagenes.push(dd.tiempoSegundos);
	                            $scope.numeroPreguntasIntentosAvancesJuegosImagenes.push(dd.numeroPreguntasIntentos);
	                            $scope.numeroPreguntasAciertosAvancesJuegosImagenes.push(dd.numeroPreguntasAciertos);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsAvancesJuegosImagenes.push(dated);
						}
						$scope.diagnosticsHAvancesJuegosCalculos=$scope.personaH.avancesJuegosCalculos;
                            $scope.tiempoSegundosAvancesJuegosCalculos=[];
                            $scope.numeroPreguntasIntentosAvancesJuegosCalculos=[];
                            $scope.numeroPreguntasAciertosAvancesJuegosCalculos=[];
                            $scope.porcentajeSumasResueltasAvancesJuegosCalculos=[];
                            $scope.porcentajeRestasResueltasAvancesJuegosCalculos=[];
                            $scope.porcentajeMultiplicacionesResueltasAvancesJuegosCalculos=[];
                            $scope.porcentajeDivisionesResueltasAvancesJuegosCalculos=[];
                            $scope.nivelMaximoAlcanzadoAvancesJuegosCalculos=[];
						$scope.labelsAvancesJuegosCalculos=[];
						$scope.seriesAvancesJuegosCalculos = ['Datos de Control AvancesJuegosCalculos'];
						for(var n=0; n<$scope.diagnosticsHAvancesJuegosCalculos.length; n++){
							var dd=$scope.diagnosticsHAvancesJuegosCalculos[n];
	                            $scope.tiempoSegundosAvancesJuegosCalculos.push(dd.tiempoSegundos);
	                            $scope.numeroPreguntasIntentosAvancesJuegosCalculos.push(dd.numeroPreguntasIntentos);
	                            $scope.numeroPreguntasAciertosAvancesJuegosCalculos.push(dd.numeroPreguntasAciertos);
	                            $scope.porcentajeSumasResueltasAvancesJuegosCalculos.push(dd.porcentajeSumasResueltas);
	                            $scope.porcentajeRestasResueltasAvancesJuegosCalculos.push(dd.porcentajeRestasResueltas);
	                            $scope.porcentajeMultiplicacionesResueltasAvancesJuegosCalculos.push(dd.porcentajeMultiplicacionesResueltas);
	                            $scope.porcentajeDivisionesResueltasAvancesJuegosCalculos.push(dd.porcentajeDivisionesResueltas);
	                            $scope.nivelMaximoAlcanzadoAvancesJuegosCalculos.push(dd.nivelMaximoAlcanzado);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsAvancesJuegosCalculos.push(dated);
						}
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
$scope.continueCSDiagnosticos=function(){
	          	$location.path("CommentsViewDiagnosticos");
	          	};
}]);
