'use strict';

angular.module('myApp.ControlViewAvancesJuegosCalculos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlViewAvancesJuegosCalculos', {
    templateUrl: 'ControlViewAvancesJuegosCalculos/ControlViewAvancesJuegosCalculos.html',
    controller: 'ControlViewAvancesJuegosCalculosCtrl'
  });
}])

.controller('ControlViewAvancesJuegosCalculosCtrl', ['$rootScope', '$scope', 'persona', function ($rootScope, $scope, persona) {
    persona.get({personaId:""+$rootScope.idPersona})
    .$promise.then(
            //success
            function( value ){
                $scope.persona=value;
                $scope.diagnostics=$scope.persona.avancesJuegosCalculos;
$scope.tiempoSegundos=[];
$scope.numeroPreguntasIntentos=[];
$scope.numeroPreguntasAciertos=[];
$scope.porcentajeSumasResueltas=[];
$scope.porcentajeRestasResueltas=[];
$scope.porcentajeMultiplicacionesResueltas=[];
$scope.porcentajeDivisionesResueltas=[];
$scope.nivelMaximoAlcanzado=[];
				$scope.diagnosticsNew=[];
                $scope.labels=[];
                $scope.series = ['Datos de Control'];
                $scope.diagnostics.orderByDate("date", -1);
				$scope.currentDate=new Date();
                for(var n=0; n<$scope.diagnostics.length; n++){
                    var dd=$scope.diagnostics[n];
                    var datee=new Date(dd.date);
                    if(datee >= ($scope.currentDate.setDate($scope.currentDate.getDate()-14))){
                    	$scope.diagnosticsNew.push(dd);
$scope.tiempoSegundos.push(dd.tiempoSegundos);
$scope.numeroPreguntasIntentos.push(dd.numeroPreguntasIntentos);
$scope.numeroPreguntasAciertos.push(dd.numeroPreguntasAciertos);
$scope.porcentajeSumasResueltas.push(dd.porcentajeSumasResueltas);
$scope.porcentajeRestasResueltas.push(dd.porcentajeRestasResueltas);
$scope.porcentajeMultiplicacionesResueltas.push(dd.porcentajeMultiplicacionesResueltas);
$scope.porcentajeDivisionesResueltas.push(dd.porcentajeDivisionesResueltas);
$scope.nivelMaximoAlcanzado.push(dd.nivelMaximoAlcanzado);
	                    var datee=new Date(dd.date);
	                    var dia = datee.getDate();
	                    var mes = parseInt(datee.getMonth()) + 1;
	                    var year = datee.getFullYear();
	                    var dated=dia+"/"+mes+"/"+year;
	                    $scope.labels.push(dated);
                    }else{
						break;
					}
                }
            },
            //error
            function( error ){
                alert("Error");
            }
    );
	Array.prototype.orderByDate=function(p,so){
	  if(so!=-1&&so!=1)so=1;
	  this.sort(function(a,b){
	    var da=new Date(a[p]),db=new Date(b[p]);
	    return(da-db)*so;
	  })
	};
}]);
