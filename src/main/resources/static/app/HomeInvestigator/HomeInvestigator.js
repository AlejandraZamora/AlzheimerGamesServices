'use strict';

angular.module('myApp.HomeInvestigator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeInvestigator', {
    templateUrl: 'HomeInvestigator/HomeInvestigator.html',
    controller: 'HomeInvestigatorCtrl'
  });
}])

.controller('HomeInvestigatorCtrl', ['persona', '$rootScope', '$scope', function (persona, $rootScope, $scope) {
    persona.get({personaId:""+$rootScope.idPersona})
    .$promise.then(
            //success
            function( value ){
                $scope.personaH=value;
            },
            //error
            function( error ){
                alert("El Identificador no se encuentra registrado");
            }
    );
}]);
