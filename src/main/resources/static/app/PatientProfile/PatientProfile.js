'use strict';

angular.module('myApp.PatientProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientProfile', {
    templateUrl: 'PatientProfile/PatientProfile.html',
    controller: 'PatientProfileCtrl'
  });
}])

.controller('PatientProfileCtrl', ['$rootScope', '$scope', 'persona', '$location', function ($rootScope, $scope, persona,$location) {

    persona.get({personaId:""+$rootScope.idPersona})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.persona=value;
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );
    $scope.continueUP=function(){
        $location.path("UpdatePersona");
    };

}]);
