'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.RegistersInvestigatorViewAvancesJuegos',
  'myApp.RegisterDoctorViewAvancesJuegos',
  'myApp.ControlRegisterAvancesJuegos',
  'myApp.ControlViewAvancesJuegos',
  'myApp.templateDoctor',
  'myApp.HomePatient',
  'myApp.UpdatePersona',
  'myApp.PatientProfile',
  'myApp.DoctorProfile',
  'myApp.InvestigatorProfile',
  'myApp.templateInvestigator',
  'myApp.templatePatient',
  'myApp.Login',
  'myApp.Register',
  'myApp.HomeInvestigator',
  'myApp.PatientAutorization',
  'myApp.HomeDoctor',
  'myApp.version',
  'services.factory',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
}]);

