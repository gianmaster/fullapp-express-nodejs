module.exports = function(modulo){

  modulo.controller('PruebaController', ['testService', function(testService){
    var vm = this;
    vm.name = 'Giancarlos cercado';
    vm.mensaje = "Estoy por default";
    vm.counter = 0;
    vm.incrementar = function(){
      vm.counter++;
    };

    vm.testAlert = function(mensaje){
      testService(mensaje);
    };


  }]);

};
