'use strict';

angular.module('myApp.RegisterDoctorViewAvancesJuegosImagenes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorViewAvancesJuegosImagenes', {
    templateUrl: 'RegisterDoctorViewAvancesJuegosImagenes/RegisterDoctorViewAvancesJuegosImagenes.html',
    controller: 'RegisterDoctorViewAvancesJuegosImagenesCtrl'
  });
}])

.controller('RegisterDoctorViewAvancesJuegosImagenesCtrl', ['$rootScope', '$scope', 'persona', 'personas', function ($rootScope, $scope, persona, personas) {

    $scope.foundRD=$rootScope.FindID;
    persona.get({personaId:""+$rootScope.patientId})
    .$promise.then(
            //success
            function( value ){
                $scope.principal=value;
                $scope.diagnostics=$scope.principal.avancesJuegosImagenes;
$scope.tiempoSegundos=[];
$scope.numeroPreguntasIntentos=[];
$scope.numeroPreguntasAciertos=[];
				$scope.diagnosticsNew=[];
                $scope.labels=[];
                $scope.series = ['Datos de Control AvancesJuegosImagenes'];
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
                console.log("Error");
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
