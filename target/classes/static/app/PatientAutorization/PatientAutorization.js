'use strict';

angular.module('myApp.PatientAutorization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientAutorization', {
    templateUrl: 'PatientAutorization/PatientAutorization.html',
    controller: 'PatientAutorizationCtrl'
  });
}])

.controller('PatientAutorizationCtrl', ['persona', '$rootScope', 'newPersona', '$scope', '$http', '$location', function(persona, $rootScope, newPersona, $scope, $http, $location) {
    $scope.continueRegister=function(){
        newPersona.save($rootScope.persona, function(){
        $rootScope.idPersona=$rootScope.persona.id;
        $rootScope.authenticated = true;
        persona.get({personaId:""+$rootScope.idPersona})
        .$promise.then(
                //success
                function( value ){
                    alert("Registro Completado de "+ $rootScope.persona.name);
                    $location.path("Login");
                },
                //error
                function( error ){
                    alert("El Identificador no se encuentra registrado");
                }
        );
    });
    }

}]);
