
//inclusion de los vendors, librerias necesarias para la aplicacion
require('./vendor')();
//inclusion de la logica de la aplicacion
require('./angular_app/app');

/*
setInterval(function(){
  $(".loading-page").remove();
  $('.content-init').addClass('ready');
}, 3000)
*/
$(".loading-page").remove();
$('.content-init').addClass('ready');
