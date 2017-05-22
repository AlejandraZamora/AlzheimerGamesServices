'use strict';

angular.module('myApp.CommentRegisterDiagnosticos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentRegisterDiagnosticos', {
    templateUrl: 'CommentRegisterDiagnosticos/CommentRegisterDiagnosticos.html',
    controller: 'CommentRegisterDiagnosticosCtrl'
  });
}])

.controller('CommentRegisterDiagnosticosCtrl', ['$rootScope', '$scope', 'persona','personas','$http','$resource', '$location', function ($rootScope, $scope, persona, personas, $http, $resource, $location) {
        $scope.title=null;
$scope.descripcion=null;
        $scope.date=new Date();
        $scope.pId=$rootScope.patientId;
        $scope.foundC=$rootScope.FindID;
        $scope.saveComment= function(){
            $scope.comment={"date":$scope.date
            ,"descripcion":$scope.descripcion
             ,"title":$scope.title};
            persona.get({personaId:""+$scope.pId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.principal=value;
                        $scope.principal.diagnosticos.push($scope.comment);
                        personas.update($scope.principal)
                        .$promise.then(
                            //success
                            function(value){
                                $location.path("CommentsDoctorViewDiagnosticos");
                            },
                            //error
                            function( error ){
                                console.log("No se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("Identificador no se encuentra registrado");
                    }
            );
        };
}]);
