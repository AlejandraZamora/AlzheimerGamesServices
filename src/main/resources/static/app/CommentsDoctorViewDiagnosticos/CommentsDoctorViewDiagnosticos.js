'use strict';

angular.module('myApp.CommentsDoctorViewDiagnosticos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsDoctorViewDiagnosticos', {
    templateUrl: 'CommentsDoctorViewDiagnosticos/CommentsDoctorViewDiagnosticos.html',
    controller: 'CommentsDoctorViewDiagnosticosCtrl'
  });
}])

.controller('CommentsDoctorViewDiagnosticosCtrl', ['$rootScope', '$scope', 'persona', function ($rootScope, $scope, persona) {
     $scope.foundCD=$rootScope.FindID;
     persona.get({personaId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.personaC=value;
                            $scope.comments=$scope.personaC.diagnosticos;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.commentsTitle="No tiene ningun comentario";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            console.log("Identificador no se encuentra registrado");
                        }
                );

}]);
