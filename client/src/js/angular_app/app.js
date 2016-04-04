var angular = require('angular');
var modulo = angular.module('app', []);

modulo.controller('PruebaController', function(){
  var vm = this;
  vm.name = 'Giancarlos cercado';
  vm.counter = 0;
  vm.incrementar = function(){
    vm.counter++;
  }
});

module.exports = modulo;
