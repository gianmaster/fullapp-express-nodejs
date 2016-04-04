module.exports = function(){
  //los modulos deben ser requeridos en orden
  /*
  require('jquery');
  require('velocity-animate');
  require('angular');
  require('moment');
  */
  global.$ = global.jQuery = require('jquery');
    // $ for Lumx, jQuery for velocity
  require('velocity-animate');
  require('angular');
  global.moment = require('moment');
    // LumX uses a global 'moment'
  require('node-lumx');
  require('bootstrap');
  require('bootstrap/dist/css/bootstrap.css');
};
