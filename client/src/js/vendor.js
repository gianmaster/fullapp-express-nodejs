module.exports = function(){
  //los modulos deben ser requeridos en orden
  //Esa rutina lo que hace es instanciar los componentes que se necesitan en el proyecto y que esten definidos globalmente para que todos los componetes funciones correctamente
  //ejemplo bootstrap necesita de jQuery al igual que muchos otros componentes
  global.$ = global.jQuery = require('jquery');
    // $ for Lumx, jQuery for velocity
  require('velocity-animate');
  require('angular');
  global.moment = require('moment');
    // LumX uses a global 'moment'
  require('node-lumx');
  require('bootstrap');
  require('bootstrap/dist/css/bootstrap.css');
  require('../css/index.css');
  
};
