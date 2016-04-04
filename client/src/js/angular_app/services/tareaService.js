//test de prueba del servicio

module.exports = function(modulo){

  modulo.factory('testService', ['$window', function(win){
    var mensajes = [];
    return function(msj){
      mensajes.push(msj);
      if(mensajes.length == 3){
        win.alert(mensajes.join('\n'));
        mensajes = [];
      }
    };
  }]);

};
