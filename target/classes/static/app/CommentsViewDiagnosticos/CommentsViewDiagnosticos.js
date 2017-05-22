'use strict';

angular.module('myApp.CommentsViewDiagnosticos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsViewDiagnosticos', {
    templateUrl: 'CommentsViewDiagnosticos/CommentsViewDiagnosticos.html',
    controller: 'CommentsViewDiagnosticosCtrl'
  });
}])

.controller('CommentsViewDiagnosticosCtrl', ['$rootScope', '$scope', 'persona', function ($rootScope, $scope, persona) {

     persona.get({personaId:""+$rootScope.idPersona})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.personaC=value;
                            $scope.comments=$scope.personaC.diagnosticos;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.commentsTitle="No tienes ningun comentario";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            alert("Identificador no se encuentra registrado");
                        }
                );

}]);
