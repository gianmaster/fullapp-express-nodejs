var angular = require('angular');
var modulo = angular.module('app', []);

modulo.controller('PruebaController', ['$scope', function($scope){
  $scope.name = 'Giancarlos cercado';
}]);
